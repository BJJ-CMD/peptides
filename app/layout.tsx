import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartRequestProvider } from '@/components/cart-request-provider'
import { ConsentGate } from '@/components/consent-gate'
import { Header } from '@/components/header'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pure-amino-peptides.com'),
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
    url: 'https://pure-amino-peptides.com',
    siteName: 'Pure Amino Peptides',
    images: [
      {
        url: 'https://pure-amino-peptides.com/og-image.png',
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
    images: ['https://pure-amino-peptides.com/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
