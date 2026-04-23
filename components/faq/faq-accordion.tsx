"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Ban,
  BookOpen,
  CalendarClock,
  Compass,
  FlaskConical,
  HelpCircle,
  MessageCircle,
  RefreshCw,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

type FaqEntry = {
  id: string
  question: string
  icon: LucideIcon
  answer: ReactNode
}

const faqs: Record<"en" | "ru", FaqEntry[]> = {
  en: [
  {
    id: "quality",
    question: "What makes your products high quality?",
    icon: Sparkles,
    answer:
      "Our products are selected with a strong focus on purity, consistency, and reliable sourcing. We prioritize clean standards and careful selection across our catalog.",
  },
  {
    id: "shipping-time",
    question: "How long does shipping take?",
    icon: Truck,
    answer:
      "Most orders are delivered within 48 hours. Timing may vary slightly depending on location or specific requests.",
  },
  {
    id: "delivery-adjust",
    question: "Can delivery be adjusted?",
    icon: CalendarClock,
    answer:
      "Yes. If you need specific timing or arrangements, feel free to contact us and we will do our best to accommodate.",
  },
  {
    id: "refunds",
    question: "Do you offer refunds or returns?",
    icon: Ban,
    answer:
      "All sales are final. We do not offer refunds, returns, or exchanges once an order has been placed.",
  },
  {
    id: "contact",
    question: "How can I contact you?",
    icon: MessageCircle,
    answer: (
      <span>
        You can reach us through Telegram, WhatsApp, or Instagram. Visit our{" "}
        <Link href="/contact" className="font-medium text-[#14B8A6] underline-offset-2 hover:underline">
          Contact
        </Link>{" "}
        page for details.
      </span>
    ),
  },
  {
    id: "choose-product",
    question: "How do I choose the right product?",
    icon: Target,
    answer:
      "We recommend reviewing product information carefully and selecting based on your own goals and preferences.",
  },
  {
    id: "guidance",
    question: "Do you provide guidance or recommendations?",
    icon: Compass,
    answer:
      "We provide general information to help you understand our products. For deeper understanding, we always recommend doing your own research and reviewing multiple sources.",
  },
  {
    id: "learn-more",
    question: "Where can I learn more before buying?",
    icon: BookOpen,
    answer:
      "We encourage you to read independent information, explore different perspectives, and review feedback from other users before making a decision.",
  },
  {
    id: "batches",
    question: "Are your products consistent between batches?",
    icon: FlaskConical,
    answer:
      "We aim to maintain a consistent standard across all products through careful sourcing and selection.",
  },
  {
    id: "ordering-simple",
    question: "Is ordering simple?",
    icon: ShoppingCart,
    answer: "Yes. The process is designed to be fast, clean, and straightforward from browsing to checkout.",
  },
  {
    id: "before-order",
    question: "What if I have questions before ordering?",
    icon: HelpCircle,
    answer: "You can contact us anytime — we're here to help clarify anything before you place an order.",
  },
  {
    id: "catalog",
    question: "Do you update your catalog?",
    icon: RefreshCw,
    answer: "Yes. We continuously refine and expand our selection to maintain a high standard.",
  },
  ],
  ru: [
    { id: "quality", question: "Почему ваши продукты считаются качественными?", icon: Sparkles, answer: "Мы отбираем продукты с акцентом на чистоту, стабильность и надежные источники поставки. В каталоге соблюдаются строгие стандарты и тщательный контроль." },
    { id: "shipping-time", question: "Сколько занимает доставка?", icon: Truck, answer: "Большинство заказов доставляется в течение 48 часов. Срок может немного меняться в зависимости от региона и запроса." },
    { id: "delivery-adjust", question: "Можно ли согласовать доставку индивидуально?", icon: CalendarClock, answer: "Да. Если вам нужно конкретное время или особые условия, свяжитесь с нами — мы постараемся подстроиться." },
    { id: "refunds", question: "Есть ли возврат или обмен?", icon: Ban, answer: "Все продажи окончательные. После оформления заказа возврат, обмен и отмена не предусмотрены." },
    {
      id: "contact",
      question: "Как с вами связаться?",
      icon: MessageCircle,
      answer: (
        <span>
          Вы можете связаться с нами через Telegram, WhatsApp или Instagram. Подробности — на странице{" "}
          <Link href="/contact" className="font-medium text-[#14B8A6] underline-offset-2 hover:underline">
            Контакты
          </Link>
          .
        </span>
      ),
    },
    { id: "choose-product", question: "Как выбрать подходящий продукт?", icon: Target, answer: "Рекомендуем внимательно изучить информацию о продукте и выбирать исходя из ваших целей и предпочтений." },
    { id: "guidance", question: "Вы даете рекомендации?", icon: Compass, answer: "Мы предоставляем общую информацию о продуктах. Для более глубокой оценки рекомендуем изучать независимые источники." },
    { id: "learn-more", question: "Где можно узнать больше перед покупкой?", icon: BookOpen, answer: "Изучайте независимую информацию, сравнивайте разные мнения и отзывы пользователей перед принятием решения." },
    { id: "batches", question: "Стабильно ли качество между партиями?", icon: FlaskConical, answer: "Мы поддерживаем единый стандарт качества за счет тщательного отбора и контроля поставок." },
    { id: "ordering-simple", question: "Оформление заказа простое?", icon: ShoppingCart, answer: "Да. Процесс сделан быстрым, аккуратным и понятным — от выбора до оформления." },
    { id: "before-order", question: "Что делать, если есть вопросы до заказа?", icon: HelpCircle, answer: "Свяжитесь с нами в любое время — мы поможем уточнить детали до оформления заказа." },
    { id: "catalog", question: "Вы обновляете каталог?", icon: RefreshCw, answer: "Да. Мы постоянно обновляем и расширяем ассортимент, чтобы поддерживать высокий стандарт." },
  ],
}

export function FaqAccordion() {
  const { locale } = useLanguage()
  const items = locale === "ru" ? faqs.ru : faqs.en

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <AccordionItem key={item.id} value={item.id} className="border-b border-gray-100 last:border-b-0">
            <AccordionTrigger className="group/trigger gap-3 rounded-lg py-5 pl-1 pr-2 text-left transition-colors hover:bg-slate-50/80 hover:no-underline data-[state=open]:bg-[#14B8A6]/5 sm:py-5 sm:pl-2">
              <span className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14B8A6]/10 text-[#14B8A6] transition-colors group-hover/trigger:bg-[#14B8A6]/15 sm:h-12 sm:w-12">
                  <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 pt-1.5 text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
                  {item.question}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-1 sm:pb-2">
              <div className="border-t border-gray-100/80 bg-white/80 px-1 pb-5 pt-4 sm:px-2">
                <div className="pl-[3.25rem] text-left text-sm leading-relaxed text-slate-600 sm:pl-14 sm:text-[15px] sm:leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
