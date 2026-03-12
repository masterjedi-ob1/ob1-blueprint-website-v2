"use client"

import { Compass, Landmark, Search, PenTool, FileText, HardHat } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const phases = [
  {
    number: "01",
    name: "The Survey",
    icon: Compass,
    image: "/images/phase-01-survey.png",
    imageAlt: "Phase 01: The Survey — AI Readiness Assessment",
    tagline: "Before we break ground, we survey the terrain.",
    description:
      "Your engagement begins with our AI Readiness Assessment — a structured diagnostic that maps your current operational landscape across six critical dimensions: business context, technology maturity, automation opportunities, data infrastructure, decision-making authority, and investment readiness. This isn't a quiz. It's a site survey for your AI transformation.",
    deliverables: [
      "AI Readiness Score across 6 operational dimensions",
      "Initial gap identification report",
      "Benchmark comparison against industry peers",
    ],
  },
  {
    number: "02",
    name: "The Foundation",
    icon: Landmark,
    image: "/images/phase-02-foundation.png",
    imageAlt: "Phase 02: The Foundation — Stakeholder Discovery",
    tagline: "Every structure needs solid ground.",
    description:
      "With your readiness data in hand, we conduct a stakeholder kickoff and structured discovery engagement. We interview key decision-makers, review existing documentation, and map the human dynamics that determine whether AI initiatives succeed or fail. This phase builds the informational bedrock for everything that follows.",
    deliverables: [
      "Stakeholder alignment session",
      "Discovery interview synthesis",
      "Operational documentation review",
      "Current-state process mapping",
    ],
  },
  {
    number: "03",
    name: "The Inspection",
    icon: Search,
    image: "/images/phase-03-diagnostics.png",
    imageAlt: "Phase 03: The Inspection — Operational Analysis",
    tagline: "We measure twice so you build once.",
    description:
      "Our diagnostic engine analyzes every document, interview transcript, and data point collected during discovery. We identify structural weaknesses, load-bearing processes that can't afford failure, and the specific friction points where AI creates measurable ROI. This is forensic-level operational analysis.",
    deliverables: [
      "Comprehensive document analysis",
      "Interview insight synthesis",
      "Contradiction and risk identification",
      "Operational friction mapping",
    ],
  },
  {
    number: "04",
    name: "The Schematic",
    icon: PenTool,
    image: "/images/phase-04-blueprint.png",
    imageAlt: "Phase 04: The Schematic — Strategic Engineering Plan",
    tagline: "Translating findings into the plan.",
    description:
      "Analysis without synthesis is just data. This phase transforms raw diagnostic findings into a structured strategic framework — connecting the dots between what we found, what it means, and what to do about it. We build the ROI model, map implementation dependencies, and draft the architectural logic for your AI transformation.",
    deliverables: [
      "ROI financial justification model",
      "Implementation dependency mapping",
      "Strategic framework development",
      "Resource allocation planning",
    ],
  },
  {
    number: "05",
    name: "The Blueprint",
    icon: FileText,
    image: "/images/phase-05-architecture.png",
    imageAlt: "Phase 05: The Blueprint — Technical Specifications",
    tagline: "Your master plan, ready to build from.",
    description:
      "The Operational Blueprint is our signature deliverable — a comprehensive, executive-grade document that gives your organization everything it needs to move from strategy to execution. This isn't a slide deck. It's a construction document for your AI future.",
    deliverables: [
      "Complete Operational Blueprint document",
      "Executive summary and stakeholder memos",
      "Prioritized implementation roadmap",
      "Technology selection recommendations",
      "Vendor evaluation framework",
    ],
  },
  {
    number: "06",
    name: "The Build",
    icon: HardHat,
    image: "/images/phase-06-build.png",
    imageAlt: "Phase 06: The Build — Phase 1 Execution",
    tagline: "Construction begins.",
    description:
      "For organizations that need hands-on implementation support, we architect the functional systems specified in your Blueprint. Working with our vetted development partners, we translate strategy into working infrastructure — APIs, integrations, workflows, and automation systems built to your exact specifications.",
    deliverables: [
      "Functional architecture specification",
      "Development partner coordination",
      "Implementation oversight and QA",
      "Go-live support and validation",
    ],
  },
]

export default function EngagementPhases() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              Engagement Model
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            Six Phases. One Outcome.{" "}
            <span className="text-orange-500">Clarity.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every engagement follows the same disciplined progression — from
            understanding where you are to building where you need to go.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {phases.map((phase, idx) => (
            <Card
              key={phase.number}
              className="group relative bg-slate-900/60 border-2 border-slate-800 hover:border-orange-500/60 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle weight increase per phase — border-left thickness */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-orange-500 transition-all duration-300"
                style={{ width: `${2 + idx * 1}px` }}
              />

              <div className="p-8 pl-10">
                {/* Phase Number + Name row */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-orange-500/20 group-hover:text-orange-500/40 transition-colors font-mono leading-none">
                      {phase.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                        <phase.icon
                          className="h-5 w-5 text-orange-500"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {phase.name}
                      </h3>
                    </div>
                    <p className="text-orange-400/80 italic text-sm font-medium">
                      {`"${phase.tagline}"`}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  {phase.description}
                </p>

                {/* Phase Image */}
                <div className="mb-6 relative w-full aspect-[16/7] rounded-lg overflow-hidden">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Deliverables */}
                <div className="border-t border-slate-800 pt-5">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">
                          &mdash;
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
