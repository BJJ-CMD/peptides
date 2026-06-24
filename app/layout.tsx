import type { Metadata, Viewport } from 'next'
import { cookies } from "next/headers"
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartRequestProvider } from '@/components/cart-request-provider'
import { ConsentGate } from '@/components/consent-gate'
import { Header } from '@/components/header'
import { LanguageProvider } from "@/components/language-provider"
import { LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/locale"
import { SITE_URL } from "@/lib/site-url"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, organizationJsonLd } from "@/lib/social-links"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Pure Amino Peptides',
  description: 'Clinical-grade research peptides with 99%+ purity.',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pure Amino Peptides',
    description: 'Clinical-grade research peptides with 99%+ purity.',
    url: SITE_URL,
    siteName: 'Pure Amino Peptides',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Amino Peptides',
    description: 'High-purity laboratory-grade peptides.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = normalizeLocale((await cookies()).get(LOCALE_COOKIE_NAME)?.value)

  return (
    <html lang={locale} className="bg-background">
      <body className="min-h-screen bg-background font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider initialLocale={locale}>
          <ConsentGate>
            <CartRequestProvider>
              <Header />
              {children}
            </CartRequestProvider>
          </ConsentGate>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
