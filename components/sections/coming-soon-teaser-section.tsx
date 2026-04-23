"use client"

import Link from "next/link"
import { ArrowRight, FlaskConical } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ComingSoonTeaserSection() {
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        overline: "Каталог под запрос",
        title: "Пептиды скоро в наличии",
        text: "Запросите пептиды, которых пока нет в наличии",
        open: "Открыть список",
      }
    : {
        overline: "Request catalog",
        title: "Coming Soon Peptides",
        text: "Request peptides not currently in stock",
        open: "Open list",
      }

  return (
    <section className="bg-[#FAFAFA] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/coming-soon"
          className="group block rounded-2xl border border-[#14B8A6]/15 bg-white/80 p-6 shadow-[0_8px_30px_-16px_rgba(20,184,166,0.35)] backdrop-blur-sm transition-all hover:border-[#14B8A6]/35 hover:shadow-[0_14px_36px_-16px_rgba(20,184,166,0.45)] sm:p-8"
        >
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#14B8A6]">{t.overline}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{t.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.text}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6] sm:h-12 sm:w-12">
              <FlaskConical className="h-5 w-5" aria-hidden />
            </span>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0f9f91]">
            {t.open}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </div>
        </Link>
      </div>
    </section>
  )
}
