"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { FeatureBadges } from "@/components/sections/feature-badges"

export function HeroSection() {
  const { locale } = useLanguage()
  const t = locale === "ru"
    ? {
        line1: "Чистые пептиды.",
        line2: "Проверенное качество.",
        text: "Пептиды исследовательского класса с чистотой 99%+, подтвержденной независимым тестированием и надежными протоколами. Лабораторные отчеты доступны.",
        cta: "Каталог пептидов",
      }
    : {
        line1: "Pure Peptides.",
        line2: "Proven Quality.",
        text: "Research-grade peptides with 99%+ purity, backed by independent testing and protocols you can trust. Lab reports available.",
        cta: "Shop Peptides",
      }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-balance text-[50px] font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              {t.line1}
              <br />
              {t.line2}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl lg:text-[2rem]">
              {t.text}
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-xl bg-[#14B8A6] px-6 text-base text-white transition-colors hover:bg-[#0f9f91] sm:h-16 sm:w-auto sm:px-9 sm:text-xl"
              >
                <Link href="/products" className="flex items-center gap-2">
                  {t.cta}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <FeatureBadges />
          </div>

          {/* Right Content — hero artwork */}
          <div className="relative flex w-full items-center justify-center lg:justify-end">
            <div className="relative -mx-5 w-[calc(100%+2.5rem)] sm:-mx-8 sm:w-[calc(100%+4rem)] lg:mx-0 lg:w-[112%] lg:flex-1">
              <div className="relative mx-auto aspect-[16/9] w-full max-h-[min(64vw,560px)] sm:max-h-[min(58vw,640px)] lg:mx-0 lg:max-h-[min(74vh,860px)] lg:min-h-[420px]">
                <Image
                  src="/hero-pure-amino.png"
                  alt="Pure Amino Peptides — premium research peptides"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
