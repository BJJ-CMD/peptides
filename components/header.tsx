"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  FileText,
  Home,
  Info,
  Mail,
  Menu,
  Package,
  Search,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"
import { BrandLogo } from "@/components/brand-logo"
import { HeaderSearchSheet } from "@/components/header-search-sheet"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet"

const navigation: { key: string; href: string; icon: LucideIcon }[] = [
  { key: "home", href: "/", icon: Home },
  { key: "products", href: "/products", icon: Package },
  { key: "labReports", href: "/lab-reports", icon: FileText },
  { key: "aboutUs", href: "/about", icon: Info },
  { key: "contact", href: "/contact", icon: Mail },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const navDebug = process.env.NODE_ENV !== "production"
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        home: "Главная",
        products: "Продукты",
        labReports: "Лаб-отчеты",
        aboutUs: "О нас",
        contact: "Контакты",
        searchCatalog: "Поиск по каталогу",
        openMenu: "Открыть меню",
        menu: "Меню",
        navMenuTitle: "Навигация",
        navMenuDesc: "Основные разделы Pure Amino Peptides.",
        tagline: "Каталог пептидов исследовательского класса",
        researchOnly: "Только для исследований в контролируемых условиях.",
      }
    : {
        home: "Home",
        products: "Products",
        labReports: "Lab Reports",
        aboutUs: "About Us",
        contact: "Contact",
        searchCatalog: "Search catalog",
        openMenu: "Open menu",
        menu: "Menu",
        navMenuTitle: "Navigation menu",
        navMenuDesc: "Main site links for Pure Amino Peptides.",
        tagline: "Research-grade catalog and resources",
        researchOnly: "For research use in controlled settings.",
      }

  const openSearchSheet = () => {
    // Open after current tap cycle to avoid mobile pointer-down outside race.
    requestAnimationFrame(() => setSearchOpen(true))
    if (navDebug) console.info("[mobile-nav] search tap")
  }

  const openMenuSheet = () => {
    // Same race guard for side sheet on real mobile Safari.
    requestAnimationFrame(() => setIsOpen(true))
    if (navDebug) console.info("[mobile-nav] menu tap")
  }

  return (
    <header className="sticky top-0 z-[80] isolate w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <BrandLogo className="min-w-0 flex-1 md:flex-none" />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-[#14B8A6]"
                  : "text-muted-foreground hover:text-[#14B8A6]"
              }`}
            >
              {t[item.key as keyof typeof t]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-[#14B8A6]"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">{t.searchCatalog}</span>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="relative z-[90] flex shrink-0 items-center gap-0.5 md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-lg text-muted-foreground hover:text-[#14B8A6]"
            onClick={openSearchSheet}
          >
            <span>
              <Search className="h-4 w-4" />
              <span className="sr-only">{t.searchCatalog}</span>
            </span>
          </Button>
          <LanguageSwitcher />
          <Sheet
            open={isOpen}
            onOpenChange={(next) => {
              if (navDebug) console.info("[mobile-nav] menu open state:", next)
              setIsOpen(next)
            }}
          >
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-lg text-muted-foreground"
              onClick={openMenuSheet}
            >
              <span>
                <Menu className="h-4 w-4" />
                <span className="sr-only">{t.openMenu}</span>
              </span>
            </Button>
            <SheetContent
              side="right"
              className="flex h-full w-[min(100vw-1.5rem,20rem)] flex-col gap-0 border-l border-gray-200/90 bg-white p-0 shadow-2xl sm:max-w-none [&>button]:right-5 [&>button]:top-5 [&>button]:flex [&>button]:h-10 [&>button]:w-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-xl [&>button]:border [&>button]:border-[#14B8A6]/25 [&>button]:bg-white [&>button]:text-[#14B8A6] [&>button]:opacity-100 [&>button]:shadow-sm [&>button]:transition-colors [&>button]:hover:bg-[#14B8A6]/10 [&>button]:hover:opacity-100"
            >
              <SheetTitle className="sr-only">{t.navMenuTitle}</SheetTitle>
              <SheetDescription className="sr-only">
                {t.navMenuDesc}
              </SheetDescription>

              <div className="border-b border-gray-100 bg-gradient-to-b from-[#F8FAFA] to-white px-5 pb-5 pt-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#14B8A6]">{t.menu}</p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Pure Amino Peptides</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{t.tagline}</p>
              </div>

              <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Mobile">
                {navigation.map((item) => {
                  const active = pathname === item.href
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium transition-colors ${
                        active
                          ? "bg-[#14B8A6]/10 text-[#0d9488] shadow-[inset_3px_0_0_0_#14B8A6]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#14B8A6]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          active
                            ? "border-[#14B8A6]/30 bg-white text-[#14B8A6]"
                            : "border-gray-200/80 bg-[#FAFAFA] text-slate-500 group-hover:border-[#14B8A6]/25 group-hover:text-[#14B8A6]"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span>{t[item.key as keyof typeof t]}</span>
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-auto border-t border-gray-100 px-5 py-4">
                <p className="text-center text-[11px] leading-relaxed text-slate-400">{t.researchOnly}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <HeaderSearchSheet
        open={searchOpen}
        onOpenChange={(next) => {
          if (navDebug) console.info("[mobile-nav] search open state:", next)
          setSearchOpen(next)
        }}
      />
    </header>
  )
}
