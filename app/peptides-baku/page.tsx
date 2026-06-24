import type { Metadata } from "next"
import { SeoRegionalLanding } from "@/components/seo-regional-landing"
import { peptidesBakuContent } from "@/lib/seo-regional-pages"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Research Peptides in Baku | Pure Amino Peptides",
  description:
    "Research-grade peptides for Baku laboratories with COA, lab reports, and purity verification. Serving scientific teams across Azerbaijan. Research use only.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/peptides-baku`,
  },
  openGraph: {
    title: "Research Peptides in Baku | Pure Amino Peptides",
    description:
      "Research-grade peptides for Baku laboratories with COA, lab reports, and purity verification on request.",
    url: `${SITE_URL}/peptides-baku`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides in Baku",
    description:
      "COA and lab report support for research peptides in Baku, Azerbaijan. Research use only.",
    images: ["/og-image.png"],
  },
}

export default function PeptidesBakuPage() {
  return <SeoRegionalLanding content={peptidesBakuContent} locale="en" />
}
