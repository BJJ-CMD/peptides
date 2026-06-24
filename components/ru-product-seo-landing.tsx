import Link from "next/link"
import { Footer } from "@/components/footer"
import { RegionalSeoLinksSection } from "@/components/regional-seo-links"
import { Button } from "@/components/ui/button"
import type { RuProductSeoContent } from "@/lib/ru-product-seo-pages"

export function RuProductSeoLanding({ content }: { content: RuProductSeoContent }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <section className="border-b border-gray-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">
              Баку, Азербайджан
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {content.h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{content.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {content.availabilityTitle}
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              {content.availabilityParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[15px] font-medium">
              <li>
                <Link href="/products" className="text-[#14B8A6] underline-offset-4 hover:underline">
                  Каталог пептидов
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#14B8A6] underline-offset-4 hover:underline">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#14B8A6] underline-offset-4 hover:underline">
                  Доставка
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{content.coaTitle}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              {content.coaParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-5">
              <Link href="/lab-reports" className="text-[15px] font-medium text-[#14B8A6] underline-offset-4 hover:underline">
                Лабораторные отчеты и COA
              </Link>
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{content.faqTitle}</h2>
            <dl className="mt-5 space-y-6">
              {content.faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-base font-semibold text-slate-900">{item.question}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">{content.disclaimerTitle}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700 sm:text-base">{content.disclaimer}</p>
          </div>

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">{content.linksTitle}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-[#14B8A6] underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={content.productPageHref}
                  className="text-[15px] font-medium text-[#14B8A6] underline-offset-4 hover:underline"
                >
                  {content.productPageLabel}
                </Link>
              </li>
            </ul>
            <Button
              asChild
              className="mt-8 h-12 rounded-xl bg-[#14B8A6] px-8 text-base font-medium text-white shadow-sm hover:bg-[#0f9f91]"
            >
              <Link href="/products">{content.ctaLabel}</Link>
            </Button>
          </div>

          <RegionalSeoLinksSection locale="ru" />
        </section>
      </main>
      <Footer />
    </div>
  )
}
