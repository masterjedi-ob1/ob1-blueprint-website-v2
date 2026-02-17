import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import FounderStory from "@/components/about/founder-story"
import PartnersEcosystem from "@/components/about/partners-ecosystem"
import OhioRoots from "@/components/about/ohio-roots"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About | OB.1 AI Solutions — Built in Ohio, Built for Builders",
  description:
    "Meet the team behind OB.1 AI Solutions. Founded in Northeast Ohio with a mission to bring systematic AI transformation to businesses that build things.",
  openGraph: {
    title: "About | OB.1 AI Solutions",
    description: "Meet the team behind OB.1 AI Solutions.",
    url: "https://www.ob1ai.co/about",
    siteName: "OB.1 AI Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OB.1 AI Solutions — About",
      },
    ],
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <FounderStory />
      <PartnersEcosystem />
      <OhioRoots />
      <AboutCTA />
      <Footer />
    </main>
  )
}
