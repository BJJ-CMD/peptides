import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Account | Pure Amino Peptides",
  description: "Create an account for order tracking, saved favorites, and exclusive updates.",
  alternates: {
    canonical: `${SITE_URL}/account`,
  },
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-gradient-to-b from-[#FAFCFC] via-white to-[#F8FAFA]">{children}</div>
  )
}
