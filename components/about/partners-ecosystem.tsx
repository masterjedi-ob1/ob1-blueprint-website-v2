"use client"

import { ArrowUpRight } from "lucide-react"

const partners = [
  {
    name: "NeuralSeek",
    url: "https://neuralseek.com",
    description: "AI Platform & NLP Engine",
  },
  {
    name: "Audity AI",
    url: "https://auditynow.com",
    description: "AI Readiness Assessment Platform",
  },
  {
    name: "RAC Projects",
    url: "https://racprojects.ai",
    description: "Strategic AI Consulting",
  },
  {
    name: "Diver8ent",
    url: "https://diver8ent.com",
    description: "Creative & Brand Strategy",
  },
  {
    name: "Kairos Solutions",
    url: "https://kairossolutionsai.com",
    description: "AI/ML Strategy & Data Intelligence",
  },
  {
    name: "Viable Synergy",
    url: "https://viablesynergy.com",
    description: "Revenue Operations & Growth Strategy",
  },
]

export default function PartnersEcosystem() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                Our Ecosystem
              </span>
              <div className="h-px w-12 bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Strategic <span className="text-orange-500">Partners</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              OB.1 designs the blueprint. Our vetted partners execute. No
              conflicts of interest — just the right team for every build.
            </p>
          </div>

          {/* Partner cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-slate-900/60 border border-slate-800 rounded-lg hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {partner.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-orange-500 transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-slate-400">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
