import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { FaqAccordion } from "@/components/faq/faq-accordion"
import { CircleHelp } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about ordering, shipping, contact options, and how we approach quality at Pure Amino Peptides.",
}

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-2xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
              <CircleHelp className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Everything you need to know before placing an order.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200/90 bg-white px-3 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:mt-12 sm:px-5 sm:py-2">
            <FaqAccordion />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
