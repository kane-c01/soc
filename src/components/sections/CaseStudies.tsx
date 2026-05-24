"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Sparkles, Target, MessagesSquare, Compass, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CASES } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS = [TrendingUp, Sparkles, Target, MessagesSquare];

export function CaseStudies() {
  const { t, lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="cases" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 sr-grid opacity-50" />
      <Container>
        <SectionHeader
          eyebrow={t(CASES.eyebrow)}
          title={<span className="sr-gradient-text">{t(CASES.heading)}</span>}
          sub={t(CASES.sub)}
        />

        {/* Metrics grid */}
        <div
          ref={ref}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CASES.metrics.map((m, i) => {
            const Icon = ICONS[i] ?? TrendingUp;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sr-line-2"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-10 size-44 rounded-full bg-gradient-to-br from-sr-orange/20 to-sr-red/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                />
                <span className="grid size-10 place-items-center rounded-xl border border-sr-line-2 bg-white/[0.03] text-sr-orange">
                  <Icon className="size-4" />
                </span>
                <AnimatedKPI value={m.kpi} />
                <p className="mt-1 text-sm leading-snug text-sr-text-2">
                  {t(m.label)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Three sample case mini-cards */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-3">
          <SampleCase
            tag="AI Agent"
            market={lang === "zh" ? "美国 · 销售自动化" : "US · Sales automation"}
            kpis={[
              { k: lang === "zh" ? "高意向触达" : "Qualified touches", v: "3,420" },
              { k: lang === "zh" ? "进站访问" : "Site visits", v: "1,124" },
              { k: lang === "zh" ? "Demo 申请" : "Demo requests", v: "61" },
            ]}
            quote={
              lang === "zh"
                ? "「我们终于看清竞品评论区里的真实声音，而不是只在猜。」"
                : "“We finally see the real voices in competitor threads — instead of just guessing.”"
            }
          />
          <SampleCase
            tag="AI SaaS"
            market={lang === "zh" ? "欧洲 · 团队协作" : "EU · Team productivity"}
            kpis={[
              { k: lang === "zh" ? "高意向触达" : "Qualified touches", v: "2,180" },
              { k: lang === "zh" ? "Waitlist" : "Waitlist", v: "187" },
              { k: lang === "zh" ? "试用注册" : "Trial signups", v: "73" },
            ]}
            quote={
              lang === "zh"
                ? "「7 天定位到 3 个高转化关键词，比我们一个季度的 SEO 都准。」"
                : "“In 7 days we locked in 3 conversion keywords — better than a quarter of SEO.”"
            }
          />
          <SampleCase
            tag="AI Infra"
            market={lang === "zh" ? "北美 · 开发者工具" : "NA · Developer tooling"}
            kpis={[
              { k: lang === "zh" ? "技术讨论触达" : "Dev discussions", v: "5,610" },
              { k: lang === "zh" ? "GitHub star" : "GitHub stars", v: "+412" },
              { k: lang === "zh" ? "Discord 入群" : "Discord joins", v: "138" },
            ]}
            quote={
              lang === "zh"
                ? "「比起付费广告，从 Reddit 与 X 来的人质量高一个量级。」"
                : "“People from Reddit and X convert at a much higher quality than paid ads.”"
            }
          />
        </div>

        {/* Deliverables strip */}
        <div className="mx-auto mt-16 max-w-6xl rounded-2xl border border-sr-line-2 bg-sr-bg-2 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-sr-text">
              <Trophy className="mr-2 inline size-5 text-sr-orange" />
              {lang === "zh" ? "你最终能拿到什么" : "What you actually walk away with"}
            </h3>
            <span className="rounded-full border border-sr-line bg-white/[0.03] px-3 py-1 text-xs text-sr-text-2">
              <Compass className="mr-1 inline size-3 text-sr-orange" />
              {lang === "zh" ? "结构化交付" : "Structured deliverables"}
            </span>
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CASES.deliverables.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 rounded-lg border border-sr-line bg-white/[0.02] px-3.5 py-3 text-sm text-sr-text-2"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-gradient-to-br from-sr-orange to-sr-red text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
                <span>{t(d)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function SampleCase({
  tag,
  market,
  kpis,
  quote,
}: {
  tag: string;
  market: string;
  kpis: { k: string; v: string }[];
  quote: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sr-line-2"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-sr-line-2 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sr-text-2">
          {tag}
        </span>
        <span className="text-[11px] text-sr-muted">{market}</span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-sr-line bg-sr-line">
        {kpis.map((k) => (
          <div key={k.k} className="bg-sr-bg-3 p-3 text-center">
            <div className="font-mono text-base font-semibold text-sr-text">{k.v}</div>
            <div className="mt-0.5 text-[10.5px] leading-tight text-sr-muted">{k.k}</div>
          </div>
        ))}
      </div>

      <blockquote className="mt-6 text-sm italic leading-relaxed text-sr-text-2">
        {quote}
      </blockquote>
    </motion.div>
  );
}

function AnimatedKPI({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    // Extract leading number and animate count-up if it's a pure number
    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2] ?? "";
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }
    const dur = 1100;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(target * eased);
      setDisplay(`${v.toLocaleString()}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div className="mt-4 font-mono text-3xl font-semibold tracking-tight text-sr-text sm:text-4xl">
      <span ref={ref}>{display}</span>
    </div>
  );
}
