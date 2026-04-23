import type { Metadata } from "next"
import { cookies } from "next/headers"
import { BundlesNotifyBlock } from "@/components/bundles-notify-block"
import { Footer } from "@/components/footer"
import { LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/locale"
import { Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Bundles",
  description: "Peptide bundles at Pure Amino Peptides — coming soon.",
}

export default async function BundlesPage() {
  const locale = normalizeLocale((await cookies()).get(LOCALE_COOKIE_NAME)?.value)
  const isRu = locale === "ru"
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-lg px-4 py-14 text-center sm:max-w-xl sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <Package className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{isRu ? "Наборы" : "Bundles"}</h1>

          <div className="mt-10 rounded-2xl border border-gray-200/90 bg-white px-6 py-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-8 sm:py-12">
            <p className="text-lg font-medium tracking-tight text-slate-900 sm:text-xl">{isRu ? "Скоро" : "Coming soon"}</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              {isRu
                ? "Мы готовим подборки под исследовательские цели. Оставьте email ниже — в том же быстром формате, что и в футере — и мы сообщим, когда наборы станут доступны."
                : "Curated stacks are in progress. Add your email below — same quick signup style as the site footer — and we'll notify you when bundles go live."}
            </p>
            <div className="mx-auto mt-8 max-w-md border-t border-gray-100 pt-8">
              <BundlesNotifyBlock variant="centered" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
