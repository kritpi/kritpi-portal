"use client";

import { useCVMode } from "./CVModeContext";

export default function ThemeToggle() {
  const { isCVMode, toggleCVMode } = useCVMode();

  return (
    <button
      onClick={toggleCVMode}
      aria-label={isCVMode ? "Switch to portfolio mode" : "Switch to CV mode"}
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-3 border border-black px-4 py-3 text-left text-xs uppercase tracking-[0.35em] bg-white text-black transition-transform duration-300 hover:-translate-y-0.5 sm:right-6 sm:top-6"
    >
      <span className="h-2 w-2 rounded-full bg-black" />
      {isCVMode ? "Return to portfolio" : "Open CV view"}
    </button>
  );
}
