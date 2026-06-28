import { ProductSeoLandingLayout } from "@/components/product-seo-landing-layout"
import type { RuProductSeoContent } from "@/lib/ru-product-seo-pages"

export function RuProductSeoLanding({ content }: { content: RuProductSeoContent }) {
  return <ProductSeoLandingLayout content={content} />
}
