import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Growvaa | Our Story, Mission & Expert Team - Digital Marketing Agency",
  description:
    "Learn about Growvaa's journey since 2018. Meet our expert team of digital marketing professionals dedicated to making premium services accessible to growing businesses.",
  keywords:
    "about growvaa, digital marketing team, company story, mission vision, expert team, digital marketing professionals, startup friendly agency",
  openGraph: {
    title: "About Growvaa | Our Story, Mission & Expert Team",
    description:
      "Learn about Growvaa's journey since 2018. Meet our expert team dedicated to making premium digital marketing services accessible to growing businesses.",
    url: "https://growvaa.com/about",
  },
  alternates: {
    canonical: "https://growvaa.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
