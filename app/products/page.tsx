import type { Metadata } from "next"
import { Suspense } from "react"
import { Footer } from "@/components/footer"
import { ShopPeptidesView } from "@/components/shop/shop-peptides-view"
import { getShopPeptideListings } from "@/lib/shop-filters"

export const metadata: Metadata = {
  title: "Shop Research Peptides | Pure Amino Peptides",
  description: "Browse laboratory-grade peptides by category and discover high-purity compounds for research workflows.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shop Research Peptides | Pure Amino Peptides",
    description: "Browse laboratory-grade peptides by category and discover high-purity compounds for research workflows.",
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

export default function ProductsPage() {
  const listings = getShopPeptideListings()

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <Suspense
        fallback={
          <div className="min-h-[50vh] border-b border-gray-200/80 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-100" />
              <div className="mt-4 h-4 max-w-md animate-pulse rounded bg-slate-100" />
              <div className="mt-8 h-11 w-full max-w-xl animate-pulse rounded-xl bg-slate-100" />
            </div>
          </div>
        }
      >
        <ShopPeptidesView products={listings} />
      </Suspense>
      <Footer />
    </div>
  )
}
