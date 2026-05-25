"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Target,
  Hash,
  MessageSquareText,
  Ban,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { REVIEW } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 4 屏（飞书：找到人之后，用可审核的方式触达他们）
 *
 * 视觉策略：
 *   左侧：3 段强承诺（No spam · No impersonation · No fake reviews）
 *         + 大盾牌 icon，配米色背景做"可信任声明"卡
 *   右侧：6 项可审核内容网格
 *
 * 设计灵感：Stripe Trust 页 + Anthropic Safety 页
 */
const ITEM_ICONS = [Globe2, Target, Hash, MessageSquareText, Ban, Compass];

export function ReviewableEngagement() {
  const { t } = useLang();

  return (
    <section
      id="review"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(REVIEW.eyebrow)}
          title={t(REVIEW.heading)}
          sub={t(REVIEW.sub)}
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-12">
          {/* 左侧 · 强信任承诺卡 */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-sr-text bg-sr-text p-6 text-white shadow-lg sm:p-7 lg:col-span-5"
          >
            {/* 角落红色光晕 */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-sr-red/25 blur-3xl"
            />

            <div className="relative">
              <span className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-sr-red">
                <ShieldCheck className="size-5" />
              </span>

              {/* 三段式强承诺 — No spam. No impersonation. No fake reviews. */}
              <div className="mt-7 space-y-2">
                {REVIEW.pledges.map((p, i) => (
                  <p
                    key={i}
                    className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl"
                  >
                    <span className="text-sr-red">·</span> {t(p)}
                  </p>
                ))}
              </div>

              <p className="mt-7 text-[13.5px] leading-relaxed text-white/70">
                {t(REVIEW.pledgeBody)}
              </p>
            </div>
          </motion.aside>

          {/* 右侧 · 6 项可审核内容 */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {REVIEW.items.map((it, i) => {
                const Icon = ITEM_ICONS[i] ?? Globe2;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="group relative flex h-full flex-col rounded-2xl border border-sr-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sr-line-2 hover:shadow-md"
                  >
                    <span className="grid size-9 place-items-center rounded-lg border border-sr-line bg-sr-bg-3/55 text-sr-red">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-tight text-sr-text">
                      {t(it.title)}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-sr-text-2">
                      {t(it.desc)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
