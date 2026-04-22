import Link from "next/link"
import { AccountPromoSection } from "@/components/account/account-promo-section"
import { BrandLogo } from "@/components/brand-logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  shop: [
    { name: "All Peptides", href: "/products" },
    { name: "Fat Loss", href: "/products?category=fat-loss" },
    { name: "Recovery", href: "/products?category=recovery" },
    { name: "Longevity", href: "/products?category=longevity" },
    { name: "Bundles", href: "/bundles" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Refund Policy", href: "/refunds" },
    { name: "FAQ", href: "/faq" },
  ],
  resources: [{ name: "Lab Reports", href: "/lab-reports" }],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <AccountPromoSection />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Clinical-grade peptides with 99%+ purity. Third-party tested and batch verified for research applications.
            </p>
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">Stay updated</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Get notified about new products and protocols.
              </p>
              <form className="mt-3 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[240px] bg-background"
                />
                <Button type="submit" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Shop</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Pure Amino Peptides. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              For research use in controlled settings.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
