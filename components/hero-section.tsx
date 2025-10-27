"use client"

import { ArrowRight, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Architectural Blueprint Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#60A5FA 1px, transparent 1px),
              linear-gradient(90deg, #60A5FA 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Measurement marks */}
        <div className="absolute top-0 left-0 w-full h-8 border-b-2 border-orange-500">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute h-4 w-px bg-orange-500" style={{ left: `${i * 5}%` }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            From AI Chaos to
            <span className="block text-orange-500">Operational Blueprint</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Your competitors are implementing AI in{" "}
            <span className="text-orange-500 font-semibold">days, not months</span>. Stop debating. Start building. We
            turn your AI ambitions into executable plans with 99% accuracy.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
              onClick={() => window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")}
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Get My AI Readiness Score
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-lg px-8 py-6 bg-transparent"
              onClick={() => window.open("https://cal.com/ob1ai/ai-audit-and-analysis", "_blank")}
            >
              Book a Blueprint Session
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span>Free 5-Min Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-l-4 border-t-4 border-orange-500 opacity-20" />
    </section>
  )
}
