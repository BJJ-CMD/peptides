import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  dosage: string
  price: string
  description: string
}

export default function ProductCard({ id, name, dosage, price, description }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block h-full">
      <Card className="h-full overflow-hidden">
        <CardHeader className="gap-3">
          <div className="h-36 w-full rounded-lg border border-border bg-muted/30" aria-hidden="true" />
          <div>
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{dosage}</p>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="line-clamp-1 text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="mt-auto justify-between">
          <p className="text-base font-semibold text-foreground">{price}</p>
          <Button size="sm">Buy Now</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
