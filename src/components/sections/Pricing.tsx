"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LinkButton } from "@/components/ui/Button";
import { PRICING } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Pricing — 飞书第 7 屏「合作模式」
 *
 * 视觉策略：
 * - Signal Test：黑底白字，强调「先验证」
 * - Growth Sprint：白底浅边，强调「验证后放大」
 */
export function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(PRICING.eyebrow)}
          title={t(PRICING.heading)}
          sub={t(PRICING.sub)}
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {PRICING.plans.map((plan, i) => {
            const isDark = plan.highlight;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className={cn(
                  "relative flex flex-col rounded-2xl p-7 sm:p-8",
                  isDark
                    ? "border border-sr-text bg-sr-text text-white shadow-lg"
                    : "border border-sr-line bg-white shadow-sm",
                )}
              >
                {isDark && plan.recommendedLabel && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-sr-red px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                    {t(plan.recommendedLabel)}
                  </span>
                )}

                <h3
                  className={cn(
                    "text-2xl font-semibold tracking-tight",
                    isDark ? "text-white" : "text-sr-text",
                  )}
                >
                  {t(plan.name)}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    isDark ? "text-white/70" : "text-sr-text-2",
                  )}
                >
                  {t(plan.tagline)}
                </p>

                <div
                  className={cn(
                    "mt-5 inline-flex w-fit items-center gap-2 rounded-lg px-3 py-1.5 text-xs",
                    isDark
                      ? "border border-white/15 bg-white/[0.06] text-white/85"
                      : "border border-sr-line-2 bg-sr-bg-3/40 text-sr-text-2",
                  )}
                >
                  {t(plan.duration)}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        isDark ? "text-white/90" : "text-sr-text-2",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid shrink-0 place-items-center rounded-full",
                          isDark
                            ? "bg-sr-red text-white"
                            : "bg-sr-bg-3 text-sr-red",
                        )}
                        style={{ width: 18, height: 18 }}
                      >
                        <Check className="size-3" />
                      </span>
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <LinkButton
                    href={plan.ctaHref}
                    variant={isDark ? "ghost" : "primary"}
                    size="md"
                    className={cn(
                      "w-full",
                      isDark &&
                        "border-white/25 bg-white text-sr-text hover:bg-white/90",
                    )}
                    iconRight={<ArrowRight className="size-4" />}
                  >
                    {t(plan.cta)}
                  </LinkButton>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-sr-muted">
          {t({
            zh: "提交产品官网、目标市场和竞品链接后，我们会先判断是否适合做 Signal Test，再给出具体测试建议。",
            en: "Submit your website, target market and competitors. We'll first assess whether a Signal Test makes sense, then recommend a concrete testing plan.",
          })}
        </p>
      </Container>
    </section>
  );
}
