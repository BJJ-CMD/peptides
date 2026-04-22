import type { Product } from "@/lib/products"

export type SearchablePeptide = Pick<Product, "id" | "name" | "shortDescription" | "benefits">

/** Lowercase, keep alphanumerics as single spaces for tolerant matching. */
export function normalizeSearchText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function tokenize(s: string): string[] {
  return normalizeSearchText(s)
    .split(/\s+/)
    .filter((t) => t.length > 0)
}

/** Classic Levenshtein distance (small strings only — we cap length for perf). */
export function levenshtein(a: string, b: string): number {
  const maxRun = 48
  if (a.length > maxRun) a = a.slice(0, maxRun)
  if (b.length > maxRun) b = b.slice(0, maxRun)
  const m = a.length
  const n = b.length
  if (m === 0) return n
  if (n === 0) return m
  const row = new Array<number>(n + 1)
  for (let j = 0; j <= n; j++) row[j] = j
  for (let i = 1; i <= m; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= n; j++) {
      const tmp = row[j]
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost)
      prev = tmp
    }
  }
  return row[n]!
}

function maxTyposAllowed(queryLen: number): number {
  if (queryLen <= 2) return 0
  if (queryLen <= 4) return 0
  if (queryLen <= 8) return 2
  return Math.min(8, Math.max(3, Math.floor(queryLen * 0.48)))
}

/**
 * True when `token` contains `query` as a substring in a way that is unlikely to be
 * an accidental hit inside a long chemical word (e.g. "reta" ⊂ "secretagogue").
 */
function tokenSubstringMatchIsPlausible(query: string, token: string): boolean {
  if (!token.includes(query)) return false
  if (token.startsWith(query)) return true
  if (query.length >= 6) return true
  const slack = Math.max(2, Math.floor(query.length * 0.35))
  return token.length <= query.length + slack
}

/** Compare query to a candidate string; return best (lowest) edit distance. */
function bestEditDistance(query: string, candidate: string): number {
  if (!query || !candidate) return Infinity
  const cq = normalizeSearchText(candidate)
  if (!cq) return Infinity

  for (const w of cq.split(/\s+/).filter(Boolean)) {
    if (tokenSubstringMatchIsPlausible(query, w)) return 0
  }
  if (query.includes(cq) && cq.length >= 3) return 0

  let best = levenshtein(query, cq)

  const words = cq.split(/\s+/).filter((w) => w.length >= 2)
  for (const w of words) {
    const d = levenshtein(query, w)
    if (d < best) best = d
  }

  const qLen = query.length
  const compact = cq.replace(/\s+/g, "")
  // Short queries: do not scan long tokens for accidental n-gram matches (e.g. "reta" in "secretagogue")
  const skipSlidingWindow =
    qLen <= 5 && compact.length > qLen + 4 && compact.length >= 3 && compact.length <= 40
  if (compact.length >= 3 && compact.length <= 40 && !skipSlidingWindow) {
    for (let start = 0; start <= compact.length - 3; start++) {
      for (const win of [qLen + 2, qLen + 1, qLen, qLen - 1, qLen - 2]) {
        if (win < 3) continue
        const slice = compact.slice(start, start + win)
        if (slice.length < 3) continue
        const d = levenshtein(query, slice)
        if (d < best) best = d
      }
    }
  }

  return best
}

/**
 * Higher = better match. 0 = no match worth showing.
 * Name / ID matches rank above random substring hits inside long descriptions
 * (e.g. "reta" must not match "secret**agogue**").
 */
export function peptideSearchScore(queryRaw: string, p: SearchablePeptide): number {
  const raw = queryRaw.trim()
  if (!raw) return 100

  const query = normalizeSearchText(raw)
  if (!query) return 0

  const name = normalizeSearchText(p.name)
  const nameCompact = name.replace(/\s+/g, "")
  const queryCompact = query.replace(/\s+/g, "")
  const isShortQuery = queryCompact.length <= 4
  const fromId = normalizeSearchText(p.id.replace(/-/g, " "))
  const nameTokens = tokenize(p.name)
  const descTokens = tokenize(p.shortDescription.slice(0, 400))
  const benefitTokens = p.benefits.flatMap((b) => tokenize(b))

  // --- Strong signals: product identity (never use raw blob.includes — false positives) ---
  if (name.includes(query)) return 100
  if (queryCompact.length >= 2 && nameCompact.includes(queryCompact)) return 100
  if (nameTokens.some((t) => t.startsWith(query))) return 99
  if (fromId.includes(query)) return 97

  // Word-level in benefits / name tokens: prefix only (avoids "reta" ⊂ "secretagogue")
  const allTokens = isShortQuery
    ? [...new Set(nameTokens)]
    : [...new Set([...nameTokens, ...benefitTokens, ...descTokens])]
  for (const w of allTokens) {
    if (w.startsWith(query)) return 92
  }

  // Fuzzy: for short queries, stay strict and only use identity tokens (name/id).
  // For longer queries, include benefits/description words.
  const maxDist = maxTyposAllowed(query.length)
  const fuzzyCandidatesBase = [
    name,
    nameCompact,
    fromId,
    ...nameTokens,
  ].filter((c) => c.length > 0 && c.length <= 64)
  const fuzzyCandidates = isShortQuery
    ? fuzzyCandidatesBase
    : [...fuzzyCandidatesBase, ...benefitTokens, ...descTokens].filter((c) => c.length > 0 && c.length <= 64)

  let best = Infinity
  for (const c of fuzzyCandidates) {
    const d = bestEditDistance(query, c)
    if (d < best) best = d
  }

  if (best === Infinity || best > maxDist) return 0

  return Math.max(35, Math.round(85 - (best / (maxDist + 1)) * 50))
}

/**
 * When `catalog` is provided and the query equals some product's full name (normalized),
 * only those products match — avoids unrelated items scoring on fuzzy description text.
 */
export function productMatchesSearchQuery(
  p: SearchablePeptide,
  queryRaw: string,
  catalog?: readonly SearchablePeptide[],
): boolean {
  const raw = queryRaw.trim()
  if (!raw) return true
  const q = normalizeSearchText(raw)
  if (catalog?.length) {
    const exact = catalog.filter((x) => normalizeSearchText(x.name) === q)
    if (exact.length > 0) return exact.some((x) => x.id === p.id)
  }
  return peptideSearchScore(raw, p) > 0
}

/** True when the query is already an exact product name — hide suggestion dropdowns. */
export function isExactProductNameQuery(queryRaw: string, products: SearchablePeptide[]): boolean {
  const q = queryRaw.trim().toLowerCase()
  if (q.length < 2) return false
  return products.some((p) => p.name.trim().toLowerCase() === q)
}

export function suggestPeptidesForQuery(
  products: SearchablePeptide[],
  queryRaw: string,
  limit = 8,
): SearchablePeptide[] {
  const raw = queryRaw.trim()
  if (!raw) return []
  if (isExactProductNameQuery(raw, products)) return []

  const query = normalizeSearchText(raw)

  const scored = products
    .map((p) => ({ p, score: peptideSearchScore(raw, p) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      const na = normalizeSearchText(a.p.name).replace(/\s+/g, "")
      const nb = normalizeSearchText(b.p.name).replace(/\s+/g, "")
      const qc = query.replace(/\s+/g, "")
      const aStarts = na.startsWith(qc) || normalizeSearchText(a.p.name).startsWith(query) ? 1 : 0
      const bStarts = nb.startsWith(qc) || normalizeSearchText(b.p.name).startsWith(query) ? 1 : 0
      if (bStarts !== aStarts) return bStarts - aStarts
      return a.p.name.localeCompare(b.p.name)
    })

  const out: SearchablePeptide[] = []
  const seen = new Set<string>()
  for (const { p } of scored) {
    if (seen.has(p.id)) continue
    seen.add(p.id)
    out.push(p)
    if (out.length >= limit) break
  }
  return out
}
