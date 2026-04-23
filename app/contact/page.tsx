import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/locale"
import { Instagram, Phone, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach Pure Amino Peptides via WhatsApp.",
}

export default async function ContactPage() {
  const locale = normalizeLocale((await cookies()).get(LOCALE_COOKIE_NAME)?.value)
  const isRu = locale === "ru"
  const channels = [
    {
      title: "WhatsApp",
      description: isRu ? "Пишите или звоните в любое время" : "Text or call us anytime",
      placeholder: "+7 777 324 4837",
      buttonLabel: isRu ? "Связаться в WhatsApp" : "Contact on WhatsApp",
      href: "https://wa.me/77773244837",
      icon: Phone,
      available: true,
    },
    {
      title: "Telegram",
      description: isRu ? "Скоро" : "Coming soon",
      placeholder: isRu ? "Скоро" : "Coming soon",
      buttonLabel: isRu ? "Скоро" : "Coming soon",
      icon: Send,
      available: false,
    },
    {
      title: "Instagram",
      description: isRu ? "Скоро" : "Coming soon",
      placeholder: isRu ? "Скоро" : "Coming soon",
      buttonLabel: isRu ? "Скоро" : "Coming soon",
      icon: Instagram,
      available: false,
    },
  ] as const

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-lg px-4 py-14 text-center sm:max-w-xl sm:px-6 sm:py-20 lg:max-w-2xl lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#14B8A6]">{isRu ? "Свяжитесь с нами" : "Get in touch"}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{isRu ? "Контакты" : "Contact Us"}</h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            {isRu ? "Напишите нам в любое время — мы всегда готовы помочь." : "Reach out to us anytime — we're here to assist you."}
          </p>

          <div className="mt-12 flex flex-col gap-6 sm:mt-14 sm:gap-7">
            {channels.map((channel) => {
              const Icon = channel.icon
              return (
                <article
                  key={channel.title}
                  className="rounded-2xl border border-gray-200/90 bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#14B8A6]/25 hover:shadow-[0_8px_28px_rgba(20,184,166,0.12)] sm:px-8 sm:py-9"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{channel.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">{channel.description}</p>
                  <p className="mt-4 font-mono text-sm font-medium tracking-tight text-slate-700 sm:text-base">
                    {channel.placeholder}
                  </p>
                  {channel.available ? (
                    <Button
                      asChild
                      type="button"
                      className="mt-6 h-12 w-full rounded-xl bg-[#14B8A6] text-base font-medium text-white shadow-sm transition-colors hover:bg-[#0f9f91] sm:h-11"
                    >
                      <Link href={channel.href} target="_blank" rel="noopener noreferrer">
                        {channel.buttonLabel}
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      disabled
                      className="mt-6 h-12 w-full rounded-xl bg-slate-200 text-base font-medium text-slate-500 shadow-none hover:bg-slate-200 sm:h-11"
                    >
                      {channel.buttonLabel}
                    </Button>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
