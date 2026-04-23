"use client"

import Link from "next/link"
import { Package } from "lucide-react"
import { BundlesNotifyBlock } from "@/components/bundles-notify-block"
import { useLanguage } from "@/components/language-provider"

export function BundlesTeaserSection() {
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        title: "Наборы скоро появятся",
        text: "Подборки для популярных исследовательских целей появятся здесь в первую очередь. Оставьте email, и мы сообщим о запуске.",
        open: "Открыть страницу наборов",
      }
    : {
        title: "Bundles are coming soon",
        text: "Curated stacks for common research goals will appear here first. Leave your email and we'll let you know when they launch.",
        open: "Open the bundles page",
      }

  return (
    <section className="border-t border-border/50 bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="bundles-teaser-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center lg:max-w-2xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <Package className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <h2 id="bundles-teaser-heading" className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.text}
          </p>
          <div className="mt-8 rounded-2xl border border-gray-200/90 bg-secondary/40 px-6 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-8 sm:py-8">
            <BundlesNotifyBlock variant="centered" />
            <p className="mt-6 text-center text-xs text-muted-foreground">
              <Link href="/bundles" className="font-medium text-[#14B8A6] underline-offset-4 transition-colors hover:underline">
                {t.open}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
