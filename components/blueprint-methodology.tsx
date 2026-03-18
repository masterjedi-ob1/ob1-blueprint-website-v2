"use client"

import { ClipboardCheck, Microscope, Brain, FileText, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BlueprintMethodology() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "OB.1 AI Triage",
      subtitle: "The Score",
      description:
        "Start with our free 60-Second Snapshot to identify your biggest AI opportunity. Ready to go deeper? The full AI Readiness Score delivers a comprehensive diagnostic report with ROI projections.",
      timeline: "60 seconds",
      partner: "OB.1 Analytics",
      phase: "Phase 0",
    },
    {
      icon: Microscope,
      title: "Clinical Discovery",
      subtitle: "Deep-Dive Analysis",
      description:
        "We validate your score and authorize comprehensive current-state analysis. Define scope, identify key stakeholders, and map existing workflow architectures.",
      timeline: "3-5 days",
      partner: "OB.1 Strategy",
      phase: "Phase 1",
    },
    {
      icon: Brain,
      title: "Automated Diagnostics",
      subtitle: "AudityAI Engine",
      description:
        "We ingest documentation, data flows, and stakeholder interviews through our proprietary AI stack to isolate inefficiencies and technical opportunities that traditional consultants overlook.",
      timeline: "1-2 weeks",
      partner: "Powered by Audity",
      phase: "Phase 2",
    },
    {
      icon: FileText,
      title: "The Operational Blueprint",
      subtitle: "Strategic Specification",
      description:
        "We deliver a premium, board-ready engineering plan that defines your future state with 99% implementation accuracy. Complete with technical requirements, resource allocation, and risk mitigation strategies.",
      timeline: "2 weeks",
      partner: "OB.1 Architecture",
      phase: "Phase 3",
    },
    {
      icon: Building2,
      title: "The Architecture",
      subtitle: "Functional Design",
      description:
        "We provide Phase 1 Functional Design Documentation with development specifications, implementation timelines, and measurable outcomes. Build internally or with our 450+ preferred vendors. 90-day MBG*.",
      timeline: "1-2 weeks",
      partner: "OB.1 Engineering",
      phase: "Phase 4",
    },
  ]

  return (
    <section className="py-24 bg-[#0f172a]" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The OB.1 <span className="text-orange-500">Operational Blueprint</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We don't guess. We don't experiment with your budget. Here's exactly how we turn AI chaos into predictable
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <Card className="p-6 bg-slate-800/80 border-2 border-slate-700 hover:border-orange-500 hover:bg-slate-800 transition-all duration-300 h-full backdrop-blur-sm">
                {/* Phase indicator */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
                    {step.phase}
                  </span>
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <step.icon className="h-8 w-8 text-orange-500" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{step.title}</h3>
                  <p className="text-sm text-orange-500 font-semibold mb-3 uppercase tracking-wide">{step.subtitle}</p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[120px]">{step.description}</p>

                <div className="border-t border-slate-700 pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500 font-mono">{step.partner}</p>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Connector Arrow (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="flex items-center">
                    <div className="w-6 h-px bg-orange-500/50" />
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-orange-500/50" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
              <div className="text-sm text-slate-300">Implementation Accuracy</div>
              <div className="text-xs text-slate-500 mt-1">Board-Ready Specifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">450+</div>
              <div className="text-sm text-slate-300">Preferred Development Vendors</div>
              <div className="text-xs text-slate-500 mt-1">Pre-Vetted Implementation Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">90-Day</div>
              <div className="text-sm text-slate-300">Money-Back Guarantee*</div>
              <div className="text-xs text-slate-500 mt-1">Risk-Free Implementation</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-300 mb-8 text-lg font-medium">
            Begin with the Operational Maturity Assessment. We architect the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
              onClick={() => window.open("https://score.ob1ai.co/survey/16b293db06d1", "_blank")}
            >
              Discover Your AI Readiness
            </button>
            <button
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
              onClick={() => window.open("https://cal.com/ob1ai/diagnostic-discovery", "_blank")}
            >
              Schedule Discovery Session
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-6">
            *90-day money-back guarantee applies to Blueprint and Architecture phases. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  )
}
