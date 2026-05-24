"use client";

import { motion } from "framer-motion";
import { Compass, MessageCircle, Route, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MECH } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const STEP_ICONS = [Compass, MessageCircle, Route];

export function Mechanism() {
  const { t, lang } = useLang();

  return (
    <section id="mechanism" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 sr-grid opacity-50" />
      <Container>
        <SectionHeader
          eyebrow={t(MECH.eyebrow)}
          title={
            <span>
              <span className="text-sr-text">Discover</span>{" "}
              <ArrowRight className="mx-1 inline size-7 text-sr-orange" />{" "}
              <span className="text-sr-text">Engage</span>{" "}
              <ArrowRight className="mx-1 inline size-7 text-sr-orange" />{" "}
              <span className="sr-gradient-text-warm">Route</span>
            </span>
          }
          sub={t(MECH.sub)}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {MECH.steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Compass;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-2 p-7"
              >
                {/* Halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 right-0 size-48 rounded-full bg-gradient-to-br from-sr-orange/30 to-sr-red/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-sr-muted">
                    STEP / {step.step}
                  </span>
                  <span className="grid size-11 place-items-center rounded-xl border border-sr-line-2 bg-gradient-to-br from-white/[0.04] to-white/[0.01] text-sr-orange transition-colors group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-sr-text sm:text-2xl">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sr-text-2">
                  {t(step.desc)}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {step.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-sm text-sr-text-2"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-sr-orange" />
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>

                {/* Step connector arrow on desktop (only between cards) */}
                {i < MECH.steps.length - 1 && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block"
                  >
                    <div className="grid size-7 place-items-center rounded-full border border-sr-line-2 bg-sr-bg text-sr-text-2">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footnote / promise */}
        <div className="mx-auto mt-10 max-w-3xl text-center text-xs text-sr-muted">
          {lang === "zh"
            ? "全链路可审、可追踪、可优化 · 拒绝 spam · 拒绝冒充 · 拒绝虚假评论"
            : "Reviewable, trackable, tunable end-to-end · No spam · No impersonation · No fake reviews"}
        </div>
      </Container>
    </section>
  );
}
