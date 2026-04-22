import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileSearch } from "lucide-react"

export const metadata: Metadata = {
  title: "Lab Reports",
  description: "How to request lab report information from Pure Amino Peptides.",
}

export default function LabReportsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <main className="flex-1">
        <div className="mx-auto w-full max-w-lg px-4 py-14 text-center sm:max-w-xl sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 text-[#14B8A6]">
            <FileSearch className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Lab Reports</h1>

          <div className="mt-10 rounded-2xl border border-gray-200/90 bg-white px-6 py-9 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-8 sm:py-10">
            <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base sm:leading-[1.75]">
              For additional information regarding lab reports, please contact us.
            </p>
            <Button
              asChild
              className="mt-8 h-12 w-full max-w-xs rounded-xl bg-[#14B8A6] text-base font-medium text-white shadow-sm transition-colors hover:bg-[#0f9f91] sm:h-11"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
