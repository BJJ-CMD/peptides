import type { Metadata } from "next"
import { getProductSeoSnapshot, type ProductSeoProductSnapshot } from "@/lib/product-seo-landing-shared"
import { SITE_URL } from "@/lib/site-url"

export type RuProductSeoPageConfig = {
  slug: string
  productId: string
  /** Display name for titles and H1 */
  productLabel: string
  englishSlug: string
  /** Optional phrasing after «о» in body copy, e.g. «бактериостатической воде» */
  productAbout?: string
}

export const RU_PRODUCT_SEO_PAGES: Record<string, RuProductSeoPageConfig> = {
  "retatrutide-baku": { slug: "retatrutide-baku", englishSlug: "retatrutide-baku", productId: "retatrutide-20mg", productLabel: "Retatrutide" },
  "bpc-157-baku": { slug: "bpc-157-baku", englishSlug: "bpc-157-baku", productId: "bpc-157-10mg", productLabel: "BPC-157" },
  "tb-500-baku": { slug: "tb-500-baku", englishSlug: "tb-500-baku", productId: "tb-500-10mg", productLabel: "TB-500" },
  "wolverine-baku": { slug: "wolverine-baku", englishSlug: "wolverine-baku", productId: "wolverine-10mg", productLabel: "Wolverine" },
  "mots-c-baku": { slug: "mots-c-baku", englishSlug: "mots-c-baku", productId: "mots-c-10mg", productLabel: "MOTS-c" },
  "glow-peptid-baku": { slug: "glow-peptid-baku", englishSlug: "glow-peptide-baku", productId: "glow-10mg", productLabel: "Glow пептид" },
  "epithalon-baku": { slug: "epithalon-baku", englishSlug: "epithalon-baku", productId: "epithalon-10mg", productLabel: "Epithalon" },
  "tesamorelin-baku": { slug: "tesamorelin-baku", englishSlug: "tesamorelin-baku", productId: "tesamorelin-10mg", productLabel: "Tesamorelin" },
  "ss-31-baku": { slug: "ss-31-baku", englishSlug: "ss-31-baku", productId: "ss-31-10mg", productLabel: "SS-31" },
  "thymosin-alpha-baku": { slug: "thymosin-alpha-baku", englishSlug: "thymosin-alpha-baku", productId: "thymosin-alpha-10mg", productLabel: "Thymosin Alpha" },
  "nad-plus-baku": { slug: "nad-plus-baku", englishSlug: "nad-plus-baku", productId: "nad-plus-10mg", productLabel: "NAD+" },
  "melanotan-2-baku": { slug: "melanotan-2-baku", englishSlug: "melanotan-2-baku", productId: "melanotan-2-10mg", productLabel: "Melanotan 2" },
  "ghk-cu-baku": { slug: "ghk-cu-baku", englishSlug: "ghk-cu-baku", productId: "ghk-cu-10mg", productLabel: "GHK-Cu" },
  "bacteriostatic-water-baku": {
    slug: "bacteriostatic-water-baku",
    englishSlug: "bacteriostatic-water-baku",
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
  locale: "ru"
  canonicalPath: string
  englishPath: string
  title: string
  description: string
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
  faq: RuProductSeoFaqItem[]
  linksTitle: string
  links: { href: string; label: string }[]
  ctaLabel: string
}

export function getRuProductSeoPage(slug: string): RuProductSeoPageConfig | undefined {
  return RU_PRODUCT_SEO_PAGES[slug]
}

export function buildRuProductSeoContent(config: RuProductSeoPageConfig): RuProductSeoContent {
  const { productLabel, productId, slug, englishSlug } = config
  const aboutPhrase = config.productAbout ?? productLabel
  const canonicalPath = `/ru/${slug}`
  const englishPath = `/${englishSlug}`
  const productPageHref = `/product/${productId}`

  const titleLabel = productLabel

  return {
    locale: "ru",
    canonicalPath,
    englishPath,
    title: `${titleLabel} в Баку | ${titleLabel} Азербайджан | Pure Amino Peptides`,
    description: `${titleLabel} в Баку и Азербайджане. Pure Amino Peptides предоставляет информацию о наличии, COA, лабораторных отчетах и проверке чистоты. Только для исследовательского использования.`,
    overline: "Баку, Азербайджан",
    h1: titleLabel,
    heroAvailability: "Доступно в Баку и Азербайджане",
    researchOnlyShort: "Только для исследовательского использования. Не для применения человеком или животными.",
    intro: `На этой странице представлена информация о ${aboutPhrase} для клиентов, которые ищут пептиды в Баку и Азербайджане. Pure Amino Peptides предоставляет сведения о наличии, лабораторных отчетах COA и проверке чистоты.`,
    productSnapshot: getProductSeoSnapshot(productId),
    viewProductLabel: "Посмотреть продукт",
    contactLabel: "Связаться",
    contactAvailabilityLabel: "Уточнить наличие",
    coaLinkLabel: "COA и лабораторные отчеты",
    whyChooseTitle: "Почему Pure Amino Peptides?",
    whyChooseItems: [
      "COA и лабораторные отчеты предоставляются по запросу для исследовательской документации.",
      "Информация о проверке чистоты для оценки позиций каталога.",
      "Сведения о наличии в Баку и Азербайджане через каталог и контактную команду.",
      "Ответы на вопросы через страницу контактов и Instagram.",
      "Продукция предназначена только для исследовательского использования.",
    ],
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
    researchOnlyTitle: "Только для исследовательского использования",
    researchOnlyText:
      "Вся продукция предназначена исключительно для лабораторных и научных исследований. Не для использования человеком или животными. Не для бытового, косметического или пищевого применения.",
    linksTitle: "Полезные ссылки",
    links: [
      { href: "/products", label: "Каталог пептидов" },
      { href: "/lab-reports", label: "Лабораторные отчеты и COA" },
      { href: "/faq", label: "Часто задаваемые вопросы" },
      { href: "/shipping", label: "Информация о доставке" },
      { href: "/contact", label: "Связаться с нами" },
      { href: englishPath, label: "English version" },
    ],
    productPageHref,
    productPageLabel: `Посмотреть страницу ${titleLabel} в каталоге`,
    ctaLabel: "Смотреть каталог",
  }
}

export function buildRuProductSeoMetadata(config: RuProductSeoPageConfig): Metadata {
  const content = buildRuProductSeoContent(config)
  const canonical = `${SITE_URL}${content.canonicalPath}`
  const englishCanonical = `${SITE_URL}${content.englishPath}`

  return {
    title: content.title,
    description: content.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        en: englishCanonical,
        ru: canonical,
        "x-default": englishCanonical,
      },
    },
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
