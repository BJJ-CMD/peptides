import { redirect } from "next/navigation"

type ShopSearchParams = { category?: string | string[] }

/** Legacy `/shop` URLs → main catalog, preserving `?category=` when present */
export default async function ShopRedirectPage({
  searchParams,
}: {
  searchParams: Promise<ShopSearchParams>
}) {
  const q = await searchParams
  const cat = q.category
  if (cat != null && String(cat).length > 0) {
    const value = Array.isArray(cat) ? cat[0] : cat
    redirect(`/products?category=${encodeURIComponent(value)}`)
  }
  redirect("/products")
}
