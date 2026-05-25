"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CLIENT_LOGOS, HERO } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * TrustStrip — Hero 之后的独立信任窄条
 *
 * 设计目的：
 * - 把 KPI（4 个数字）+ Logos（平台覆盖）合并到一个独立 section，
 *   而不是塞进 Hero 内（顶级 B2B 网站如 Stripe / Vercel 都这么做）
 * - 浅米色背景 + 上下边线 → 与 Hero（浅白底）/ PainPoints（浅白底）形成清晰节奏对比
 *
 * 结构：
 *   ┌── 上 border-sr-line ──┐
 *   │  [KPI×4 横排]          │
 *   │  ─── 极淡分隔 ───       │
 *   │  [logos 跑马灯 + 小字]  │
 *   └── 下 border-sr-line ──┘
 *
 * 视觉细节：
 * - KPI mono 数字 20-24px，比 Hero 标题小很多，不抢镜
 * - Logos chip 比 Hero 内尝试过的版本更精致（18px logo + 13.5px name + shadow）
 * - Marquee 跳出 Container 让左右 mask 出血到屏幕边
 */
export function TrustStrip() {
  const { t } = useLang();
  /* 复制一份用于无缝衔接的 marquee */
  const logosDup = [...CLIENT_LOGOS.logos, ...CLIENT_LOGOS.logos];

  return (
    <section className="relative border-y border-sr-line bg-sr-bg-3/45 py-10 sm:py-12">
      {/* ============ 上半：KPI 4 列 ============ */}
      <Container>
        <motion.dl
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-4"
        >
          {HERO.metrics.map((m) => (
            <div key={m.kpi} className="flex flex-col items-center text-center">
              <dt className="font-mono text-[20px] font-semibold tracking-tight text-sr-text sm:text-[24px]">
                {m.kpi}
              </dt>
              <dd className="mt-1.5 max-w-[14ch] text-[11.5px] leading-snug text-sr-muted">
                {t(m.label)}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      {/* ============ 极淡分隔线（KPI 与 Logos 之间） ============ */}
      <div
        aria-hidden
        className="mx-auto mt-8 h-px max-w-md bg-sr-line/70 sm:mt-10"
      />

      {/* ============ 下半：Logos marquee（跳出 Container 让 mask 出血到屏幕边） ============ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-7 sm:mt-8"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-sr-muted">
            {t(CLIENT_LOGOS.eyebrow)}
            <span className="mx-2 text-sr-line-2">·</span>
            <span className="normal-case tracking-normal text-sr-muted/85">
              {t(CLIENT_LOGOS.disclaimer)}
            </span>
          </p>
        </div>

        <div
          className={cn(
            "relative mt-5 w-full overflow-hidden",
            "[mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)]",
            "[-webkit-mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)]",
          )}
        >
          <ul
            className="flex w-max items-center gap-x-3 sr-marquee"
            style={{ animationDuration: "42s" }}
          >
            {logosDup.map((l, i) => (
              <TrustLogoChip
                key={`${l.name}-${i}`}
                item={l}
                ariaHidden={i >= CLIENT_LOGOS.logos.length}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * TrustStrip 内的精致 Logo chip
 * 比原 ClientLogos 版本略微紧凑（18px logo + 13.5px name + shadow-sm）
 */
function TrustLogoChip({
  item,
  ariaHidden,
}: {
  item: { name: string; logoSlug: string; localSrc?: string };
  ariaHidden?: boolean;
}) {
  const src = item.localSrc ?? `https://cdn.simpleicons.org/${item.logoSlug}`;
  return (
    <li
      aria-hidden={ariaHidden}
      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-sr-line bg-white px-3 py-2 shadow-sm transition hover:border-sr-line-2"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${item.name} logo`}
        width={18}
        height={18}
        loading="lazy"
        className="size-[18px] shrink-0 select-none"
        draggable={false}
      />
      <span className="text-[13.5px] font-semibold tracking-tight text-sr-text">
        {item.name}
      </span>
    </li>
  );
}
