import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { BundlesTeaserSection } from "@/components/sections/bundles-teaser-section"
import { ComingSoonTeaserSection } from "@/components/sections/coming-soon-teaser-section"
import { FeaturedProductsSection } from "@/components/sections/featured-products"
import { FinalCTASection } from "@/components/sections/final-cta"
import { HeroSection } from "@/components/sections/hero"
import { TrustSection } from "@/components/sections/trust"

export const metadata: Metadata = {
  title: "Clinical-Grade Peptides | Pure Amino Peptides",
  description: "High-purity research peptides. Explore laboratory-grade compounds and request unavailable items directly.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Clinical-Grade Peptides | Pure Amino Peptides",
    description: "High-purity research peptides. Explore laboratory-grade compounds and request unavailable items directly.",
    images: [
      {
        url: "https://pure-amino-peptides.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://pure-amino-peptides.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Amino Peptides",
    description: "High-purity laboratory-grade peptides.",
    images: ["https://pure-amino-peptides.com/og-image.png"],
  },
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <FeaturedProductsSection />
        <BundlesTeaserSection />
        <ComingSoonTeaserSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
