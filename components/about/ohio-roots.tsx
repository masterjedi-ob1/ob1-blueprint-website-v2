"use client"

import { MapPin } from "lucide-react"

export default function OhioRoots() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
            {/* Left accent */}
            <div className="hidden md:flex flex-col items-center gap-3">
              <div className="p-3 bg-orange-500/10 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div className="w-px h-32 bg-slate-800" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6 md:hidden">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Northeast Ohio
                </span>
              </div>
              <div className="hidden md:flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-orange-500" />
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                  Northeast Ohio
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                Rooted in the region that{" "}
                <span className="text-orange-500">built things first.</span>
              </h2>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  OB.1 is headquartered in Northeast Ohio — the same region that
                  built the steel, the rubber, and the manufacturing backbone of
                  American industry. We didn{"'"}t land here by accident.
                </p>
                <p>
                  The businesses we serve are the ones that keep this region
                  running: manufacturers, service companies, family operations,
                  and mid-market enterprises that are too big for generic
                  solutions and too smart for vendor hype.
                </p>
                <p className="text-white font-medium">
                  Cleveland. Hudson. Akron. The Great Lakes corridor.{" "}
                  <span className="text-orange-400">
                    If you{"'"}re building here, we{"'"}re building with you.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
