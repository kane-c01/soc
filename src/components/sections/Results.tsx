"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RESULTS } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * Results — 数据指标
 *
 * 浅底版本：白卡 + 红色 KPI 数字 + 米色高亮卡
 */
export function Results() {
  const { t } = useLang();
  const title = t(RESULTS.heading);

  return (
    <section id="results" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow={t(RESULTS.eyebrow)}
          title={
            <span className="block whitespace-pre-line">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </span>
          }
          sub={t(RESULTS.sub)}
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
          {RESULTS.primary.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-sr-line bg-white px-5 py-8 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="font-mono text-3xl font-semibold tracking-tight text-sr-red sm:text-4xl">
                {m.value}
              </div>
              <p className="mt-2 text-sm leading-snug text-sr-text-2">
                {t(m.label)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2">
          {RESULTS.highlight.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-3/55 px-6 py-10 text-center"
            >
              <div className="font-mono text-5xl font-semibold tracking-tight text-sr-red sm:text-6xl">
                {m.value}
              </div>
              <p className="mt-3 text-base text-sr-text">{t(m.label)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
