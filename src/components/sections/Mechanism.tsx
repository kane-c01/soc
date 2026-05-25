"use client";

import { motion } from "framer-motion";
import { Telescope, Crosshair, ListChecks, ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MECH } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 3 屏 · 一张图看清整套机制
 *
 * 单卡 horizontal flow：
 *   Discover  ──▶  Identify  ──▶  Prioritize  ──▶  Outputs (6 chip)
 *
 * 步骤之间有一条带流动红点的连接线，
 * 末端是输出产物 chip 行，
 * 底部一行 core modules 标签。
 */
const STEP_ICONS = [Telescope, Crosshair, ListChecks];

export function Mechanism() {
  const { t, lang } = useLang();
  const steps = MECH.steps;

  return (
    <section id="mechanism" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          step="01"
          eyebrow={t(MECH.eyebrow)}
          title={t(MECH.heading)}
          sub={t(MECH.sub)}
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[24px] border border-sr-line bg-white shadow-[0_1px_0_rgba(33,19,15,0.04),0_24px_60px_-22px_rgba(33,19,15,0.18)]"
        >
          {/* 装饰：浅米色径向背景 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-sr-cream/55 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sr-red/40 to-transparent"
          />

          {/* ─────────── 3 步流水线 ─────────── */}
          <div className="relative grid grid-cols-1 gap-6 px-6 py-9 md:grid-cols-[1fr_28px_1fr_28px_1fr] md:items-stretch md:gap-0 md:px-10">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? Telescope;
              return (
                <div key={step.key} className="contents">
                  <StepNode
                    icon={<Icon className="size-5" />}
                    step={step.step}
                    title={t(step.title)}
                    desc={t(step.desc)}
                    stepLabel={lang === "zh" ? "步骤" : "Step"}
                    delay={i * 0.1}
                  />
                  {i < steps.length - 1 && <Connector delay={i * 0.1 + 0.2} />}
                </div>
              );
            })}
          </div>

          {/* ─────────── Outputs 区 ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="relative border-t border-sr-line bg-gradient-to-b from-white to-sr-bg-3/35 px-6 py-7 md:px-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid size-6 place-items-center rounded-md bg-sr-red text-white">
                <Sparkles className="size-3" />
              </span>
              <span className="text-[12.5px] font-semibold text-sr-text">
                {t(MECH.outputs.title)}
              </span>
              <span className="h-px flex-1 bg-sr-line" />
              <span className="font-mono text-[10.5px] text-sr-muted">
                {MECH.outputs.items.length} {lang === "zh" ? "项交付" : "deliverables"}
              </span>
            </div>

            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {MECH.outputs.items.map((it, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-2 rounded-lg border border-sr-line bg-white px-3 py-2 text-[12.5px] font-medium leading-snug text-sr-text shadow-sm"
                >
                  <span className="size-1 shrink-0 rounded-full bg-sr-red" />
                  {t(it)}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ─────────── Core modules pill 行 ─────────── */}
          <div className="relative flex flex-wrap items-center justify-center gap-2 border-t border-sr-line bg-white/60 px-6 py-4 text-center">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-sr-muted">
              {t(MECH.coreModules.label)}
            </span>
            <span aria-hidden className="mx-1 h-3 w-px bg-sr-line-2" />
            {MECH.coreModules.items.map((m, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-sr-line bg-white px-2.5 py-0.5 font-mono text-[10.5px] text-sr-text-2"
              >
                {t(m)}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/** 单个步骤节点 */
function StepNode({
  icon,
  step,
  title,
  desc,
  stepLabel,
  delay,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  desc: string;
  stepLabel: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center text-center"
    >
      {/* icon 圆 */}
      <div className="relative">
        {/* 双层 ping ring 增加层次 */}
        <span
          aria-hidden
          className="absolute -inset-2 rounded-2xl bg-sr-red/[0.06] blur-xl"
        />
        <span className="relative grid size-14 place-items-center rounded-2xl border border-sr-line bg-white text-sr-red shadow-sm">
          {icon}
        </span>
      </div>

      {/* step 编号 */}
      <span className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-sr-muted">
        {stepLabel} · {step}
      </span>

      {/* title */}
      <h3 className="mt-2 text-[16px] font-semibold tracking-tight text-sr-text sm:text-[17px]">
        {title}
      </h3>

      {/* desc */}
      <p className="mt-2 max-w-[230px] text-[12.5px] leading-relaxed text-sr-text-2">
        {desc}
      </p>
    </motion.div>
  );
}

/** 节点之间的连接线 — 桌面横向 / 手机纵向 */
function Connector({ delay }: { delay: number }) {
  return (
    <>
      {/* 桌面横向连接：水平线 + 流动小红点 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative hidden items-center justify-center md:flex"
      >
        <div className="relative h-px w-full bg-gradient-to-r from-sr-line via-sr-red/35 to-sr-line">
          <motion.span
            aria-hidden
            className="absolute top-1/2 -translate-y-1/2 size-2 rounded-full bg-sr-red shadow-[0_0_12px_rgba(204,10,13,0.45)]"
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
              delay,
            }}
          />
        </div>
        <ArrowRight
          aria-hidden
          className="pointer-events-none absolute right-[-6px] size-3.5 text-sr-red"
        />
      </motion.div>

      {/* 手机纵向连接：垂直线 + 向下箭头 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center md:hidden"
      >
        <div className="h-6 w-px bg-gradient-to-b from-sr-line via-sr-red/35 to-sr-line" />
        <ArrowDown className="size-3.5 text-sr-red" />
      </motion.div>
    </>
  );
}
