'use client';

import { useState } from 'react';
import { Download, FileText, Lock, CheckCircle, Clock } from 'lucide-react';
import { LeadCaptureModal } from '@/components/LeadCaptureModal';

const whitepapers = [
  {
    title: 'The OB.1 Operational Blueprint: A Framework for AI-Powered Transformation',
    description:
      'Complete technical documentation of our 5-phase methodology, including case studies, ROI projections, and implementation timelines.',
    pages: 42,
    format: 'PDF',
    size: '3.2 MB',
    published: 'Q4 2024',
    access: 'free' as const,
    topics: ['Methodology', 'Implementation', 'ROI Analysis'],
    href: '/docs/OB1_Operational_Blueprint_Framework.pdf',
  },
  {
    title: 'AI Vendor Selection Matrix: 450+ Solutions Evaluated',
    description:
      'Comprehensive analysis of AI platforms, tools, and service providers across 12 operational categories with vendor comparison frameworks.',
    pages: 68,
    format: 'PDF',
    size: '5.8 MB',
    published: 'Q3 2024',
    access: 'free' as const,
    topics: ['Vendor Analysis', 'Tool Selection', 'Procurement'],
    href: '/docs/OB1_AI_Vendor_Selection_Matrix.pdf',
  },
  {
    title: 'Scaling Agentic Workforces Safely: A Professional Services Case Study',
    description:
      'How midmarket professional services firms use responsible AI frameworks to transform engineers into architects while maintaining security and compliance.',
    pages: 54,
    format: 'PDF',
    size: '4.1 MB',
    published: 'Q4 2024',
    access: 'gated' as const,
    topics: ['Case Studies', 'AI Governance', 'Professional Services'],
    href: undefined,
  },
];

const comingSoon = [
  {
    title: 'The Executive Guide to AI Governance & Risk',
    description: 'Compliance frameworks, liability mapping, and board-level reporting templates.',
    expected: 'Q2 2025',
  },
  {
    title: 'Data Infrastructure Readiness Checklist',
    description: 'A hands-on audit framework for evaluating your data stack before AI implementation.',
    expected: 'Q2 2025',
  },
];

export default function WorkshopDocs() {
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  return (
    <section id="docs" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-orange-500" />
            <span className="text-[11px] font-mono text-orange-700 uppercase tracking-[0.15em]">
              Technical Docs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-balance">
            Reference Material
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Comprehensive research, frameworks, and analysis — the kind of documentation you
            actually want to read before making decisions.
          </p>
        </div>

        {/* Whitepaper cards */}
        <div className="space-y-5 mb-16">
          {whitepapers.map((paper, idx) => (
            <div
              key={idx}
              className="group bg-white border border-stone-200 hover:border-orange-400 rounded-sm transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Document icon */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className="w-16 h-22 bg-stone-50 border border-stone-200 group-hover:border-orange-300 flex items-center justify-center relative transition-colors">
                      <FileText className="h-8 w-8 text-stone-300 group-hover:text-orange-500 transition-colors" />
                      <div className="absolute top-1 right-1.5 text-[8px] font-mono text-stone-400">
                        {paper.format}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors leading-snug">
                        {paper.title}
                      </h3>
                      {paper.access === 'gated' && (
                        <Lock className="h-4 w-4 text-stone-300 flex-shrink-0 mt-1" />
                      )}
                    </div>

                    <p className="text-stone-500 mb-5 leading-relaxed text-sm">
                      {paper.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {paper.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="text-[11px] font-mono text-stone-500 bg-stone-50 px-2.5 py-1 border border-stone-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Metadata + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {paper.pages} pages
                        </span>
                        <span>{paper.size}</span>
                        <span>Published {paper.published}</span>
                      </div>

                      {paper.access === 'gated' ? (
                        <button
                          onClick={() => setShowCaseStudyModal(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-sm transition-colors"
                        >
                          <Lock className="h-3.5 w-3.5" />
                          Request Access
                        </button>
                      ) : (
                        <a
                          href={paper.href}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-sm transition-colors"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mb-14">
          <h3 className="text-base font-bold text-stone-900 mb-6 flex items-center gap-3">
            <Clock className="h-4 w-4 text-orange-500" />
            On the Workbench
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {comingSoon.map((item, idx) => (
              <div
                key={idx}
                className="relative border-2 border-dashed border-stone-300 bg-stone-50/60 p-6 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-2 -right-4 w-20 rotate-45 bg-orange-100 text-center">
                    <span className="text-[8px] font-mono text-orange-600 uppercase tracking-wider">
                      Soon
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="font-semibold text-stone-700 leading-snug text-sm pr-8">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 flex-shrink-0 whitespace-nowrap">
                    ETA {item.expected}
                  </span>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* No-gatekeeping callout */}
        <div className="bg-orange-50/60 border border-orange-200/80 p-5 max-w-xl">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-stone-900 font-semibold mb-1 text-sm">No Gatekeeping</p>
              <p className="text-stone-500 text-sm leading-relaxed">
                Our methodology is open. Premium case studies require registration so we can send
                implementation updates and support resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={showCaseStudyModal}
        onClose={() => setShowCaseStudyModal(false)}
        title="Case Study: Scaling Agentic Workforces Safely"
        description="How midmarket professional services firms use responsible AI frameworks to transform engineers into architects while maintaining security and compliance."
      />
    </section>
  );
}
