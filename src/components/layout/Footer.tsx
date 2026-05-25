"use client";

import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="relative mt-20 border-t border-sr-line bg-sr-bg-3/45">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sr-red/30 to-transparent" />
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-3">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sr-text-2">
            {t(FOOTER.tagline)}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs text-sr-muted">
            <Globe className="size-3.5" />
            <span>{lang === "zh" ? "中文" : "English"}</span>
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
