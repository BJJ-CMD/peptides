"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { CheckCircle2, MessageCircle, Phone, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

export type CartRequestHint = {
  /** e.g. product name for context in the note field */
  productLabel?: string
}

type CartRequestContextValue = {
  openCart: (hint?: CartRequestHint) => void
  closeCart: () => void
}

const CartRequestContext = createContext<CartRequestContextValue | null>(null)

export function useCartRequest() {
  const ctx = useContext(CartRequestContext)
  if (!ctx) {
    throw new Error("useCartRequest must be used within CartRequestProvider")
  }
  return ctx
}

export function CartRequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [hint, setHint] = useState<CartRequestHint>({})
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState("")
  const [note, setNote] = useState("")
  const phoneRef = useRef<HTMLInputElement>(null)

  const openCart = useCallback((h?: CartRequestHint) => {
    setHint(h ?? {})
    setSubmitted(false)
    setPhone("")
    setNote(
      h?.productLabel
        ? `I'm interested in ${h.productLabel}. Please contact me to discuss options.`
        : "",
    )
    setOpen(true)
  }, [])

  const closeCart = useCallback(() => setOpen(false), [])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setSubmitted(false)
      setHint({})
    }
  }

  useEffect(() => {
    if (open && !submitted) {
      const t = window.setTimeout(() => phoneRef.current?.focus(), 200)
      return () => window.clearTimeout(t)
    }
  }, [open, submitted])

  const value = useMemo(() => ({ openCart, closeCart }), [openCart, closeCart])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = phone.trim()
    if (trimmed.length < 6) return
    setSubmitted(true)
  }

  return (
    <CartRequestContext.Provider value={value}>
      {children}
      <Sheet open={open} onOpenChange={handleOpenChange}>
        <SheetContent
          side="right"
          className="flex w-[min(100vw-3.5rem,24rem)] max-w-none flex-col gap-0 border-l border-gray-200/90 bg-[#FAFAFA] p-0 shadow-2xl sm:w-full sm:max-w-md"
        >
          <div className="relative overflow-hidden border-b border-[#14B8A6]/15 bg-gradient-to-br from-[#14B8A6] via-[#12a89a] to-[#0d9488] px-6 pb-8 pt-10 text-white">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                <ShoppingBag className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <SheetTitle className="text-left text-xl font-semibold tracking-tight text-white">
                  Request a callback
                </SheetTitle>
                <SheetDescription className="mt-1.5 text-left text-sm leading-relaxed text-white/85">
                  Leave your number and we&apos;ll reach out to help with your order—no checkout on the site.
                </SheetDescription>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col px-5 pb-8 pt-6 sm:px-6">
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#14B8A6]/10 ring-1 ring-[#14B8A6]/20">
                  <CheckCircle2 className="h-9 w-9 text-[#14B8A6]" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-6 text-lg font-semibold tracking-tight text-slate-900">Thank you</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                  We&apos;ll contact you shortly at the number you provided.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-10 h-11 rounded-xl border-gray-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
                  onClick={() => handleOpenChange(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-1 flex-col gap-5">
                {hint.productLabel ? (
                  <div className="rounded-xl border border-[#14B8A6]/20 bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#14B8A6]">Focus</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">{hint.productLabel}</p>
                  </div>
                ) : null}

                <div className="space-y-2">
                  <Label htmlFor="cart-phone" className="text-sm font-medium text-slate-800">
                    Phone number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Phone
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <Input
                      ref={phoneRef}
                      id="cart-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+994 XX XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      minLength={6}
                      className="h-12 rounded-xl border-gray-200 bg-white pl-10 text-base shadow-sm focus-visible:border-[#14B8A6]/50 focus-visible:ring-[#14B8A6]/20"
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">We&apos;ll only use this to contact you about your request.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cart-note" className="text-sm font-medium text-slate-800">
                    Message <span className="font-normal text-slate-400">(optional)</span>
                  </Label>
                  <div className="relative">
                    <MessageCircle
                      className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400"
                      aria-hidden
                    />
                    <Textarea
                      id="cart-note"
                      rows={4}
                      placeholder="Products, quantities, or questions…"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="resize-none rounded-xl border-gray-200 bg-white pl-10 pt-2.5 text-sm shadow-sm focus-visible:border-[#14B8A6]/50 focus-visible:ring-[#14B8A6]/20"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-auto h-12 w-full rounded-xl bg-[#14B8A6] text-base font-semibold text-white shadow-md transition-colors hover:bg-[#0f9f91]"
                >
                  Send request
                </Button>
              </form>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </CartRequestContext.Provider>
  )
}
