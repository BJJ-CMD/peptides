import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { BundlesTeaserSection } from "@/components/sections/bundles-teaser-section"
import { ComingSoonTeaserSection } from "@/components/sections/coming-soon-teaser-section"
import { FeaturedProductsSection } from "@/components/sections/featured-products"
import { FinalCTASection } from "@/components/sections/final-cta"
import { HeroSection } from "@/components/sections/hero"
import { TrustSection } from "@/components/sections/trust"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Pure Amino Peptides",
  description: "Clinical-grade research peptides with 99%+ purity.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pure Amino Peptides",
    description: "Clinical-grade research peptides with 99%+ purity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Amino Peptides",
    description: "Clinical-grade research peptides with 99%+ purity.",
    images: ["/og-image.png"],
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
