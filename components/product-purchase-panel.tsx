"use client"

import { useMemo, useState } from "react"
import { Minus, Plus } from "lucide-react"
import { AddToCartRequestButton } from "@/components/add-to-cart-request-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { formatAzn } from "@/lib/currency"

interface ProductPurchasePanelProps {
  product: Product
}

const retatrutideOptions = [
  { dosage: "10 mg", price: 240 },
  { dosage: "20 mg", price: 400 },
  { dosage: "30 mg", price: 550 },
]

const bacteriostaticWaterOptions = [
  { dosage: "3 ml", price: 10 },
  { dosage: "10 ml", price: 25 },
]

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const isRetatrutide = product.id === "retatrutide-20mg"
  const isBacteriostaticWater = product.id === "bacteriostatic-water"
  const [selectedDosage, setSelectedDosage] = useState("20 mg")
  const [selectedVolume, setSelectedVolume] = useState("3 ml")
  const [quantity, setQuantity] = useState(1)

  const selectedDosageOption = useMemo(() => {
    if (!isRetatrutide) return null
    return retatrutideOptions.find((option) => option.dosage === selectedDosage) ?? retatrutideOptions[1]
  }, [isRetatrutide, selectedDosage])

  const selectedVolumeOption = useMemo(() => {
    if (!isBacteriostaticWater) return null
    return bacteriostaticWaterOptions.find((option) => option.dosage === selectedVolume) ?? bacteriostaticWaterOptions[0]
  }, [isBacteriostaticWater, selectedVolume])

  const displayDosage = selectedDosageOption?.dosage ?? selectedVolumeOption?.dosage ?? product.dosage
  const displayPrice = selectedDosageOption?.price ?? selectedVolumeOption?.price ?? product.price
  const description = product.shortDescription

  return (
    <div className="flex flex-col">
      <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{product.name}</h1>
      <p className="mt-1 text-lg text-muted-foreground">{displayDosage}</p>
      <p className="mt-4 text-foreground">{description}</p>

      {isRetatrutide && (
        <div className="mt-5">
          <p className="text-sm font-medium text-foreground">Select dosage</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {retatrutideOptions.map((option) => {
              const isSelected = option.dosage === selectedDosage
              return (
                <button
                  key={option.dosage}
                  type="button"
                  onClick={() => setSelectedDosage(option.dosage)}
                  className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  {option.dosage} - {formatAzn(option.price)}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {isBacteriostaticWater && (
        <div className="mt-5">
          <p className="text-sm font-medium text-foreground">Select volume</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {bacteriostaticWaterOptions.map((option) => {
              const isSelected = option.dosage === selectedVolume
              return (
                <button
                  key={option.dosage}
                  type="button"
                  onClick={() => setSelectedVolume(option.dosage)}
                  className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  {option.dosage} - {formatAzn(option.price)}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {product.benefits.map((benefit) => (
          <Badge key={benefit} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">
            {benefit}
          </Badge>
        ))}
      </div>

      <div className="mt-6 text-3xl font-bold text-foreground">{formatAzn(displayPrice)}</div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center rounded-lg border border-border">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-40"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="flex h-10 w-12 items-center justify-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground"
            onClick={() => setQuantity((q) => Math.min(99, q + 1))}
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <AddToCartRequestButton
          productLabel={`${product.name} (${displayDosage}) x${quantity}`}
          size="lg"
          className="flex-1 sm:flex-none sm:px-12"
        >
          Send Request
        </AddToCartRequestButton>
      </div>
    </div>
  )
}
