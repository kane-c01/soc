"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CASES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const { t } = useLang();
  const [active, setActive] = useState(CASES.tabs[0].id);
  const tab = CASES.tabs.find((x) => x.id === active) ?? CASES.tabs[0];

  return (
    <section id="cases" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow={t(CASES.eyebrow)}
          title={<span className="sr-gradient-text">{t(CASES.heading)}</span>}
          sub={t(CASES.sub)}
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-sr-line bg-sr-bg-3/40 p-1.5">
            {CASES.tabs.map((tt) => {
              const activeTab = tt.id === active;
              return (
                <button
                  key={tt.id}
                  onClick={() => setActive(tt.id)}
                  className={cn(
                    "relative h-11 rounded-lg text-sm font-medium transition-colors sm:text-[15px]",
                    activeTab
                      ? "text-white"
                      : "text-sr-text-2 hover:text-sr-text",
                  )}
                >
                  {activeTab && (
                    <motion.span
                      layoutId="case-tab-active"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-sr-text shadow-sm"
                    />
                  )}
                  {t(tt.label)}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-6 max-w-5xl rounded-2xl border border-sr-line bg-white p-6 shadow-sm sm:p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Left content */}
              <div className="lg:col-span-8">
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-sr-text sm:text-2xl">
                  {t(tab.title)}
                </h3>
                <p className="mt-2 text-[13px] text-sr-muted">{t(tab.subtitle)}</p>

                <p className="mt-5 text-[15px] font-medium leading-relaxed text-sr-text">
                  {t(tab.lead)}
                </p>

                <div className="mt-7 space-y-5">
                  {tab.blocks.map((b, i) => (
                    <div key={i}>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-sr-red">
                        {t(b.title)}
                      </h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-sr-text-2">
                        {t(b.body)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right stats + quote */}
              <div className="lg:col-span-4">
                <div className="space-y-3">
                  {tab.stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-sr-line bg-sr-bg-3/40 px-5 py-5 text-center"
                    >
                      <div className="font-mono text-2xl font-semibold tracking-tight text-sr-red sm:text-3xl">
                        {s.value}
                      </div>
                      <p className="mt-1 text-[12.5px] text-sr-text-2">{t(s.label)}</p>
                    </div>
                  ))}
                </div>

                <figure className="mt-5 rounded-xl border border-sr-line bg-sr-bg-3/30 p-5">
                  <blockquote className="text-[13px] leading-relaxed text-sr-text">
                    “{t(tab.quote.text)}”
                  </blockquote>
                  <figcaption className="mt-3 text-right text-[11px] leading-relaxed text-sr-muted">
                    — {t(tab.quote.author)}
                  </figcaption>
                </figure>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
