import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GovernanceContent from "@/components/governance/governance-content"

export const metadata: Metadata = {
  title: "AI Governance | OB.1 AI Solutions: Governance as a Service",
  description:
    "Governance-as-a-Service for mid-market operators in regulated industries. Ten governance checkpoints, industry-specific governance rubrics, and legal review by outside AI regulations counsel.",
  openGraph: {
    title: "AI Governance | OB.1 AI Solutions: Governance as a Service",
    description:
      "The continuous control layer for AI adoption: governed inputs, governed outputs, and industry-specific governance rubrics reviewed by counsel.",
    url: "https://www.ob1ai.co/governance",
    siteName: "OB.1 AI Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OB.1 AI Solutions - Governance as a Service" }],
    type: "website",
  },
}

export default function GovernancePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GovernanceContent />
      <Footer />
    </main>
  )
}
