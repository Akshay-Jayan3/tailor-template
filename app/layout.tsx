import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Instrument_Sans,
  DM_Mono,
} from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const title =
  "Sreeja Ladies Tailoring | Custom Tailoring in Kochi";

const description =
  "Sreeja Ladies Tailoring offers custom ladies tailoring in Kochi, Kerala. Made-to-measure blouses, churidars, kurtis, frocks, nightwear and alterations, tailored with care to your measurements and style.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: title,
    template: `%s — ${site.name}`,
  },

  description,

  keywords: [
    "Sreeja Ladies Tailoring",
    "ladies tailoring Kochi",
    "women tailoring Kochi",
    "tailoring shop Kochi",
    "custom tailoring Kochi",
    "blouse stitching Kochi",
    "blouse tailoring Kochi",
    "churidar stitching Kochi",
    "kurti stitching Kochi",
    "frock stitching Kochi",
    "nightwear stitching Kochi",
    "clothing alterations Kochi",
    "custom clothes Kochi",
    "ladies tailor Kerala",
  ],

  authors: [
    {
      name: site.name,
    },
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,

    images: [
      {
        url: "/images/hero.png",
        width: 1717,
        height: 916,
        alt: "Sreeja Ladies Tailoring — Custom Tailoring in Kochi",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/* ============================================================
   LocalBusiness structured data

   Keep this aligned with the actual Google Business Profile.
   Add the exact street address once you have it.
   ============================================================ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: site.name,

  description,

  image: `${site.url}/images/hero.png`,

  url: site.url,

  telephone: `+${site.whatsappNumber}`,

  priceRange: "₹₹",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    postalCode: undefined,
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "City",
    name: "Kochi",
  },

  openingHours: [
    "Mo-Sa 09:30-18:00",
  ],

  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
