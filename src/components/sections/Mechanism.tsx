"use client";

import { motion } from "framer-motion";
import { Telescope, Crosshair, ListChecks } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MECH } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 3 屏（飞书：我们不是先投广告，而是先找到真实需求场景）
 *
 * 三步发现机制：
 *   Discover · 找场景 → Identify · 找用户 → Prioritize · 找切入口
 *
 * 底部 outputs 网格：客户真正拿到的产出（优先平台 / 高价值竞品场景 / 高意向关键词 …）
 */
const STEP_ICONS = [Telescope, Crosshair, ListChecks];

export function Mechanism() {
  const { t } = useLang();

  return (
    <section id="mechanism" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(MECH.eyebrow)}
          title={t(MECH.heading)}
          sub={t(MECH.sub)}
        />

        {/* 三步流程网格 */}
        <div className="mx-auto mt-14 max-w-6xl">
          <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
            {MECH.steps.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? Telescope;
              return (
                <motion.li
                  key={step.key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative flex flex-col rounded-2xl border border-sr-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* 顶部 step 编号 + icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-5 bg-sr-red/60" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sr-muted">
                        Step {step.step}
                      </span>
                    </div>
                    <span className="grid size-10 place-items-center rounded-xl border border-sr-line bg-sr-bg-3/50 text-sr-red">
                      <Icon className="size-4" />
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-sr-text sm:text-xl">
                    {t(step.title)}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-sr-text-2">
                    {t(step.desc)}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-sr-line pt-5">
                    {step.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-sr-text-2"
                      >
                        <span className="mt-[7px] size-1 shrink-0 rounded-full bg-sr-red" />
                        <span>{t(b)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}
          </ol>
        </div>

      </Container>
    </section>
  );
}
