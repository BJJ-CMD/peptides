import type { Metadata } from "next"
import { SeoRegionalLanding } from "@/components/seo-regional-landing"
import { peptidesAzerbaijanContent } from "@/lib/seo-regional-pages"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Research Peptides in Azerbaijan | Pure Amino Peptides",
  description:
    "Laboratory-grade research peptides in Azerbaijan with COA documentation, lab reports, and purity verification on request. Research use only — not for human or veterinary use.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/peptides-azerbaijan`,
  },
  openGraph: {
    title: "Research Peptides in Azerbaijan | Pure Amino Peptides",
    description:
      "Laboratory-grade research peptides in Azerbaijan with COA documentation, lab reports, and purity verification on request.",
    url: `${SITE_URL}/peptides-azerbaijan`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides in Azerbaijan",
    description:
      "COA, lab reports, and purity verification for research peptides in Azerbaijan. Research use only.",
    images: ["/og-image.png"],
  },
}

export default function PeptidesAzerbaijanPage() {
  return <SeoRegionalLanding content={peptidesAzerbaijanContent} />
}
