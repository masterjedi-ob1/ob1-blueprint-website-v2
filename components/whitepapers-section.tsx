"use client"

import { Download, FileText, Lock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const whitepapers = [
  {
    title: "The OB.1 Operational Blueprint: A Framework for AI-Powered Transformation",
    description:
      "Complete technical documentation of our 5-phase methodology, including case studies, ROI projections, and implementation timelines.",
    pages: 42,
    format: "PDF",
    size: "3.2 MB",
    published: "Q4 2024",
    access: "free",
    topics: ["Methodology", "Implementation", "ROI Analysis"],
  },
  {
    title: "AI Vendor Selection Matrix: 450+ Solutions Evaluated",
    description:
      "Comprehensive analysis of AI platforms, tools, and service providers across 12 operational categories with vendor comparison frameworks.",
    pages: 68,
    format: "PDF",
    size: "5.8 MB",
    published: "Q3 2024",
    access: "free",
    topics: ["Vendor Analysis", "Tool Selection", "Procurement"],
  },
  {
    title: "Manufacturing AI Implementation: Complete Case Study Series",
    description:
      "In-depth analysis of three mid-market manufacturing companies achieving 40%+ operational efficiency through structured AI deployment.",
    pages: 54,
    format: "PDF",
    size: "4.1 MB",
    published: "Q4 2024",
    access: "gated",
    topics: ["Case Studies", "Manufacturing", "Results Analysis"],
  },
]

export default function WhitepapersSection() {
  return (
    <section id="whitepapers" className="py-16 bg-white relative">
      {/* Blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2c5282 1px, transparent 1px),
            linear-gradient(to bottom, #2c5282 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl font-bold text-blue-950 mb-3">
            Technical <span className="text-orange-600">Documentation</span>
          </h2>
          <p className="text-slate-700 text-lg">
            Comprehensive research, frameworks, and analysis for executive decision-making
          </p>
        </div>

        <div className="space-y-6">
          {whitepapers.map((paper, idx) => (
            <Card
              key={idx}
              className="bg-gradient-to-r from-white to-blue-50/30 border-2 border-blue-900/20 hover:border-orange-600 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Document icon area */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-32 bg-blue-900/10 border-2 border-blue-900 flex items-center justify-center relative">
                      <FileText className="h-12 w-12 text-blue-900" />
                      <div className="absolute top-1 right-1 text-[8px] font-mono text-blue-900">{paper.format}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-blue-950 group-hover:text-orange-600 transition-colors pr-4">
                        {paper.title}
                      </h3>
                      {paper.access === "gated" && <Lock className="h-5 w-5 text-slate-400 flex-shrink-0" />}
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">{paper.description}</p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="text-xs font-mono text-blue-900 bg-blue-50 px-3 py-1 border border-blue-900"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Metadata and CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {paper.pages} pages
                        </span>
                        <span>{paper.size}</span>
                        <span>Published {paper.published}</span>
                      </div>

                      <Button className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-800">
                        <Download className="h-4 w-4 mr-2" />
                        {paper.access === "gated" ? "Request Access" : "Download PDF"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-12 p-6 bg-blue-50 border-2 border-blue-900/20 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-blue-900 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-950 font-semibold mb-1">No Gatekeeping on Core Content</p>
              <p className="text-slate-700 text-sm">
                Our methodology is open-source. Premium case studies require registration to ensure you receive
                implementation updates and support resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
