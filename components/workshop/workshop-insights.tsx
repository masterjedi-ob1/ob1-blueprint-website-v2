"use client"

import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react"

const blogPosts = [
  {
    title: "From AI Chaos to Operational Clarity: The OB.1 Blueprint Methodology",
    excerpt:
      "How enterprise leaders are transforming scattered AI experiments into systematic operational excellence with predictable ROI.",
    author: "Chris McCarthy",
    date: "December 10, 2024",
    category: "Methodology",
    readTime: "8 min read",
    href: "#",
    external: false,
  },
  {
    title: "The Hidden Cost of DIY AI: Why 67% of Enterprise Projects Fail",
    excerpt:
      "New research reveals the operational and financial impact of unstructured AI implementation across mid-market companies.",
    author: "Chris McCarthy",
    date: "December 5, 2024",
    category: "Research",
    readTime: "6 min read",
    href: "#",
    external: false,
  },
  {
    title: "AI Readiness Assessment: 5 Critical Metrics Every Executive Should Track",
    excerpt:
      "Data-driven benchmarks for measuring your organization's capacity for AI-powered transformation.",
    author: "Chris McCarthy",
    date: "November 28, 2024",
    category: "Strategy",
    readTime: "10 min read",
    href: "#",
    external: false,
  },
]

export default function WorkshopInsights() {
  return (
    <section id="insights" className="py-20 md:py-28 bg-[#F5E6D3]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-orange-500" />
            <span className="text-[11px] font-mono text-orange-700 uppercase tracking-[0.15em]">
              Blog & Insights
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-balance">
            Thinking Out Loud
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Strategic analysis from the field. No fluff, no recycled takes.
            What we learn building, we share here.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.href}
              target={post.external ? "_blank" : undefined}
              rel={post.external ? "noopener noreferrer" : undefined}
              className="group block bg-white border border-stone-200 hover:border-orange-400 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="p-6 lg:p-7">
                {/* Category + read time */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-mono text-orange-700 bg-orange-50 px-2.5 py-1 border border-orange-200/80">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Author + date */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-5 pb-5 border-b border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  {post.external ? (
                    <ExternalLink className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5" />
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
