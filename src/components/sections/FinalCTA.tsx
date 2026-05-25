"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * Final CTA — 黑色锚定卡片
 * 在浅色页面尾部用一块「暖黑色 + 红色 accent」收尾，跟 Pricing 推荐档呼应
 */
export function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-sr-text bg-sr-text text-white shadow-xl"
        >
          {/* 角落红色光晕 — 克制 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-20 size-72 rounded-full bg-sr-red/20 blur-3xl"
          />

          <div className="relative flex flex-col items-center px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
              <span className="h-px w-6 bg-sr-red" />
              {t(FINAL_CTA.eyebrow)}
            </span>

            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              {t(FINAL_CTA.heading)}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/75">
              {t(FINAL_CTA.body)}
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <LinkButton
                href="/apply"
                variant="primary"
                size="lg"
                className="border-white/20 bg-white text-sr-text hover:bg-white/90"
                iconRight={<ArrowRight className="size-4" />}
              >
                {t(FINAL_CTA.primary)}
              </LinkButton>
              <LinkButton
                href="/faq"
                variant="ghost"
                size="lg"
                className="border-white/25 bg-transparent text-white hover:bg-white/[0.08]"
                iconLeft={<MessageCircleQuestion className="size-4" />}
              >
                {t(FINAL_CTA.secondary)}
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
