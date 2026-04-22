import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pure Aminos — precision, consistency, and a refined approach to peptide sourcing.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <section className="border-b border-gray-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">About</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              About Pure Aminos
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Established in 2026, Pure Aminos was built with a clear standard in mind — precision, consistency, and a
              refined approach to peptide sourcing.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="space-y-6 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              <p>
                We focus on delivering high-purity compounds backed by strict quality control and careful selection.
                Every product is chosen with attention to detail, from sourcing to final presentation, ensuring a clean
                and reliable experience across the entire catalog.
              </p>
              <p>
                Our approach is simple: eliminate unnecessary noise and focus on what actually matters — purity,
                transparency, and consistency. No exaggerated claims, no shortcuts, just a controlled and professional
                standard you can rely on.
              </p>
              <p className="font-medium text-slate-800">
                Pure Aminos is designed for those who value clarity, quality, and a more disciplined approach to
                peptides.
              </p>
              <p className="border-t border-gray-100 pt-6 text-slate-600">
                We are continuously refining and expanding, with the goal of setting a higher standard in the space.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
