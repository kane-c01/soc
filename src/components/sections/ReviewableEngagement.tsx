"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Target,
  Hash,
  MessageSquareText,
  Ban,
  Compass,
  X,
  FileText,
  ListX,
  Layers,
  GitBranch,
  Check,
  ShieldCheck,
  Rocket,
  Activity,
  ArrowRight,
  Lock,
  Eye,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { REVIEW } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * 第 4 屏 — 可审核触达（一图看懂版）
 *
 * 设计目标：让用户一张图就能 grasp 整个上线前审核流程
 *
 * 结构（三层 dashboard 大卡）：
 *   ① 紧凑标题区        — eyebrow + 标题 + 描述 + 三承诺 pills
 *   ② 一张"审核控制台"大卡：
 *       - TOP STRIP   : 4 步上线流程 timeline（定义 → 审核(高亮) → 上线 → 监测）
 *       - MAIN BOARD  : 左 = A · 6 项可审核清单（带 ✓ 状态）
 *                       右 = B · 4 类交付物（mock 文档卡）
 *       - BOTTOM STRIP: 承诺横条 + 追溯标签
 */
const ITEM_ICONS = [Globe2, Target, Hash, MessageSquareText, Ban, Compass];
const DELIVERABLE_ICONS = [FileText, ListX, Layers, GitBranch];

export function ReviewableEngagement() {
  const { t, lang } = useLang();

  /** 4 步上线流程；其中 i === 1 为审核步骤（红色高亮） */
  const STEPS = [
    { num: "01", label: { zh: "定义需求", en: "Define" }, icon: Compass },
    { num: "02", label: { zh: "客户审核", en: "Review" }, icon: ShieldCheck },
    { num: "03", label: { zh: "上线触达", en: "Launch" }, icon: Rocket },
    { num: "04", label: { zh: "全程监测", en: "Monitor" }, icon: Activity },
  ];

  return (
    <section id="review" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container className="relative">
        {/* ============ ① 紧凑标题区 ============ */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/25 bg-sr-red/[0.06] px-2.5 py-0.5 text-[11px] font-semibold tracking-tight text-sr-red"
          >
            <span className="font-mono text-[10px] font-bold tracking-[0.04em]">02</span>
            <span className="text-sr-red/40">·</span>
            {t(REVIEW.eyebrow)}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-balance text-[22px] font-semibold tracking-[-0.02em] text-sr-text sm:text-[26px]"
          >
            {t(REVIEW.heading)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 max-w-xl text-pretty text-[13px] leading-relaxed text-sr-text-2"
          >
            {t(REVIEW.sub)}
          </motion.p>

          {/* Inline 三承诺 pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-1.5"
          >
            {REVIEW.pledges.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/20 bg-sr-red/[0.05] px-2.5 py-1 text-[11.5px] font-medium text-sr-red"
              >
                <X className="size-3" strokeWidth={3} />
                {t(p)}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ============ ② 一张"审核控制台"大卡 ============ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="sr-highlight-top relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm sm:mt-12"
        >
          {/* ---------- TOP STRIP : 4 步上线流程 ---------- */}
          <div className="border-b border-sr-line bg-sr-bg-3/30 px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-muted">
                {lang === "zh" ? "上线流程" : "Launch flow"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/20 bg-sr-red/[0.05] px-2 py-0.5 text-[10px] font-semibold text-sr-red">
                <Lock className="size-2.5" strokeWidth={2.5} />
                {lang === "zh" ? "客户审批后才上线" : "Client-approved"}
              </span>
            </div>

            <ol className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const isReview = i === 1;
                const isLast = i === STEPS.length - 1;
                return (
                  <li
                    key={i}
                    className="relative flex items-center gap-2.5 sm:gap-3"
                  >
                    <span
                      className={cn(
                        "grid size-7 shrink-0 place-items-center rounded-full border transition-shadow",
                        isReview
                          ? "border-sr-red bg-sr-red text-white shadow-[0_0_0_3px_rgba(204,10,13,0.12)]"
                          : "border-sr-line bg-white text-sr-text-2",
                      )}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-sr-muted">
                        {s.num}
                      </p>
                      <p
                        className={cn(
                          "truncate text-[12.5px] font-semibold tracking-tight",
                          isReview ? "text-sr-red" : "text-sr-text",
                        )}
                      >
                        {t(s.label)}
                      </p>
                    </div>
                    {!isLast && (
                      <ArrowRight
                        aria-hidden
                        className="hidden size-3.5 shrink-0 text-sr-muted/60 sm:block"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* ---------- MAIN BOARD : 左 6 项清单 / 右 4 类交付物 ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* ===== LEFT 60% : A · 6 项可审核清单 ===== */}
            <div className="border-b border-sr-line p-5 sm:p-6 lg:col-span-3 lg:border-b-0 lg:border-r">
              <BoardLabel
                num="A"
                label={
                  lang === "zh"
                    ? "上线前 6 项可审核清单"
                    : "6 reviewable items"
                }
                rightSlot={
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-sr-success">
                    <Check className="size-2.5" strokeWidth={3} />
                    6 / 6
                  </span>
                }
              />

              <ul className="mt-4 space-y-1.5">
                {REVIEW.items.map((it, i) => {
                  const Icon = ITEM_ICONS[i] ?? Globe2;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="group flex items-center gap-3 rounded-lg border border-sr-line bg-sr-bg-3/15 px-3 py-2.5 transition-colors hover:border-sr-line-2 hover:bg-sr-bg-3/35"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-md border border-sr-line bg-white text-sr-red transition-colors group-hover:border-sr-red/30 group-hover:bg-sr-red group-hover:text-white">
                        <Icon className="size-3" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-[9.5px] font-semibold tracking-[0.18em] text-sr-muted">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="truncate text-[13px] font-semibold tracking-tight text-sr-text">
                            {t(it.title)}
                          </h4>
                        </div>
                        <p className="mt-0.5 truncate text-[11.5px] leading-relaxed text-sr-text-2">
                          {t(it.desc)}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="grid size-5 shrink-0 place-items-center rounded-full border border-sr-success-line bg-sr-success-soft text-sr-success"
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* ===== RIGHT 40% : B · 4 类交付物预览 ===== */}
            <div className="bg-sr-bg-3/12 p-5 sm:p-6 lg:col-span-2">
              <BoardLabel
                num="B"
                label={
                  lang === "zh"
                    ? "审核后交付 · 4 类物料"
                    : "4 deliverables"
                }
                rightSlot={
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sr-muted">
                    {t(REVIEW.deliverables.eyebrow)}
                  </span>
                }
              />

              <div className="mt-4 grid grid-cols-2 gap-2">
                {REVIEW.deliverables.items.map((d, i) => {
                  const Icon = DELIVERABLE_ICONS[i] ?? FileText;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                      className="group flex flex-col rounded-lg border border-sr-line bg-white p-2.5 transition-all hover:border-sr-line-2 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="grid size-6 place-items-center rounded-md border border-sr-line bg-sr-bg-3/55 text-sr-red transition-colors group-hover:bg-sr-red group-hover:text-white">
                          <Icon className="size-3" />
                        </span>
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-sr-muted">
                          v1.{i + 1}
                        </span>
                      </div>
                      <h5 className="mt-2 text-[11.5px] font-semibold leading-snug tracking-tight text-sr-text">
                        {t(d.title)}
                      </h5>
                      <p className="mt-0.5 line-clamp-2 text-[10.5px] leading-snug text-sr-text-2">
                        {t(d.desc)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ---------- BOTTOM STRIP : 承诺横条 ---------- */}
          <div className="flex flex-col items-start justify-between gap-2 border-t border-sr-line bg-sr-bg-3/30 px-5 py-3 sm:flex-row sm:items-center sm:px-6">
            <p className="text-[11.5px] leading-relaxed text-sr-text-2">
              {lang === "zh"
                ? "从话术 → 审核 → 上线 → 监测，每一步都可被追溯。"
                : "Messaging → review → launch → monitoring — every step traceable."}
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sr-muted">
              <span className="inline-flex items-center gap-1">
                <Eye className="size-2.5" />
                {lang === "zh" ? "可审核" : "Reviewable"}
              </span>
              <span className="size-1 rounded-full bg-sr-line-2" aria-hidden />
              <span className="inline-flex items-center gap-1 text-sr-success">
                <Check className="size-2.5" strokeWidth={3} />
                {lang === "zh" ? "可追溯" : "Auditable"}
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/**
 * 大卡内左右两栏的小标签
 * 胶囊编号 + 标题 + 右侧自定义 slot + 末尾细线
 */
function BoardLabel({
  num,
  label,
  rightSlot,
}: {
  num: string;
  label: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-sr-text font-mono text-[10px] font-semibold text-white">
        {num}
      </span>
      <h3 className="text-[12.5px] font-semibold tracking-tight text-sr-text">
        {label}
      </h3>
      <span className="mx-1 h-px flex-1 bg-sr-line" />
      {rightSlot}
    </div>
  );
}
