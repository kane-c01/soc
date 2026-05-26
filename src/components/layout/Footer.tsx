"use client";

import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, lang, setLang } = useLang();

  return (
    <footer className="relative mt-20 border-t border-sr-line bg-sr-bg-3/45">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sr-red/30 to-transparent" />
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-3">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sr-text-2">
            {t(FOOTER.tagline)}
          </p>

          {/* 语言切换 — segmented control 双按钮，与 Navbar 风格一致
              两个语言都明确可见 + 可点击；active 高亮黑底白字 */}
          <div
            role="group"
            aria-label={lang === "zh" ? "切换语言" : "Switch language"}
            className="mt-5 inline-flex items-center gap-1 rounded-lg border border-sr-line-2 bg-white/70 p-1 shadow-sm backdrop-blur-sm"
          >
            <Globe
              aria-hidden
              className="ml-1.5 mr-0.5 size-3.5 shrink-0 text-sr-muted"
            />
            <button
              type="button"
              onClick={() => setLang("zh")}
              aria-pressed={lang === "zh"}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                lang === "zh"
                  ? "bg-sr-text text-white shadow-sm"
                  : "text-sr-text-2 hover:text-sr-text",
              )}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                lang === "en"
                  ? "bg-sr-text text-white shadow-sm"
                  : "text-sr-text-2 hover:text-sr-text",
              )}
            >
              English
            </button>
          </div>
        </div>

        {FOOTER.groups.map((g) => (
          <div key={g.title.en}>
            <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-sr-muted">
              {t(g.title)}
            </h4>
            <ul className="mt-4 space-y-3">
              {g.links.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <a
                    href={link.href}
                    className="text-sm text-sr-text-2 transition-colors hover:text-sr-text"
                  >
                    {t(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-sr-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-sr-muted sm:flex-row">
          <span>{t(FOOTER.copyright)}</span>
          <span>{lang === "zh" ? "为 AI 出海增长而生 · Made for global growth" : "Made for global AI growth"}</span>
        </Container>
      </div>
    </footer>
  );
}
