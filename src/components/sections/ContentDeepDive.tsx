"use client";

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
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DEEP_DIVES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * ContentDeepDive — 5 张平台高保真帖子 mock
 *
 * 大卡（lg 占满宽度，2 行布局）：Instagram | Facebook
 * 中卡（lg 三列）：TikTok | Reddit | X
 *
 * 红色边框 + "AI 接话 · 已上线" badge 高亮我们发布的评论。
 */
export function ContentDeepDive() {
  const { t } = useLang();

  return (
    <section id="examples" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow={t(DEEP_DIVES.eyebrow)}
          title={t(DEEP_DIVES.heading)}
          sub={t(DEEP_DIVES.sub)}
        />

        {/* Row 1：Instagram + Facebook */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          <InstagramCard />
          <FacebookCard />
        </div>

        {/* Row 2：TikTok + Reddit + X */}
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
          <TikTokCard />
          <RedditCard />
          <XCard />
        </div>
      </Container>
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
      {/* 视频区 — 竖屏 9:16 */}
      <div className="relative aspect-[9/13] w-full overflow-hidden bg-black">
        <Image
          src={tt.bgImage}
          alt="TikTok video"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-80"
          unoptimized
        />
        {/* 顶部品牌标 + 时间 */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-3 text-[11px] font-semibold text-white/90">
          <span>Following</span>
          <span className="text-white">For You</span>
          <span>LIVE</span>
        </div>

        {/* 右侧 icon stack */}
        <div className="absolute bottom-4 right-2 flex flex-col items-center gap-3 text-white">
          <div className="relative">
            <div className="grid size-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-[#fe2c55] to-[#25f4ee]">
              <span className="text-[10px] font-bold text-white">CA</span>
            </div>
            <span className="absolute -bottom-1.5 left-1/2 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-[#fe2c55]">
              <Plus className="size-2.5 text-white" />
            </span>
          </div>
          <Stat icon={<Heart className="size-7 fill-white text-white" />} v={tt.stats.likes} />
          <Stat icon={<MessageCircle className="size-7 fill-white text-white" />} v={tt.stats.comments} />
          <Stat icon={<Bookmark className="size-7 fill-white text-white" />} v={tt.stats.saves} />
          <Stat icon={<Share2 className="size-7 text-white" />} v={tt.stats.shares} />
        </div>

        {/* 左下文字 */}
        <div className="absolute inset-x-0 bottom-0 px-3 pb-4 pr-16 text-white">
          <div className="text-[13px] font-semibold">{tt.handle}</div>
          <div className="mt-1 text-[12px] leading-snug text-white/95">{tt.caption.text}</div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-white/85">
            <Music2 className="size-3" /> {tt.music}
          </div>
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

function Stat({ icon, v }: { icon: React.ReactNode; v: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
      {icon}
      <span className="text-[10.5px] font-semibold">{v}</span>
    </div>
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
                <p className="mt-1 text-[12.5px] leading-relaxed text-sr-text-2">
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
