"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
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
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        stayUpdated: "Будьте в курсе",
        notify: "Получайте уведомления о запуске наборов.",
        email: "Введите ваш email",
        submitLabel: submitLabel === "Notify me" ? "Уведомить меня" : submitLabel,
      }
    : {
        stayUpdated: "Stay updated",
        notify: "Get notified when bundles launch.",
        email: "Enter your email",
        submitLabel,
      }

  return (
    <div className={cn(centered && "text-center sm:mx-auto sm:max-w-md", className)}>
      <p className="text-sm font-medium text-foreground">{t.stayUpdated}</p>
      <p className="mt-1 text-sm text-muted-foreground">{t.notify}</p>
      <form
        className={cn(
          "mt-3 flex gap-2",
          centered ? "flex-col sm:flex-row sm:justify-center" : "flex-col sm:flex-row sm:flex-wrap",
        )}
      >
        <Input
          type="email"
          placeholder={t.email}
          className="w-full max-w-full bg-background sm:max-w-[240px]"
        />
        <Button type="submit" className="shrink-0">
          {t.submitLabel}
        </Button>
      </form>
    </div>
  )
}
