import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Growvaa | Premium Digital Marketing Agency - Affordable Website Development & Social Media Management",
  description:
    "Transform your startup with Growvaa's premium digital marketing services. Affordable website development, social media management, video editing & growth strategies. Get organic results that scale your business.",
  keywords:
    "digital marketing agency, website development, social media management, video editing, SEO services, startup marketing, affordable digital marketing, organic growth strategies, business growth, online presence, Growvaa, Growva",
  authors: [{ name: "Growvaa Team" }],
  creator: "Growvaa",
  publisher: "Growvaa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growvaa.in",
    siteName: "Growvaa",
    title: "Growvaa | Premium Digital Marketing Agency",
    description:
      "Transform your startup with premium digital marketing services. Affordable solutions for website development, social media management, and business growth.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Growvaa - Premium Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growvaa | Premium Digital Marketing Agency",
    description:
      "Transform your startup with premium digital marketing services. Affordable solutions for business growth.",
    images: ["/logo.jpg"],
    creator: "@growvaa",
  },
  alternates: {
    canonical: "https://growvaa.in",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://growvaa.in",
    "logo": "https://growvaa.in/logo.jpg"
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen bg-black text-white", inter.variable, playfair.variable)}>
        <SiteHeader />
        <main className="pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
