import { Footer } from "@/components/footer"
import { BundlesTeaserSection } from "@/components/sections/bundles-teaser-section"
import { FeaturedProductsSection } from "@/components/sections/featured-products"
import { FinalCTASection } from "@/components/sections/final-cta"
import { HeroSection } from "@/components/sections/hero"
import { TrustSection } from "@/components/sections/trust"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <FeaturedProductsSection />
        <BundlesTeaserSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
