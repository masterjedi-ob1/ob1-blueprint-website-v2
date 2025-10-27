"use client"

import { Target, Zap, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ValuePropositions() {
  const stats = [
    {
      icon: Target,
      value: "99%",
      label: "Accuracy",
      description: "Precision-engineered AI implementations that work the first time",
    },
    {
      icon: Zap,
      value: "Days",
      label: "Not Months",
      description: "From blueprint to deployment in weeks, not quarters",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI",
      description: "Typical Year 1 return on investment across all implementations",
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

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-8 text-center border-2 border-slate-200 hover:border-blue-500 transition-all">
              <stat.icon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <div className="text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-xl font-bold text-slate-900 mb-3">{stat.label}</div>
              <p className="text-slate-600">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
