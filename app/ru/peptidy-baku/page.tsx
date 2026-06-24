import type { Metadata } from "next"
import { SeoRegionalLanding } from "@/components/seo-regional-landing"
import { peptidyBakuContent } from "@/lib/seo-regional-pages"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Пептиды в Баку для исследований | Pure Amino Peptides",
  description:
    "Исследовательские пептиды в Баку с лабораторными отчетами, COA и проверкой чистоты. Только для исследовательского использования — не для человека и животных.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ru/peptidy-baku`,
  },
  openGraph: {
    title: "Пептиды в Баку для исследований | Pure Amino Peptides",
    description:
      "Исследовательские пептиды в Баку с лабораторными отчетами, COA и проверкой чистоты по запросу.",
    url: `${SITE_URL}/ru/peptidy-baku`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Пептиды в Баку для исследований",
    description:
      "Лабораторные отчеты, COA и проверка чистоты для исследовательских пептидов в Баку.",
    images: ["/og-image.png"],
  },
}

export default function PeptidyBakuPage() {
  return <SeoRegionalLanding content={peptidyBakuContent} />
}
