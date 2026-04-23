"use client"

import { AccountPromoSection } from "@/components/account/account-promo-section"
import { BrandLogo } from "@/components/brand-logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const footerLinks = {
  shop: [
    { key: "allPeptides", href: "/products" },
    { key: "fatLoss", href: "/products?category=fat-loss" },
    { key: "recovery", href: "/products?category=recovery" },
    { key: "longevity", href: "/products?category=longevity" },
    { key: "bundles", href: "/bundles" },
  ],
  support: [
    { key: "contactUs", href: "/contact" },
    { key: "shippingInfo", href: "/shipping" },
    { key: "refundPolicy", href: "/refunds" },
    { key: "faq", href: "/faq" },
  ],
  resources: [{ key: "labReports", href: "/lab-reports" }],
}

export function Footer() {
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        description: "Пептиды исследовательского класса с чистотой 99%+. Независимая лабораторная проверка и контроль каждой партии.",
        stayUpdated: "Будьте в курсе",
        notify: "Получайте уведомления о новых продуктах и протоколах.",
        emailPlaceholder: "Введите ваш email",
        subscribe: "Подписаться",
        shop: "Магазин",
        support: "Поддержка",
        resources: "Ресурсы",
        allPeptides: "Все пептиды",
        fatLoss: "Снижение жира",
        recovery: "Восстановление",
        longevity: "Долголетие",
        bundles: "Наборы",
        contactUs: "Связаться с нами",
        shippingInfo: "Доставка",
        refundPolicy: "Политика возврата",
        faq: "FAQ",
        labReports: "Лаб-отчеты",
        rights: "Все права защищены.",
        researchOnly: "Только для исследований в контролируемых условиях.",
      }
    : {
        description: "Clinical-grade peptides with 99%+ purity. Third-party tested and batch verified for research applications.",
        stayUpdated: "Stay updated",
        notify: "Get notified about new products and protocols.",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        shop: "Shop",
        support: "Support",
        resources: "Resources",
        allPeptides: "All Peptides",
        fatLoss: "Fat Loss",
        recovery: "Recovery",
        longevity: "Longevity",
        bundles: "Bundles",
        contactUs: "Contact Us",
        shippingInfo: "Shipping Info",
        refundPolicy: "Refund Policy",
        faq: "FAQ",
        labReports: "Lab Reports",
        rights: "All rights reserved.",
        researchOnly: "For research use in controlled settings.",
      }

  return (
    <footer className="border-t border-border bg-secondary">
      <AccountPromoSection />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t.description}
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">{t.stayUpdated}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.notify}
              </p>
              <form className="mt-3 flex gap-2">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="max-w-[240px] bg-background"
                />
                <Button type="submit" className="shrink-0">
                  {t.subscribe}
                </Button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.shop}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.assign(link.href)
                    }}
                    className="block w-full cursor-pointer text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t[link.key as keyof typeof t]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.support}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.assign(link.href)
                    }}
                    className="block w-full cursor-pointer text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t[link.key as keyof typeof t]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t.resources}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.assign(link.href)
                    }}
                    className="block w-full cursor-pointer text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t[link.key as keyof typeof t]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Pure Amino Peptides. {t.rights}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.researchOnly}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
