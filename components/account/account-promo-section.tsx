"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

/**
 * Subtle pre-footer prompt encouraging account creation — used site-wide above main footer content.
 */
export function AccountPromoSection() {
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        title: "Получайте ранний доступ к новым пептидам",
        text: "Создайте аккаунт, чтобы отслеживать заказы, сохранять избранное и получать обновления.",
      }
    : {
        title: "Get exclusive access to new peptides",
        text: "Create an account to track orders, save favorites, and stay updated.",
      }

  return (
    <section
      aria-labelledby="account-promo-heading"
      className="border-b border-[#14B8A6]/10 bg-gradient-to-br from-[#F0FDFA]/90 via-white to-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-[#14B8A6]/10 bg-white/80 px-5 py-8 text-center shadow-[0_8px_40px_-12px_rgba(20,184,166,0.15)] backdrop-blur-sm sm:px-10 sm:py-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <Sparkles className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="space-y-2">
            <h2 id="account-promo-heading" className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {t.title}
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
