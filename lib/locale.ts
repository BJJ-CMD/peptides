export type Locale = "en" | "ru"

export const DEFAULT_LOCALE: Locale = "en"
export const LOCALE_COOKIE_NAME = "site_locale"

export function normalizeLocale(value: string | null | undefined): Locale {
  if (!value) return DEFAULT_LOCALE
  return value.toLowerCase() === "ru" ? "ru" : "en"
}
