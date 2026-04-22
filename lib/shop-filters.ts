import type { Product } from "@/lib/products"
import { getAllProducts } from "@/lib/products"

/** Internal ids for shop filter checkboxes (aligned with UI labels in shop page). */
export type ShopFilterId =
  | "weight-loss"
  | "anti-aging"
  | "performance"
  | "muscle"
  | "cognitive"
  | "general-health"

export const SHOP_FILTER_OPTIONS: { id: ShopFilterId; label: string }[] = [
  { id: "weight-loss", label: "Weight Loss / Fat Burning" },
  { id: "anti-aging", label: "Anti-Aging / Longevity" },
  { id: "performance", label: "Performance / Recovery" },
  { id: "muscle", label: "Muscle Growth / Strength" },
  { id: "cognitive", label: "Brain / Cognitive" },
  { id: "general-health", label: "General Health" },
]

/**
 * Maps each catalog product to one or more shop categories for filtering.
 */
const SHOP_CATEGORY_BY_PRODUCT_ID: Record<string, ShopFilterId[]> = {
  "retatrutide-20mg": ["weight-loss", "anti-aging"],
  "bpc-157-10mg": ["performance", "general-health"],
  "tb-500-10mg": ["performance", "muscle"],
  "wolverine-10mg": ["performance", "general-health"],
  "cjc-1295-ipamorelin": ["muscle", "anti-aging", "performance"],
  "aod-9604": ["weight-loss", "general-health"],
  "mots-c-10mg": ["anti-aging", "performance"],
  "glow-10mg": ["anti-aging", "general-health"],
  "epithalon-10mg": ["anti-aging", "general-health"],
  "tesamorelin-10mg": ["anti-aging", "muscle"],
  "ss-31-10mg": ["anti-aging", "performance"],
  "thymosin-alpha-10mg": ["performance", "cognitive", "general-health"],
  "nad-plus-10mg": ["anti-aging", "cognitive", "performance"],
  "melanotan-2-10mg": ["general-health"],
  "ghk-cu-10mg": ["anti-aging", "general-health"],
}

export type ShopPeptideListing = Product & { shopCategories: ShopFilterId[] }

export function getShopPeptideListings(): ShopPeptideListing[] {
  return getAllProducts().map((p) => ({
    ...p,
    shopCategories: SHOP_CATEGORY_BY_PRODUCT_ID[p.id] ?? ["general-health"],
  }))
}

/**
 * Maps footer / marketing `?category=` slugs to internal shop filter ids.
 * Supports comma-separated values, e.g. `?category=fat-loss,longevity`
 */
const CATEGORY_SLUG_TO_FILTER: Record<string, ShopFilterId> = {
  "fat-loss": "weight-loss",
  "weight-loss": "weight-loss",
  "recovery": "performance",
  "longevity": "anti-aging",
  "anti-aging": "anti-aging",
  "performance": "performance",
  muscle: "muscle",
  cognitive: "cognitive",
  "general-health": "general-health",
  general: "general-health",
}

export function shopFiltersFromCategoryParam(param: string | null | undefined): ShopFilterId[] {
  if (param == null || param === "") return []
  const raw = Array.isArray(param) ? param.join(",") : param
  const parts = raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 0 && s !== "all" && s !== "bundles")
  const out: ShopFilterId[] = []
  for (const p of parts) {
    const id = CATEGORY_SLUG_TO_FILTER[p]
    if (id && !out.includes(id)) out.push(id)
  }
  return out
}
