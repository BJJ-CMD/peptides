import { getProduct } from "@/lib/products"

export type ProductSeoProductSnapshot = {
  name: string
  image: string
  dosage: string
  price: number
}

export function getProductSeoSnapshot(productId: string): ProductSeoProductSnapshot | null {
  const product = getProduct(productId)
  if (!product) return null
  return {
    name: product.name,
    image: product.image,
    dosage: product.dosage,
    price: product.price,
  }
}
