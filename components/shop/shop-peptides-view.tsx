"use client"

import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Filter, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProductImagePlaceholder, productHasCatalogImage } from "@/components/product-image-placeholder"
import { formatAzn } from "@/lib/currency"
import { productMatchesSearchQuery, suggestPeptidesForQuery } from "@/lib/peptide-search"
import { getLocalizedPeptideShortDescription } from "@/lib/product-translations"
import type { ShopFilterId, ShopPeptideListing } from "@/lib/shop-filters"
import { SHOP_FILTER_OPTIONS, shopFiltersFromCategoryParam } from "@/lib/shop-filters"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

type Props = {
  products: ShopPeptideListing[]
}

export function ShopPeptidesView({ products }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const qParam = searchParams.get("q") ?? ""

  const [query, setQuery] = useState(qParam)
  const [selected, setSelected] = useState<Set<ShopFilterId>>(new Set())
  const [sheetOpen, setSheetOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        title: "Каталог пептидов",
        subtitle: "Изучайте продукты исследовательского класса. Фильтруйте по цели или ищите по названию.",
        placeholder: "Поиск пептидов…",
        suggested: "Рекомендуемые совпадения",
        filters: "Фильтры",
        resetAll: "Сбросить все",
        result: "результат",
        results: "результатов",
        for: "по запросу",
        activeFilters: "активных фильтров",
        filterByGoal: "Фильтр по цели",
        clearCategories: "Очистить категории",
        researchOnly: "Только для исследований",
        view: "Открыть",
        emptyTitle: "По вашему запросу нет подходящих пептидов.",
        emptySubtitle: "Попробуйте другое название или меньше фильтров.",
        clearSearchFilters: "Очистить поиск и фильтры",
        filtersPanel: "Панель фильтров",
        closeFilters: "Закрыть фильтры",
        filtersTitle: "Фильтры",
        filtersText: "Выберите одну или несколько категорий. Товар будет показан, если соответствует любой выбранной цели.",
        clearCategoryFilters: "Очистить фильтры категорий",
        applyFilters: "Применить фильтры",
      }
    : {
        title: "Shop peptides",
        subtitle: "Browse research-grade products. Refine by goal or search by name.",
        placeholder: "Search peptides…",
        suggested: "Suggested matches",
        filters: "Filters",
        resetAll: "Reset all",
        result: "result",
        results: "results",
        for: "for",
        activeFilters: "filter(s) active",
        filterByGoal: "Filter by goal",
        clearCategories: "Clear categories",
        researchOnly: "Research only",
        view: "View",
        emptyTitle: "No peptides match your search or filters.",
        emptySubtitle: "Try a different name or fewer categories.",
        clearSearchFilters: "Clear search & filters",
        filtersPanel: "Filters panel",
        closeFilters: "Close filters",
        filtersTitle: "Filters",
        filtersText: "Select one or more categories. Products match if they fit any selected goal.",
        clearCategoryFilters: "Clear category filters",
        applyFilters: "Apply filters",
      }

  useEffect(() => {
    setQuery(qParam)
  }, [qParam])

  useEffect(() => {
    const ids = shopFiltersFromCategoryParam(categoryParam)
    setSelected(new Set(ids))
  }, [categoryParam])

  const toggleFilter = useCallback((id: ShopFilterId) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const pushQueryToUrl = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      const t = value.trim()
      if (t) params.set("q", t)
      else params.delete("q")
      const s = params.toString()
      router.replace(s ? `${pathname}?${s}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const clearAll = useCallback(() => {
    setQuery("")
    const params = new URLSearchParams(searchParams.toString())
    params.delete("q")
    const s = params.toString()
    router.replace(s ? `${pathname}?${s}` : pathname, { scroll: false })
    setSelected(new Set())
  }, [pathname, router, searchParams])

  const clearCategoriesOnly = useCallback(() => {
    setSelected(new Set())
  }, [])

  const activeCount = selected.size + (query.trim() ? 1 : 0)

  const filtered = useMemo(() => {
    const q = query.trim()
    return products.filter((p) => {
      if (q) {
        if (!productMatchesSearchQuery(p, q, products)) return false
      }
      if (selected.size === 0) return true
      return p.shopCategories.some((c) => selected.has(c))
    })
  }, [products, query, selected])

  const shopSuggestions = useMemo(() => {
    const t = query.trim()
    if (t.length < 2) return []
    return suggestPeptidesForQuery(products, query, 6)
  }, [products, query])

  const showSuggestionPanel = searchFocused && shopSuggestions.length > 0
  const filterLabelById: Record<ShopFilterId, string> =
    locale === "ru"
      ? {
          "weight-loss": "Снижение веса / Сжигание жира",
          "anti-aging": "Антивозрастная поддержка / Долголетие",
          performance: "Выносливость / Восстановление",
          muscle: "Рост мышц / Сила",
          cognitive: "Мозг / Когнитивные функции",
          "general-health": "Общее здоровье",
        }
      : {
          "weight-loss": "Weight Loss / Fat Burning",
          "anti-aging": "Anti-Aging / Longevity",
          performance: "Performance / Recovery",
          muscle: "Muscle Growth / Strength",
          cognitive: "Brain / Cognitive",
          "general-health": "General Health",
        }

  const filterCheckboxList = (idPrefix: string) => (
    <div className="space-y-2.5">
      {SHOP_FILTER_OPTIONS.map((opt) => (
        <div key={opt.id} className="flex items-start gap-2.5">
          <Checkbox
            id={`${idPrefix}-${opt.id}`}
            checked={selected.has(opt.id)}
            onCheckedChange={() => toggleFilter(opt.id)}
            className="mt-0.5 border-[#14B8A6]/40 data-[state=checked]:border-[#14B8A6] data-[state=checked]:bg-[#14B8A6]"
          />
          <Label htmlFor={`${idPrefix}-${opt.id}`} className="cursor-pointer text-sm font-normal leading-snug text-foreground">
            {filterLabelById[opt.id]}
          </Label>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-[60vh] bg-[#FAFAFA]">
      <div className="border-b border-gray-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{t.title}</h1>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-500 sm:text-base">
            {t.subtitle}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-start sm:gap-3">
            <div className="relative min-w-0 flex-1">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t.placeholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => {
                    window.setTimeout(() => setSearchFocused(false), 200)
                    pushQueryToUrl(query)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      setSearchFocused(false)
                      pushQueryToUrl(query)
                    }
                    if (e.key === "Escape") {
                      setSearchFocused(false)
                    }
                  }}
                  className="h-11 rounded-xl border-gray-200 bg-white pl-9 pr-3 text-sm shadow-sm focus-visible:border-[#14B8A6]/50 focus-visible:ring-[#14B8A6]/20"
                  autoComplete="off"
                />
              </div>
              {showSuggestionPanel ? (
                <div
                  className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-30 overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                  role="listbox"
                  aria-label={t.suggested}
                >
                  <p className="border-b border-gray-100 bg-[#FAFAFA] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {t.suggested}
                  </p>
                  <ul className="max-h-52 overflow-y-auto py-1">
                    {shopSuggestions.map((p) => (
                      <li key={p.id}>
                        <button
                          type="button"
                          className="flex w-full flex-col px-3 py-2 text-left text-sm text-slate-800 hover:bg-[#14B8A6]/8"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setSearchFocused(false)
                            setQuery(p.name)
                            const params = new URLSearchParams(searchParams.toString())
                            params.set("q", p.name)
                            const s = params.toString()
                            router.replace(s ? `${pathname}?${s}` : pathname, { scroll: false })
                          }}
                        >
                          <span className="font-medium">{p.name}</span>
                          <span className="line-clamp-1 text-xs text-slate-500">
                            {getLocalizedPeptideShortDescription(p.id, p.shortDescription, locale)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="flex shrink-0 gap-2 sm:justify-end">
              <div className="lg:hidden">
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 min-w-[110px] rounded-xl border-gray-200 bg-white shadow-sm hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/5"
                  onClick={() => setSheetOpen(true)}
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4 text-[#14B8A6]" />
                  {t.filters}
                  {selected.size > 0 ? (
                    <span className="ml-1.5 rounded-full bg-[#14B8A6] px-2 py-0.5 text-[11px] font-semibold text-white">
                      {selected.size}
                    </span>
                  ) : null}
                </Button>
              </div>

              <Button
                type="button"
                variant="ghost"
                className="h-11 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                onClick={clearAll}
              >
                {t.resetAll}
              </Button>
            </div>
          </div>

          {activeCount > 0 ? (
            <p className="mt-3 text-xs text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? t.result : t.results}
              {query.trim() ? ` ${t.for} “${query.trim()}”` : ""}
              {selected.size > 0 ? ` · ${selected.size} ${t.activeFilters}` : ""}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl gap-10 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <aside className="sticky top-24 hidden w-[220px] shrink-0 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm lg:block">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Filter className="h-4 w-4 text-[#14B8A6]" />
            {t.filterByGoal}
          </div>
          {filterCheckboxList("desktop")}
          <Button type="button" variant="ghost" size="sm" className="mt-4 h-9 w-full text-xs text-muted-foreground" onClick={clearCategoriesOnly}>
            {t.clearCategories}
          </Button>
        </aside>

        <div className="min-w-0 flex-1">
          {filtered.length === 0 ? (
            <EmptyShop onClear={clearAll} locale={locale} />
          ) : (
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <li key={p.id}>
                  <ShopProductCard product={p} locale={locale} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <MobileFiltersPanel open={sheetOpen} onClose={() => setSheetOpen(false)} onClear={clearCategoriesOnly} locale={locale}>
        {filterCheckboxList("sheet")}
      </MobileFiltersPanel>
    </div>
  )
}

function MobileFiltersPanel({
  open,
  onClose,
  children,
  onClear,
  locale,
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
  onClear: () => void
  locale: "en" | "ru"
}) {
  const t = locale === "ru"
    ? {
        panel: "Панель фильтров",
        close: "Закрыть фильтры",
        title: "Фильтры",
        text: "Выберите одну или несколько категорий. Товар будет показан, если соответствует любой выбранной цели.",
        clear: "Очистить фильтры категорий",
        apply: "Применить фильтры",
      }
    : {
        panel: "Filters panel",
        close: "Close filters",
        title: "Filters",
        text: "Select one or more categories. Products match if they fit any selected goal.",
        clear: "Clear category filters",
        apply: "Apply filters",
      }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[120] lg:hidden" aria-modal="true" role="dialog" aria-label={t.panel}>
      <button
        type="button"
        aria-label={t.close}
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-2xl border-t border-gray-200 bg-white px-4 pb-8 pt-4 shadow-2xl">
        <div className="mb-3 h-1.5 w-12 rounded-full bg-gray-200 mx-auto" />
        <div className="text-left">
          <h2 className="text-lg font-semibold">{t.title}</h2>
          <p className="text-sm text-muted-foreground">
            {t.text}
          </p>
        </div>
        <div className="mt-5 space-y-4">
          {children}
          <Button type="button" variant="outline" className="w-full rounded-xl border-dashed" onClick={onClear}>
            {t.clear}
          </Button>
          <Button type="button" className="w-full rounded-xl bg-[#14B8A6] hover:bg-[#0f9f91]" onClick={onClose}>
            {t.apply}
          </Button>
        </div>
      </div>
    </div>
  )
}

function ShopProductCard({ product, locale }: { product: ShopPeptideListing; locale: "en" | "ru" }) {
  const t = locale === "ru" ? { researchOnly: "Только для исследований", view: "Открыть" } : { researchOnly: "Research only", view: "View" }
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200",
        "hover:border-[#14B8A6]/35 hover:shadow-md",
      )}
    >
      <Link href={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-gradient-to-b from-secondary/40 to-secondary/20">
        {productHasCatalogImage(product.image) ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-200 group-hover:scale-[1.02] sm:p-4"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0">
            <ProductImagePlaceholder variant="card" />
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-md border border-[#14B8A6]/25 bg-white/95 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#0d9488] backdrop-blur-sm sm:text-[10px]">
          {t.researchOnly}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-3.5">
        <h2 className="line-clamp-2 min-h-[2.5rem] text-[13px] font-semibold leading-tight text-slate-900 sm:min-h-0 sm:text-sm">
          <Link href={`/product/${product.id}`} className="hover:text-[#14B8A6]">
            {product.name}
          </Link>
        </h2>
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{product.dosage}</p>
        <p className="text-base font-bold tabular-nums text-slate-900 sm:text-lg">{formatAzn(product.price)}</p>
        <Button
          asChild
          size="sm"
          className="mt-auto h-9 w-full rounded-lg bg-[#14B8A6] text-sm font-medium text-white shadow-none transition-colors hover:bg-[#0f9f91]"
        >
          <Link href={`/product/${product.id}`}>{t.view}</Link>
        </Button>
      </div>
    </article>
  )
}

function EmptyShop({ onClear, locale }: { onClear: () => void; locale: "en" | "ru" }) {
  const t = locale === "ru"
    ? {
        title: "По вашему запросу нет подходящих пептидов.",
        subtitle: "Попробуйте другое название или меньше фильтров.",
        clear: "Очистить поиск и фильтры",
      }
    : {
        title: "No peptides match your search or filters.",
        subtitle: "Try a different name or fewer categories.",
        clear: "Clear search & filters",
      }
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <p className="text-sm font-medium text-foreground">{t.title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{t.subtitle}</p>
      <Button type="button" className="mt-4 rounded-xl bg-[#14B8A6] hover:bg-[#0f9f91]" onClick={onClear}>
        {t.clear}
      </Button>
    </div>
  )
}
