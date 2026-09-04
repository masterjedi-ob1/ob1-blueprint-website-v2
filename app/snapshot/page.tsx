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

const SCORE_MAX_RAW = 40;

// Snapshot answers are scored on a raw points scale; the result card displays
// the equivalent out of 100 so it lines up with the full Readiness Score.
// Multiply before dividing: (raw / 40) * 100 loses the exact .5 at raw 23 to
// floating point and rounds it down to 57 instead of 58.
function toHundredScale(raw: number): number {
  return Math.round((raw * 100) / SCORE_MAX_RAW);
}

const READINESS_SCORE_URL = "https://score.ob1ai.co/survey/16b293db06d1";
const BLUEPRINT_SESSION_URL = "https://cal.com/ob1ai/blueprint-session";

const RESULT_COPY: Record<ResultTier, {
  label: string;
  headline: string;
  body: string;
}> = {
  foundation: {
    label: "YOUR READINESS SCORE · SNAPSHOT",
    headline: "An honest starting point. Most companies never measure one.",
    body: "Your groundwork comes first: clear processes and data you can trust. The full Readiness Score report shows which of the six dimensions to fix first and what to leave alone for now. Every answer you gave is already building your Blueprint file.",
  },
  emerging: {
    label: "YOUR READINESS SCORE · SNAPSHOT",
    headline: "You've started. Now make it systematic.",
    body: "You're using AI in places, without the rules that make it safe to scale. The full Readiness Score report shows where your gaps are and what your answers mean together. Every answer you gave is already building your Blueprint file.",
  },
  accelerate: {
    label: "YOUR READINESS SCORE · SNAPSHOT",
    headline: "A strong base. Here is where you stand.",
    body: "Your team is ready and your data is reachable. The full Readiness Score report shows what your answers mean together, the numbers behind them, and how you compare in your industry. Every answer you gave is already building your Blueprint file.",
  },
  optimize: {
    label: "YOUR READINESS SCORE · SNAPSHOT",
    headline: "A strong position. Governance keeps it that way.",
    body: "You have the systems and the readiness. The full Readiness Score report shows how your six dimensions compare in your industry and where drift would show first. Every answer you gave is already building your Blueprint file.",
  },
};

// Clickwrap assent recorded with every Snapshot submission (WEB-20260904-03).
const TERMS_VERSION = "v1.0-2026-08-25";

async function captureLeadToLC(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  score: number;
  tier: ResultTier;
  answers: number[];
  terms_accepted: boolean;
  terms_version: string;
}): Promise<boolean> {
  try {
    const res = await fetch("/api/capture-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!json.ok) {
      console.error("Lead capture failed:", json.error);
      return false;
    }
    return true;
  } catch (e) {
    console.error("Lead capture error:", e);
    return false;
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
  const [termsAccepted, setTermsAccepted] = useState(false);
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
    if (!leadData.firstName || !leadData.email || !termsAccepted) return;
    setSubmitting(true);
    await captureLeadToLC({
      ...leadData,
      score,
      tier,
      answers,
      terms_accepted: true,
      terms_version: TERMS_VERSION,
    });
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
              <label htmlFor="terms-accept" style={consentLabelStyle}>
                <input
                  id="terms-accept"
                  name="terms-accept"
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  style={consentCheckboxStyle}
                />
                <span>
                  By submitting, you agree to our{" "}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" style={consentLinkStyle}>
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={consentLinkStyle}>
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <button
                type="submit"
                disabled={submitting || !termsAccepted}
                style={{
                  background: "#D97757",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "6px",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: submitting || !termsAccepted ? "not-allowed" : "pointer",
                  opacity: submitting || !termsAccepted ? 0.7 : 1,
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
                {toHundredScale(score)}
              </div>
              <p style={{ color: "#8B8178", fontSize: "0.8rem", marginBottom: "1.5rem" }}>of 100</p>
              <h2 style={{ color: "#3D3832", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                {result.headline}
              </h2>
              <p style={{ color: "#3D3832", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {result.body}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                <a
                  href={READINESS_SCORE_URL}
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
                  Continue to Readiness Score
                </a>
                <a
                  href={BLUEPRINT_SESSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "transparent",
                    color: "#D97757",
                    textDecoration: "none",
                    border: "2px solid #D97757",
                    borderRadius: "6px",
                    padding: "calc(1rem - 2px) calc(2rem - 2px)",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  Book a Blueprint Session
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const consentLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.625rem",
  cursor: "pointer",
  color: "#3D3832",
  fontSize: "0.875rem",
  lineHeight: 1.5,
  marginTop: "0.25rem",
};

const consentCheckboxStyle: React.CSSProperties = {
  width: "1.125rem",
  height: "1.125rem",
  marginTop: "0.125rem",
  flexShrink: 0,
  accentColor: "#D97757",
  cursor: "pointer",
};

const consentLinkStyle: React.CSSProperties = {
  color: "#D97757",
  fontWeight: 600,
  textDecoration: "underline",
};

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
