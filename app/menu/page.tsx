import Link from "next/link"
import { ChevronRight } from "lucide-react"

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Lab Reports", href: "/lab-reports" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Account", href: "/account" },
]

export default function MobileMenuPage() {
  return (
    <main className="min-h-[calc(100vh-70px)] bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-10 pt-6 sm:px-6">
        <h1 className="text-lg font-semibold tracking-tight text-slate-900">Menu</h1>
        <p className="mt-1 text-sm text-slate-500">Quick access to all main sections.</p>

        <nav className="mt-6 space-y-2" aria-label="Mobile menu fallback">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
            >
              <span>{item.label}</span>
              <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden />
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}
