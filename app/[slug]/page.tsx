import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EnProductSeoLanding } from "@/components/en-product-seo-landing"
import {
  EN_PRODUCT_SEO_SLUGS,
  buildEnProductSeoContent,
  buildEnProductSeoMetadata,
  getEnProductSeoPage,
} from "@/lib/en-product-seo-pages"

export function generateStaticParams() {
  return EN_PRODUCT_SEO_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const config = getEnProductSeoPage(slug)
  if (!config) return {}
  return buildEnProductSeoMetadata(config)
}

export default async function EnProductSeoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const config = getEnProductSeoPage(slug)
  if (!config) notFound()

  const content = buildEnProductSeoContent(config)
  return <EnProductSeoLanding content={content} />
}
