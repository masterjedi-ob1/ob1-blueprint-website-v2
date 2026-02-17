"use client"

import { Hammer } from "lucide-react"
import Image from "next/image"

export default function WorkshopHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width hero photograph */}
      <div className="relative min-h-[50vh] md:min-h-[65vh] flex items-end">
        <Image
          src="/workshop-hero.jpg"
          alt="The Workshop — frameworks, field notes, and honest thinking"
          fill
          className="object-cover"
          priority
        />

        {/* Warm amber-tinted overlay — studio feel, not boardroom */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-stone-900/30" />
        <div className="absolute inset-0 bg-amber-950/10" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pb-14 md:pb-20 pt-36">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-500/15 border border-orange-400/30 rounded-md">
                <Hammer className="h-4 w-4 text-orange-400" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-mono text-orange-400 uppercase tracking-[0.2em]">
                The Workshop
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-5 leading-[1.1] text-balance">
              Frameworks, Field Notes,
              <span className="block text-orange-400">{"& Honest Thinking"}</span>
            </h1>

            <p className="text-base md:text-lg text-stone-300 max-w-xl leading-relaxed text-pretty">
              Resources for leaders building something real with AI.
              Pull up a chair — the blueprints are on the table.
            </p>

            {/* Section anchors */}
            <nav className="mt-10 flex flex-wrap gap-3" aria-label="Workshop sections">
              {[
                { label: "Blog & Insights", anchor: "#insights" },
                { label: "Technical Docs", anchor: "#docs" },
                { label: "Multimedia", anchor: "#multimedia" },
              ].map((item) => (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  className="text-sm text-stone-400 hover:text-orange-400 border border-stone-700 hover:border-orange-500/40 px-5 py-2.5 bg-stone-900/50 backdrop-blur-sm transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Warm accent bar */}
      <div className="h-1 bg-gradient-to-r from-orange-600/40 via-orange-400 to-orange-600/40" />
    </section>
  )
}
