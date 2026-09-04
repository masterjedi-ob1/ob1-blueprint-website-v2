"use client"

import { ArrowUpRight } from "lucide-react"

const checkpoints = [
  { n: "01", title: "AI Readiness Score", body: "An 82-point assessment scored 0-100. No engagement starts without a documented data hygiene and AI maturity baseline." },
  { n: "02", title: "Stakeholder Configuration", body: "Accountable owners required by role: executive, operations, customer-facing, finance. You cannot govern what no one owns." },
  { n: "03", title: "Interview Data Capture", body: "Structured stakeholder interviews covering pain, ideal state, constraints, and success metrics. Assumptions made explicit and contestable." },
  { n: "04", title: "Document Evidence Base", body: "Source documents auto-extracted into tagged excerpts. No recommendation without documented evidence." },
  { n: "05", title: "Comprehensive Audit Pipeline", body: "Four-stage audit: merge sources, validate findings, identify gaps, build strategy. Recommendations carry confidence scores." },
  { n: "06", title: "Confidence Scoring", body: "Six confidence dimensions on every audit layer. Investor-grade transparency baked into every output." },
  { n: "07", title: "Contradictions Analysis", body: "Documented vs. reality, with priority and supporting evidence. The gap between belief and evidence named explicitly." },
  { n: "08", title: "ROI Benchmarks", body: "Benchmark library with blended labor rates and cost ranges. Year-1 ROI, payback period, and 5-year net value on every recommendation." },
  { n: "09", title: "Framework-Aligned Outputs", body: "BCG AI Maturity, Deloitte Impact Matrix, Know-Do-Build Roadmap, BCG 10-20-70. External standards, not internal opinion." },
  { n: "10", title: "Stakeholder Memos & Final Report", body: "Role-personalized memos plus a signed, dated report tied to each accountability scope. Audit trail closed." },
]

const builtRubrics = [
  { industry: "Insurance", regimes: "GLBA, NAIC Model Law, state DOI (NYDFS)" },
  { industry: "Healthcare & Life Sciences", regimes: "HIPAA/HITECH, 21 CFR Part 11, GCP" },
  { industry: "Banking & Financial Services", regimes: "GLBA, SOX ITGC, PCI-DSS, FFIEC, NYDFS" },
  { industry: "Manufacturing", regimes: "CMMC 2.0, NIST 800-171, IEC 62443" },
  { industry: "Legal", regimes: "ABA Model Rules 1.6 / 1.1 / 5.3, Op. 477R / 483" },
  { industry: "Education", regimes: "FERPA, COPPA, state student-privacy law" },
  { industry: "Real Estate, Housing & Lending", regimes: "Fair Housing Act, ECOA, FCRA" },
  { industry: "Logistics & Transportation", regimes: "TSA directives, MTSA, FMCSA, CISA CPGs" },
  { industry: "Non-Profit", regimes: "PCI-DSS 4.0, state breach law, CAN-SPAM / TCPA" },
]

export default function GovernanceContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                Governance-as-a-Service
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Governance. <span className="text-orange-500">As a Service.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
              Governance-as-a-Service is not a report. It is a continuous control
              layer that runs before your first deployment, through every sprint,
              and long after the engagement ends. Your board can cite it. Your
              legal team can defend it.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Everyone is selling AI capability. Capability without governance is
              unmanaged operational exposure: shadow AI, single-model dependency,
              and workflows that can go dark overnight. We close that governance
              gap with rules before tools: governed inputs, governed outputs, and
              an auditable AI footprint in between.
            </p>
          </div>
        </div>
      </section>

      {/* Two sides, one discipline */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                Two Sides, One Discipline
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              Govern the data in. <span className="text-orange-500">Govern the decisions out.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-slate-800 border-t-2 border-t-orange-500 bg-slate-900/60 p-8">
                <h3 className="text-xl font-bold text-white mb-1">Data Governance</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">Controls the inputs</p>
                <ul className="space-y-3">
                  {[
                    "Accuracy and quality: data that is fit to act on",
                    "Secure access and usage: least-privilege by policy",
                    "Lineage and traceability: provenance is known",
                    "Classification and standards, enforced",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-5 border-t border-slate-800 text-sm text-slate-500">
                  Protects against poor-quality, incomplete, or unauthorized data entering the system.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 border-t-2 border-t-orange-500 bg-slate-900/60 p-8">
                <h3 className="text-xl font-bold text-white mb-1">AI Governance</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">Controls the outputs</p>
                <ul className="space-y-3">
                  {[
                    "Explainability: decisions are legible",
                    "Fairness, bias, and safety: guardrails hold",
                    "Accountability: every action is auditable",
                    "Compliance alignment: EU AI Act, ISO 42001, NIST AI RMF",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-5 border-t border-slate-800 text-sm text-slate-500">
                  Protects against opaque decisions, bias, and uncontrolled automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ten checkpoints */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                The Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ten governance checkpoints <span className="text-orange-500">inside every diagnostic.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-12">
              Rules-before-tools enforcement is built into the audit pipeline
              itself. Each checkpoint produces an artifact that withstands a board
              review, a regulator, or your own future audit trail.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {checkpoints.map((c) => (
                <div key={c.n} className="rounded-lg border border-slate-800 bg-slate-900/60 p-5">
                  <div className="font-mono text-2xl font-bold text-orange-500">{c.n}</div>
                  <h3 className="text-sm font-bold text-white mt-2 mb-2 leading-snug">{c.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-500">
              The full capabilities overview, including all ten checkpoints and
              the five practice areas they anchor, lives at{" "}
              <a
                href="https://ob1-deck.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
              >
                ob1-deck.vercel.app
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Industry Governance Library */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                Industry Governance Library
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              One governance rubric <span className="text-orange-500">per regulated industry.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-12">
              Generic AI policy fails the first time a regulator asks a
              sector-specific question. Our governance library maintains a
              research-grounded rubric for each vertical we serve: the data
              landscape, the regulatory regimes, the vertical controls, and the
              procurement gates. Every capability is rated on a 0-4 maturity
              ladder against a ten-framework compliance crosswalk, with Tier 3
              (Managed) as the defensible baseline for regulated data.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {builtRubrics.map((r) => (
                <div key={r.industry} className="rounded-lg border border-slate-800 border-l-2 border-l-orange-500 bg-slate-900/60 p-5">
                  <h3 className="text-base font-bold text-white mb-1.5">{r.industry}</h3>
                  <p className="text-xs font-mono text-slate-500 leading-relaxed">{r.regimes}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
              In development: HR &amp; Staffing (EEOC, NYC Local Law 144),
              Professional Services (SOC 2, client DPAs), Retail (CCPA/CPRA),
              Construction, Hospitality, Restaurants &amp; F&amp;B, and Marketing
              Agencies. If your industry is not listed, the master rubric adapts:
              that is what it is for.
            </p>
          </div>
        </div>
      </section>

      {/* Legal partnership section (Frantz Ward LLP) temporarily removed 2026-07-09 pending Frantz Ward ethics dept green light on the public partnership reference. Full markup preserved in git history; restore when approved. */}

      {/* CTA */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg border border-slate-800 border-t-2 border-t-orange-500 bg-slate-900/60 p-8 md:p-10 flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Where are you exposed if your primary model goes dark?
                </h2>
                <p className="text-slate-400 leading-relaxed max-w-2xl">
                  Start with the readiness diagnostic. Five minutes to a scored
                  baseline, and a clear view of your governance gap. No pitch, no
                  pressure.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://score.ob1ai.co/survey/16b293db06d1"
                  className="inline-flex items-center gap-2 min-h-[44px] cursor-pointer rounded bg-orange-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Get Your AI Readiness Score
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://cal.com/ob1ai/diagnostic-discovery"
                  className="inline-flex items-center min-h-[44px] cursor-pointer rounded border-2 border-slate-700 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:border-orange-400 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Book a Diagnostic Discovery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
