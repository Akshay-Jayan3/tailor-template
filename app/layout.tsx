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

const title =
  'SEWW – Custom Clothing Studio | Bespoke Women’s Wear in Kochi'

const description =
  'SEWW is a premium custom clothing studio in Kochi, Kerala, specializing in bespoke women’s wear. From designer blouses and churidars to frocks, nightwear, and alterations, every piece is crafted with curated fabrics and tailored to your unique measurements.'
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    'custom clothing studio Kochi',
    'women boutique Kochi',
    'designer blouse stitching Kochi',
    'custom blouse Kerala',
    'bespoke clothing Kochi',
    'made to measure clothing Kerala',
    'churidar stitching Kochi',
    'custom frocks Kochi',
    'nightwear stitching Kerala',
    'bridal blouse designer Kochi',
    'women tailoring Kochi',
    'alteration services Kochi',
    'curated fabrics Kochi',
    'SEWW',
    'seww.in',
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description:
      'Premium custom clothing crafted for women. Curated fabrics, made-to-measure tailoring, and timeless craftsmanship by SEWW.',
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: '/images/hero.png',
        width: 1717,
        height: 916,
        alt: 'SEWW Custom Clothing Studio',
      },
    ],
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
  }
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
