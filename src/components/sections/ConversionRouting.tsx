"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Hourglass,
  CalendarCheck,
  Trophy,
  MessagesSquare,
  ClipboardList,
  Network,
  Sparkles,
  ArrowDown,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTING } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 5 屏 — 转化路径（一图看懂版）
 *
 * 设计目标：用一张「Routing Diagram」大图讲完整个转化路由故事
 *   产品名就是 SocialRouter ⇒ 视觉本身就是一台路由器的数据流示意。
 *
 * 结构（从上到下 6 段，封装在一张大卡里）：
 *   ① Header bar    : 路由示意图标识 + 增长引擎徽章
 *   ② INPUT  层    : 海外社媒高意向用户来源（8 个 channel pills）
 *   ③ ROUTER 层    : SocialRouter 核心节点（红色高亮，按目标/阶段/场景做路由）
 *   ④ OUTPUT 层    : 6 条承接路径 mini-grid（保留 6 个目的地信息）
 *   ⑤ EXAMPLES 层 : 3 行真实路由示例（启用原本未展示的 examples 数据）
 *   ⑥ Footer bar   : 核心定位横条
 *
 *  INPUT 与 ROUTER、ROUTER 与 OUTPUT 之间用细线 + 向下箭头连接，
 *  显式凸显「数据从社媒流入 → 路由 → 流向承接路径」。
 */
const PATH_ICONS = [
  Globe,
  Hourglass,
  CalendarCheck,
  Trophy,
  MessagesSquare,
  ClipboardList,
];

/** 6 条承接路径的「类型缩写标签」（数据保持在组件层） */
const PATH_TAGS: Array<{ zh: string; en: string }> = [
  { zh: "SELF-SERVE", en: "SELF-SERVE" },
  { zh: "PRE-LAUNCH", en: "PRE-LAUNCH" },
  { zh: "B2B", en: "B2B" },
  { zh: "LAUNCH", en: "LAUNCH" },
  { zh: "COMMUNITY", en: "COMMUNITY" },
  { zh: "SALES", en: "SALES" },
];

/** INPUT 层展示的 8 个海外社媒 channel（不依赖 content） */
const INPUT_CHANNELS = [
  "Reddit",
  "YouTube",
  "TikTok",
  "LinkedIn",
  "X / Twitter",
  "Discord",
  "Quora",
  "Product Hunt",
];

export function ConversionRouting() {
  const { t, lang } = useLang();

  const routerModes =
    lang === "zh"
      ? "按目标 · 按产品阶段 · 按场景"
      : "By goal · By stage · By context";

  return (
    <section
      id="routing"
      className="relative scroll-mt-24 bg-sr-bg-3/45 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          step="04"
          eyebrow={t(ROUTING.eyebrow)}
          title={t(ROUTING.heading)}
          sub={t(ROUTING.sub)}
        />

        {/* ============ Routing Diagram · 一张大卡 ============ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="sr-highlight-top relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm"
        >
          {/* ---------- ① Header bar ---------- */}
          <div className="flex items-center justify-between border-b border-sr-line bg-sr-bg-3/30 px-5 py-3 sm:px-6">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-muted">
              {lang === "zh" ? "路由示意图" : "Routing diagram"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/20 bg-sr-red/[0.05] px-2 py-0.5 text-[10px] font-semibold text-sr-red">
              <Network className="size-2.5" strokeWidth={2.5} />
              {lang === "zh" ? "增长引擎" : "Growth engine"}
            </span>
          </div>

          {/* ---------- ② LAYER 1 : INPUT ---------- */}
          <div className="px-5 pb-2 pt-5 sm:px-6">
            <LayerLabel
              tag="INPUT"
              label={
                lang === "zh"
                  ? "海外社媒高意向用户"
                  : "Overseas high-intent users"
              }
            />
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {INPUT_CHANNELS.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="inline-flex items-center rounded-full border border-sr-line bg-sr-bg-3/35 px-2.5 py-1 text-[11.5px] font-medium text-sr-text-2"
                >
                  {c}
                </motion.span>
              ))}
            </div>
            <Connector />
          </div>

          {/* ---------- ③ LAYER 2 : ROUTER NODE ---------- */}
          <div className="bg-sr-bg-3/15 px-5 pb-2 pt-3 sm:px-6">
            <div className="mx-auto max-w-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="sr-highlight-top relative flex items-center gap-3 rounded-xl border border-sr-red/25 bg-white px-4 py-3 shadow-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-sr-red/20 bg-sr-red/[0.07] text-sr-red">
                  <Cpu className="size-4" strokeWidth={2.2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-red">
                    SocialRouter
                  </p>
                  <p className="mt-0.5 truncate text-[13px] font-semibold tracking-tight text-sr-text">
                    {lang === "zh"
                      ? "按你的增长目标做路由判定"
                      : "Routes by your growth goal"}
                  </p>
                </div>
              </motion.div>
              <p className="mt-2 text-center font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] text-sr-muted">
                {routerModes}
              </p>
            </div>
            <Connector />
          </div>

          {/* ---------- ④ LAYER 3 : OUTPUT · 6 条承接路径 ---------- */}
          <div className="px-5 pb-5 pt-3 sm:px-6">
            <LayerLabel
              tag="OUTPUT"
              label={
                lang === "zh" ? "6 条承接路径" : "6 routing destinations"
              }
            />
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ROUTING.paths.map((p, i) => {
                const Icon = PATH_ICONS[i] ?? Globe;
                const tag = PATH_TAGS[i] ?? PATH_TAGS[0];
                const num = String(i + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="group flex flex-col gap-1.5 rounded-lg border border-sr-line bg-sr-bg-3/15 p-3 transition-all hover:border-sr-line-2 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-7 place-items-center rounded-md border border-sr-line bg-white text-sr-red transition-colors group-hover:border-sr-red/30 group-hover:bg-sr-red group-hover:text-white">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-sr-muted">
                        {num}
                      </span>
                    </div>
                    <div className="mt-1">
                      <p className="truncate text-[13px] font-semibold tracking-tight text-sr-text">
                        {t(p.dest)}
                      </p>
                      <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-sr-text-2">
                        {t(p.fit)}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex w-fit items-center rounded-full border border-sr-line bg-white px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-[0.14em] text-sr-muted">
                      {t(tag)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ---------- ⑤ LAYER 4 : EXAMPLES · 真实路由示例 ---------- */}
          <div className="border-t border-sr-line bg-sr-bg-3/30 px-5 py-4 sm:px-6">
            <LayerLabel
              tag="EXAMPLES"
              label={lang === "zh" ? "真实路由示例" : "Real routing examples"}
            />
            <ul className="mt-3 divide-y divide-sr-line/70 overflow-hidden rounded-lg border border-sr-line bg-white">
              {ROUTING.examples.map((ex, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                  className="grid grid-cols-[6rem_1fr] items-center gap-x-3 gap-y-1 px-3 py-2.5 sm:grid-cols-[6rem_1fr_1rem_minmax(0,11rem)]"
                >
                  <span className="inline-flex w-fit items-center rounded-md border border-sr-red/20 bg-sr-red/[0.05] px-1.5 py-0.5 font-mono text-[9.5px] font-semibold tracking-[0.12em] text-sr-red">
                    {t(ex.product)}
                  </span>
                  <p className="col-span-1 line-clamp-1 text-[11.5px] leading-snug text-sr-text-2 sm:col-span-1">
                    {t(ex.signal)}{" "}
                    <span className="text-sr-muted">
                      · {ex.channels.join(" / ")}
                    </span>
                  </p>
                  <ArrowRight
                    aria-hidden
                    className="hidden size-3 text-sr-muted sm:block"
                  />
                  <p className="col-span-2 truncate text-[12px] font-semibold text-sr-text sm:col-span-1">
                    → {t(ex.surface)}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ---------- ⑥ Footer bar : Core positioning ---------- */}
          <div className="flex items-start gap-3 border-t border-sr-line bg-white px-5 py-4 sm:items-center sm:px-6">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-sr-red/20 bg-sr-red/[0.06] text-sr-red">
              <Sparkles className="size-3.5" strokeWidth={2.2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sr-red">
                {t({ zh: "核心定位", en: "Core positioning" })}
              </p>
              <p className="mt-1 text-pretty text-[13px] font-medium leading-relaxed tracking-tight text-sr-text sm:text-[14px]">
                {t(ROUTING.conclusion)}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/**
 * 层与层之间的连接器：细线 + 向下箭头
 * 用于把 INPUT / ROUTER / OUTPUT 之间的数据流向显式画出来
 */
function Connector() {
  return (
    <div aria-hidden className="mt-3 flex flex-col items-center">
      <span className="h-3 w-px bg-sr-line-2" />
      <ArrowDown className="-mt-px size-3 text-sr-muted" />
    </div>
  );
}

/**
 * 每一层左上角的「层标签」：mono 大写 tag + 中文短标题 + 末尾细线
 */
function LayerLabel({ tag, label }: { tag: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-md border border-sr-line bg-white px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] text-sr-text-2">
        {tag}
      </span>
      <span className="text-[12.5px] font-semibold tracking-tight text-sr-text">
        {label}
      </span>
      <span className="ml-1 h-px flex-1 bg-sr-line" />
    </div>
  );
}
