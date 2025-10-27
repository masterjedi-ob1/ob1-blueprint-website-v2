"use client"

import { Search, PenTool, Rocket, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BlueprintMethodology() {
  const steps = [
    {
      icon: Search,
      title: "Audit",
      subtitle: "Uncover Opportunities",
      description: "AI Readiness Score identifies where AI can move the needle. No fluff, just data.",
      timeline: "5 minutes",
      partner: "Powered by Audity",
    },
    {
      icon: PenTool,
      title: "Blueprint",
      subtitle: "Plan Execution",
      description: "We architect your AI implementation roadmap: priorities, timelines, ROI projections.",
      timeline: "2 weeks",
      partner: "OB.1 Workshop",
    },
    {
      icon: Rocket,
      title: "Implementation",
      subtitle: "Deploy Solutions",
      description: "We build your AI workflows using no-code/low-code platforms. Fast. Accurate. Scalable.",
      timeline: "4-6 weeks",
      partner: "OB.1 Execution",
    },
    {
      icon: TrendingUp,
      title: "ROI",
      subtitle: "Prove Value",
      description: "Track every dollar saved, hour reclaimed, and opportunity captured. Data-driven results.",
      timeline: "Ongoing",
      partner: "OB.1 Analytics",
    },
  ]

  return (
    <section className="py-24 bg-slate-900" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            The OB.1 <span className="text-orange-500">Operational Blueprint</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We don't guess. We don't experiment with your budget. Here's exactly how we turn AI chaos into predictable
            results.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <Card className="p-6 bg-slate-800 border-2 border-slate-700 hover:border-orange-500 transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="h-10 w-10 text-orange-500" />
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">{step.subtitle}</p>
                <p className="text-slate-300 text-sm mb-4">{step.description}</p>

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs text-slate-500">{step.partner}</p>
                </div>
              </Card>

              {/* Connector Arrow (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-px bg-orange-500" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-orange-500 rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6 text-lg">Start with the assessment. We'll handle the rest.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              onClick={() => window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")}
            >
              Get Readiness Score
            </button>
            <button
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-colors"
              onClick={() => window.open("https://cal.com/ob1ai/ai-audit-and-analysis", "_blank")}
            >
              Skip to Blueprint Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
