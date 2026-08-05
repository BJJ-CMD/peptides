import type { Metadata } from "next"
import { getProductSeoSnapshot, type ProductSeoProductSnapshot } from "@/lib/product-seo-landing-shared"
import { SITE_URL } from "@/lib/site-url"

export type EnProductSeoPageConfig = {
  slug: string
  russianSlug: string
  productId: string
  productLabel: string
  azerbaijanLabel: string
}

export const EN_PRODUCT_SEO_PAGES: Record<string, EnProductSeoPageConfig> = {
  "retatrutide-baku": {
    slug: "retatrutide-baku",
    russianSlug: "retatrutide-baku",
    productId: "retatrutide-20mg",
    productLabel: "Retatrutide",
    azerbaijanLabel: "Retatrutide",
  },
  "bpc-157-baku": {
    slug: "bpc-157-baku",
    russianSlug: "bpc-157-baku",
    productId: "bpc-157-10mg",
    productLabel: "BPC-157",
    azerbaijanLabel: "BPC-157",
  },
  "tb-500-baku": {
    slug: "tb-500-baku",
    russianSlug: "tb-500-baku",
    productId: "tb-500-10mg",
    productLabel: "TB-500",
    azerbaijanLabel: "TB-500",
  },
  "wolverine-baku": {
    slug: "wolverine-baku",
    russianSlug: "wolverine-baku",
    productId: "wolverine-10mg",
    productLabel: "Wolverine",
    azerbaijanLabel: "Wolverine",
  },
  "mots-c-baku": {
    slug: "mots-c-baku",
    russianSlug: "mots-c-baku",
    productId: "mots-c-10mg",
    productLabel: "MOTS-c",
    azerbaijanLabel: "MOTS-c",
  },
  "glow-peptide-baku": {
    slug: "glow-peptide-baku",
    russianSlug: "glow-peptid-baku",
    productId: "glow-10mg",
    productLabel: "GLOW Peptide",
    azerbaijanLabel: "GLOW",
  },
  "epithalon-baku": {
    slug: "epithalon-baku",
    russianSlug: "epithalon-baku",
    productId: "epithalon-10mg",
    productLabel: "Epithalon",
    azerbaijanLabel: "Epithalon",
  },
  "tesamorelin-baku": {
    slug: "tesamorelin-baku",
    russianSlug: "tesamorelin-baku",
    productId: "tesamorelin-10mg",
    productLabel: "Tesamorelin",
    azerbaijanLabel: "Tesamorelin",
  },
  "ss-31-baku": {
    slug: "ss-31-baku",
    russianSlug: "ss-31-baku",
    productId: "ss-31-10mg",
    productLabel: "SS-31",
    azerbaijanLabel: "SS-31",
  },
  "thymosin-alpha-baku": {
    slug: "thymosin-alpha-baku",
    russianSlug: "thymosin-alpha-baku",
    productId: "thymosin-alpha-10mg",
    productLabel: "Thymosin Alpha",
    azerbaijanLabel: "Thymosin Alpha",
  },
  "nad-plus-baku": {
    slug: "nad-plus-baku",
    russianSlug: "nad-plus-baku",
    productId: "nad-plus-10mg",
    productLabel: "NAD+",
    azerbaijanLabel: "NAD+",
  },
  "melanotan-2-baku": {
    slug: "melanotan-2-baku",
    russianSlug: "melanotan-2-baku",
    productId: "melanotan-2-10mg",
    productLabel: "Melanotan 2",
    azerbaijanLabel: "Melanotan 2",
  },
  "ghk-cu-baku": {
    slug: "ghk-cu-baku",
    russianSlug: "ghk-cu-baku",
    productId: "ghk-cu-10mg",
    productLabel: "GHK-Cu",
    azerbaijanLabel: "GHK-Cu",
  },
  "bacteriostatic-water-baku": {
    slug: "bacteriostatic-water-baku",
    russianSlug: "bacteriostatic-water-baku",
    productId: "bacteriostatic-water",
    productLabel: "Bacteriostatic Water",
    azerbaijanLabel: "Bacteriostatic Water",
  },
}

export type EnProductSeoContent = {
  locale: "en"
  canonicalPath: string
  russianPath: string
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
  faq: { question: string; answer: string }[]
  linksTitle: string
  links: { href: string; label: string }[]
  ctaLabel: string
}

export function getEnProductSeoPage(slug: string): EnProductSeoPageConfig | undefined {
  return EN_PRODUCT_SEO_PAGES[slug]
}

export function buildEnProductSeoContent(config: EnProductSeoPageConfig): EnProductSeoContent {
  const canonicalPath = `/${config.slug}`
  const russianPath = `/ru/${config.russianSlug}`
  const productPageHref = `/product/${config.productId}`

  return {
    locale: "en",
    canonicalPath,
    russianPath,
    title: `${config.productLabel} in Baku | ${config.azerbaijanLabel} Azerbaijan | Pure Amino Peptides`,
    description: `${config.productLabel} information for Baku and Azerbaijan. View availability, COA, lab reports, and purity verification. Research use only. Not for human or veterinary use.`,
    overline: "Baku, Azerbaijan",
    h1: config.productLabel,
    heroAvailability: "Available in Baku and Azerbaijan",
    researchOnlyShort: "Research use only. Not for human or veterinary use.",
    intro: `This page provides information for users searching for ${config.productLabel} in Baku and Azerbaijan. Pure Amino Peptides lists catalog details, COA documentation, lab reports, and purity verification for peptide research workflows.`,
    productSnapshot: getProductSeoSnapshot(config.productId),
    viewProductLabel: "View product",
    contactLabel: "Contact",
    contactAvailabilityLabel: "Contact for availability",
    coaLinkLabel: "Lab reports and COA",
    whyChooseTitle: "Why choose Pure Amino Peptides?",
    whyChooseItems: [
      "COA and lab reports available on request for research documentation.",
      "Purity verification details provided for catalog evaluation.",
      "Availability information for Baku and Azerbaijan through our catalog and contact team.",
      "Questions answered via contact page and Instagram.",
      "Products supplied strictly for research use only.",
    ],
    availabilityTitle: `${config.productLabel} availability in Baku`,
    availabilityParagraphs: [
      `If you are searching for ${config.productLabel} in Baku or Azerbaijan, you can review the catalog and contact our team for current availability and shipping information.`,
      "For shipping timelines and delivery details in Baku and Azerbaijan, please check our shipping page and contact page.",
    ],
    coaTitle: "COA and purity verification",
    coaParagraphs: [
      `COA documentation, lab reports, and batch verification information can be requested for ${config.productLabel}.`,
      "Purity information is provided for research evaluation and documentation review.",
    ],
    researchOnlyTitle: "Research use only",
    researchOnlyText: "Research use only. Not for human or veterinary use.",
    faqTitle: "FAQ",
    faq: [
      {
        question: `Where can I buy ${config.productLabel} in Baku?`,
        answer: `You can view ${config.productLabel} availability through Pure Amino Peptides or contact us for information. Products are supplied strictly for research use only.`,
      },
      {
        question: `Is ${config.productLabel} available in Azerbaijan?`,
        answer: `${config.productLabel} availability information for Baku and Azerbaijan is listed through our catalog and support pages.`,
      },
      {
        question: "Do you provide COA and lab reports?",
        answer: `Yes. COA and lab report information can be requested for ${config.productLabel} via our lab reports and contact pages.`,
      },
      {
        question: "Is this product for human or animal use?",
        answer: "No. This product is intended for research use only and is not for human or veterinary use.",
      },
    ],
    linksTitle: "Helpful links",
    links: [
      { href: "/products", label: "Browse products" },
      { href: "/lab-reports", label: "Lab reports and COA" },
      { href: "/faq", label: "FAQ" },
      { href: "/shipping", label: "Shipping information" },
      { href: "/contact", label: "Contact us" },
      { href: russianPath, label: "Russian version" },
    ],
    productPageHref,
    productPageLabel: `View the ${config.productLabel} product page`,
    ctaLabel: "View catalog",
  }
}

export function buildEnProductSeoMetadata(config: EnProductSeoPageConfig): Metadata {
  const content = buildEnProductSeoContent(config)
  const canonical = `${SITE_URL}${content.canonicalPath}`
  const russianCanonical = `${SITE_URL}${content.russianPath}`

  return {
    title: content.title,
    description: content.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        en: canonical,
        ru: russianCanonical,
        "x-default": canonical,
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

export const EN_PRODUCT_SEO_SLUGS = Object.keys(EN_PRODUCT_SEO_PAGES)
