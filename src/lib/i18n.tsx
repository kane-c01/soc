"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang, LocalizedString } from "./content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (s: LocalizedString) => string;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sr-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "zh" || stored === "en") {
        setLangState(stored);
        document.documentElement.lang = stored === "zh" ? "zh-CN" : "en";
        return;
      }
      const browser = navigator.language?.toLowerCase() ?? "";
      const next: Lang = browser.startsWith("zh") ? "zh" : "en";
      setLangState(next);
      document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    } catch {
      // ignore
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === "zh" ? "en" : "zh"), [lang, setLang]);

  const t = useCallback((s: LocalizedString) => s[lang], [lang]);

  const value = useMemo<Ctx>(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
