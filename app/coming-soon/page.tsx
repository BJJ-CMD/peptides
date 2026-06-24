import type { Metadata } from "next"
import { ComingSoonPageClient } from "@/components/coming-soon-page-client"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Coming Soon Peptides | Pure Amino Peptides",
  description: "Browse upcoming laboratory-grade peptides and request sourcing directly through WhatsApp.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/coming-soon`,
  },
  openGraph: {
    title: "Coming Soon Peptides | Pure Amino Peptides",
    description: "Browse upcoming laboratory-grade peptides and request sourcing directly through WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    url: `${SITE_URL}/coming-soon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Amino Peptides",
    description: "High-purity laboratory-grade peptides.",
    images: ["/og-image.png"],
  },
}

export default function ComingSoonPage() {
  return <ComingSoonPageClient />
}
