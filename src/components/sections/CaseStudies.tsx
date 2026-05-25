"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CASES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * CaseStudies — 数据驱动版
 *
 * 视觉策略（飞书 Sample Results 表格全部 8–10 项真实数据）：
 *   1. 顶部 3 个 KPI hero（飞书表格里 highlight: true 的核心指标，大红字）
 *   2. 完整 metric 网格（飞书表格剩余指标，等高网格）
 *   3. 三栏文字（目标 / 人去哪吵 / 关键发现）
 *   4. 客户引言
 */
export function CaseStudies() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(CASES.tabs[0].id);
  const tab = CASES.tabs.find((x) => x.id === active) ?? CASES.tabs[0];
  const highlights = tab.stats.filter((s) => s.highlight);
  const otherMetrics = tab.stats.filter((s) => !s.highlight);

  return (
    <section id="cases" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(CASES.eyebrow)}
          title={t(CASES.heading)}
          sub={t(CASES.sub)}
        />

        {/* tab 切换 */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid grid-cols-3 gap-1.5 rounded-xl border border-sr-line bg-sr-bg-3/40 p-1.5">
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
            className="mx-auto mt-8 max-w-6xl"
          >
            {/* 顶部标题区 */}
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-sr-text sm:text-3xl">
                {t(tab.title)}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-sr-muted">
                {t(tab.subtitle)}
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-sr-line bg-sr-bg-3/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sr-red">
                <span className="size-1.5 rounded-full bg-sr-red sr-pulse" />
                {lang === "zh"
                  ? "Sample Results · 飞书真实表格数据"
                  : "Sample Results · live data from Feishu"}
              </p>
            </div>

            {/* 3 个高亮 KPI 大字 */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="relative overflow-hidden rounded-2xl border border-sr-text bg-sr-text px-5 py-6 text-center text-white shadow-lg"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-12 size-40 rounded-full bg-sr-red/30 blur-3xl"
                  />
                  <KpiValue value={s.value} unit={t(s.unit)} />
                  <p className="relative mt-3 text-[12.5px] font-medium leading-snug text-white/80">
                    {t(s.label)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 完整 metric 网格 */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {otherMetrics.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex flex-col items-start rounded-xl border border-sr-line bg-white px-4 py-4 shadow-sm"
                >
                  <MetricValue value={s.value} unit={t(s.unit)} />
                  <p className="mt-1.5 text-[11.5px] leading-snug text-sr-text-2">
                    {t(s.label)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* lead + 三栏文字 */}
            <div className="mt-10 rounded-2xl border border-sr-line bg-white p-6 shadow-sm sm:p-8">
              <p className="text-[15px] font-medium leading-relaxed text-sr-text">
                {t(tab.lead)}
              </p>

              <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
                {tab.blocks.map((b, i) => (
                  <div key={i}>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-sr-red">
                      {t(b.title)}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-sr-text-2">
                      {t(b.body)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 引言 */}
            <figure className="mx-auto mt-6 max-w-4xl rounded-2xl border border-sr-line bg-sr-bg-3/40 p-6">
              <blockquote className="text-[14px] leading-relaxed text-sr-text">
                “{t(tab.quote.text)}”
              </blockquote>
              <figcaption className="mt-3 text-right text-[11.5px] leading-relaxed text-sr-muted">
                — {t(tab.quote.author)}
              </figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

/** 大字 KPI：数字 + 单位 */
function KpiValue({ value, unit }: { value: string; unit: string }) {
  const isPureText = !/\d/.test(value);
  return (
    <div className="relative flex items-baseline justify-center gap-1.5">
      <span
        className={cn(
          "font-mono font-semibold tracking-tight text-white",
          isPureText
            ? "text-xl sm:text-2xl"
            : "text-3xl sm:text-4xl lg:text-[44px]",
        )}
      >
        {value}
      </span>
      {unit && (
        <span className="text-base font-medium text-white/85">{unit}</span>
      )}
    </div>
  );
}

/** 小字 metric：数字 + 单位 */
function MetricValue({ value, unit }: { value: string; unit: string }) {
  const isPureText = !/\d/.test(value);
  return (
    <div className="flex items-baseline gap-1">
      <span
        className={cn(
          "font-mono font-semibold tracking-tight text-sr-text",
          isPureText ? "text-sm" : "text-2xl",
        )}
      >
        {value}
      </span>
      {unit && (
        <span className="text-[12px] font-medium text-sr-text-2">{unit}</span>
      )}
    </div>
  );
}
