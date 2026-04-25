"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { FlaskConical } from "lucide-react"
import { formatAzn } from "@/lib/currency"

const products = [
  {
    id: "retatrutide-20mg",
    name: "Retatrutide",
    dosage: "10 mg / 20 mg / 30 mg",
    price: 400,
    image: "/retatrutide.png",
    benefits: ["GLP-1 / GIP / Glucagon", "Fat Loss", "Appetite Control"],
  },
  {
    id: "mots-c-10mg",
    name: "MOTS-c",
    dosage: "30 mg",
    price: 250,
    image: "/motsc.png",
    benefits: ["Mitochondrial Support", "Metabolic Health", "Endurance"],
  },
  {
    id: "glow-10mg",
    name: "GLOW",
    dosage: "70 mg",
    price: 300,
    image: "/GLOW.png",
    benefits: ["Skin Support", "Cellular Renewal", "Radiance"],
  },
  {
    id: "epithalon-10mg",
    name: "Epithalon",
    dosage: "50 mg",
    price: 280,
    image: "/epithalon.png",
    benefits: ["Longevity Research", "Cellular Support", "Recovery"],
  },
  {
    id: "tesamorelin-10mg",
    name: "TESAMORELIN",
    dosage: "10 mg",
    price: 200,
    image: "/tesamorelin.png",
    benefits: ["Metabolic Research", "Body Composition", "Cellular Support"],
  },
  {
    id: "wolverine-10mg",
    name: "Wolverine",
    dosage: "20 mg",
    price: 250,
    image: "/wolverine.png",
    benefits: ["Tissue Repair", "Recovery", "Healing"],
  },
  {
    id: "ss-31-10mg",
    name: "SS-31",
    dosage: "10 mg",
    price: 150,
    image: "/ss-31.png",
    benefits: ["Mitochondrial Support", "Cellular Energy", "Recovery"],
  },
  {
    id: "thymosin-alpha-10mg",
    name: "Thymosin-Alpha",
    dosage: "10 mg",
    price: 250,
    image: "/thymosin-alpha.png",
    benefits: ["Immune Research", "Recovery", "Cellular Support"],
  },
  {
    id: "nad-plus-10mg",
    name: "NAD+",
    dosage: "1000 mg",
    price: 300,
    image: "/nad-plus.png",
    benefits: ["Cellular Energy", "Longevity Research", "Metabolic Support"],
  },
  {
    id: "melanotan-2-10mg",
    name: "Melanotan 2",
    dosage: "10 mg",
    price: 100,
    image: "/melanotan-2.png",
    benefits: ["Peptide Research", "Skin Pathways", "Cellular Study"],
  },
  {
    id: "ghk-cu-10mg",
    name: "GHK-CU",
    dosage: "50 mg",
    price: 100,
    image: "/ghk-cu.png",
    benefits: ["Skin Research", "Cellular Renewal", "Tissue Support"],
  },
]

export function FeaturedProductsSection() {
  const { locale } = useLanguage()
  const readMoreLabel = locale === "ru" ? "Подробнее" : "Read more"

  return (
    <section className="border-t border-border/50 bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Peptides
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Our most popular research compounds
            </p>
          </div>
          <Link href="/products" className={buttonVariants({ variant: "outline" })}>
            View All Products
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 pr-1 sm:mt-10 sm:grid-cols-2 sm:gap-6 sm:pr-0 lg:grid-cols-3 lg:gap-8 lg:px-0 lg:pr-8 xl:grid-cols-3 xl:gap-10 xl:pr-10 2xl:grid-cols-4 2xl:gap-10 2xl:pr-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background transition-all hover:border-primary/30 hover:shadow-lg lg:overflow-visible lg:shadow-sm lg:hover:shadow-xl"
            >
              {/* Lab Tested Badge */}
              <div className="absolute right-3 top-3 z-[25]">
                <Badge variant="secondary" className="gap-1 bg-background/90 backdrop-blur-sm">
                  <FlaskConical className="h-3 w-3" />
                  Lab Tested
                </Badge>
              </div>

              <Link href={`/product/${product.id}`} className="flex min-h-0 flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]/30 focus-visible:ring-offset-2">
                {/* Product Image */}
                <div className="relative flex h-[390px] items-center justify-center overflow-hidden bg-secondary/50 p-6 sm:h-48 sm:p-4 lg:h-56 lg:p-6 xl:h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={180}
                    className="h-full w-auto scale-[1.04] object-contain transition-transform group-hover:scale-[1.06] sm:scale-100 sm:group-hover:scale-105 lg:scale-100 lg:group-hover:scale-[1.04]"
                  />
                </div>

                {/* Product Info */}
                <div className="relative flex flex-1 flex-col p-5 sm:p-4 lg:p-5">
                  <h3 className="text-2xl font-semibold leading-tight text-foreground sm:text-lg lg:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xl leading-tight text-muted-foreground sm:text-sm lg:text-base">
                    {product.dosage}
                  </p>

                  {/* Phone / tablet: chips always visible (unchanged intent below lg) */}
                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-3 sm:gap-1.5 lg:hidden">
                    {product.benefits.map((benefit) => (
                      <span
                        key={`${product.id}-m-${benefit}`}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-sm leading-tight text-primary sm:px-2 sm:py-0.5 sm:text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Desktop (lg+): highlights fly out to the RIGHT so they never cover Add to Cart */}
              <div
                className="pointer-events-none invisible absolute left-full top-1/2 z-30 ml-2 w-[min(14rem,calc(100vw-2rem))] max-w-[220px] -translate-y-1/2 translate-x-2 opacity-0 shadow-none transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 max-lg:hidden 2xl:ml-3"
                aria-hidden
              >
                <div className="flex flex-col gap-2 rounded-xl border border-border/60 bg-background p-3 shadow-xl ring-1 ring-black/5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Highlights</p>
                  <div className="flex flex-col gap-1.5">
                    {product.benefits.map((benefit) => (
                      <span
                        key={`${product.id}-d-${benefit}`}
                        className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs leading-tight text-primary"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price + CTA outside link (valid HTML; desktop: full-width CTA; tablet: hover-reveal unchanged) */}
              <div className="border-t border-border/40 px-5 pb-5 pt-4 sm:px-4 lg:px-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-stretch lg:gap-3">
                  <Link
                    href={`/product/${product.id}`}
                    className="text-2xl font-bold tabular-nums leading-none text-foreground transition-colors hover:text-[#14B8A6] sm:text-xl lg:text-2xl"
                  >
                    {formatAzn(product.price)}
                  </Link>
                  <Button
                    asChild
                    size="sm"
                    className="h-12 w-full px-6 text-base opacity-100 transition-opacity sm:h-9 sm:w-auto sm:px-3 sm:text-sm sm:opacity-0 sm:group-hover:opacity-100 lg:h-11 lg:w-full lg:px-4 lg:text-sm lg:opacity-100 lg:shadow-sm"
                  >
                    <Link href={`/product/${product.id}`}>{readMoreLabel}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
