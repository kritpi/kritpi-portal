"use client";

import { CVModeProvider, useCVMode } from "@/components/CVModeContext";
import ThemeToggle from "@/components/ThemeToggle";
import CvMode from "@/components/CvMode";
import PortfolioMode from "@/components/PortfolioMode";

function AppShell() {
  const { isCVMode } = useCVMode();

  return (
    <div className="relative min-h-screen bg-white text-black">
      <ThemeToggle />
      {isCVMode ? <CvMode /> : <PortfolioMode />}
    </div>
  );
}

export default function HomeShell({
  initialMode = false,
}: {
  initialMode?: boolean;
}) {
  return (
    <CVModeProvider initialMode={initialMode}>
      <AppShell />
    </CVModeProvider>
  );
}
