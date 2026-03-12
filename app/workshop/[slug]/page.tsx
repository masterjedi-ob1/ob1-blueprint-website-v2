import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { BlogArticleBody } from '@/components/workshop/blog-article-body';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | The Drafting Table`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const readTime = estimateReadTime(post.content);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero / Header */}
      <section className="bg-gradient-to-b from-[#0D1B2A] via-[#1B3A5C] to-[#0D1B2A] pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link href="/workshop" className="hover:text-orange-400 transition-colors">
              The Drafting Table
            </Link>
            <span>/</span>
            <span className="text-orange-400">{post.category}</span>
          </nav>

          {/* Category tag */}
          <span className="inline-block text-[11px] font-mono text-orange-400 bg-orange-500/15 border border-orange-400/30 px-3 py-1 uppercase tracking-[0.15em] mb-5">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-stone-400">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readTime} min read
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-stone-500 bg-stone-800/50 border border-stone-700 px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="container mx-auto px-6 max-w-3xl">
          <BlogArticleBody content={post.content} />

          {/* CTA Footer */}
          <div className="mt-16 p-8 bg-[#0D1B2A] rounded-sm text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to put this thinking to work?
            </h3>
            <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
              Start with a diagnostic assessment to see where you stand, then let us help you build from there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.auditynow.com/survey/16b293db06d1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors text-sm"
              >
                Take the 60-Second Snapshot
              </a>
              <a
                href="https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-stone-600 text-stone-300 hover:text-white hover:border-stone-400 font-medium rounded-sm transition-colors text-sm"
              >
                Book a Blueprint Session
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              href="/workshop"
              className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to The Drafting Table
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
