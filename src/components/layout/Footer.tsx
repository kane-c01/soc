"use client";

import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, lang, toggle } = useLang();

  return (
    <footer className="relative mt-20 border-t border-sr-line bg-sr-bg-3/45">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sr-red/30 to-transparent" />
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-3">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sr-text-2">
            {t(FOOTER.tagline)}
          </p>
          <button
            onClick={toggle}
            className="group mt-5 inline-flex items-center gap-2 text-xs font-medium text-sr-muted transition"
            aria-label="Toggle language"
          >
            <Globe className="size-3.5 text-sr-muted transition group-hover:text-sr-text-2" />
            <span
              className={cn(
                "transition",
                lang === "zh"
                  ? "font-semibold text-sr-text"
                  : "text-sr-muted group-hover:text-sr-text-2",
              )}
            >
              中文
            </span>
            <span className="text-sr-line">·</span>
            <span
              className={cn(
                "transition",
                lang === "en"
                  ? "font-semibold text-sr-text"
                  : "text-sr-muted group-hover:text-sr-text-2",
              )}
            >
              English
            </span>
          </button>
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
