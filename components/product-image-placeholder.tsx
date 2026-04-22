import { FlaskConical } from "lucide-react"
import { cn } from "@/lib/utils"

type Variant = "card" | "hero" | "thumb"

const variantClass: Record<Variant, string> = {
  card: "gap-2 px-3 py-6 sm:gap-3 sm:py-8",
  hero: "gap-4 px-6 py-16 sm:py-20",
  thumb: "gap-1 p-2",
}

const iconWrap: Record<Variant, string> = {
  card: "h-12 w-12 rounded-xl sm:h-14 sm:w-14",
  hero: "h-16 w-16 rounded-2xl sm:h-20 sm:w-20",
  thumb: "h-9 w-9 rounded-lg",
}

const iconSize: Record<Variant, string> = {
  card: "h-6 w-6 sm:h-7 sm:w-7",
  hero: "h-8 w-8 sm:h-10 sm:w-10",
  thumb: "h-4 w-4",
}

export function ProductImagePlaceholder({
  variant = "card",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#14B8A6]/[0.08] via-slate-50/95 to-slate-100 text-[#14B8A6]",
        variantClass[variant],
        className,
      )}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center bg-white/95 shadow-sm ring-1 ring-[#14B8A6]/12",
          iconWrap[variant],
        )}
      >
        <FlaskConical className={cn(iconSize[variant])} strokeWidth={1.5} aria-hidden />
      </span>
      {variant !== "thumb" ? (
        <p
          className={cn(
            "max-w-[11rem] text-center font-medium uppercase tracking-[0.12em] text-slate-500",
            variant === "hero" ? "text-[11px] sm:text-xs" : "text-[9px] sm:text-[10px]",
          )}
        >
          Preview unavailable
        </p>
      ) : null}
    </div>
  )
}

export function productHasCatalogImage(image: string | undefined | null): boolean {
  return Boolean(image && image.trim().length > 0)
}
