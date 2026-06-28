import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RuProductSeoLanding } from "@/components/ru-product-seo-landing"
import {
  RU_PRODUCT_SEO_SLUGS,
  buildRuProductSeoContent,
  buildRuProductSeoMetadata,
  getRuProductSeoPage,
} from "@/lib/ru-product-seo-pages"

export function generateStaticParams() {
  return RU_PRODUCT_SEO_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const config = getRuProductSeoPage(slug)
  if (!config) return {}
  return buildRuProductSeoMetadata(config)
}

export default async function RuProductSeoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const config = getRuProductSeoPage(slug)
  if (!config) notFound()

  const content = buildRuProductSeoContent(config)
  return <RuProductSeoLanding content={content} />
}
