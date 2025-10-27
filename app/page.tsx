import HeroSection from "@/components/hero-section"
import ReadinessScoreSection from "@/components/readiness-score-section"
import BlueprintMethodology from "@/components/blueprint-methodology"
import ValuePropositions from "@/components/value-propositions"
import MediaShowcase from "@/components/media-showcase"
import ExecutiveFAQ from "@/components/executive-faq"
import FinalCTA from "@/components/final-cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ReadinessScoreSection />
      <ValuePropositions />
      <BlueprintMethodology />
      <MediaShowcase />
      <ExecutiveFAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
