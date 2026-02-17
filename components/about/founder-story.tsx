"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

export default function FounderStory() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              The Founder
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-slate-800">
                <Image
                  src="/chris-mccarthy-profile.jpg"
                  alt="Chris McCarthy — Founder & Solutions Architect, OB.1 AI Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-orange-500 opacity-30" />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Chris McCarthy
              </h2>
              <p className="text-lg text-orange-400 font-medium mb-6">
                Founder & Solutions Architect
              </p>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Before OB.1, Chris spent over a decade in operations
                  management — running teams, optimizing processes, and learning
                  firsthand what happens when technology gets deployed without a
                  plan.
                </p>
                <p>
                  That experience shaped a conviction:{" "}
                  <span className="text-white font-semibold">
                    AI transformation fails when organizations skip the
                    diagnostic work.
                  </span>{" "}
                  Every tool vendor sells a solution. Nobody sells the blueprint
                  that tells you which solution to buy — and why.
                </p>
                <p>
                  OB.1 exists to fill that gap. We design the plan. Partners
                  execute. No conflicts of interest. No vendor lock-in. Just
                  honest architecture for businesses that build things.
                </p>
              </div>

              {/* Quote callout */}
              <div className="mt-8 pl-6 border-l-2 border-orange-500/40">
                <Quote className="h-5 w-5 text-orange-500/60 mb-2" />
                <p className="text-lg text-white italic font-medium">
                  &ldquo;Rules before tools. Always.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
