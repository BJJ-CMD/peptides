"use client"

import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = Omit<ComponentProps<typeof Button>, "onClick" | "type"> & {
  productLabel: string
}

const WHATSAPP_NUMBER = "77773244837"

function buildWhatsappUrl(productLabel: string): string {
  const text = `Hello, I’m interested in this peptide:\n\n${productLabel}\n\nCan you share availability and details?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function AddToCartRequestButton({ productLabel, className, children = "Send Request", ...rest }: Props) {
  const href = buildWhatsappUrl(productLabel)

  return (
    <div className="flex flex-col gap-1.5">
      <Button
        type="button"
        className={cn("h-14 rounded-xl bg-[#14B8A6] text-lg font-semibold text-white shadow-md hover:bg-[#0f9f91]", className)}
        {...rest}
        onClick={() => {
          window.open(href, "_blank", "noopener,noreferrer")
        }}
      >
        {children}
      </Button>
      <p className="text-center text-xs leading-snug text-slate-500">
        You&apos;ll be redirected to WhatsApp to complete your request
      </p>
    </div>
  )
}
