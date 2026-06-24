import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-url"

export type RuProductSeoPageConfig = {
  slug: string
  productId: string
  /** Display name for titles and H1 */
  productLabel: string
  /** Optional phrasing after «о» in body copy, e.g. «бактериостатической воде» */
  productAbout?: string
}

export const RU_PRODUCT_SEO_PAGES: Record<string, RuProductSeoPageConfig> = {
  "retatrutide-baku": { slug: "retatrutide-baku", productId: "retatrutide-20mg", productLabel: "Retatrutide" },
  "bpc-157-baku": { slug: "bpc-157-baku", productId: "bpc-157-10mg", productLabel: "BPC-157" },
  "tb-500-baku": { slug: "tb-500-baku", productId: "tb-500-10mg", productLabel: "TB-500" },
  "wolverine-baku": { slug: "wolverine-baku", productId: "wolverine-10mg", productLabel: "Wolverine" },
  "mots-c-baku": { slug: "mots-c-baku", productId: "mots-c-10mg", productLabel: "MOTS-c" },
  "glow-peptid-baku": { slug: "glow-peptid-baku", productId: "glow-10mg", productLabel: "Glow пептид" },
  "epithalon-baku": { slug: "epithalon-baku", productId: "epithalon-10mg", productLabel: "Epithalon" },
  "tesamorelin-baku": { slug: "tesamorelin-baku", productId: "tesamorelin-10mg", productLabel: "Tesamorelin" },
  "ss-31-baku": { slug: "ss-31-baku", productId: "ss-31-10mg", productLabel: "SS-31" },
  "thymosin-alpha-baku": { slug: "thymosin-alpha-baku", productId: "thymosin-alpha-10mg", productLabel: "Thymosin-Alpha" },
  "nad-plus-baku": { slug: "nad-plus-baku", productId: "nad-plus-10mg", productLabel: "NAD+" },
  "melanotan-2-baku": { slug: "melanotan-2-baku", productId: "melanotan-2-10mg", productLabel: "Melanotan 2" },
  "ghk-cu-baku": { slug: "ghk-cu-baku", productId: "ghk-cu-10mg", productLabel: "GHK-CU" },
  "bacteriostatic-water-baku": {
    slug: "bacteriostatic-water-baku",
    productId: "bacteriostatic-water",
    productLabel: "Бактериостатическая вода",
    productAbout: "бактериостатической воде",
  },
}

export type RuProductSeoFaqItem = {
  question: string
  answer: string
}

export type RuProductSeoContent = {
  canonicalPath: string
  title: string
  description: string
  h1: string
  intro: string
  availabilityTitle: string
  availabilityParagraphs: string[]
  coaTitle: string
  coaParagraphs: string[]
  faqTitle: string
  faq: RuProductSeoFaqItem[]
  disclaimerTitle: string
  disclaimer: string
  linksTitle: string
  links: { href: string; label: string }[]
  productPageHref: string
  productPageLabel: string
  ctaLabel: string
}

export function getRuProductSeoPage(slug: string): RuProductSeoPageConfig | undefined {
  return RU_PRODUCT_SEO_PAGES[slug]
}

export function buildRuProductSeoContent(config: RuProductSeoPageConfig): RuProductSeoContent {
  const { productLabel, productId, slug } = config
  const aboutPhrase = config.productAbout ?? productLabel
  const canonicalPath = `/ru/${slug}`
  const productPageHref = `/product/${productId}`

  const titleLabel = productLabel

  return {
    canonicalPath,
    title: `${titleLabel} в Баку | Пептиды в Азербайджане | Pure Amino Peptides`,
    description: `${titleLabel} в Баку и Азербайджане. Pure Amino Peptides предоставляет информацию о наличии, COA, лабораторных отчетах и проверке чистоты. Только для исследовательского использования.`,
    h1: `${titleLabel} в Баку`,
    intro: `На этой странице представлена информация о ${aboutPhrase} для клиентов, которые ищут пептиды в Баку и Азербайджане. Pure Amino Peptides предоставляет сведения о наличии, лабораторных отчетах COA и проверке чистоты. Если вы хотите узнать, где заказать информацию о ${aboutPhrase} в Баку, вы можете просмотреть каталог или связаться с нами. Продукты предназначены только для исследовательского использования.`,
    availabilityTitle: "Наличие и информация о заказе в Баку",
    availabilityParagraphs: [
      `Если вы ищете ${titleLabel} в Баку или по всему Азербайджану, начните с каталога пептидов на сайте Pure Amino Peptides. Там вы найдете актуальную информацию о позиции и сможете отправить запрос через контактную страницу.`,
      "Для вопросов о наличии, сроках и доставке по Баку и Азербайджану используйте страницу контактов или раздел доставки.",
    ],
    coaTitle: "COA и проверка чистоты",
    coaParagraphs: [
      `По запросу мы предоставляем информацию о лабораторных отчетах и сертификате анализа (COA) для ${titleLabel}. Это помогает подтвердить параметры чистоты перед использованием в исследовательских условиях.`,
      "Подробности о запросе документации — на странице лабораторных отчетов.",
    ],
    faqTitle: "Частые вопросы",
    faq: [
      {
        question: `Где купить ${titleLabel} в Баку?`,
        answer: `Вы можете посмотреть информацию о наличии ${titleLabel} на сайте Pure Amino Peptides или связаться с нами через контактную страницу. Продукт предназначен только для исследовательского использования.`,
      },
      {
        question: `Есть ли ${titleLabel} в Азербайджане?`,
        answer: `На сайте Pure Amino Peptides доступна информация о ${titleLabel} для клиентов в Баку и по Азербайджану. Уточните наличие и доставку через каталог или контактную страницу. Только для исследовательского использования.`,
      },
      {
        question: "Предоставляются ли COA и лабораторные отчеты?",
        answer: `Да, по запросу мы предоставляем информацию о COA и лабораторных отчетах для ${titleLabel}. Обратитесь через страницу лабораторных отчетов или контактов.`,
      },
      {
        question: "Можно ли использовать этот продукт человеком или животными?",
        answer:
          "Нет. Продукт предназначен только для исследовательского использования и не предназначен для применения человеком или животными.",
      },
    ],
    disclaimerTitle: "Только для исследовательского использования",
    disclaimer:
      "Вся продукция предназначена исключительно для лабораторных и научных исследований. Не для использования человеком или животными. Не для бытового, косметического или пищевого применения.",
    linksTitle: "Полезные ссылки",
    links: [
      { href: "/products", label: "Каталог пептидов" },
      { href: "/lab-reports", label: "Лабораторные отчеты и COA" },
      { href: "/faq", label: "Часто задаваемые вопросы" },
      { href: "/shipping", label: "Информация о доставке" },
      { href: "/contact", label: "Связаться с нами" },
    ],
    productPageHref,
    productPageLabel: `Страница ${titleLabel} в каталоге`,
    ctaLabel: "Смотреть каталог",
  }
}

export function buildRuProductSeoMetadata(config: RuProductSeoPageConfig): Metadata {
  const content = buildRuProductSeoContent(config)
  const canonical = `${SITE_URL}${content.canonicalPath}`

  return {
    title: content.title,
    description: content.description,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["/og-image.png"],
    },
  }
}

export const RU_PRODUCT_SEO_SLUGS = Object.keys(RU_PRODUCT_SEO_PAGES)
