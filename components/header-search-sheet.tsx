"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { getAllProducts } from "@/lib/products"
import { peptideSearchScore, suggestPeptidesForQuery } from "@/lib/peptide-search"
import { getLocalizedPeptideShortDescription } from "@/lib/product-translations"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HeaderSearchSheet({ open, onOpenChange }: Props) {
  const router = useRouter()
  const [term, setTerm] = useState("")
  const [debouncedTerm, setDebouncedTerm] = useState("")
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        title: "Поиск по каталогу",
        desc: "Введите название или ключевое слово — мы подскажем подходящие варианты даже при небольших опечатках.",
        placeholder: "например: BPC, Retatrutide, восстановление…",
        search: "Искать",
        suggested: "Рекомендуемые совпадения",
        approx: "Приблизительное совпадение",
        noMatches: "Похожих совпадений пока нет — нажмите «Искать», чтобы открыть каталог.",
        typeMore: "Введите еще одну букву для приблизительных совпадений.",
        hint: "Нажмите Enter для поиска · стрелки работают при появлении подсказок",
      }
    : {
        title: "Search catalog",
        desc: "Type a name or keyword — we suggest close matches, even with small spelling mistakes.",
        placeholder: "e.g. BPC, Retatrutide, recovery…",
        search: "Search",
        suggested: "Suggested matches",
        approx: "Approximate match",
        noMatches: "No close matches yet — press Search to open the shop anyway.",
        typeMore: "Type another letter for approximate matches.",
        hint: "Press Enter to search · Arrow keys when suggestions appear",
      }
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const catalog = useMemo(() => getAllProducts(), [])

  useEffect(() => {
    if (open) {
      setTerm("")
      setDebouncedTerm("")
      setHighlightIndex(-1)
      const id = window.setTimeout(() => inputRef.current?.focus(), 150)
      return () => window.clearTimeout(id)
    }
  }, [open])

  useEffect(() => {
    const id = window.setTimeout(() => setDebouncedTerm(term), 140)
    return () => window.clearTimeout(id)
  }, [term])

  const suggestions = useMemo(() => {
    const t = debouncedTerm.trim()
    if (!t) return []
    return suggestPeptidesForQuery(catalog, debouncedTerm, 8)
  }, [catalog, debouncedTerm])

  useEffect(() => {
    setHighlightIndex(-1)
  }, [debouncedTerm])

  const goToShop = (q: string) => {
    const trimmed = q.trim()
    if (trimmed) {
      router.push(`/products?q=${encodeURIComponent(trimmed)}`)
    } else {
      router.push("/products")
    }
    onOpenChange(false)
  }

  const runSearch = () => {
    if (highlightIndex >= 0 && suggestions[highlightIndex]) {
      goToShop(suggestions[highlightIndex].name)
      return
    }
    goToShop(term)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    runSearch()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setHighlightIndex((i) => Math.min(suggestions.length - 1, i + 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHighlightIndex((i) => Math.max(-1, i - 1))
    } else if (e.key === "Escape") {
      setHighlightIndex(-1)
    }
  }

  useEffect(() => {
    if (highlightIndex < 0 || !listRef.current) return
    const el = listRef.current.querySelector<HTMLElement>(`[data-suggestion-index="${highlightIndex}"]`)
    el?.scrollIntoView({ block: "nearest" })
  }, [highlightIndex])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="top"
        className="inset-x-0 top-0 flex max-h-[min(92vh,36rem)] w-full flex-col overflow-hidden rounded-b-3xl border-0 border-b border-gray-200/90 bg-white px-4 pb-6 pt-6 shadow-xl sm:px-8"
      >
        <SheetHeader className="shrink-0 space-y-1 text-left">
          <SheetTitle className="text-xl font-semibold tracking-tight text-slate-900">{t.title}</SheetTitle>
          <SheetDescription className="text-sm text-slate-500">
            {t.desc}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={onSubmit} className="mt-5 flex shrink-0 flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="relative min-w-0 flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#14B8A6]"
              aria-hidden
            />
            <Input
              ref={inputRef}
              type="search"
              role="combobox"
              aria-expanded={suggestions.length > 0}
              aria-controls="catalog-search-suggestions"
              aria-autocomplete="list"
              placeholder={t.placeholder}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              className="h-12 rounded-xl border-gray-200 bg-[#FAFAFA] pl-11 pr-3 text-base shadow-inner focus-visible:border-[#14B8A6]/50 focus-visible:bg-white focus-visible:ring-[#14B8A6]/20"
            />
          </div>
          <Button
            type="submit"
            className="h-12 shrink-0 rounded-xl bg-[#14B8A6] px-6 text-base font-semibold text-white shadow-sm hover:bg-[#0f9f91] sm:w-auto"
          >
            {t.search}
            <ArrowRight className="ml-2 h-4 w-4 opacity-90" aria-hidden />
          </Button>
        </form>

        <div className="mt-3 flex min-h-0 flex-1 flex-col">
          {term.trim() && suggestions.length > 0 ? (
            <div className="flex min-h-0 flex-col rounded-xl border border-gray-100 bg-[#FAFAFA]/80">
              <div className="flex items-center gap-2 border-b border-gray-100/90 px-3 py-2">
                <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" aria-hidden />
                <p id="catalog-search-suggestions" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {t.suggested}
                </p>
              </div>
              <ul ref={listRef} className="max-h-[min(52vh,16rem)] space-y-0.5 overflow-y-auto overscroll-contain p-1.5 sm:max-h-[min(48vh,18rem)]" role="listbox">
                {suggestions.map((p, index) => {
                  const score = peptideSearchScore(term.trim(), p)
                  const active = index === highlightIndex
                  return (
                    <li key={p.id} role="none">
                      <button
                        type="button"
                        role="option"
                        aria-selected={active}
                        data-suggestion-index={index}
                        onMouseEnter={() => setHighlightIndex(index)}
                        onClick={() => goToShop(p.name)}
                        className={cn(
                          "flex w-full flex-col rounded-lg px-3 py-2.5 text-left transition-colors",
                          active ? "bg-[#14B8A6]/12 ring-1 ring-[#14B8A6]/25" : "hover:bg-white/90",
                        )}
                      >
                        <span className="text-sm font-semibold text-slate-900">{p.name}</span>
                        <span className="mt-0.5 line-clamp-1 text-xs leading-snug text-slate-500">
                          {getLocalizedPeptideShortDescription(p.id, p.shortDescription, locale)}
                        </span>
                        {score < 100 ? (
                          <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#14B8A6]/90">
                            {t.approx}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : term.trim().length >= 2 && debouncedTerm === term && suggestions.length === 0 ? (
            <p className="rounded-xl border border-dashed border-gray-200 bg-slate-50/80 px-4 py-3 text-center text-sm text-slate-500">
              {t.noMatches}
            </p>
          ) : term.trim().length === 1 ? (
            <p className="text-center text-xs text-slate-400">{t.typeMore}</p>
          ) : (
            <p className="text-center text-xs text-slate-400">{t.hint}</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
