"use client";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function WasteCalculatorModal({ onClose }: Props) {
  const [inputs, setInputs] = useState({
    teamSize: 5,
    hourlyRate: 65,
    manualHoursPerWeek: 10,
    toolsCostPerMonth: 500,
  });

  const annualManualWaste = inputs.teamSize * inputs.hourlyRate * inputs.manualHoursPerWeek * 52;
  const aiRecovery = annualManualWaste * 0.65;
  const annualToolsCost = inputs.toolsCostPerMonth * 12;
  const netSavings = aiRecovery - annualToolsCost - 15000;
  const roi = netSavings > 0 ? Math.round((netSavings / 15000) * 100) : 0;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(13,27,42,0.85)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#F5F0E8",
          borderRadius: "10px",
          borderLeft: "4px solid #D97757",
          padding: "2rem",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <div>
            <p style={{ color: "#D97757", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
              AI WASTE CALCULATOR
            </p>
            <h2 style={{ color: "#3D3832", fontSize: "1.3rem", fontWeight: 700, margin: 0 }}>
              What is manual work costing you?
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#8B8178", lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <label style={labelStyle}>
            <span style={labelTextStyle}>Team size (people doing manual work)</span>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input
                type="range"
                min={1}
                max={50}
                value={inputs.teamSize}
                onChange={(e) => setInputs({ ...inputs, teamSize: +e.target.value })}
                style={{ flex: 1 }}
              />
              <span style={valueStyle}>{inputs.teamSize}</span>
            </div>
          </label>

          <label style={labelStyle}>
            <span style={labelTextStyle}>Average hourly rate ($/hr)</span>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input
                type="range"
                min={20}
                max={250}
                step={5}
                value={inputs.hourlyRate}
                onChange={(e) => setInputs({ ...inputs, hourlyRate: +e.target.value })}
                style={{ flex: 1 }}
              />
              <span style={valueStyle}>${inputs.hourlyRate}</span>
            </div>
          </label>

          <label style={labelStyle}>
            <span style={labelTextStyle}>Hours/week per person on manual/repetitive tasks</span>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input
                type="range"
                min={1}
                max={40}
                value={inputs.manualHoursPerWeek}
                onChange={(e) => setInputs({ ...inputs, manualHoursPerWeek: +e.target.value })}
                style={{ flex: 1 }}
              />
              <span style={valueStyle}>{inputs.manualHoursPerWeek}h</span>
            </div>
          </label>

          <label style={labelStyle}>
            <span style={labelTextStyle}>Current tools/software cost per month</span>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <input
                type="range"
                min={0}
                max={10000}
                step={100}
                value={inputs.toolsCostPerMonth}
                onChange={(e) => setInputs({ ...inputs, toolsCostPerMonth: +e.target.value })}
                style={{ flex: 1 }}
              />
              <span style={valueStyle}>{fmt(inputs.toolsCostPerMonth)}</span>
            </div>
          </label>
        </div>

        <div style={{ background: "#1B3A5C", borderRadius: "8px", padding: "1.5rem", marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#D97757", fontSize: "1.5rem", fontWeight: 800, fontFamily: "monospace" }}>{fmt(annualManualWaste)}</div>
              <div style={{ color: "#8B8178", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Annual Manual Waste</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#4A7FB5", fontSize: "1.5rem", fontWeight: 800, fontFamily: "monospace" }}>{fmt(aiRecovery)}</div>
              <div style={{ color: "#8B8178", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>AI Recovery Potential</div>
            </div>
          </div>
          {netSavings > 0 && (
            <div style={{ textAlign: "center", borderTop: "1px solid #2E5E8E", paddingTop: "1rem" }}>
              <div style={{ color: "#FFFFFF", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                Estimated Year-1 Net ROI
              </div>
              <div style={{ color: "#D97757", fontSize: "2rem", fontWeight: 800, fontFamily: "monospace" }}>{roi}%</div>
            </div>
          )}
        </div>

        <a
          href="https://cal.com/ob1ai/diagnostic-discovery?duration=30"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#D97757",
            color: "#FFFFFF",
            textDecoration: "none",
            textAlign: "center",
            borderRadius: "6px",
            padding: "1rem",
            fontWeight: 700,
            fontSize: "1rem",
            marginTop: "1.25rem",
          }}
        >
          Let's Recover That Money →
        </a>
        <p style={{ textAlign: "center", color: "#8B8178", fontSize: "0.75rem", marginTop: "0.75rem" }}>
          Free 15-minute clarity call. No pitch.
        </p>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "0.5rem" };
const labelTextStyle: React.CSSProperties = { color: "#3D3832", fontSize: "0.875rem", fontWeight: 600 };
const valueStyle: React.CSSProperties = { color: "#1B3A5C", fontWeight: 700, fontFamily: "monospace", minWidth: "4rem", textAlign: "right" };
