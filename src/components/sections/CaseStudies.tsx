"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Lightbulb, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CASES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * CaseStudies — 一图看懂版
 *
 * 设计目标：用一张「Case Study Panel」大卡讲完每个案例的所有数据
 *   tab 切换时只切换面板内 5 段，dashboard 外壳保持稳定 ⇒ 给用户「操作 dashboard」的感觉。
 *
 * 结构（一张大卡，7 段）：
 *   ① Header bar     : 案例数据面板 + 📊 实测数据徽章
 *   ② TAB strip      : 3 个 tab（AI Agent / AI SaaS / AI Tool）
 *   ③ TARGET         : 测试目标（tab 标题 + subtitle）
 *   ④ PRIMARY KPIs   : 3 大 dark theme KPI 卡
 *   ⑤ DETAIL METRICS : 5-6 项紧凑 metric grid（自动适配数量）
 *   ⑥ FINDINGS       : 目标 / 人去哪吵 / 关键发现 三栏紧凑卡
 *   ⑦ QUOTE          : 客户引言（小红色引号）
 */
const BLOCK_ICONS = [Target, Users, Lightbulb];

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

        {/* ============ Case Study Panel · 一张大卡 ============ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="sr-highlight-top relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm"
        >
          {/* ---------- ① Header bar ---------- */}
          <div className="flex items-center justify-between border-b border-sr-line bg-sr-bg-3/30 px-5 py-3 sm:px-6">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-muted">
              {lang === "zh" ? "案例数据面板" : "Case study panel"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/20 bg-sr-red/[0.05] px-2 py-0.5 text-[10px] font-semibold text-sr-red">
              <BarChart3 className="size-2.5" strokeWidth={2.5} />
              {lang === "zh" ? "实测数据" : "Real metrics"}
            </span>
          </div>

          {/* ---------- ② TAB strip ---------- */}
          <div className="border-b border-sr-line bg-sr-bg-3/10 px-5 py-3 sm:px-6">
            <div
              role="tablist"
              aria-label={lang === "zh" ? "案例分类" : "Case categories"}
              className="grid grid-cols-3 gap-1.5 rounded-xl border border-sr-line bg-sr-bg-3/55 p-1.5"
            >
              {CASES.tabs.map((tt) => {
                const activeTab = tt.id === active;
                return (
                  <button
                    key={tt.id}
                    role="tab"
                    type="button"
                    id={`case-tab-${tt.id}`}
                    aria-selected={activeTab}
                    aria-controls={`case-panel-${tt.id}`}
                    tabIndex={activeTab ? 0 : -1}
                    onClick={() => setActive(tt.id)}
                    className={cn(
                      "relative h-9 rounded-lg px-2 text-[12.5px] transition-colors sm:text-[13.5px]",
                      activeTab
                        ? "font-semibold text-sr-text"
                        : "font-medium text-sr-text-2 hover:text-sr-text",
                    )}
                  >
                    {activeTab && (
                      <motion.span
                        layoutId="case-tab-active"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-lg bg-white shadow-sm ring-1 ring-inset ring-sr-line"
                      />
                    )}
                    <span className="block truncate">{t(tt.label)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------- ③-⑦ TAB PANEL（切换时整体淡入淡出） ---------- */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              role="tabpanel"
              id={`case-panel-${tab.id}`}
              aria-labelledby={`case-tab-${tab.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* ③ TARGET */}
              <div className="px-5 py-5 sm:px-6">
                <LayerLabel
                  tag="TARGET"
                  label={lang === "zh" ? "测试目标" : "Test target"}
                />
                <h3 className="mt-3 text-[18px] font-semibold leading-tight tracking-tight text-sr-text sm:text-[22px]">
                  {t(tab.title)}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-sr-text-2">
                  {t(tab.subtitle)}
                </p>
              </div>

              {/* ④ PRIMARY KPIs */}
              <div className="border-t border-sr-line bg-sr-bg-3/15 px-5 py-5 sm:px-6">
                <LayerLabel
                  tag="PRIMARY KPIS"
                  label={lang === "zh" ? "核心结果指标" : "Primary KPIs"}
                />
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {highlights.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="relative overflow-hidden rounded-xl border border-sr-text bg-sr-text px-4 py-5 text-center text-white"
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-sr-red/30 blur-3xl"
                      />
                      <KpiValue value={s.value} unit={t(s.unit)} />
                      <p className="relative mt-2 text-[11.5px] font-medium leading-snug text-white/80">
                        {t(s.label)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ⑤ DETAIL METRICS */}
              <div className="border-t border-sr-line px-5 py-5 sm:px-6">
                <LayerLabel
                  tag="DETAIL METRICS"
                  label={lang === "zh" ? "全量指标" : "Full metrics"}
                  rightSlot={
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sr-muted">
                      {otherMetrics.length}
                      {lang === "zh" ? " 项" : " items"}
                    </span>
                  }
                />
                <div
                  className={cn(
                    "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
                    otherMetrics.length >= 6
                      ? "lg:grid-cols-6"
                      : "lg:grid-cols-5",
                  )}
                >
                  {otherMetrics.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="flex flex-col items-start rounded-lg border border-sr-line bg-sr-bg-3/15 px-3 py-2.5"
                    >
                      <MetricValue value={s.value} unit={t(s.unit)} />
                      <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-sr-text-2">
                        {t(s.label)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ⑥ FINDINGS */}
              <div className="border-t border-sr-line bg-sr-bg-3/15 px-5 py-5 sm:px-6">
                <LayerLabel
                  tag="FINDINGS"
                  label={
                    lang === "zh"
                      ? "目标 · 场景 · 关键发现"
                      : "Goal · context · key finding"
                  }
                />
                <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
                  {tab.blocks.map((b, i) => {
                    const Icon = BLOCK_ICONS[i] ?? Target;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.35, delay: i * 0.05 }}
                        className="rounded-lg border border-sr-line bg-white p-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="grid size-6 shrink-0 place-items-center rounded-md border border-sr-line bg-sr-bg-3/55 text-sr-red">
                            <Icon className="size-3" />
                          </span>
                          <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sr-red">
                            {t(b.title)}
                          </h4>
                        </div>
                        <p className="mt-2 text-[12px] leading-relaxed text-sr-text-2">
                          {t(b.body)}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ⑦ QUOTE */}
              <div className="border-t border-sr-line bg-white px-5 py-4 sm:px-6">
                <figure className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-0.5 -top-2 font-serif text-[28px] leading-none text-sr-red/30"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="pl-5 text-[13px] leading-relaxed text-sr-text">
                    {t(tab.quote.text)}
                  </blockquote>
                  <figcaption className="mt-2 text-right text-[11px] leading-relaxed text-sr-muted">
                    — {t(tab.quote.author)}
                  </figcaption>
                </figure>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

/** 大字 KPI：数字 + 单位（dark theme 卡上的白字） */
function KpiValue({ value, unit }: { value: string; unit: string }) {
  const isPureText = !/\d/.test(value);
  return (
    <div className="relative flex items-baseline justify-center gap-1.5">
      <span
        className={cn(
          "font-mono font-semibold tracking-tight text-white",
          isPureText ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl",
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

/** 小字 metric：数字 + 单位（白底卡） */
function MetricValue({ value, unit }: { value: string; unit: string }) {
  const isPureText = !/\d/.test(value);
  return (
    <div className="flex items-baseline gap-1">
      <span
        className={cn(
          "font-mono font-semibold tracking-tight text-sr-text",
          isPureText ? "text-[13px]" : "text-[20px]",
        )}
      >
        {value}
      </span>
      {unit && (
        <span className="text-[11.5px] font-medium text-sr-text-2">{unit}</span>
      )}
    </div>
  );
}

/**
 * 大卡内每一层的「层标签」
 * mono 大写 tag + 中文短标题 + 末尾细线 + 可选右侧 slot
 */
function LayerLabel({
  tag,
  label,
  rightSlot,
}: {
  tag: string;
  label: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-md border border-sr-line bg-white px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] text-sr-text-2">
        {tag}
      </span>
      <span className="text-[12.5px] font-semibold tracking-tight text-sr-text">
        {label}
      </span>
      <span className="ml-1 h-px flex-1 bg-sr-line" />
      {rightSlot}
    </div>
  );
}
