import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Growvaa | Get Your Free Digital Marketing Consultation Today",
  description:
    "Ready to transform your business? Contact Growvaa for a free consultation. Get in touch with our digital marketing experts to discuss your website development and growth strategy needs.",
  keywords:
    "contact growvaa, free consultation, digital marketing consultation, get quote, contact form, business inquiry, digital transformation consultation",
  openGraph: {
    title: "Contact Growvaa | Get Your Free Digital Marketing Consultation",
    description:
      "Ready to transform your business? Contact Growvaa for a free consultation. Get in touch with our digital marketing experts today.",
    url: "https://growvaa.in/contact",
  },
  alternates: {
    canonical: "https://growvaa.in/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
