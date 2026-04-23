"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, type Locale, normalizeLocale } from "@/lib/locale"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
})

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = useState<Locale>(normalizeLocale(initialLocale))
  const normalizedInitialLocale = normalizeLocale(initialLocale)

  useEffect(() => {
    // Keep client state aligned with server-resolved locale after navigation.
    setLocaleState(normalizedInitialLocale)
  }, [normalizedInitialLocale])

  useEffect(() => {
    const saved = normalizeLocale(window.localStorage.getItem(LOCALE_COOKIE_NAME))
    if (saved !== normalizedInitialLocale) setLocaleState(saved)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedInitialLocale])

  const setLocale = (next: Locale) => {
    const normalized = normalizeLocale(next)
    setLocaleState(normalized)
    window.localStorage.setItem(LOCALE_COOKIE_NAME, normalized)
    document.cookie = `${LOCALE_COOKIE_NAME}=${normalized}; path=/; max-age=31536000; samesite=lax`
  }

  const value = useMemo(() => ({ locale, setLocale }), [locale])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
