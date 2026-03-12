'use client';

import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';
import Link from 'next/link';

const categories = ['All', 'Frameworks', 'Field Notes', 'Honest Thinking'];

export default function WorkshopInsights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

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
            Strategic analysis from the field. No fluff, no recycled takes. What we learn building,
            we share here.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-orange-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/workshop/${post.slug}`}
              className="group block bg-white border border-stone-200 hover:border-orange-400 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Placeholder image */}
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0D1B2A] via-[#1B3A5C] to-[#2E5E8E] flex items-center justify-center">
                <span className="text-[#D97757] font-bold text-sm tracking-[0.15em] uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 lg:p-7">
                {/* Category + read time */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-mono text-orange-700 bg-orange-50 px-2.5 py-1 border border-orange-200/80">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">
                    {Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>

                {/* Author + date */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-5 pb-5 border-b border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500">
              No articles in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
