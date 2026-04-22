import type { Metadata } from "next"
import { ComingSoonPageClient } from "@/components/coming-soon-page-client"

export const metadata: Metadata = {
  title: "Coming Soon Peptides | Pure Amino Peptides",
  description: "Browse upcoming laboratory-grade peptides and request sourcing directly through WhatsApp.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Coming Soon Peptides | Pure Amino Peptides",
    description: "Browse upcoming laboratory-grade peptides and request sourcing directly through WhatsApp.",
    images: [
      {
        url: "https://pure-amino-peptides.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://pure-amino-peptides.com/coming-soon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Amino Peptides",
    description: "High-purity laboratory-grade peptides.",
    images: ["https://pure-amino-peptides.com/og-image.png"],
  },
}

export default function ComingSoonPage() {
  return <ComingSoonPageClient />
}
