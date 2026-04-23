import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Footer } from "@/components/footer"
import { LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/locale"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and return policy for Pure Amino Peptides.",
}

export default async function RefundsPage() {
  const locale = normalizeLocale((await cookies()).get(LOCALE_COOKIE_NAME)?.value)
  const isRu = locale === "ru"
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-lg px-4 py-14 text-center sm:max-w-xl sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <FileText className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{isRu ? "Политика возврата" : "Refund Policy"}</h1>

          <div className="mt-10 rounded-2xl border border-gray-200/90 bg-white px-6 py-9 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-8 sm:py-10">
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              <p>
                {isRu
                  ? "Все продажи являются окончательными. После оформления заказа возврат, обмен и отмена не предусмотрены."
                  : "All sales are final. We do not offer refunds, returns, or exchanges once an order has been placed."}
              </p>
              <p>
                {isRu
                  ? "Если у вас есть вопросы перед оформлением заказа, свяжитесь с нами — мы поможем вам заранее."
                  : "If you have any questions or concerns before placing an order, we encourage you to contact us so we can assist you."}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
