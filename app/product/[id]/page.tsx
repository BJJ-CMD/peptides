import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ProductImagePlaceholder, productHasCatalogImage } from "@/components/product-image-placeholder"
import { ProductPurchasePanel } from "@/components/product-purchase-panel"
import { formatAzn } from "@/lib/currency"
import { getAllProducts, getProduct, getRelatedProducts } from "@/lib/products"

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ id: product.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) {
    return {
      title: "Research Peptide | Pure Amino Peptides",
      description: "Explore laboratory-grade peptide details and request high-purity compounds for research workflows.",
      robots: { index: true, follow: true },
      openGraph: {
        title: "Research Peptide | Pure Amino Peptides",
        description: "Explore laboratory-grade peptide details and request high-purity compounds for research workflows.",
        images: [
          {
            url: "https://pure-amino-peptides.com/og-image.png",
            width: 1200,
            height: 630,
          },
        ],
        url: "https://pure-amino-peptides.com/products",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pure Amino Peptides",
        description: "High-purity laboratory-grade peptides.",
        images: ["https://pure-amino-peptides.com/og-image.png"],
      },
    }
  }

  const title = `${product.name} | Pure Amino Peptides`
  const description = `${product.name} is a high-purity, laboratory-grade research peptide with structured protocol and sourcing details.`

  return {
    title,
    description,
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://pure-amino-peptides.com/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      url: `https://pure-amino-peptides.com/product/${product.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Pure Amino Peptides",
      description: "High-purity laboratory-grade peptides.",
      images: ["https://pure-amino-peptides.com/og-image.png"],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

  const related = getRelatedProducts(product.relatedProducts)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Product Hero */}
        <section className="bg-background py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Product Image */}
              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-secondary/30 p-4 sm:p-8 lg:p-12">
                {productHasCatalogImage(product.image) ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={450}
                    className="h-auto max-h-[400px] w-auto object-contain"
                    priority
                  />
                ) : (
                  <div className="h-full min-h-[260px] w-full max-w-md overflow-hidden rounded-xl">
                    <ProductImagePlaceholder variant="hero" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <ProductPurchasePanel product={product} />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              Research Benefits
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.detailedBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/50 bg-secondary/30 p-6"
                >
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="border-t border-border/50 bg-secondary/30 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground">
                Related Products
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group flex gap-4 rounded-xl border border-border/50 bg-background p-4 transition-all hover:border-primary/30"
                  >
                    <div className="flex h-24 w-20 shrink-0 items-stretch justify-stretch overflow-hidden rounded-lg bg-secondary/50">
                      {productHasCatalogImage(relatedProduct.image) ? (
                        <div className="relative flex h-full w-full items-center justify-center p-1">
                          <Image
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            width={60}
                            height={90}
                            className="h-auto w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <ProductImagePlaceholder variant="thumb" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-foreground group-hover:text-primary">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedProduct.dosage}
                      </p>
                      <p className="mt-auto font-bold text-foreground">
                        {formatAzn(relatedProduct.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
