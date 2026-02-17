"use client"

import { Calendar, User, ArrowRight, Rss } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const blogPosts = [
  {
    title: "From AI Chaos to Operational Clarity: The OB.1 Blueprint Methodology",
    excerpt:
      "How enterprise leaders are transforming scattered AI experiments into systematic operational excellence with predictable ROI.",
    author: "Chris McCarthy",
    date: "December 10, 2024",
    category: "Methodology",
    readTime: "8 min read",
    slug: "ai-chaos-to-clarity",
  },
  {
    title: "The Hidden Cost of DIY AI: Why 67% of Enterprise Projects Fail",
    excerpt:
      "New research reveals the operational and financial impact of unstructured AI implementation across mid-market companies.",
    author: "Chris McCarthy",
    date: "December 5, 2024",
    category: "Research",
    readTime: "6 min read",
    slug: "hidden-cost-diy-ai",
  },
  {
    title: "AI Readiness Assessment: 5 Critical Metrics Every Executive Should Track",
    excerpt: "Data-driven benchmarks for measuring your organization's capacity for AI-powered transformation.",
    author: "Chris McCarthy",
    date: "November 28, 2024",
    category: "Strategy",
    readTime: "10 min read",
    slug: "ai-readiness-metrics",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-gradient-to-b from-[#F5E6D3] to-white relative">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2c5282 1px, transparent 1px),
            linear-gradient(to bottom, #2c5282 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 mb-3">
              Strategic <span className="text-orange-600">Intelligence</span>
            </h2>
            <p className="text-slate-700 text-lg">Insights from the field of AI implementation</p>
          </div>

          <Button
            variant="outline"
            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
          >
            <Rss className="h-4 w-4 mr-2" />
            Subscribe RSS
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Card
              key={idx}
              className="bg-white border-2 border-blue-900/20 hover:border-orange-600 transition-all duration-300 hover:shadow-lg cursor-pointer group relative overflow-hidden"
            >
              {/* Blueprint corner marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-900" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-900" />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-blue-900 bg-blue-50 px-3 py-1 border border-blue-900">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
