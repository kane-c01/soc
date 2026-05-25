"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { HERO } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * B2B Hero — 借鉴 Stripe / Linear / Vercel / Anthropic：
 *
 * 设计原则（重要）：
 * - Hero 只放 5 个核心元素：badge / 标题 / 副文 / 双 CTA / ctaNote
 * - 不在 Hero 内堆叠 trust 元素（KPI / Logos）—— 顶级 B2B 网站全都不这么做
 * - KPI + Logos 都被搬到 Hero 之后的独立 TrustStrip 窄条里
 * - 目的：让 Hero 保留「第一眼震撼」，避免视觉权重被稀释
 *
 * 视觉：
 * - 浅底 + 大字黑色标题 + 仅最后一行用 sr-red 强调
 * - 右上角极淡米色光晕做视觉锚（不再"满屏氛围"）
 * - 主 CTA 黑底白字 + 次 CTA 白底浅边
 */
export function Hero() {
  const { lang, t } = useLang();
  const titleLines = lang === "zh" ? HERO.titleZh : HERO.titleEn;

  /* ============ 鼠标视差跟随（桌面端）============
     用 MotionValue + Spring 避免 React re-render；
     鼠标移出 Hero 时光晕远离视窗（-500），实现优雅淡出 */
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 80, mass: 1 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 80, mass: 1 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - 175);
      mouseY.set(e.clientY - rect.top - 175);
    };
    const onLeave = () => {
      mouseX.set(-600);
      mouseY.set(-600);
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* ============ 背景效果（4 层 + 3 个 ambient 动画，克制叠加，不破坏 B2B 极简感）============
           所有动画都会通过全局 <MotionConfig reducedMotion="user"> 自动尊重 OS 偏好 */}

      {/* 1) 极淡网格底纹 — 复用 globals.css 里的 .sr-grid（自带顶部径向 mask 向下淡化） */}
      <div
        aria-hidden
        className="sr-grid pointer-events-none absolute inset-0 opacity-70"
      />

      {/* 2) 顶部红橙渐变细线 — 水平扫光动画（亮点从左流到右，6s loop）
            视觉隐喻：数据流过顶部边缘，呼应 SocialRouter 的「实时捕获」产品定位 */}
      <motion.div
        aria-hidden
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(204, 10, 13, 0.45) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* 3) 右上米色光晕 — 缓慢呼吸（scale 1 → 1.08，8s loop） */}
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.78, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-sr-cream blur-3xl"
      />

      {/* 4) 左下红色光晕 — 错相呼吸（delay 4s 与米色形成「光的对话」） */}
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.95, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-sr-red/[0.08] blur-3xl"
      />

      {/* 5) 鼠标视差跟随光晕（NEW · 桌面端独享） — Linear / Vercel 招牌 ambient 效果
            红色超大光晕跟随鼠标，spring 缓动，鼠标离开时优雅消失 */}
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        className="pointer-events-none absolute hidden h-[350px] w-[350px] rounded-full bg-sr-red/[0.05] blur-3xl md:block"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-sr-line bg-white px-3.5 py-1.5 text-xs font-medium text-sr-text-2 shadow-sm"
          >
            <span className="size-1.5 rounded-full bg-sr-red sr-pulse" />
            {t(HERO.badge)}
          </motion.div>

          {/* 标题 — 字符级 stagger fade-in
              每行先逐行解构（保留 block 换行），行内再逐字 stagger（25ms 间隔）
              视觉效果：标题"被一个一个写出来"的精致感，但 0.7s 内完成不拖沓 */}
          <h1 className="mt-6 text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-sr-text sm:text-[40px] lg:text-[52px] lg:leading-[1.06]">
            {titleLines.map((line, lineIdx) => {
              const isRedLine = lineIdx === titleLines.length - 1;
              const chars = Array.from(line);
              const lineStartDelay = 0.15 + lineIdx * 0.35;
              return (
                <span key={lineIdx} className="block">
                  {chars.map((char, ci) => (
                    <motion.span
                      key={ci}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: lineStartDelay + ci * 0.025,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      className={isRedLine ? "inline-block text-sr-red" : "inline-block"}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 max-w-xl text-pretty text-[14px] leading-relaxed text-sr-text-2 sm:text-[15px]"
          >
            {t(HERO.subtitle)}
          </motion.p>

          {/* 双 CTA — primary 外包一层 motion.div 做 idle 红色 glow 呼吸（1.5s 后启动，3.5s loop）
              视觉作用：在 ambient 范围引导眼球到主行动焦点，但不破坏按钮本身静态 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <motion.div
              className="inline-block rounded-xl"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(204, 10, 13, 0)",
                  "0 0 22px 3px rgba(204, 10, 13, 0.22)",
                  "0 0 0 0 rgba(204, 10, 13, 0)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <LinkButton
                href="/apply"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="size-4" />}
              >
                {t(HERO.primaryCta)}
              </LinkButton>
            </motion.div>
            <LinkButton
              href="#cases"
              variant="ghost"
              size="lg"
              iconLeft={<PlayCircle className="size-4" />}
            >
              {t(HERO.secondaryCta)}
            </LinkButton>
          </motion.div>

          {/* CTA 紧迫感小字 — 48h 响应承诺 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-sr-muted"
          >
            <span className="size-1 rounded-full bg-sr-red" />
            {t(HERO.ctaNote)}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
