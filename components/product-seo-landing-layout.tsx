import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ProductImagePlaceholder, productHasCatalogImage } from "@/components/product-image-placeholder"
import { RegionalSeoLinksSection } from "@/components/regional-seo-links"
import { Button } from "@/components/ui/button"
import { formatUsd } from "@/lib/currency"
import { INSTAGRAM_URL } from "@/lib/social-links"
import type { ProductSeoProductSnapshot } from "@/lib/product-seo-landing-shared"

export type ProductSeoLandingLayoutContent = {
  locale: "en" | "ru"
  overline: string
  h1: string
  heroAvailability: string
  researchOnlyShort: string
  intro: string
  productSnapshot: ProductSeoProductSnapshot | null
  productPageHref: string
  productPageLabel: string
  viewProductLabel: string
  contactLabel: string
  contactAvailabilityLabel: string
  coaLinkLabel: string
  availabilityTitle: string
  availabilityParagraphs: string[]
  coaTitle: string
  coaParagraphs: string[]
  whyChooseTitle: string
  whyChooseItems: string[]
  researchOnlyTitle: string
  researchOnlyText: string
  faqTitle: string
  faq: { question: string; answer: string }[]
  linksTitle: string
  links: { href: string; label: string }[]
  ctaLabel: string
}

function ProductSeoCard({
  snapshot,
  productPageHref,
  viewProductLabel,
  contactAvailabilityLabel,
  researchOnlyLabel,
}: {
  snapshot: ProductSeoProductSnapshot
  productPageHref: string
  viewProductLabel: string
  contactAvailabilityLabel: string
  researchOnlyLabel: string
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <Link href={productPageHref} className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-b from-secondary/40 to-secondary/20">
        {productHasCatalogImage(snapshot.image) ? (
          <Image
            src={snapshot.image}
            alt={snapshot.name}
            fill
            className="object-contain p-4 transition-transform duration-200 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        ) : (
          <ProductImagePlaceholder variant="card" />
        )}
        <span className="absolute left-3 top-3 rounded-md border border-[#14B8A6]/25 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0d9488] backdrop-blur-sm">
          {researchOnlyLabel}
        </span>
      </Link>
      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            <Link href={productPageHref} className="hover:text-[#14B8A6]">
              {snapshot.name}
            </Link>
          </h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500">{snapshot.dosage}</p>
          <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">{formatUsd(snapshot.price)}</p>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Button
            asChild
            className="h-11 flex-1 rounded-xl bg-[#14B8A6] text-base font-medium text-white shadow-sm hover:bg-[#0f9f91]"
          >
            <Link href={productPageHref}>{viewProductLabel}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 flex-1 rounded-xl border-gray-300 text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            <Link href="/contact">{contactAvailabilityLabel}</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

export function ProductSeoLandingLayout({ content }: { content: ProductSeoLandingLayoutContent }) {
  const researchOnlyBadge = content.locale === "ru" ? "Только для исследований" : "Research only"

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <section className="border-b border-gray-200/80 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">{content.overline}</p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(280px,340px)] lg:items-start lg:gap-10">
              <div>
                <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                  {content.h1}
                </h1>
                <p className="mt-3 text-lg font-medium text-[#0d9488]">{content.heroAvailability}</p>

                <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/70 px-4 py-3">
                  <p className="text-sm font-medium leading-relaxed text-amber-950">{content.researchOnlyShort}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-xl bg-[#14B8A6] px-8 text-base font-semibold text-white shadow-sm hover:bg-[#0f9f91]"
                  >
                    <Link href={content.productPageHref}>{content.viewProductLabel}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-xl border-gray-300 px-8 text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <Link href="/contact">{content.contactLabel}</Link>
                  </Button>
                </div>

                <p className="mt-4">
                  <Link
                    href="/lab-reports"
                    className="text-[15px] font-semibold text-[#14B8A6] underline-offset-4 hover:underline"
                  >
                    {content.coaLinkLabel}
                  </Link>
                </p>

                <div className="mt-6 rounded-xl border border-[#14B8A6]/20 bg-[#14B8A6]/5 px-4 py-3.5">
                  <p className="text-sm font-medium text-slate-700">{content.productPageLabel}</p>
                  <Link
                    href={content.productPageHref}
                    className="mt-1 inline-flex items-center text-base font-semibold text-[#14B8A6] underline-offset-4 hover:underline"
                  >
                    {content.productPageHref}
                  </Link>
                </div>
              </div>

              {content.productSnapshot ? (
                <ProductSeoCard
                  snapshot={content.productSnapshot}
                  productPageHref={content.productPageHref}
                  viewProductLabel={content.viewProductLabel}
                  contactAvailabilityLabel={content.contactAvailabilityLabel}
                  researchOnlyLabel={researchOnlyBadge}
                />
              ) : null}
            </div>

            <p className="mt-8 text-base leading-relaxed text-slate-600 sm:text-lg">{content.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{content.availabilityTitle}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              {content.availabilityParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[15px] font-medium">
              <li>
                <Link href={content.productPageHref} className="font-semibold text-[#14B8A6] underline-offset-4 hover:underline">
                  {content.viewProductLabel}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#14B8A6] underline-offset-4 hover:underline">
                  {content.locale === "ru" ? "Каталог пептидов" : "Products catalog"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#14B8A6] underline-offset-4 hover:underline">
                  {content.contactLabel}
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#14B8A6] underline-offset-4 hover:underline">
                  {content.locale === "ru" ? "Доставка" : "Shipping"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{content.whyChooseTitle}</h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              {content.whyChooseItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14B8A6]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[15px] font-medium">
              <Link href="/lab-reports" className="text-[#14B8A6] underline-offset-4 hover:underline">
                {content.coaLinkLabel}
              </Link>
              <Link href="/contact" className="text-[#14B8A6] underline-offset-4 hover:underline">
                {content.contactLabel}
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14B8A6] underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </div>
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
                {content.coaLinkLabel}
              </Link>
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">{content.researchOnlyTitle}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700 sm:text-base">{content.researchOnlyText}</p>
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

          <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">{content.linksTitle}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              <li>
                <Link
                  href={content.productPageHref}
                  className="text-[15px] font-semibold text-[#14B8A6] underline-offset-4 hover:underline"
                >
                  {content.productPageLabel}
                </Link>
              </li>
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] font-medium text-[#14B8A6] underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 h-12 rounded-xl bg-[#14B8A6] px-8 text-base font-medium text-white shadow-sm hover:bg-[#0f9f91]"
            >
              <Link href={content.productPageHref}>{content.viewProductLabel}</Link>
            </Button>
          </div>

          <RegionalSeoLinksSection locale={content.locale} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
