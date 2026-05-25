"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  BadgeCheck,
  ThumbsUp,
  Share2,
  Globe2,
  Smile,
  ArrowBigUp,
  ArrowBigDown,
  Music2,
  Plus,
  Eye,
  Repeat2,
  BarChart2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DEEP_DIVES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * ContentDeepDive — 5 张平台高保真帖子示例 (横向轮播)
 *
 * 桌面：左右箭头切换；移动：触摸滑动。
 * 边缘 fade + snap-x 让节奏整齐。
 */
const CARDS = [
  { key: "instagram", Component: InstagramCard },
  { key: "facebook", Component: FacebookCard },
  { key: "tiktok", Component: TikTokCard },
  { key: "reddit", Component: RedditCard },
  { key: "x", Component: XCard },
];

export function ContentDeepDive() {
  const { t, lang } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="examples" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(DEEP_DIVES.eyebrow)}
          title={t(DEEP_DIVES.heading)}
          sub={t(DEEP_DIVES.sub)}
        />
      </Container>

      <div className="relative mt-10">
        {/* 横向滑动容器 */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-3 sm:px-10 lg:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map(({ key, Component }) => (
            <div
              key={key}
              className="snap-center shrink-0 w-[88vw] max-w-[460px] sm:w-[62vw] lg:w-[440px]"
            >
              <Component />
            </div>
          ))}
          {/* 右侧尾部 spacer，让最后一张能完整滚到中间 */}
          <div aria-hidden className="shrink-0 w-2" />
        </div>

        {/* 左右渐变 fade — 提示还有更多 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-sr-bg to-transparent sm:w-16"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-sr-bg to-transparent sm:w-16"
        />

        {/* 左箭头 */}
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={!canLeft}
          aria-label={lang === "zh" ? "上一张" : "Previous"}
          className={cn(
            "absolute left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-sr-line bg-white text-sr-text shadow-md transition lg:grid",
            canLeft
              ? "opacity-100 hover:bg-sr-bg-3 hover:text-sr-red"
              : "cursor-not-allowed opacity-30",
          )}
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* 右箭头 */}
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={!canRight}
          aria-label={lang === "zh" ? "下一张" : "Next"}
          className={cn(
            "absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-sr-line bg-white text-sr-text shadow-md transition lg:grid",
            canRight
              ? "opacity-100 hover:bg-sr-bg-3 hover:text-sr-red"
              : "cursor-not-allowed opacity-30",
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* 移动端提示：左右滑动查看 */}
      <p className="mt-3 text-center text-[11.5px] text-sr-muted lg:hidden">
        {lang === "zh" ? "← 左右滑动查看更多 →" : "← Swipe to see more →"}
      </p>
    </section>
  );
}

/* ============================================================
 * Instagram
 * ============================================================ */
function InstagramCard() {
  const { t, lang } = useLang();
  const ig = DEEP_DIVES.instagram;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-md"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="grid size-9 place-items-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] to-[#962fbf] p-[2px]">
          <div className="grid size-full place-items-center rounded-full bg-white">
            <span className="text-[10px] font-bold text-sr-text">RD</span>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="truncate text-[13.5px] font-semibold text-sr-text">
              {ig.account}
            </span>
            <BadgeCheck className="size-3.5 text-[#3b82f6]" />
          </div>
          <div className="truncate text-[11px] text-sr-muted">
            {ig.location} · {t(ig.accountSub)}
          </div>
        </div>
        <MoreHorizontal className="size-5 text-sr-text-2" />
      </div>

      <div className="relative aspect-square w-full overflow-hidden border-y border-sr-line bg-sr-bg-3">
        <Image
          src={ig.bgImage}
          alt="Instagram post"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex items-center gap-4 px-4 pt-3">
        <Heart className="size-6 text-sr-text" />
        <MessageCircle className="size-6 text-sr-text" />
        <Send className="size-6 text-sr-text" />
        <Bookmark className="ml-auto size-6 text-sr-text" />
      </div>

      <div className="px-4 pt-2 text-[13px] font-semibold text-sr-text">
        {ig.likes} likes
      </div>

      <div className="px-4 pt-1.5 text-[13.5px] leading-snug text-sr-text">
        <span className="font-semibold">{ig.caption.author}</span>{" "}
        <span className="text-sr-text-2">{ig.caption.text}</span>
      </div>

      <ul className="mt-2 space-y-2 px-4 pb-2">
        {ig.comments.map((c, i) => {
          const isAi = c.tone === "ai";
          return (
            <li
              key={i}
              className={cn(
                "relative rounded-md text-[13px] leading-snug",
                isAi
                  ? "border border-sr-red/55 bg-sr-red/5 px-2.5 py-2"
                  : "px-0.5",
              )}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-semibold text-sr-text">{c.who}</span>
                {c.verified && (
                  <BadgeCheck className="size-3 shrink-0 text-[#3b82f6]" />
                )}
                <span className="text-sr-text-2">{c.text}</span>
              </div>
              <div className="mt-1 flex items-center gap-4 text-[11px] text-sr-muted">
                <span>{t(c.time)}</span>
                <span>{c.likes} likes</span>
                <span>Reply</span>
              </div>
              {isAi && (
                <span className="absolute -right-1.5 -top-1.5 inline-flex items-center gap-1 rounded-full bg-sr-red px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                  {t(ig.aiTag)}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-3 border-t border-sr-line px-4 py-2.5">
        <Smile className="size-5 text-sr-text-2" />
        <input
          placeholder={lang === "zh" ? "添加评论…" : "Add a comment…"}
          disabled
          className="flex-1 bg-transparent text-[13px] text-sr-text placeholder:text-sr-muted focus:outline-none"
        />
        <span className="text-[12.5px] font-semibold text-sr-text-2 opacity-40">
          Post
        </span>
      </div>

      <div className="px-4 pb-3 text-[10.5px] uppercase tracking-[0.16em] text-sr-muted">
        {t(ig.timeAgo)}
      </div>
    </motion.div>
  );
}

/* ============================================================
 * Facebook
 * ============================================================ */
function FacebookCard() {
  const { t } = useLang();
  const fb = DEEP_DIVES.facebook;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-md"
    >
      <div className="border-b border-sr-line bg-sr-bg-3/40 px-4 py-2 text-[11.5px] font-medium text-sr-text-2">
        {t(fb.group)}
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#1877f2] to-[#0a4cb5]">
          <span className="text-[12px] font-bold text-white">MT</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[14px] font-semibold text-sr-text">
            {fb.author}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-sr-muted">
            {t(fb.authorSub)} · <Globe2 className="size-2.5" />
          </div>
        </div>
        <MoreHorizontal className="size-5 text-sr-text-2" />
      </div>

      <p className="px-4 pb-3 text-[14px] leading-relaxed text-sr-text">
        {fb.caption.text}
      </p>

      <div className="relative mx-4 mb-3 aspect-[16/9] overflow-hidden rounded-xl border border-sr-line bg-sr-bg-3">
        <Image
          src={fb.bgImage}
          alt="AI sales copilot product preview"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex items-center justify-between border-t border-sr-line px-4 py-2 text-[12px] text-sr-muted">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <span className="grid size-4 place-items-center rounded-full bg-[#1877f2] text-[8px] text-white">
              👍
            </span>
            <span className="grid size-4 place-items-center rounded-full bg-[#f33e58] text-[8px] text-white">
              ❤
            </span>
          </div>
          <span className="ml-1.5">{fb.stats.reactions}</span>
        </div>
        <div className="flex gap-3">
          <span>{fb.stats.comments} comments</span>
          <span>{fb.stats.shares} shares</span>
        </div>
      </div>

      <div className="grid grid-cols-3 border-y border-sr-line text-[12.5px] font-medium text-sr-text-2">
        <button className="flex items-center justify-center gap-1.5 py-2 transition hover:bg-sr-bg-3/40">
          <ThumbsUp className="size-4" />
          Like
        </button>
        <button className="flex items-center justify-center gap-1.5 border-x border-sr-line py-2 transition hover:bg-sr-bg-3/40">
          <MessageCircle className="size-4" />
          Comment
        </button>
        <button className="flex items-center justify-center gap-1.5 py-2 transition hover:bg-sr-bg-3/40">
          <Share2 className="size-4" />
          Share
        </button>
      </div>

      <ul className="space-y-2.5 px-4 py-3">
        {fb.comments.map((c, i) => {
          const isAi = c.tone === "ai";
          return (
            <li key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sr-bg-3 to-sr-cream text-[10px] font-bold text-sr-text">
                {c.who.charAt(0).toUpperCase()}
              </div>
              <div
                className={cn(
                  "relative min-w-0 flex-1 rounded-2xl px-3 py-2",
                  isAi
                    ? "border border-sr-red/55 bg-sr-red/5"
                    : "bg-sr-bg-3/40",
                )}
              >
                <div className="text-[12.5px] font-semibold text-sr-text">
                  {c.who}
                </div>
                <div className="mt-0.5 text-[13px] leading-snug text-sr-text-2">
                  {c.text}
                </div>
                <div className="mt-1.5 flex items-center gap-4 text-[10.5px] font-medium text-sr-muted">
                  <span>{t(c.time)}</span>
                  <span>Like · {c.likes}</span>
                  <span>Reply · {c.replies}</span>
                </div>
                {isAi && (
                  <span className="absolute -right-1.5 -top-1.5 inline-flex items-center gap-1 rounded-full bg-sr-red px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                    {t(fb.aiTag)}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

/* ============================================================
 * TikTok — 竖屏视频 + 右侧 icon stack + 评论
 * ============================================================ */
function TikTokCard() {
  const { t } = useLang();
  const tt = DEEP_DIVES.tiktok;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-md"
    >
      {/* TikTok 顶部 nav bar — Following / For You / LIVE */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black px-3 py-2 text-[11px] font-semibold text-white/75">
        <span>Following</span>
        <span className="relative inline-flex items-center gap-1 text-white">
          For You
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-white" />
        </span>
        <span>LIVE</span>
      </div>

      {/* 创作者头像 + handle + Follow */}
      <div className="flex items-center gap-2.5 bg-black px-3 py-2.5">
        <div className="relative shrink-0">
          <div className="grid size-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-[#fe2c55] to-[#25f4ee]">
            <span className="text-[10px] font-bold text-white">CA</span>
          </div>
          <span className="absolute -bottom-1 left-1/2 grid size-3.5 -translate-x-1/2 place-items-center rounded-full bg-[#fe2c55]">
            <Plus className="size-2 text-white" />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[12.5px] font-semibold text-white">
            {tt.handle}
          </div>
          <div className="truncate text-[10.5px] text-white/60">
            {t(tt.handleSub)}
          </div>
        </div>
        <span className="rounded-md border border-white/25 px-2 py-0.5 text-[10.5px] font-semibold text-white">
          Follow
        </span>
      </div>

      {/* caption 文字 */}
      <p className="bg-black px-3 pb-2 text-[12.5px] leading-snug text-white">
        {tt.caption.text}
      </p>

      {/* 产品截图区（图文帖 image-post 模式，16:10 横屏完整展示 AI 工具产品 UI） */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-y border-white/10 bg-black">
        <Image
          src={tt.bgImage}
          alt="AI script kit · product screenshot"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          unoptimized
        />
        {/* 右上角：图文帖 1/1 标识 */}
        <span className="absolute right-2.5 top-2.5 rounded-md bg-black/55 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
          1 / 1
        </span>
        {/* 底部 music 行 */}
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/65 to-transparent px-3 pb-2 pt-6 text-[10.5px] text-white/95">
          <Music2 className="size-3" /> {tt.music}
        </div>
      </div>

      {/* 底部互动 stats 行（heart / comment / bookmark / share） */}
      <div className="flex items-center justify-between gap-3 bg-black px-3 py-2.5 text-white">
        <div className="inline-flex items-center gap-1.5">
          <Heart className="size-5 fill-white text-white" />
          <span className="text-[12px] font-semibold">{tt.stats.likes}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <MessageCircle className="size-5 fill-white text-white" />
          <span className="text-[12px] font-semibold">{tt.stats.comments}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Bookmark className="size-5 fill-white text-white" />
          <span className="text-[12px] font-semibold">{tt.stats.saves}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Share2 className="size-5 text-white" />
          <span className="text-[12px] font-semibold">{tt.stats.shares}</span>
        </div>
      </div>

      {/* 评论区 — 视频下方 */}
      <div className="space-y-2.5 px-4 py-3">
        <div className="flex items-center justify-between text-[12px] font-medium text-sr-text">
          <span>{tt.stats.comments} comments</span>
          <span className="text-sr-muted">Most relevant ▾</span>
        </div>
        {tt.comments.map((c, i) => {
          const isAi = c.tone === "ai";
          return (
            <div key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sr-bg-3 to-sr-cream text-[9.5px] font-bold text-sr-text">
                {c.who.replace("@", "").charAt(0).toUpperCase()}
              </div>
              <div
                className={cn(
                  "relative flex-1 rounded-md text-[12.5px] leading-snug",
                  isAi ? "border border-sr-red/55 bg-sr-red/5 px-2.5 py-2" : "px-0.5",
                )}
              >
                <div className="text-[12px] font-semibold text-sr-text">{c.who}</div>
                <div className="mt-0.5 text-sr-text-2">{c.text}</div>
                <div className="mt-1 flex items-center gap-3 text-[10.5px] text-sr-muted">
                  <span>{t(c.time)}</span>
                  <span>♥ {c.likes}</span>
                  <span>Reply</span>
                </div>
                {isAi && (
                  <span className="absolute -right-1.5 -top-1.5 inline-flex items-center gap-1 rounded-full bg-sr-red px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                    {t(tt.aiTag)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ============================================================
 * Reddit — 投票 + 标题 + body + comment thread
 * ============================================================ */
function RedditCard() {
  const { t } = useLang();
  const r = DEEP_DIVES.reddit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-md"
    >
      {/* 帖子主体 */}
      <div className="flex">
        {/* 左侧投票栏 */}
        <div className="flex w-10 shrink-0 flex-col items-center gap-1 border-r border-sr-line bg-sr-bg-3/30 py-3 text-[11px] font-semibold text-sr-text-2">
          <ArrowBigUp className="size-5 fill-[#ff4500] text-[#ff4500]" />
          <span className="text-[#ff4500]">{r.score}</span>
          <ArrowBigDown className="size-5 text-sr-text-2" />
        </div>

        {/* 右侧帖子内容 */}
        <div className="min-w-0 flex-1 px-4 py-3">
          <div className="flex items-center gap-1.5 text-[11px]">
            <div className="grid size-5 place-items-center rounded-full bg-[#ff4500] text-[10px] font-bold text-white">
              S
            </div>
            <span className="font-bold text-sr-text">{r.subreddit}</span>
            <span className="text-sr-muted">· {t(r.authorSub)}</span>
          </div>
          <div className="mt-2 flex items-start gap-2">
            <h3 className="text-[15px] font-semibold leading-snug text-sr-text">
              {r.title}
            </h3>
            <span className="shrink-0 rounded-md border border-sr-line bg-sr-bg-3/40 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase text-sr-text-2">
              {r.flair}
            </span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-sr-text-2">
            {r.body}
          </p>

          {/* 帖子贴图 — Reddit 上常见的产品 screenshot */}
          {r.bgImage && (
            <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-md border border-sr-line bg-sr-bg-3">
              <Image
                src={r.bgImage}
                alt="Reddit post preview"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          {/* 底部 toolbar */}
          <div className="mt-3 flex items-center gap-4 text-[11px] font-semibold text-sr-muted">
            <span className="inline-flex items-center gap-1">
              <MessageCircle className="size-3.5" />
              {r.commentCount} comments
            </span>
            <span className="inline-flex items-center gap-1">
              <Share2 className="size-3.5" />
              Share
            </span>
            <span className="inline-flex items-center gap-1">
              <Bookmark className="size-3.5" />
              Save
            </span>
          </div>
        </div>
      </div>

      {/* 评论 thread */}
      <ul className="space-y-3 border-t border-sr-line px-4 py-3">
        {r.comments.map((c, i) => {
          const isAi = c.tone === "ai";
          return (
            <li
              key={i}
              className={cn(
                "relative",
                c.depth > 0 && "ml-6 border-l-2 border-sr-line pl-3",
              )}
            >
              <div
                className={cn(
                  "rounded-md",
                  isAi && "border border-sr-red/55 bg-sr-red/5 px-2.5 py-2",
                )}
              >
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="font-semibold text-sr-text">{c.who}</span>
                  <span className="text-sr-muted">· {t(c.time)}</span>
                  <span className="text-sr-muted">· {c.score} points</span>
                </div>
                <p className="mt-1 whitespace-pre-line text-[12.5px] leading-relaxed text-sr-text-2">
                  {c.text}
                </p>
                <div className="mt-1 flex items-center gap-3 text-[10.5px] font-semibold text-sr-muted">
                  <ArrowBigUp className="size-3" />
                  <span>Reply</span>
                  <span>Share</span>
                </div>
                {isAi && (
                  <span className="absolute -right-1.5 -top-1.5 inline-flex items-center gap-1 rounded-full bg-sr-red px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                    {t(r.aiTag)}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

/* ============================================================
 * X / Twitter — 推文 + 4 metrics + 回复 thread
 * ============================================================ */
function XCard() {
  const { t } = useLang();
  const x = DEEP_DIVES.x;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.16 }}
      className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-md"
    >
      {/* 顶部头像 + handle */}
      <div className="flex items-start gap-3 px-4 pt-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sr-text to-[#3a2118]">
          <span className="text-[12px] font-bold text-white">J</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="text-[14px] font-bold text-sr-text">Jenny</span>
            <BadgeCheck className="size-3.5 text-[#1d9bf0]" />
            <span className="text-[12px] text-sr-muted">
              {x.handle} · {t(x.time)}
            </span>
          </div>
        </div>
        <MoreHorizontal className="size-4 text-sr-text-2" />
      </div>

      {/* 推文文字 */}
      <p className="px-4 pt-2 text-[14px] leading-snug text-sr-text">
        {x.body}
      </p>

      {/* 推文图 */}
      <div className="relative mx-4 mt-3 aspect-video overflow-hidden rounded-xl border border-sr-line bg-sr-bg-3">
        <Image
          src={x.bgImage}
          alt="X post"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          unoptimized
        />
      </div>

      {/* metrics */}
      <div className="mt-3 flex items-center justify-between border-y border-sr-line px-4 py-2 text-[12px] text-sr-muted">
        <MetricX icon={<MessageCircle className="size-4" />} v={x.stats.replies} />
        <MetricX icon={<Repeat2 className="size-4" />} v={x.stats.reposts} />
        <MetricX icon={<Heart className="size-4" />} v={x.stats.likes} />
        <MetricX icon={<BarChart2 className="size-4" />} v={x.stats.views} />
        <MetricX icon={<Eye className="size-4" />} v="" />
      </div>

      {/* 回复 */}
      <ul className="space-y-3 px-4 py-3">
        {x.replies.map((r, i) => {
          const isAi = r.tone === "ai";
          return (
            <li key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sr-bg-3 to-sr-cream text-[9.5px] font-bold text-sr-text">
                {r.who.replace("@", "").charAt(0).toUpperCase()}
              </div>
              <div
                className={cn(
                  "relative min-w-0 flex-1",
                  isAi && "rounded-md border border-sr-red/55 bg-sr-red/5 px-2.5 py-2",
                )}
              >
                <div className="flex items-center gap-1 text-[11.5px]">
                  <span className="font-bold text-sr-text">{r.who}</span>
                  {r.verified && (
                    <BadgeCheck className="size-3 text-[#1d9bf0]" />
                  )}
                  <span className="text-sr-muted">· {t(r.time)}</span>
                </div>
                <p className="mt-0.5 text-[12.5px] leading-snug text-sr-text-2">
                  {r.text}
                </p>
                <div className="mt-1 flex items-center gap-4 text-[10.5px] text-sr-muted">
                  <span className="inline-flex items-center gap-1">
                    <Heart className="size-3" /> {r.likes}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Repeat2 className="size-3" />
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="size-3" />
                  </span>
                </div>
                {isAi && (
                  <span className="absolute -right-1.5 -top-1.5 inline-flex items-center gap-1 rounded-full bg-sr-red px-1.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                    {t(x.aiTag)}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function MetricX({ icon, v }: { icon: React.ReactNode; v: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {icon}
      {v && <span>{v}</span>}
    </span>
  );
}
