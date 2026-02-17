"use client"

import { Compass, Landmark, Search, PenTool, FileText, HardHat, ArrowRight } from "lucide-react"
import Link from "next/link"

const phases = [
  { number: "01", name: "The Survey", icon: Compass },
  { number: "02", name: "The Foundation", icon: Landmark },
  { number: "03", name: "The Inspection", icon: Search },
  { number: "04", name: "The Schematic", icon: PenTool },
  { number: "05", name: "The Blueprint", icon: FileText },
  { number: "06", name: "The Build", icon: HardHat },
]

export default function MethodologyOverview() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                The Methodology
              </span>
              <div className="h-px w-12 bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Six Phases. One{" "}
              <span className="text-orange-500">Blueprint.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We design the plan. Partners execute. No conflicts of interest.
            </p>
          </div>

          {/* Phase grid — abbreviated, not full detail */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="group p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <phase.icon className="h-4 w-4 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {phase.number}
                  </span>
                </div>
                <p className="text-white font-semibold">{phase.name}</p>
              </div>
            ))}
          </div>

          {/* Link to full services page */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              See the full engagement model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
