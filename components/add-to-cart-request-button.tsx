"use client"

import type { ComponentProps } from "react"
import { useCartRequest } from "@/components/cart-request-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = Omit<ComponentProps<typeof Button>, "onClick" | "type"> & {
  productLabel: string
}

export function AddToCartRequestButton({ productLabel, className, children = "Add to Cart", ...rest }: Props) {
  const { openCart } = useCartRequest()
  return (
    <Button
      type="button"
      className={cn(className)}
      {...rest}
      onClick={() => openCart({ productLabel })}
    >
      {children}
    </Button>
  )
}
