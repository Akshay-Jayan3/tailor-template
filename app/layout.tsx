import type { Metadata } from 'next'
import { Cormorant_Garamond, Instrument_Sans, DM_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
})

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: false,
})

const title = 'Seww Fashions — Custom Tailoring & Bridal Blouse Stitching in Kochi'
const description =
  'Custom tailoring in Kochi, Kerala. Blouses, churidars, saree blouses, night frocks, kids wear and alterations stitched to your exact measurements. 2,000+ happy customers, 4.9★ rated. Message us on WhatsApp for a free fitting quote.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    'tailor in Kochi',
    'custom tailoring Kerala',
    'blouse stitching Kochi',
    'bridal blouse tailor',
    'churidar stitching',
    'saree blouse tailor Kochi',
    'kids wear tailor',
    'alterations Kochi',
    'Seww Fashions',
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description: 'Custom tailoring made beautiful. Every piece stitched to your exact measurements.',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/images/hero.png', width: 1717, height: 916, alt: title }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Custom tailoring made beautiful. Every piece stitched to your exact measurements.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  image: `${site.url}/images/hero.png`,
  url: site.url,
  telephone: `+${site.whatsappNumber}`,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
