import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WorkshopHero from "@/components/workshop/workshop-hero"
import WorkshopInsights from "@/components/workshop/workshop-insights"
import WorkshopDocs from "@/components/workshop/workshop-docs"
import WorkshopMultimedia from "@/components/workshop/workshop-multimedia"
import WorkshopCTA from "@/components/workshop/workshop-cta"

export const metadata: Metadata = {
  title: "The Workshop | OB.1 AI Solutions",
  description: "Frameworks, field notes, and honest thinking for leaders building AI-powered organizations.",
  openGraph: {
    title: "The Workshop | OB.1 AI Solutions",
    description: "Frameworks, field notes, and honest thinking for leaders building AI-powered organizations.",
    url: "https://www.ob1ai.co/workshop",
    siteName: "OB.1 AI Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OB.1 AI Solutions - The Workshop" }],
    type: "website",
  },
}

export default function WorkshopPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WorkshopHero />
      <WorkshopInsights />
      <WorkshopDocs />
      <WorkshopMultimedia />
      <WorkshopCTA />
      <Footer />
    </main>
  )
}
