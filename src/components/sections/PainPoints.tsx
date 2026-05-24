"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock4, LineChart, Megaphone, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PAIN } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS = [Clock4, LineChart, Megaphone, Users];

export function PainPoints() {
  const { t, lang } = useLang();

  return (
    <section className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 sr-grid opacity-60" />
      <Container>
        <SectionHeader
          eyebrow={t(PAIN.eyebrow)}
          title={<span className="sr-gradient-text">{t(PAIN.heading)}</span>}
          sub={t(PAIN.sub)}
        />

        {/* Four questions strip */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-2 sm:grid-cols-2">
          {PAIN.questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-xl border border-sr-line bg-white/[0.02] px-4 py-3 text-sm text-sr-text-2"
            >
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sr-orange to-sr-red text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <span>{t(q)}</span>
            </motion.div>
          ))}
        </div>

        {/* 4 pain cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PAIN.cards.map((card, i) => {
            const Icon = ICONS[i] ?? Clock4;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sr-line-2"
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-sr-orange/0 via-sr-red/0 to-sr-orange/0 opacity-0 transition-opacity duration-300 group-hover:from-sr-orange/15 group-hover:via-sr-red/10 group-hover:opacity-100"
                />
                {/* Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sr-line-2 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sr-text-2">
                    <span className="size-1.5 rounded-full bg-sr-orange" />
                    {t(card.tag)}
                  </span>
                  <span className="grid size-10 place-items-center rounded-xl border border-sr-line bg-white/[0.02] text-sr-orange transition-colors group-hover:bg-gradient-to-br group-hover:from-sr-orange/15 group-hover:to-sr-red/15">
                    <Icon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-sr-text sm:text-[22px]">
                  {t(card.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sr-text-2 sm:text-[15px]">
                  {t(card.body)}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Outro */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-sr-line-2 bg-gradient-to-br from-sr-bg-2 to-sr-bg-3 p-8 text-center sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 sr-grid-tight" />
          <CheckCircle2 className="mx-auto size-7 text-sr-orange" />
          <p className="mt-3 text-balance text-lg font-medium leading-relaxed text-sr-text sm:text-xl">
            {t(PAIN.outro.title)}
          </p>
          <p className="mt-2 text-sm text-sr-text-2">
            {lang === "zh"
              ? "SocialRouter — 海外社媒增长信号测试系统"
              : "SocialRouter — Social signal testing system for global growth"}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
