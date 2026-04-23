import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Footer } from "@/components/footer"
import { LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/locale"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pure Aminos — precision, consistency, and a refined approach to peptide sourcing.",
}

export default async function AboutPage() {
  const locale = normalizeLocale((await cookies()).get(LOCALE_COOKIE_NAME)?.value)
  const t = locale === "ru"
    ? {
        overline: "О нас",
        title: "О Pure Aminos",
        intro: "Pure Aminos основан в 2026 году с четким стандартом: точность, стабильность и продуманный подход к подбору пептидов.",
        p1: "Мы поставляем соединения высокой чистоты с жестким контролем качества и внимательным отбором. Каждый продукт отбирается с учетом всех деталей — от поставки до финальной презентации — чтобы обеспечить чистый и надежный опыт по всему каталогу.",
        p2: "Наш подход прост: убрать лишний шум и сосредоточиться на действительно важном — чистоте, прозрачности и стабильности. Без преувеличений и компромиссов, только контролируемый профессиональный стандарт.",
        p3: "Pure Aminos создан для тех, кто ценит ясность, качество и более дисциплинированный подход к пептидам.",
        p4: "Мы постоянно совершенствуем и расширяем каталог, чтобы задавать более высокий стандарт в этой сфере.",
      }
    : {
        overline: "About",
        title: "About Pure Aminos",
        intro: "Established in 2026, Pure Aminos was built with a clear standard in mind — precision, consistency, and a refined approach to peptide sourcing.",
        p1: "We focus on delivering high-purity compounds backed by strict quality control and careful selection. Every product is chosen with attention to detail, from sourcing to final presentation, ensuring a clean and reliable experience across the entire catalog.",
        p2: "Our approach is simple: eliminate unnecessary noise and focus on what actually matters — purity, transparency, and consistency. No exaggerated claims, no shortcuts, just a controlled and professional standard you can rely on.",
        p3: "Pure Aminos is designed for those who value clarity, quality, and a more disciplined approach to peptides.",
        p4: "We are continuously refining and expanding, with the goal of setting a higher standard in the space.",
      }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <section className="border-b border-gray-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">{t.overline}</p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {t.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="space-y-6 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              <p>
                {t.p1}
              </p>
              <p>
                {t.p2}
              </p>
              <p className="font-medium text-slate-800">
                {t.p3}
              </p>
              <p className="border-t border-gray-100 pt-6 text-slate-600">
                {t.p4}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
