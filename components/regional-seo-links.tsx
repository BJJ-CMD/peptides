import Link from "next/link"
import { Instagram } from "lucide-react"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, REGIONAL_SEO_LINKS } from "@/lib/social-links"

type Props = {
  locale: "en" | "ru"
  variant?: "card" | "inline"
}

export function RegionalSeoLinksSection({ locale, variant = "card" }: Props) {
  const isRu = locale === "ru"
  const t = isRu
    ? {
        regionalTitle: "Региональные страницы",
        instagramTitle: "Instagram",
        instagramLabel: "Подписаться в Instagram",
        instagramNote: "Обновления каталога, документация и контактная информация для исследовательских запросов.",
      }
    : {
        regionalTitle: "Regional research pages",
        instagramTitle: "Instagram",
        instagramLabel: "Follow us on Instagram",
        instagramNote: "Catalog updates, documentation pointers, and contact information for research inquiries.",
      }

  const content = (
    <>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{t.regionalTitle}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {REGIONAL_SEO_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-[#14B8A6] underline-offset-4 hover:underline"
              >
                {isRu ? link.labelRu : link.labelEn}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={variant === "card" ? "mt-8 border-t border-gray-100 pt-8" : "mt-6"}>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{t.instagramTitle}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">{t.instagramNote}</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-[#14B8A6] underline-offset-4 hover:underline"
        >
          <Instagram className="h-4 w-4" aria-hidden />
          <span>
            {t.instagramLabel} ({INSTAGRAM_HANDLE})
          </span>
        </a>
      </div>
    </>
  )

  if (variant === "inline") {
    return <div className="space-y-6">{content}</div>
  }

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
      {content}
    </div>
  )
}
