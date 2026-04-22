import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartRequestProvider } from '@/components/cart-request-provider'
import { ConsentGate } from '@/components/consent-gate'
import { Header } from '@/components/header'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pure Amino Peptides | Clinical-Grade Peptides for Research',
  description: 'Clinical-grade peptides with 99%+ purity. Third-party lab tested. BPC-157, TB-500, Retatrutide, and more. Fast shipping.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ConsentGate>
          <CartRequestProvider>
            <Header />
            {children}
          </CartRequestProvider>
        </ConsentGate>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
