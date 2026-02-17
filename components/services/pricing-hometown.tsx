"use client"

import { MapPin } from "lucide-react"

export default function PricingHometown() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — Pricing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-orange-500" />
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Investment
                </span>
              </div>

              <p className="text-4xl md:text-5xl font-bold text-white mb-4">
                Engagements starting at{" "}
                <span className="text-orange-500">$500</span>
              </p>

              <p className="text-lg text-slate-400 leading-relaxed">
                Every engagement is scoped to your specific situation — from
                focused diagnostics to full-scale transformation architecture.
              </p>
            </div>

            {/* Right — Hometown */}
            <div className="border-l-0 md:border-l-2 md:border-slate-800 md:pl-12">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Northeast Ohio
                </span>
              </div>

              <p className="text-xl text-white font-semibold mb-4">
                We built OB.1 to serve the businesses that built this region.
              </p>

              <p className="text-lg text-slate-400 leading-relaxed">
                If you{"'"}re operating in Northeast Ohio, ask about our{" "}
                <span className="text-orange-400 font-medium">
                  Hometown Builder rate
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
