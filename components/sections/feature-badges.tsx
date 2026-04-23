"use client"

import { BadgeCheck, FlaskConical, Shield } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const badges = {
  en: [
  {
    title: "99%+ Purity",
    subtitle: "Lab Tested",
    icon: FlaskConical,
  },
  {
    title: "COA Verified",
    subtitle: "Third-Party Tested",
    icon: BadgeCheck,
  },
  {
    title: "Research Grade",
    subtitle: "Quality Verified",
    icon: Shield,
  },
  ],
  ru: [
    { title: "Чистота 99%+", subtitle: "Лабораторно проверено", icon: FlaskConical },
    { title: "COA подтвержден", subtitle: "Независимое тестирование", icon: BadgeCheck },
    { title: "Исследовательский класс", subtitle: "Качество подтверждено", icon: Shield },
  ],
}

type FeatureBadgesProps = {
  /** Use on dark (e.g. black) hero backgrounds */
  variant?: "default" | "dark"
}

export function FeatureBadges({ variant = "default" }: FeatureBadgesProps) {
  const dark = variant === "dark"
  const { locale } = useLanguage()
  const items = locale === "ru" ? badges.ru : badges.en

  return (
    <div className="mt-8 grid w-full grid-cols-3 gap-2 sm:mt-10 sm:gap-5">
      {items.map((badge) => {
        const Icon = badge.icon
        return (
          <div
            key={badge.title}
            className={cn(
              "flex flex-col items-center gap-2 rounded-xl p-1 text-center sm:flex-row sm:items-center sm:gap-4 sm:p-3 sm:text-left",
              dark ? "bg-white/5 sm:border sm:border-white/10 sm:bg-white/10" : "bg-transparent sm:bg-white/80",
            )}
          >
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl",
                dark ? "bg-[#14B8A6]/20" : "bg-[#14B8A6]/10",
              )}
            >
              <Icon className="h-5 w-5 text-[#14B8A6] sm:h-7 sm:w-7" strokeWidth={1.8} />
            </div>
            <div>
              <p
                className={cn(
                  "text-base font-semibold leading-tight sm:text-base lg:text-lg",
                  dark ? "text-white" : "text-foreground",
                )}
              >
                {badge.title}
              </p>
              <p
                className={cn(
                  "text-sm leading-tight sm:text-sm lg:text-base",
                  dark ? "text-slate-400" : "text-muted-foreground",
                )}
              >
                {badge.subtitle}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
