import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** Match footer default, or use "Notify me" on bundles-focused surfaces */
  submitLabel?: string
  /** Align like footer row, or centered stack for homepage teaser */
  variant?: "footer" | "centered"
}

/**
 * Same structure as the footer newsletter: title, one-line hint, email + button.
 * Form is static (wire to your backend or ESP when ready).
 */
export function BundlesNotifyBlock({ className, submitLabel = "Notify me", variant = "footer" }: Props) {
  const centered = variant === "centered"
  return (
    <div className={cn(centered && "text-center sm:mx-auto sm:max-w-md", className)}>
      <p className="text-sm font-medium text-foreground">Stay updated</p>
      <p className="mt-1 text-sm text-muted-foreground">Get notified when bundles launch.</p>
      <form
        className={cn(
          "mt-3 flex gap-2",
          centered ? "flex-col sm:flex-row sm:justify-center" : "flex-col sm:flex-row sm:flex-wrap",
        )}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full max-w-full bg-background sm:max-w-[240px]"
        />
        <Button type="submit" className="shrink-0">
          {submitLabel}
        </Button>
      </form>
    </div>
  )
}
