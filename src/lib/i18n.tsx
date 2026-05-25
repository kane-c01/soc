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
import { MotionConfig } from "framer-motion";
import type { Lang, LocalizedString } from "./content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (s: LocalizedString) => string;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sr-lang";

/**
 * 根据浏览器语言推断站点语言
 * - 仅在客户端调用（依赖 navigator）
 * - zh / zh-CN / zh-TW / zh-HK 等任意 zh 前缀 → zh
 * - 其他一律 → en
 */
function detectBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "zh";
  const langs: string[] = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? [...navigator.languages]
    : [navigator.language ?? ""];
  for (const raw of langs) {
    const l = raw.toLowerCase();
    if (l.startsWith("zh")) return "zh";
    if (l.startsWith("en")) return "en";
  }
  return "en";
}

/**
 * 读取用户手动选择 — 优先级高于浏览器语言
 * 若用户切换过 → localStorage 有值 → 永远沿用
 * 若没切换过 → 返回 null，由调用方 fallback 到浏览器语言
 */
function readStoredLang(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "zh" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  /* 客户端首挂载：优先 localStorage，没有再用浏览器语言 */
  useEffect(() => {
    const stored = readStoredLang();
    const next = stored ?? detectBrowserLang();
    setLangState(next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore (e.g. localStorage 被禁用)
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === "zh" ? "en" : "zh"), [lang, setLang]);

  const t = useCallback((s: LocalizedString) => s[lang], [lang]);

  const value = useMemo<Ctx>(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);

  return (
    <LangContext.Provider value={value}>
      {/* reducedMotion="user" 让所有 framer-motion 自动尊重用户 OS 的 prefers-reduced-motion */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
