"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LinkButton } from "@/components/ui/Button";
import { PRICING, NAV } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow={t(PRICING.eyebrow)}
          title={<span className="sr-gradient-text">{t(PRICING.heading)}</span>}
          sub={t(PRICING.sub)}
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {PRICING.plans.map((plan, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-2xl p-7 sm:p-8",
                plan.highlight
                  ? "border border-sr-line-2 bg-gradient-to-b from-sr-bg-3 to-sr-bg-2 shadow-[0_30px_80px_-30px_rgba(204,10,13,0.45)]"
                  : "border border-sr-line bg-sr-bg-2",
              )}
            >
              {plan.highlight && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-32 -right-16 size-72 rounded-full bg-gradient-to-br from-sr-orange/25 to-sr-red/30 blur-3xl"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sr-orange to-transparent"
                  />
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sr-orange to-sr-red px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                    <Sparkles className="size-3" />
                    Recommended
                  </span>
                </>
              )}

              <h3 className="text-2xl font-semibold tracking-tight text-sr-text">
                {t(plan.name)}
              </h3>
              <p className="mt-1 text-sm text-sr-text-2">{t(plan.tagline)}</p>

              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-sr-line-2 bg-white/[0.03] px-3 py-1.5 text-xs text-sr-text-2">
                {t(plan.duration)}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-sm text-sr-text">
                    <span
                      className={cn(
                        "mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full",
                        plan.highlight
                          ? "bg-gradient-to-br from-sr-orange to-sr-red text-white"
                          : "border border-sr-line-2 bg-white/[0.03] text-sr-orange",
                      )}
                      style={{ width: 18, height: 18 }}
                    >
                      <Check className="size-3" />
                    </span>
                    <span className="text-sr-text-2">{t(b)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <LinkButton
                  href="#apply"
                  variant={plan.highlight ? "primary" : "ghost"}
                  size="md"
                  className="w-full"
                  iconRight={<ArrowRight className="size-4" />}
                >
                  {t(NAV.cta)}
                </LinkButton>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
