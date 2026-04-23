"use client"

import { FileText, FlaskConical, Shield, UserCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const trustItems = {
  en: [
  {
    icon: Shield,
    title: "99%+ Purity",
    description: "HPLC verified for maximum efficacy",
  },
  {
    icon: FlaskConical,
    title: "Third-Party Lab Tested",
    description: "Independent verification on every batch",
  },
  {
    icon: FileText,
    title: "COA Available",
    description: "Certificate of Analysis for every product",
  },
  {
    icon: UserCheck,
    title: "Controlled Storage",
    description: "Temperature-controlled processing and storage conditions",
  },
  ],
  ru: [
    { icon: Shield, title: "Чистота 99%+", description: "Подтверждено HPLC-анализом" },
    { icon: FlaskConical, title: "Независимые лабораторные тесты", description: "Проверка каждой партии сторонней лабораторией" },
    { icon: FileText, title: "Доступны COA", description: "Сертификат анализа для каждого продукта" },
    { icon: UserCheck, title: "Контролируемое хранение", description: "Температурный контроль на этапах обработки и хранения" },
  ],
}

export function TrustSection() {
  const { locale } = useLanguage()
  const items = locale === "ru" ? trustItems.ru : trustItems.en

  return (
    <section className="border-y border-border/50 bg-[#F8FAFA] py-5 sm:py-8">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-lg border border-border/50 bg-background/70 p-3 sm:rounded-xl sm:p-4"
            >
              <div className="flex items-start gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-10 sm:w-10">
                  <item.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
