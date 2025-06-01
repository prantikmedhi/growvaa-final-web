"use client"
import type { Metadata } from "next"
import NotFoundClient from "@/components/not-found-client"

export const metadata: Metadata = {
  title: "Page Not Found | Growvaa - Digital Marketing Agency",
  description:
    "The page you're looking for doesn't exist. Explore our digital marketing services or return to our homepage.",
}

export default function NotFound() {
  return <NotFoundClient />
}
