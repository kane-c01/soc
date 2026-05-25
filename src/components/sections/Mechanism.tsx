"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MECH } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * How we work — 4 周时间线
 *
 * 设计目标：把原本抽象的 "Discover → Engage → Route" 翻译为「合作起来每一周
 * 会发生什么 + 你能拿到什么交付物」，这是 B2B 客户最想看的信息。
 */
export function Mechanism() {
  const { t } = useLang();

  return (
    <section id="mechanism" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow={t(MECH.eyebrow)}
          title={t(MECH.heading)}
          sub={t(MECH.sub)}
        />

        <div className="mx-auto mt-14 max-w-6xl">
          {/* 4 步流程网格 */}
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {MECH.steps.map((step, i) => (
              <motion.li
                key={step.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col rounded-2xl border border-sr-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* 顶部红色短线 + step 编号 */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-5 bg-sr-red/60" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sr-muted">
                    Step {step.step}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-sr-text sm:text-lg">
                  {t(step.title)}
                </h3>

                <p className="mt-3 text-[13.5px] leading-relaxed text-sr-text-2">
                  {t(step.desc)}
                </p>

                <ul className="mt-5 space-y-2 border-t border-sr-line pt-4">
                  {step.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-[12.5px] leading-relaxed text-sr-text-2"
                    >
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-sr-red" />
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
