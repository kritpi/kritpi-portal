"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CVModeContextType {
  isCVMode: boolean;
  toggleCVMode: () => void;
}

const CVModeContext = createContext<CVModeContextType | undefined>(undefined);

export const CV_MODE_QUERY_PARAM = "mode";
export const CV_MODE_QUERY_VALUE = "cv";

export function isCVModeValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] === CV_MODE_QUERY_VALUE;
  }

  return value === CV_MODE_QUERY_VALUE;
}

function getCVModeFromLocation() {
  if (typeof window === "undefined") {
    return false;
  }

  return new URLSearchParams(window.location.search).get(CV_MODE_QUERY_PARAM) === CV_MODE_QUERY_VALUE;
}

export function CVModeProvider({
  children,
  initialMode = false,
}: {
  children: ReactNode;
  initialMode?: boolean;
}) {
  const router = useRouter();
  const [isCVMode, setIsCVMode] = useState(initialMode);

  useEffect(() => {
    const syncModeFromHistory = () => {
      setIsCVMode(getCVModeFromLocation());
    };

    window.addEventListener("popstate", syncModeFromHistory);

    return () => {
      window.removeEventListener("popstate", syncModeFromHistory);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("cv-mode", isCVMode);
    document.documentElement.style.colorScheme = isCVMode ? "light" : "dark";
  }, [isCVMode]);

  const toggleCVMode = () => {
    const nextMode = !isCVMode;
    const nextUrl = new URL(window.location.href);

    if (nextMode) {
      nextUrl.searchParams.set(CV_MODE_QUERY_PARAM, CV_MODE_QUERY_VALUE);
    } else {
      nextUrl.searchParams.delete(CV_MODE_QUERY_PARAM);
    }

    router.replace(`${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`, {
      scroll: false,
    });
    setIsCVMode(nextMode);
  };

  return (
    <CVModeContext.Provider value={{ isCVMode, toggleCVMode }}>
      {children}
    </CVModeContext.Provider>
  );
}

export function useCVMode() {
  const context = useContext(CVModeContext);
  if (context === undefined) {
    throw new Error("useCVMode must be used within a CVModeProvider");
  }
  return context;
}
