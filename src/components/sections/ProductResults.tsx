"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  Wand2,
  TrendingUp,
  Target as TargetIcon,
  Timer,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCT_RESULTS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * 第 6.3 屏（飞书：三类产品结果卡）
 *
 * 视觉策略：
 *   - 顶部 tag + icon
 *   - 主 KPI（大字红色）+ 副 KPI（小字）+ 测试周期
 *   - 目标 / 关键发现 / 建议放大平台
 *
 * 数据来源：飞书 Case 1/2/3 表格的真实 Sample Results
 */
const ITEM_ICONS = [Bot, Building2, Wand2];

export function ProductResults() {
  const { t, lang } = useLang();

  return (
    <section
      id="product-results"
      className="relative scroll-mt-24 bg-sr-bg-3/45 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(PRODUCT_RESULTS.eyebrow)}
          title={t(PRODUCT_RESULTS.heading)}
          sub={t(PRODUCT_RESULTS.sub)}
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
          {PRODUCT_RESULTS.items.map((it, i) => {
            const Icon = ITEM_ICONS[i] ?? Bot;
            return (
              <motion.article
                key={it.tag}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative flex flex-col rounded-2xl border border-sr-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* 顶部 tag + icon */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-sr-text px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    {it.tag}
                  </span>
                  <span className="grid size-10 place-items-center rounded-xl border border-sr-line bg-sr-bg-3/50 text-sr-red">
                    <Icon className="size-5" />
                  </span>
                </div>

                {/* KPI hero（主 + 副 + 周期） */}
                <div className="mt-5 rounded-2xl border border-sr-text bg-sr-text p-4 text-white">
                  <KpiNumber
                    value={it.kpi.primary.value}
                    unit={t(it.kpi.primary.unit)}
                  />
                  <p className="mt-1 text-[12px] font-medium text-white/75">
                    {t(it.kpi.primary.label)}
                  </p>

                  <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/15 pt-3">
                    <div>
                      <p className="font-mono text-lg font-semibold text-sr-red">
                        {it.kpi.secondary.value}
                        <span className="ml-0.5 text-xs font-medium text-white/70">
                          {t(it.kpi.secondary.unit)}
                        </span>
                      </p>
                      <p className="text-[10.5px] uppercase tracking-[0.14em] text-white/55">
                        {t(it.kpi.secondary.label)}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10.5px] font-medium text-white/80">
                      <Timer className="size-3" />
                      {t(it.kpi.cycle)}
                    </span>
                  </div>
                </div>

                {/* 目标 */}
                <div className="mt-6 flex items-center gap-2">
                  <TargetIcon className="size-3.5 text-sr-muted" />
                  <p className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-sr-muted">
                    {lang === "zh" ? "目标" : "Goal"}
                  </p>
                </div>
                <p className="mt-1.5 text-[14px] font-semibold tracking-tight text-sr-text">
                  {t(it.goal)}
                </p>

                {/* 关键发现 */}
                <div className="mt-5 flex-1">
                  <p className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-sr-red">
                    {lang === "zh" ? "关键发现" : "Key finding"}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-sr-text-2">
                    {t(it.finding)}
                  </p>
                </div>

                {/* 建议放大平台 */}
                <div className="mt-5 inline-flex items-center gap-2 self-start rounded-xl border border-sr-line bg-sr-bg-3/60 px-3.5 py-2.5 text-[12.5px] font-medium text-sr-text">
                  <TrendingUp className="size-3.5 text-sr-red" />
                  {t(it.scale)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** 主 KPI 数字渲染 */
function KpiNumber({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span
        className={cn(
          "font-mono font-semibold tracking-tight text-white",
          value.length > 5 ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
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
