import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Website Development, Social Media & Video Editing - Growvaa",
  description:
    "Comprehensive digital marketing services including custom website development, social media management, professional video editing, and data-driven growth strategies. Affordable packages for startups.",
  keywords:
    "digital marketing services, website development, social media management, video editing, growth strategy, SEO services, content creation, digital transformation, startup services",
  openGraph: {
    title: "Digital Marketing Services | Website Development & Social Media - Growvaa",
    description:
      "Comprehensive digital marketing services including website development, social media management, video editing, and growth strategies. Affordable packages for startups.",
    url: "https://growvaa.com/services",
  },
  alternates: {
    canonical: "https://growvaa.com/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
