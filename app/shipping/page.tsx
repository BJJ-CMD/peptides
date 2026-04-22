import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping Information",
  description: "Delivery timelines and shipping details for Pure Amino Peptides.",
}

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-lg px-4 py-14 text-center sm:max-w-xl sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <Truck className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Shipping Information</h1>

          <div className="mt-10 rounded-2xl border border-gray-200/90 bg-white px-6 py-9 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-8 sm:py-10">
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              <p>
                We offer fast and reliable delivery, with most orders arriving within 48 hours.
              </p>
              <p>
                Delivery timing may be adjusted based on your location or specific requests. If you need special
                arrangements, feel free to contact us and we will do our best to accommodate.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
