import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

/**
 * Subtle pre-footer prompt encouraging account creation — used site-wide above main footer content.
 */
export function AccountPromoSection() {
  return (
    <section
      aria-labelledby="account-promo-heading"
      className="border-b border-[#14B8A6]/10 bg-gradient-to-br from-[#F0FDFA]/90 via-white to-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-[#14B8A6]/10 bg-white/80 px-5 py-8 text-center shadow-[0_8px_40px_-12px_rgba(20,184,166,0.15)] backdrop-blur-sm sm:px-10 sm:py-10">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <Sparkles className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="space-y-2">
            <h2 id="account-promo-heading" className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Get exclusive access to new peptides
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
              Create an account to track orders, save favorites, and stay updated.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 min-w-[200px] rounded-xl bg-[#14B8A6] px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#0f9f91]"
          >
            <Link href="/account">Create Account</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
