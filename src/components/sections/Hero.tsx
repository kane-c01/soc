"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { PlatformIcon } from "@/components/ui/PlatformIcons";
import { PlatformMarquee } from "@/components/ui/PlatformMarquee";
import { HERO } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { lang, t } = useLang();
  const titleLines = lang === "zh" ? HERO.titleZh : HERO.titleEn;

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      {/* Aurora glow */}
      <div aria-hidden className="sr-aurora" />
      {/* Subtle grid */}
      <div aria-hidden className="absolute inset-0 -z-10 sr-grid" />
      {/* Top gradient line (Linear hallmark) */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sr-orange/50 to-transparent" />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-sr-line-2 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-sr-text-2 backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-sr-orange" />
            {t(HERO.badge)}
          </motion.div>

          <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-sr-text sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
            {titleLines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                className="block"
              >
                {i === titleLines.length - 1 ? (
                  <span className="sr-gradient-text">{line}</span>
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
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-sr-text-2 sm:text-lg"
          >
            {t(HERO.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <LinkButton
              href="#apply"
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

          {/* Platform marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-12 flex w-full max-w-3xl flex-col items-center gap-3"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-sr-muted">
              {lang === "zh" ? "覆盖平台" : "Platforms"}
            </span>
            <PlatformMarquee platforms={HERO.platforms} />
          </motion.div>
        </div>

        {/* Hero visual: a Linear-style "dashboard" glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-b from-sr-orange/25 via-sr-red/15 to-transparent blur-2xl" />
          <HeroDashboardCard />
        </motion.div>

        {/* KPI strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sr-line bg-sr-line text-center md:grid-cols-4"
        >
          {HERO.metrics.map((m) => (
            <div
              key={m.kpi}
              className="bg-sr-bg-2 p-6 transition hover:bg-sr-bg-3"
            >
              <div className="font-mono text-3xl font-semibold tracking-tight text-sr-text sm:text-4xl">
                {m.kpi}
              </div>
              <div className="mt-1 text-xs leading-snug text-sr-text-2 sm:text-sm">
                {t(m.label)}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function HeroDashboardCard() {
  return (
    <div className="sr-glass-strong sr-highlight-top relative overflow-hidden rounded-2xl shadow-[0_30px_120px_-30px_rgba(204,10,13,0.55)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-sr-line px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f56]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-xs text-sr-muted">socialrouter.ai / dashboard</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-sr-text-2">
          <span className="size-1.5 rounded-full bg-emerald-400 sr-pulse" />
          Live
        </span>
      </div>

      {/* Dashboard body */}
      <div className="grid grid-cols-12 gap-4 p-5 sm:p-6">
        {/* Left column: feed of signals */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-3">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sr-muted">
            Signal feed
          </div>
          <SignalRow
            platform="Reddit"
            handle="r/SaaS"
            text='"Anyone using an AI tool for outbound that integrates with Salesforce?"'
            tag="Intent · Comparison"
            tagColor="from-sr-orange/30 to-sr-red/30"
          />
          <SignalRow
            platform="X"
            handle="@growth_jen"
            text='"Switched off [competitor] last week. Need something with better Notion sync."'
            tag="Intent · Alternative"
            tagColor="from-sr-red/30 to-fuchsia-500/20"
          />
          <SignalRow
            platform="YouTube"
            handle="Best AI SDR tools 2026"
            text='"Comment thread asking for pricing & free trial."'
            tag="Intent · Pricing"
            tagColor="from-emerald-400/20 to-sr-orange/20"
          />
          <SignalRow
            platform="LinkedIn"
            handle="GTM Operator"
            text={`"What's your team using for AI meeting follow-up?"`}
            tag="Intent · Tool hunt"
            tagColor="from-sky-400/20 to-sr-red/20"
          />
        </div>

        {/* Right column: KPI gauges */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
          <div className="text-[11px] uppercase tracking-[0.18em] text-sr-muted">
            This week
          </div>
          <GaugeCard label="Qualified touches" value="2,481" trend="+18%" />
          <GaugeCard label="Click-through to site" value="612" trend="+24%" />
          <GaugeCard label="Waitlist signups" value="93" trend="+31%" />

          <div className="mt-1 rounded-xl border border-sr-line bg-white/[0.02] p-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-sr-muted">
              Top contexts
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["competitor-thread", "tool-hunt", "pricing-q", "integration-q", "alt-search"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-md border border-sr-line bg-white/[0.03] px-2 py-1 text-[11px] text-sr-text-2"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignalRow({
  platform,
  handle,
  text,
  tag,
  tagColor,
}: {
  platform: string;
  handle: string;
  text: string;
  tag: string;
  tagColor: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-sr-line bg-white/[0.02] p-3 transition hover:border-sr-line-2 hover:bg-white/[0.04]">
      <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-sr-line bg-white/[0.03] text-sr-text-2">
        <PlatformIcon name={platform} size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="truncate text-xs text-sr-text-2">
            <span className="text-sr-text">{platform}</span>
            <span className="mx-1.5 text-sr-muted">·</span>
            <span className="truncate">{handle}</span>
          </div>
          <span
            className={`inline-flex shrink-0 items-center rounded-full bg-gradient-to-r ${tagColor} px-2 py-0.5 text-[10px] text-white/90 ring-1 ring-white/10`}
          >
            {tag}
          </span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-sr-text">
          {text}
        </p>
      </div>
    </div>
  );
}

function GaugeCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-sr-line bg-white/[0.02] p-3.5">
      <div className="text-[11px] text-sr-muted">{label}</div>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="font-mono text-2xl font-semibold text-sr-text">{value}</span>
        <span className="text-xs font-medium text-emerald-400">{trend}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sr-orange to-sr-red"
          style={{ width: trend.replace("+", "").replace("%", "") + "%" }}
        />
      </div>
    </div>
  );
}
