"use client"

import { useMemo, useState } from "react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const WHATSAPP_NUMBER = "77773244837"

const peptides = [
  "Tirzepatide",
  "Semaglutide",
  "Retatrutide",
  "Cagrilintide",
  "Tesamorelin",
  "Ipamorelin",
  "CJC1295",
  "GHK-CU",
  "MOTS-C",
  "Epitalon",
  "Glow",
  "Klow",
  "BPC157",
  "TB500",
  "LL37",
  "PT141",
  "P21",
  "Semax",
  "Selank",
  "VIP",
  "Humanin",
  "5 Amino",
  "AOD9604",
  "GHRP2",
  "GHRP6",
  "IGF 1LR3",
  "NAD+",
  "HGH191AA",
  "HCG",
  "HMG",
  "Adamax",
  "Thymosin Alfa",
  "KPV",
  "DSIP",
  "Kisspeptin 10",
  "Melanotan1",
  "Melanotan2",
  "Melatanin",
  "Adipotide",
  "SNAP8",
  "Thymalin",
  "Survotutide",
  "ARA290",
  "Gonadorelin",
  "Oxytocin",
  "Hexarelin",
  "Mazdutide",
  "Testagen",
  "SS31",
] as const

const inStockInMainShop = new Set([
  "retatrutide",
  "bpc157",
  "tb500",
  "wolverine",
  "motsc",
  "glow",
  "epitalon",
  "epithalon",
  "tesamorelin",
  "ss31",
  "thymosinalfa",
  "thymosinalpha",
  "nad",
  "melanotan2",
  "ghkcu",
  "bacteriostaticwater",
])

function normalizePeptideName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "")
}

function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function ComingSoonPageClient() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        overline: "Каталог под запрос",
        title: "Пептиды скоро в наличии",
        subtitle: "Ищете конкретный пептид? Просмотрите позиции, которые мы можем привезти под запрос.",
        placeholder: "Поиск пептидов...",
        selected: "Выбранные пептиды:",
        none: "Пока не выбрано",
        request: "Запросить через WhatsApp",
      }
    : {
        overline: "Request catalog",
        title: "Coming Soon Peptides",
        subtitle: "Looking for something specific? Browse peptides we can source on request.",
        placeholder: "Search peptides...",
        selected: "Selected peptides:",
        none: "None yet",
        request: "Request via WhatsApp",
      }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const notInMainShop = peptides.filter((name) => !inStockInMainShop.has(normalizePeptideName(name)))
    if (!q) return notInMainShop
    return notInMainShop.filter((name) => name.toLowerCase().includes(q))
  }, [query])

  const globalMessage = selected.length
    ? `Hello, I'm interested in ordering peptides from your Coming Soon list:\n\n${selected.map((name) => `- ${name}`).join("\n")}`
    : "Hello, I'm interested in ordering peptides from your Coming Soon list."

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <section className="border-b border-gray-200/80 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">{t.overline}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t.title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.subtitle}
            </p>

            <div className="relative mt-6">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.placeholder}
                className="h-11 rounded-xl border-gray-200 bg-[#FAFAFA] pl-9 text-sm shadow-sm focus-visible:border-[#14B8A6]/40 focus-visible:ring-[#14B8A6]/20"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {filtered.map((name) => {
              const isSelected = selected.includes(name)
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() =>
                    setSelected((prev) =>
                      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
                    )
                  }
                  className={`rounded-xl border px-3 py-3 text-left text-sm font-medium shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all ${
                    isSelected
                      ? "border-[#14B8A6] bg-[#14B8A6]/10 text-[#0f9f91]"
                      : "border-gray-200/90 bg-white text-slate-800 hover:border-[#14B8A6]/30 hover:bg-[#14B8A6]/[0.04] hover:text-[#0f9f91]"
                  }`}
                >
                  {name}
                </button>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-[#14B8A6]/15 bg-white p-5 shadow-[0_10px_30px_-18px_rgba(20,184,166,0.45)] sm:p-6">
            <p className="text-sm text-slate-600">
              {t.selected}{" "}
              <span className="font-semibold text-slate-900">
                {selected.length > 0 ? selected.join(", ") : t.none}
              </span>
            </p>
            {selected.length > 0 ? (
              <Button
                asChild
                className="mt-4 h-12 w-full rounded-xl bg-[#14B8A6] text-base font-semibold text-white shadow-sm hover:bg-[#0f9f91] sm:w-auto sm:px-8"
              >
                <a href={whatsappUrl(globalMessage)} target="_blank" rel="noopener noreferrer">
                  {t.request}
                </a>
              </Button>
            ) : (
              <Button
                type="button"
                disabled
                className="mt-4 h-12 w-full rounded-xl bg-slate-200 text-base font-semibold text-slate-500 shadow-none hover:bg-slate-200 sm:w-auto sm:px-8"
              >
                {t.request}
              </Button>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
