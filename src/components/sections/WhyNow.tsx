"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_NOW } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * WhyNow — 紧迫感 mini-section（紧贴 Pricing 之前）
 *
 * 视觉策略：
 * - 浅底 + 3 个深色 KPI 卡（黑底白字大数字），形成强烈对比
 * - 顶部装饰红色细线，呼应全站「sr-highlight-top」语言
 * - 数字用 mono 大字号，强化「数据感」
 *
 * 节奏理由：
 * - 紧贴 Pricing 之前出现，用「我们的速度 vs 传统营销」对比制造急迫感
 * - 同时引出 100% 合规承诺，化解 B2B 客户「品牌风险」的最后顾虑
 * - 不自带 CTA：让访客自然下滑到 Pricing 看价格，避免与后续 Pricing / FinalCTA
 *   的 CTA 形成三连重复，保持节奏干净
 */
export function WhyNow() {
  const { t } = useLang();

  return (
    <section id="why-now" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(WHY_NOW.eyebrow)}
          title={t(WHY_NOW.heading)}
          sub={t(WHY_NOW.sub)}
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          {WHY_NOW.metrics.map((m, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-sr-text bg-sr-text p-6 text-white shadow-lg transition-shadow hover:shadow-xl sm:p-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sr-red/60 to-transparent"
              />
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {String(i + 1).padStart(2, "0")}
                <span className="ml-1.5 text-white/25">/ 03</span>
              </span>
              <div className="mt-6 font-mono text-[32px] font-semibold leading-none tracking-tight text-white sm:text-[38px]">
                {t(m.kpi)}
              </div>
              <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-white">
                {t(m.title)}
              </h3>
              <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-white/65">
                {t(m.desc)}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
