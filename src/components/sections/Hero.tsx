"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { HERO } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * B2B Hero — 借鉴 Stripe / Linear / Anthropic：
 * - 浅底 + 大字黑色标题 + 仅在一处用红色强调
 * - 短副标题（≤32 字）+ 双 CTA（主 / 次）
 * - Badge 替换为 "Trusted by …" 信任前置
 * - 不再使用 aurora / grid 满屏背景
 */
export function Hero() {
  const { lang, t } = useLang();
  const titleLines = lang === "zh" ? HERO.titleZh : HERO.titleEn;

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* 极淡米色色块，仅在右上角作为视觉锚，不再"满屏氛围" */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-sr-cream/60 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* 信任 badge —— 替代之前的"系统介绍"badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-sr-line bg-white px-3.5 py-1.5 text-xs font-medium text-sr-text-2 shadow-sm"
          >
            <span className="size-1.5 rounded-full bg-sr-red sr-pulse" />
            {t(HERO.badge)}
          </motion.div>

          {/* 标题 — 纯黑大字，最后一行用红色重点 */}
          <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-sr-text sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
            {titleLines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.07,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="block"
              >
                {i === titleLines.length - 1 ? (
                  <span className="text-sr-red">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-sr-text-2 sm:text-base"
          >
            {t(HERO.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <LinkButton
              href="/apply"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="size-4" />}
            >
              {t(HERO.primaryCta)}
            </LinkButton>
            <LinkButton
              href="#cases"
              variant="ghost"
              size="lg"
              iconLeft={<PlayCircle className="size-4" />}
            >
              {t(HERO.secondaryCta)}
            </LinkButton>
          </motion.div>

          {/* 信任行 — 取代 4 个 KPI block + 跑马灯，企业风更克制 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 text-xs text-sr-muted"
          >
            {t(HERO.trustline)}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
