"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PAIN } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * 第 2 屏 · Live Demand Stream
 *
 * 暖色编辑风信号面板：高意向社媒话题一条接一条出现在 feed 里，
 * 最新条带红色指示，旧的逐渐淡出退到底部。
 */

type LiveSignal = { id: number; idx: number };

let _uid = 0;

const PLATFORM_COLOR: Record<string, string> = {
  reddit: "#ff4500",
  "x ": "#21130f",
  linkedin: "#0a66c2",
  tiktok: "#fe2c55",
  youtube: "#ff0000",
  facebook: "#1877f2",
  hacker: "#ff6600",
  product: "#da552f",
};

function platformColor(name: string): string {
  const lower = name.toLowerCase();
  for (const [k, v] of Object.entries(PLATFORM_COLOR)) {
    if (lower.includes(k)) return v;
  }
  return "#cc0a0d";
}

/** 把 platform 字符串切成 [社区, 句柄] 两段 */
function splitPlatform(p: string): [string, string?] {
  if (p.includes(" · ")) {
    const [a, b] = p.split(" · ");
    return [a, b];
  }
  return [p];
}

function nowTime(): string {
  const d = new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
}

export function PainPoints() {
  const { t, lang } = useLang();
  const convos = PAIN.conversations;
  const cursor = useRef(0);
  const [signals, setSignals] = useState<LiveSignal[]>([]);
  const [captured, setCaptured] = useState(12_847);
  const [clock, setClock] = useState("00:00:00");

  /* 客户端 mount 才开始 tick — 避免 hydration mismatch */
  useEffect(() => {
    setClock(nowTime());
    const iv = setInterval(() => setClock(nowTime()), 1000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const push = () => {
      const idx = cursor.current % convos.length;
      cursor.current++;
      setSignals((prev) => [{ id: _uid++, idx }, ...prev].slice(0, 4));
      setCaptured((n) => n + Math.floor(Math.random() * 3 + 1));
    };

    const t1 = setTimeout(push, 200);
    const t2 = setTimeout(push, 900);
    const t3 = setTimeout(push, 1700);
    const iv = setInterval(push, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(iv);
    };
  }, [convos.length]);

  return (
    <section id="pain" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(PAIN.eyebrow)}
          title={t(PAIN.heading)}
          sub={t(PAIN.sub)}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto mt-12 max-w-2xl"
        >
          {/* 底部光晕 */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -bottom-12 h-24 rounded-full bg-sr-cream/70 blur-3xl"
          />

          {/* 面板 */}
          <div className="relative overflow-hidden rounded-[20px] border border-sr-line bg-white shadow-[0_1px_0_rgba(33,19,15,0.04),0_20px_60px_-20px_rgba(33,19,15,0.18)]">
            {/* ── 顶部 chrome ── */}
            <div className="flex items-center justify-between border-b border-sr-line bg-white px-5 py-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-sr-red opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-sr-red" />
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-sr-text-2">
                  Live Demand
                </span>
                <span className="hidden text-[10.5px] text-sr-muted sm:inline">
                  ·
                </span>
                <span
                  suppressHydrationWarning
                  className="hidden font-mono text-[10.5px] tabular-nums text-sr-muted sm:inline"
                >
                  {clock} UTC
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span
                  suppressHydrationWarning
                  className="font-mono text-[12px] font-semibold tabular-nums text-sr-text"
                >
                  {captured.toLocaleString()}
                </span>
                <span className="text-[10px] text-sr-muted">
                  {lang === "zh" ? "条 / 24h" : "/ 24h"}
                </span>
              </div>
            </div>

            {/* ── Feed 区 ── 固定高度 + overflow-hidden，避免进入/退出动画撑出边界 */}
            <div className="relative h-[400px] overflow-hidden sm:h-[420px]">
              {/* 左侧 spine（垂直时间线） */}
              <span
                aria-hidden
                className="absolute bottom-0 left-[26px] top-0 z-0 w-px bg-gradient-to-b from-transparent via-sr-line-2 to-transparent"
              />
              {/* 底部 fade — 隐藏被裁切的旧条 */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white to-transparent"
              />

              <AnimatePresence initial={false}>
                {signals.map((sig, si) => {
                  const convo = convos[sig.idx];
                  const isNew = si === 0;
                  const opacityVal = Math.max(0.4, 1 - si * 0.18);
                  const color = platformColor(convo.platform);
                  const [platName, platHandle] = splitPlatform(convo.platform);

                  return (
                    <motion.div
                      key={sig.id}
                      layout="position"
                      initial={{ opacity: 0, y: -20, scale: 0.99 }}
                      animate={{ opacity: opacityVal, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.98 }}
                      transition={{
                        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.4 },
                        y: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                        scale: { duration: 0.4 },
                      }}
                      className={cn(
                        "relative grid grid-cols-[52px_1fr] items-start gap-1 border-b border-sr-line/60 px-5 py-4 last:border-b-0",
                        isNew && "bg-sr-bg-3/35",
                      )}
                    >
                      {/* 左：dot + 平台色 */}
                      <div className="flex h-full flex-col items-center pt-1">
                        <motion.span
                          initial={
                            isNew ? { scale: 0.6, opacity: 0 } : undefined
                          }
                          animate={
                            isNew ? { scale: 1, opacity: 1 } : undefined
                          }
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className={cn(
                            "relative grid size-3 place-items-center rounded-full ring-4",
                            isNew
                              ? "bg-sr-red ring-sr-red/15"
                              : "bg-sr-line-2 ring-white",
                          )}
                        >
                          {isNew && (
                            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-sr-red/70" />
                          )}
                        </motion.span>
                      </div>

                      {/* 右：内容 */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span
                            className="inline-flex items-center gap-1.5 rounded-md border border-sr-line bg-white px-2 py-0.5 text-[10.5px] font-semibold text-sr-text"
                            style={{
                              boxShadow: `inset 2px 0 0 0 ${color}`,
                            }}
                          >
                            {platName}
                          </span>
                          {platHandle && (
                            <span className="font-mono text-[10.5px] text-sr-muted">
                              {platHandle}
                            </span>
                          )}
                          {isNew && (
                            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-sr-red/8 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-sr-red">
                              <span className="size-1 rounded-full bg-sr-red" />
                              {lang === "zh" ? "捕获" : "Caught"}
                            </span>
                          )}
                        </div>

                        <p className="mt-1.5 text-[13.5px] font-medium leading-relaxed text-sr-text">
                          {t(convo.quote)}
                        </p>

                        <p className="mt-1.5 font-mono text-[10.5px] text-sr-muted">
                          {convo.stats}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {signals.length === 0 && (
                <div className="flex h-40 items-center justify-center text-[12px] text-sr-muted">
                  {lang === "zh" ? "扫描中…" : "Scanning…"}
                </div>
              )}
            </div>

            {/* ── 底栏 ── */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-sr-line bg-sr-bg-3/25 px-5 py-3">
              <span className="text-[10.5px] text-sr-muted">
                {lang === "zh"
                  ? "AI Agent · SaaS · 工具 · 出海工厂 · DTC 硬件"
                  : "AI Agent · SaaS · Tools · OEM Factory · DTC"}
              </span>
              <span className="font-mono text-[10.5px] text-sr-muted">
                12 platforms
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
