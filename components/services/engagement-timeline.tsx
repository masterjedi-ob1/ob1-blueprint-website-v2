"use client"

import { Compass, Landmark, Search, PenTool, FileText, HardHat } from "lucide-react"

const steps = [
  { label: "Survey", icon: Compass },
  { label: "Foundation", icon: Landmark },
  { label: "Inspection", icon: Search },
  { label: "Schematic", icon: PenTool },
  { label: "Blueprint", icon: FileText },
  { label: "Build", icon: HardHat },
]

export default function EngagementTimeline() {
  return (
    <section className="py-20 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Endpoint labels */}
            <div className="flex justify-between mb-8">
              <span className="text-sm font-mono text-slate-500 uppercase tracking-wider">
                Where you are
              </span>
              <span className="text-sm font-mono text-orange-500 uppercase tracking-wider">
                Where you{"'"}re going
              </span>
            </div>

            {/* Connecting line */}
            <div className="absolute top-[calc(50%+16px)] left-0 right-0 h-0.5 bg-slate-800" />
            <div className="absolute top-[calc(50%+16px)] left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 via-orange-500/50 to-orange-500" />

            {/* Steps */}
            <div className="relative flex items-center justify-between">
              {steps.map((step, idx) => (
                <div key={step.label} className="flex flex-col items-center gap-3 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all"
                    style={{
                      borderColor:
                        idx < 2
                          ? "rgb(100 116 139)"
                          : idx < 4
                          ? "rgb(249 115 22 / 0.5)"
                          : "rgb(249 115 22)",
                      backgroundColor:
                        idx < 2
                          ? "rgb(30 41 59)"
                          : idx < 4
                          ? "rgb(30 41 59)"
                          : "rgb(249 115 22 / 0.15)",
                    }}
                  >
                    <step.icon
                      className="h-5 w-5"
                      style={{
                        color:
                          idx < 2
                            ? "rgb(148 163 184)"
                            : "rgb(249 115 22)",
                      }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-mono text-slate-600 block">
                      0{idx + 1}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color:
                          idx < 2
                            ? "rgb(148 163 184)"
                            : idx < 4
                            ? "rgb(203 213 225)"
                            : "rgb(249 115 22)",
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="flex justify-between mb-8">
            <span className="text-sm font-mono text-slate-500 uppercase tracking-wider">
              Where you are
            </span>
          </div>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-700 via-orange-500/50 to-orange-500" />

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={step.label} className="relative flex items-center gap-4">
                  {/* Dot on line */}
                  <div
                    className="absolute -left-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor:
                        idx < 2
                          ? "rgb(100 116 139)"
                          : idx < 4
                          ? "rgb(249 115 22 / 0.5)"
                          : "rgb(249 115 22)",
                      backgroundColor: "rgb(15 23 42)",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          idx < 2
                            ? "rgb(100 116 139)"
                            : "rgb(249 115 22)",
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <step.icon
                      className="h-4 w-4 flex-shrink-0"
                      style={{
                        color:
                          idx < 2
                            ? "rgb(148 163 184)"
                            : "rgb(249 115 22)",
                      }}
                      strokeWidth={1.5}
                    />
                    <div>
                      <span className="text-[10px] font-mono text-slate-600">
                        Phase 0{idx + 1}
                      </span>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          color:
                            idx < 2
                              ? "rgb(148 163 184)"
                              : idx < 4
                              ? "rgb(203 213 225)"
                              : "rgb(249 115 22)",
                        }}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          <div className="mt-8 pl-4">
            <span className="text-sm font-mono text-orange-500 uppercase tracking-wider">
              Where you{"'"}re going
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
