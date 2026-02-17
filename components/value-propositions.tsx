"use client"

import { Microscope, Zap, Layers } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ValuePropositions() {
  const propositions = [
    {
      icon: Microscope,
      title: "Evidence-Based Diagnostic Engine",
      description:
        "No guesswork, no generic playbooks. Our Audity-powered assessment analyzes your unique operational DNA to identify exactly where AI will move the needle. Data-driven precision from day one.",
    },
    {
      icon: Zap,
      title: "Just In Time Solutions",
      description:
        "We don't sell you technology for technology's sake. Every recommendation is timed to your readiness, budget, and competitive window. Right solution. Right moment. Right ROI.",
    },
    {
      icon: Layers,
      title: "Full-Stack AI Platform",
      description:
        "From strategy to deployment to optimization. One partner, one methodology, complete accountability. No finger-pointing between vendors. We own the outcome.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why <span className="text-orange-500">Executives</span> Choose OB.1
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't experiment with your budget. Every implementation is backed by data, proven methodology, and
            measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {propositions.map((prop, idx) => (
            <Card key={idx} className="p-8 border-2 border-slate-200 hover:border-orange-500 transition-all">
              <prop.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prop.description}</p>
            </Card>
          ))}
        </div>

        {/* Founder Quote Section */}
        <Card className="max-w-3xl mx-auto p-8 bg-white border-l-4 border-orange-500">
          <p className="text-lg text-slate-700 italic mb-4">
            "AI gives you back your most precious resource: your time & attention. You get to focus on work that
            matters. Work that brings meaning. Work that requires your uniqueness."
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/chris-mccarthy-profile.jpg"
              alt="Chris McCarthy"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-900">Chris McCarthy</p>
              <p className="text-sm text-slate-600">Founder & AI Solutions Architect</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
