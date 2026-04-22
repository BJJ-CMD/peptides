import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Product not found</h1>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{product.name}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{product.dosage}</p>
      <p className="mt-4 text-muted-foreground">{product.description}</p>
      <p className="mt-6 text-2xl font-semibold text-foreground">{product.price}</p>
      <Button className="mt-6">Buy Now</Button>
    </main>
  )
}
