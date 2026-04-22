import Link from "next/link"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  /** Footer uses a slightly larger wordmark */
  variant?: "header" | "footer"
}

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.05]",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[22px]" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v7M12 15v7M4 6l5 3M15 15l5 3M4 18l5-3M15 9l5-3" />
      </svg>
    </span>
  )
}

export function BrandLogo({ className, variant = "header" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 rounded-md py-0.5 outline-offset-4 transition-opacity hover:opacity-[0.92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40",
        className
      )}
    >
      <LogoMark />
      <span
        className={cn(
          "min-w-0 truncate font-semibold uppercase tracking-[0.05em] text-slate-900 leading-snug",
          variant === "header" && "text-xs sm:text-sm md:text-base lg:text-lg lg:tracking-[0.04em]",
          variant === "footer" && "text-base sm:text-lg sm:tracking-[0.04em]"
        )}
      >
        Pure Amino Peptides
      </span>
    </Link>
  )
}
