import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesHero from "@/components/services/services-hero"
import EngagementPhases from "@/components/services/engagement-phases"
import EngagementTimeline from "@/components/services/engagement-timeline"
import PricingHometown from "@/components/services/pricing-hometown"
import ServicesCTA from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services | OB.1 AI Solutions — From Assessment to Architecture",
  description: "A systematic engagement model built for business leaders who need AI transformation done right. Six phases from survey to build, starting at $500.",
  openGraph: {
    title: "Services | OB.1 AI Solutions — From Assessment to Architecture",
    description: "A systematic engagement model built for business leaders who need AI transformation done right.",
    url: "https://www.ob1ai.co/services",
    siteName: "OB.1 AI Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OB.1 AI Solutions - From Assessment to Architecture" }],
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <EngagementPhases />
      <EngagementTimeline />
      <PricingHometown />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
