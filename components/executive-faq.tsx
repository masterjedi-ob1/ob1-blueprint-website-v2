"use client"

import { useState } from "react"
import { ChevronDown, Clock, DollarSign, AlertTriangle, Users, Zap, BarChart } from "lucide-react"

export default function ExecutiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      icon: Clock,
      question: "How much time does this actually take?",
      answer:
        "5 minutes for the AI Readiness Score. 45 minutes for the Blueprint discovery call. Then our team handles 90% of implementations. You review milestones, not micromanage code. Total blueprint exec time commitment: ~3 hours over 2-3 weeks.",
    },
    {
      icon: DollarSign,
      question: "What's the investment?",
      answer:
        "Blueprint pays for itself. Our average client finds $140k in annual savings during the assessment alone. Blueprint workshop: $3-8k (fixed scope). Implementation: variable based on complexity, but we optimize for ROI, not hours billed. Most see 3-5x ROI in Year 1.",
    },
    {
      icon: AlertTriangle,
      question: "How is this different from other AI consultants?",
      answer:
        "Failed AI projects share one trait: they start with the solution and are usually blinded by the hype & headlines. We flip that process. The Readiness Score + Blueprint force alignment on priorities BEFORE we write a single line of code. No wasted budget on shiny tech that doesn't move the needle.",
    },
    {
      icon: Users,
      question: "We don't have an in-house tech team. Can we still do this?",
      answer:
        "That's exactly why we exist. Think of OB.1 as your fractional CTO + development team. We define first, then design, build, deploy, and train your team on using the systems. You don't need to hire engineers: you need a clear blueprint and execution partner. That's us.",
    },
    {
      icon: BarChart,
      question: "We already use AI tools. Why do we need this?",
      answer:
        "Even better. OB.1's Operational Blueprint optimizes your existing system stack + identifies gaps. Most companies use AI for 20% of its potential. We find the other 80%. Plus we audit for redundant tools (typical client cuts 3-4 overlapping software, unused seats, storage, and redundant subscriptions, saving $40K annually).",
    },
    {
      icon: Zap,
      question: "How long until we see results?",
      answer:
        "Quick wins in 30 days: automated workflows, time savings, reduced errors. Full transformation (new capabilities, measurable ROI) in 90 days. We prioritize high-impact, low-complexity projects first so you're not waiting months to justify the investment.",
    },
  ]

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your <span className="text-orange-500">Real Questions</span>, Answered
          </h2>
          <p className="text-xl text-slate-600">
            We've heard every objection. Here's the truth, backed by data from 50+ implementations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-orange-500 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-start gap-4 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <faq.icon
                  className={`h-6 w-6 flex-shrink-0 mt-1 ${openIndex === idx ? "text-orange-500" : "text-blue-500"}`}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`h-6 w-6 text-slate-400 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 border-t-2 border-orange-500 pt-4 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <button
            className="px-8 py-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-colors"
            onClick={() => window.open("https://cal.com/ob1ai/ai-audit-and-analysis", "_blank")}
          >
            Book a 15-Minute Clarity Call
          </button>
        </div>
      </div>
    </section>
  )
}
