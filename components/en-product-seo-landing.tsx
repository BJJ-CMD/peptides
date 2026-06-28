import { ProductSeoLandingLayout } from "@/components/product-seo-landing-layout"
import type { EnProductSeoContent } from "@/lib/en-product-seo-pages"

export function EnProductSeoLanding({ content }: { content: EnProductSeoContent }) {
  return <ProductSeoLandingLayout content={content} />
}
