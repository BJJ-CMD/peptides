"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { LOCALE_COOKIE_NAME, type Locale } from "@/lib/locale"

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { locale, setLocale } = useLanguage()

  const setAndRefresh = (next: Locale) => {
    if (next === locale) return

    const currentScrollY = window.scrollY
    // Hard-set persistence first so the next page render always picks correct locale.
    window.localStorage.setItem(LOCALE_COOKIE_NAME, next)
    document.cookie = `${LOCALE_COOKIE_NAME}=${next}; path=/; max-age=31536000; samesite=lax`
    setLocale(next)
    document.documentElement.lang = next

    const query = searchParams.toString()
    const currentUrl = query ? `${pathname}?${query}` : pathname
    router.replace(currentUrl, { scroll: false })
    router.refresh()

    // Keep viewport stable after refresh for seamless switching.
    window.setTimeout(() => {
      window.scrollTo({ top: currentScrollY, behavior: "auto" })
    }, 0)
  }

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white p-0.5">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setAndRefresh("en")}
        className={`h-7 rounded-md px-2 text-xs font-semibold ${locale === "en" ? "bg-[#14B8A6] text-white hover:bg-[#0f9f91]" : "text-slate-600 hover:text-slate-900"}`}
      >
        EN
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setAndRefresh("ru")}
        className={`h-7 rounded-md px-2 text-xs font-semibold ${locale === "ru" ? "bg-[#14B8A6] text-white hover:bg-[#0f9f91]" : "text-slate-600 hover:text-slate-900"}`}
      >
        RU
      </Button>
    </div>
  )
}
