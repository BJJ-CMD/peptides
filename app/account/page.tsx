import Link from "next/link"
import {
  Bell,
  Package,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const benefits: { icon: typeof Package; title: string }[] = [
  { icon: Package, title: "Follow every order live, from request to delivery" },
  { icon: RefreshCw, title: "Reorder your go-to peptides in seconds" },
  { icon: Bell, title: "Get early access to new drops and restocks" },
]

export default function AccountBenefitsPage() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:max-w-xl">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Create Your Account
          </h1>
          <p className="mx-auto mt-3 max-w-md text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Get more control, faster checkout, and exclusive access.
          </p>
        </div>

        <ul className="mt-10 space-y-3 sm:mt-12">
          {benefits.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className={cn(
                "flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-[0_2px_20px_-4px_rgba(15,23,42,0.08)]",
                "transition-shadow hover:shadow-[0_8px_28px_-6px_rgba(20,184,166,0.12)]",
              )}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14B8A6]/[0.08] text-[#14B8A6]">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="text-left text-[15px] font-medium leading-snug text-slate-800 sm:text-base">{title}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12">
          <Button
            asChild
            size="lg"
            className="h-14 w-full rounded-xl bg-[#14B8A6] text-base font-semibold text-white shadow-[0_4px_20px_-4px_rgba(20,184,166,0.45)] transition-colors hover:bg-[#0f9f91]"
          >
            <Link href="/account/create">Create Account</Link>
          </Button>
          <Button variant="ghost" asChild className="h-11 text-sm font-medium text-slate-500 hover:bg-transparent hover:text-[#14B8A6]">
            <Link href="/products">Continue as guest</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
