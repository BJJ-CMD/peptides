import type { Metadata } from "next"
import { SeoRegionalLanding } from "@/components/seo-regional-landing"
import { peptidyAzerbaijanContent } from "@/lib/seo-regional-pages"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Исследовательские пептиды в Азербайджане | Pure Amino Peptides",
  description:
    "Исследовательские пептиды в Азербайджане с лабораторными отчетами, COA и проверкой чистоты по запросу. Только для исследовательского использования.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ru/peptidy-azerbaijan`,
  },
  openGraph: {
    title: "Исследовательские пептиды в Азербайджане | Pure Amino Peptides",
    description:
      "Исследовательские пептиды в Азербайджане с лабораторными отчетами, COA и проверкой чистоты по запросу.",
    url: `${SITE_URL}/ru/peptidy-azerbaijan`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Исследовательские пептиды в Азербайджане",
    description:
      "Лабораторные отчеты, COA и проверка чистоты. Только для исследовательского использования.",
    images: ["/og-image.png"],
  },
}

export default function PeptidyAzerbaijanPage() {
  return <SeoRegionalLanding content={peptidyAzerbaijanContent} locale="ru" />
}
