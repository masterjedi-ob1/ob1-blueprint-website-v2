"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    question: "What's your biggest operational bottleneck right now?",
    options: [
      "Manual data entry / repetitive tasks",
      "Slow decision-making due to scattered information",
      "Communication gaps between teams",
      "Customer follow-up falling through the cracks",
    ],
  },
  {
    id: 2,
    question: "How many hours per week does your team spend on tasks that feel like they should be automated?",
    options: ["Less than 5 hours", "5–15 hours", "15–30 hours", "30+ hours"],
  },
  {
    id: 3,
    question: "What best describes your current AI/automation usage?",
    options: [
      "We use nothing — starting from zero",
      "We use a few tools (ChatGPT, etc.) but it's scattered",
      "We have some automation but it's not connected",
      "We have systems but need optimization",
    ],
  },
  {
    id: 4,
    question: "How would you describe your team's comfort with new technology?",
    options: [
      "Resistant — change is hard here",
      "Cautious — open if proven",
      "Willing — we'll try what makes sense",
      "Eager — we want to be first movers",
    ],
  },
  {
    id: 5,
    question: "What's your primary revenue goal for the next 12 months?",
    options: [
      "Stabilize — protect what we have",
      "Grow 10–25% with current team",
      "Scale significantly — need more capacity",
      "Transform the business model entirely",
    ],
  },
  {
    id: 6,
    question: "How clean and accessible is your business data?",
    options: [
      "Scattered across spreadsheets and people's heads",
      "In systems but hard to pull insights from",
      "Organized but underutilized",
      "Well-structured and regularly analyzed",
    ],
  },
  {
    id: 7,
    question: "What's your biggest fear about implementing AI?",
    options: [
      "Wasting money on the wrong tools",
      "My team won't adopt it",
      "We'll lose the human touch with customers",
      "We don't know where to even start",
    ],
  },
  {
    id: 8,
    question: "What department would benefit most from AI first?",
    options: ["Sales & Outreach", "Operations & Admin", "Customer Service", "Marketing & Content"],
  },
  {
    id: 9,
    question: "What's your budget comfort zone for AI transformation?",
    options: [
      "Under $5K — pilot only",
      "$5K–$25K — meaningful project",
      "$25K–$75K — full engagement",
      "$75K+ — enterprise investment",
    ],
  },
  {
    id: 10,
    question: "What does success look like 90 days after implementing AI?",
    options: [
      "10+ hours/week recovered per person",
      "Faster decisions with better data",
      "More revenue with the same team size",
      "A clear roadmap for the next phase",
    ],
  },
];

const SCORE_MAP = [
  [3, 2, 1, 2],   // Q1
  [1, 2, 3, 4],   // Q2
  [1, 2, 3, 4],   // Q3
  [1, 2, 3, 4],   // Q4
  [1, 2, 3, 4],   // Q5
  [1, 2, 3, 4],   // Q6
  [3, 2, 2, 1],   // Q7
  [3, 2, 2, 2],   // Q8
  [1, 2, 3, 4],   // Q9
  [2, 2, 3, 3],   // Q10
];

type ResultTier = "foundation" | "emerging" | "accelerate" | "optimize";

function getResultTier(score: number): ResultTier {
  if (score <= 14) return "foundation";
  if (score <= 22) return "emerging";
  if (score <= 30) return "accelerate";
  return "optimize";
}

const RESULT_COPY: Record<ResultTier, {
  label: string;
  headline: string;
  body: string;
  cta: string;
  ctaHref: string;
}> = {
  foundation: {
    label: "AI FOUNDATION STAGE",
    headline: "Your biggest wins are in the basics.",
    body: "You have significant untapped opportunity. Before deploying AI tools, you need clean processes and clear data flows. The good news: this is exactly where our blueprint methodology delivers the fastest ROI. We'll identify your top 3 quick wins in a single session.",
    cta: "Book a Free Clarity Call",
    ctaHref: "https://cal.com/ob1ai/diagnostic-discovery?duration=30",
  },
  emerging: {
    label: "AI EMERGING STAGE",
    headline: "You're ready to move from scattered to systematic.",
    body: "You're using some tools but leaving serious efficiency on the table. The right architecture connecting your existing systems could recover 10+ hours per week per person. Our diagnostic process typically uncovers 3–5 specific automation opportunities in your first week.",
    cta: "See Your Blueprint Options",
    ctaHref: "https://cal.com/ob1ai/diagnostic-discovery?duration=30",
  },
  accelerate: {
    label: "AI ACCELERATION STAGE",
    headline: "You have the foundation. Now build the flywheel.",
    body: "Your team is ready and your data is accessible. This is the stage where AI investment delivers 3–5x returns because the infrastructure is already there. A focused 2-week diagnostic will map your highest-leverage opportunities with a build-ready blueprint.",
    cta: "Start Your Diagnostic",
    ctaHref: "https://cal.com/ob1ai/diagnostic-discovery?duration=30",
  },
  optimize: {
    label: "AI OPTIMIZATION STAGE",
    headline: "You're ahead of 90% of your market.",
    body: "You have systems and readiness. The next level is optimization, integration, and competitive moats. Our architecture phase is designed exactly for businesses at your stage — connecting your AI layer into a unified operational blueprint that compounds over time.",
    cta: "Talk Architecture",
    ctaHref: "https://cal.com/ob1ai/diagnostic-discovery?duration=30",
  },
};

async function captureLeadToLC(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  score: number;
  tier: ResultTier;
  answers: number[];
}) {
  try {
    await fetch("/api/capture-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error("Lead capture error:", e);
  }
}

export default function SnapshotPage() {
  const [step, setStep] = useState<"quiz" | "capture" | "result">("quiz");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [leadData, setLeadData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState(0);
  const [tier, setTier] = useState<ResultTier>("foundation");

  const totalQuestions = QUESTIONS.length;
  const progress = (currentQ / totalQuestions) * 100;

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const total = newAnswers.reduce((acc, ans, qi) => acc + (SCORE_MAP[qi][ans] || 0), 0);
      setScore(total);
      setTier(getResultTier(total));
      setStep("capture");
    }
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault();
    if (!leadData.firstName || !leadData.email) return;
    setSubmitting(true);
    await captureLeadToLC({ ...leadData, score, tier, answers });
    setSubmitting(false);
    setStep("result");
  }

  const result = RESULT_COPY[tier];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0D1B2A",
        backgroundImage:
          "linear-gradient(rgba(74,127,181,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,127,181,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        fontFamily: '"Inter", "Calibri", system-ui, sans-serif',
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="OB.1 AI Solutions" style={{ height: "40px", marginBottom: "1.5rem" }} />
          </a>
          {step === "quiz" && (
            <>
              <p
                style={{
                  color: "#D97757",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                60-SECOND SNAPSHOT
              </p>
              <h1
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  lineHeight: 1.2,
                }}
              >
                Where Does Your Business Stand on AI?
              </h1>
              <p style={{ color: "#8B8178", fontSize: "0.9rem" }}>
                10 questions. Under 60 seconds. Instant results.
              </p>
            </>
          )}
        </div>

        {/* QUIZ STEP */}
        {step === "quiz" && (
          <div>
            {/* Progress bar */}
            <div
              style={{
                background: "#1B3A5C",
                borderRadius: "999px",
                height: "6px",
                marginBottom: "2rem",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#D97757",
                  height: "100%",
                  width: `${progress}%`,
                  transition: "width 0.3s ease",
                  borderRadius: "999px",
                }}
              />
            </div>
            <p style={{ color: "#8B8178", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              Question {currentQ + 1} of {totalQuestions}
            </p>

            {/* Question card */}
            <div
              style={{
                background: "#F5F0E8",
                borderRadius: "8px",
                borderLeft: "4px solid #D97757",
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2 style={{ color: "#3D3832", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                {QUESTIONS[currentQ].question}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {QUESTIONS[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    style={{
                      background: selected === idx ? "#1B3A5C" : "#FFFFFF",
                      color: selected === idx ? "#FFFFFF" : "#3D3832",
                      border: selected === idx ? "2px solid #D97757" : "2px solid #E8DFD0",
                      borderRadius: "6px",
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      fontWeight: selected === idx ? 600 : 400,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null}
              style={{
                background: selected !== null ? "#D97757" : "#2E5E8E",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: selected !== null ? "pointer" : "not-allowed",
                width: "100%",
                opacity: selected !== null ? 1 : 0.6,
                transition: "all 0.15s ease",
              }}
            >
              {currentQ < totalQuestions - 1 ? "Next Question →" : "See My Results →"}
            </button>
          </div>
        )}

        {/* CAPTURE STEP */}
        {step === "capture" && (
          <div
            style={{
              background: "#F5F0E8",
              borderRadius: "8px",
              borderLeft: "4px solid #D97757",
              padding: "2rem",
            }}
          >
            <p
              style={{
                color: "#D97757",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              ALMOST THERE
            </p>
            <h2 style={{ color: "#3D3832", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Where should we send your results?
            </h2>
            <p style={{ color: "#8B8178", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              No spam. Just your personalized snapshot + one follow-up if relevant.
            </p>
            <form onSubmit={handleCapture} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input
                  required
                  placeholder="First Name *"
                  value={leadData.firstName}
                  onChange={(e) => setLeadData({ ...leadData, firstName: e.target.value })}
                  style={inputStyle}
                />
                <input
                  placeholder="Last Name"
                  value={leadData.lastName}
                  onChange={(e) => setLeadData({ ...leadData, lastName: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <input
                required
                type="email"
                placeholder="Business Email *"
                value={leadData.email}
                onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                style={inputStyle}
              />
              <input
                placeholder="Company Name"
                value={leadData.company}
                onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={leadData.phone}
                onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                style={inputStyle}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: "#D97757",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "6px",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  marginTop: "0.5rem",
                }}
              >
                {submitting ? "Calculating..." : "Show My Snapshot Results →"}
              </button>
            </form>
          </div>
        )}

        {/* RESULT STEP */}
        {step === "result" && (
          <div>
            <div
              style={{
                background: "#F5F0E8",
                borderRadius: "8px",
                borderLeft: "4px solid #D97757",
                padding: "2rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#D97757",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {result.label}
              </p>
              <div
                style={{
                  fontSize: "4rem",
                  fontWeight: 800,
                  color: "#1B3A5C",
                  fontFamily: '"JetBrains Mono", monospace',
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {score}
              </div>
              <p style={{ color: "#8B8178", fontSize: "0.8rem", marginBottom: "1.5rem" }}>out of 40</p>
              <h2 style={{ color: "#3D3832", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                {result.headline}
              </h2>
              <p style={{ color: "#3D3832", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {result.body}
              </p>
              <a
                href={result.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#D97757",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  borderRadius: "6px",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                {result.cta} →
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#8B8178", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                Want a deeper diagnostic?
              </p>
              <a
                href="https://app.auditynow.com/survey/16b293db06d1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4A7FB5", fontSize: "0.875rem", textDecoration: "underline" }}
              >
                Take the Full AI Readiness Assessment →
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "2px solid #E8DFD0",
  borderRadius: "6px",
  padding: "0.75rem 1rem",
  fontSize: "0.95rem",
  color: "#3D3832",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};
