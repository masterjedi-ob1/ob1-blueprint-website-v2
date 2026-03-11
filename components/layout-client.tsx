"use client";

import { useState, useEffect } from "react";
import WasteCalculatorModal from "@/components/waste-calculator-modal";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [showCalc, setShowCalc] = useState(false);

  useEffect(() => {
    const handler = () => setShowCalc(true);
    window.addEventListener("open-waste-calculator", handler);
    return () => window.removeEventListener("open-waste-calculator", handler);
  }, []);

  return (
    <>
      {children}
      {showCalc && <WasteCalculatorModal onClose={() => setShowCalc(false)} />}
    </>
  );
}
