"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Telescope,
  MapPinned,
  FileBarChart2,
  BookOpenCheck,
  Building2,
  Layers,
  GitCompareArrows,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VC } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * VC 专属 — 投后增长信号交付（一图看懂版）
 *
 * 设计目标：用一张「VC Portfolio Panel」大卡讲完投后交付故事
 *   让投资机构感受到「这就是我管理 portfolio 的工具」。
 *
 * 结构（一张大卡，4 段）：
 *   ① Header bar    : 投后增长面板标识 + 投后专属红色徽章
 *   ② AUDIENCE      : 适用对象 3 chip
 *   ③ DELIVERABLES  : 5 列紧凑交付卡（01 → 05 形成 timeline 感）
 *   ④ CORE bar     : 核心定位横条「同一份数据语言：可比对·可复盘·可复制」
 *
 * 与上下相邻 dashboard 大卡（ReviewableEngagement / ConversionRouting）保持
 * 同一视觉语言，但用米色整屏背景 + 投后专属红色徽章 + 5 列 grid 自带"投后流程"
 * 的步进感，与其他屏做区分。
 */
const ITEM_META: Array<{
  Icon: React.ComponentType<{ className?: string }>;
  output: { zh: string; en: string };
}> = [
  { Icon: Briefcase, output: { zh: "诊断报告", en: "Diagnostic Report" } },
  { Icon: Telescope, output: { zh: "信号测试", en: "Signal Test" } },
  { Icon: MapPinned, output: { zh: "需求图谱", en: "Demand Map" } },
  {
    Icon: FileBarChart2,
    output: { zh: "标准化数据", en: "Standardized Dataset" },
  },
  { Icon: BookOpenCheck, output: { zh: "GTM Playbook", en: "GTM Playbook" } },
];

const AUDIENCE: Array<{
  Icon: React.ComponentType<{ className?: string }>;
  label: { zh: string; en: string };
}> = [
  {
    Icon: Building2,
    label: {
      zh: "出海 GP / Portfolio 增长负责人",
      en: "Global GPs / Portfolio growth leads",
    },
  },
  {
    Icon: Layers,
    label: {
      zh: "已投 AI Agent / SaaS / Tool / Infra",
      en: "Funded AI Agent / SaaS / Tool / Infra",
    },
  },
  {
    Icon: GitCompareArrows,
    label: {
      zh: "需要可比对的投后复盘语言",
      en: "Need a shared post-investment data language",
    },
  },
];

export function VCModule() {
  const { t, lang } = useLang();

  const CORE_LINE =
    lang === "zh"
      ? "同一份数据语言：可比对 · 可复盘 · 可复制"
      : "One shared data language: comparable · reviewable · repeatable";

  return (
    <section
      id="vc"
      className="relative scroll-mt-24 bg-sr-bg-3/45 py-20 sm:py-24"
    >
      {/* 极淡装饰：右上角米色光斑 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-sr-cream/40 blur-3xl"
      />

      <Container className="relative">
        {/* ============ 紧凑标题 ============ */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/25 bg-white/85 px-3 py-1 text-[12px] font-semibold tracking-tight text-sr-red shadow-sm backdrop-blur"
          >
            <span className="sr-pulse size-1.5 rounded-full bg-sr-red" />
            {t(VC.eyebrow)}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance text-2xl font-semibold tracking-[-0.02em] text-sr-text sm:text-3xl lg:text-[40px] lg:leading-[1.15]"
          >
            {t(VC.heading)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-pretty text-[14px] leading-relaxed text-sr-text-2 sm:text-[15px]"
          >
            {t(VC.sub)}
          </motion.p>
        </div>

        {/* ============ VC Portfolio Panel · 一张大卡 ============ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="sr-highlight-top relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm"
        >
          {/* ---------- ① Header bar ---------- */}
          <div className="flex items-center justify-between border-b border-sr-line bg-sr-bg-3/30 px-5 py-3 sm:px-6">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-muted">
              {lang === "zh" ? "投后增长面板" : "VC portfolio panel"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/20 bg-sr-red/[0.05] px-2 py-0.5 text-[10px] font-semibold text-sr-red">
              <ShieldCheck className="size-2.5" strokeWidth={2.5} />
              {lang === "zh" ? "投后专属" : "For VCs"}
            </span>
          </div>

          {/* ---------- ② AUDIENCE · 适用对象 ---------- */}
          <div className="px-5 py-5 sm:px-6">
            <LayerLabel
              tag="AUDIENCE"
              label={lang === "zh" ? "适用对象" : "Built for"}
            />
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {AUDIENCE.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex items-center gap-2.5 rounded-lg border border-sr-line bg-sr-bg-3/20 px-3 py-2.5"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-md border border-sr-line bg-white text-sr-red">
                    <a.Icon className="size-3.5" />
                  </span>
                  <span className="text-[12.5px] font-medium leading-snug text-sr-text">
                    {lang === "zh" ? a.label.zh : a.label.en}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------- ③ DELIVERABLES · 5 列交付卡 ---------- */}
          <div className="border-t border-sr-line bg-sr-bg-3/15 px-5 py-5 sm:px-6">
            <LayerLabel
              tag="DELIVERABLES"
              label={
                lang === "zh"
                  ? "5 类标准化交付物"
                  : "5 standardized deliverables"
              }
              rightSlot={
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-muted">
                  01 → 05
                </span>
              }
            />
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {VC.items.map((it, i) => {
                const meta = ITEM_META[i] ?? ITEM_META[0];
                const Icon = meta.Icon;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                    className="group flex flex-col rounded-lg border border-sr-line bg-white p-3 transition-all hover:border-sr-line-2 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-sr-muted">
                        {num}
                      </span>
                      <span className="grid size-7 place-items-center rounded-md border border-sr-line bg-sr-bg-3/55 text-sr-red transition-colors group-hover:border-sr-red/30 group-hover:bg-sr-red group-hover:text-white">
                        <Icon className="size-3.5" />
                      </span>
                    </div>
                    <h3 className="mt-3 text-[12.5px] font-semibold leading-tight tracking-tight text-sr-text">
                      {t(it.title)}
                    </h3>
                    <p className="mt-1.5 line-clamp-3 flex-1 text-[11px] leading-relaxed text-sr-text-2">
                      {t(it.desc)}
                    </p>
                    <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-md border border-sr-red/20 bg-sr-red/[0.05] px-1.5 py-0.5 text-[10px] font-medium text-sr-red">
                      <span className="size-1 rounded-full bg-sr-red" />
                      {t(meta.output)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ---------- ④ CORE BAR · 数据语言承诺 ---------- */}
          <div className="flex items-start gap-3 border-t border-sr-line bg-white px-5 py-4 sm:items-center sm:px-6">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-sr-red/20 bg-sr-red/[0.06] text-sr-red">
              <Sparkles className="size-3.5" strokeWidth={2.2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-red">
                {lang === "zh" ? "核心定位" : "Core positioning"}
              </p>
              <p className="mt-1 text-pretty text-[13px] font-medium leading-relaxed tracking-tight text-sr-text sm:text-[14px]">
                {CORE_LINE}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
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
