"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlatformIcon } from "@/components/ui/PlatformIcons";
import { CONTENT_EXAMPLES } from "@/lib/content";
import { useLang } from "@/lib/i18n";

type Card = (typeof CONTENT_EXAMPLES.cards)[number];

/**
 * 评论示例 — 浅色版
 * - 从 6 张砍到 4 张（覆盖 IG / X / Reddit / LinkedIn 4 种典型场景）
 * - 卡片：白底 + 极淡描边 + 微阴影
 * - 内嵌帖子模拟：米色底（sr-bg-3），形成 white-on-cream 的层次
 */
export function ContentExamples() {
  const { t, lang } = useLang();

  /* 只展示 4 张代表性卡片；其余仍保留在 content.ts，方便未来调用 */
  const visibleCards = [
    CONTENT_EXAMPLES.cards.find((c) => c.platform === "Instagram"),
    CONTENT_EXAMPLES.cards.find((c) => c.platform === "Twitter/X"),
    CONTENT_EXAMPLES.cards.find((c) => c.platform === "Reddit"),
    CONTENT_EXAMPLES.cards.find((c) => c.platform === "LinkedIn"),
  ].filter(Boolean) as Card[];

  return (
    <section id="examples" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(CONTENT_EXAMPLES.eyebrow)}
          title={t(CONTENT_EXAMPLES.heading)}
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {visibleCards.map((card, i) => (
            <motion.article
              key={card.platform}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="relative flex flex-col gap-4 rounded-2xl border border-sr-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <PlatformChip name={card.platform} />
              <div>
                <h3 className="text-[15px] font-semibold leading-tight text-sr-text">
                  {t(card.title)}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-sr-text-2">
                  {t(card.desc)}
                </p>
              </div>

              <PostMock card={card} lang={lang} />
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-sr-muted">
          {t(CONTENT_EXAMPLES.sub)}
        </p>
      </Container>
    </section>
  );
}

function PlatformChip({ name }: { name: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-sr-line bg-sr-bg-3/60 px-2.5 py-1 text-[11px] font-medium text-sr-text">
      <PlatformIcon name={name.split("/")[0]} size={12} />
      {name}
    </span>
  );
}

function PostMock({ card, lang }: { card: Card; lang: "zh" | "en" }) {
  return (
    <div className="rounded-xl border border-sr-line bg-sr-bg p-3">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-sr-line bg-white text-sr-text-2">
          <PlatformIcon name={card.platform.split("/")[0]} size={14} />
        </span>
        <div className="min-w-0 flex-1 text-[11.5px]">
          <div className="truncate font-medium text-sr-text">{card.handle}</div>
          <div className="truncate text-sr-muted">{card.handleSub}</div>
        </div>
      </div>

      {/* Main post body */}
      {card.mainPost.thumbnail ? (
        <VideoThumb />
      ) : (
        <p className="mt-3 text-[12.5px] leading-snug text-sr-text-2">
          <span className="text-sr-text">{card.mainPost.author}</span>{" "}
          {card.mainPost.text}
        </p>
      )}

      {/* Replies */}
      <div className="mt-3 space-y-3">
        {card.replies.map((r, i) => {
          const isAi =
            r.tone[lang] === "AI 接话" || r.tone[lang] === "AI engagement";
          return (
            <div key={i} className="text-[12px] leading-snug">
              <div className="mb-0.5 inline-flex items-center gap-1.5">
                <span
                  className={
                    isAi
                      ? "rounded-md bg-sr-red/10 px-1.5 py-0.5 text-[9.5px] font-medium uppercase tracking-wide text-sr-red"
                      : "rounded-md border border-sr-line bg-white px-1.5 py-0.5 text-[9.5px] font-medium uppercase tracking-wide text-sr-muted"
                  }
                >
                  {r.tone[lang]}
                </span>
              </div>
              <div className="text-sr-text-2">
                <span className="font-medium text-sr-text">{r.who}</span>{" "}
                {r.text}
                {"link" in r && r.link && (
                  <span className="ml-1 inline-flex items-center text-sr-red">
                    → {r.link}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer stats */}
      <div className="mt-3 flex items-center gap-3 border-t border-sr-line pt-2.5 text-[11px] text-sr-muted">
        <span className="inline-flex items-center gap-1">
          <Heart className="size-3 text-sr-red" />
          {card.stats.likes}
        </span>
        <span className="inline-flex items-center gap-1">
          <MessageCircle className="size-3" />
          {lang === "zh" ? "回复" : "Reply"}
        </span>
        {!!card.stats.comments && (
          <span className="ml-auto text-sr-muted">+{card.stats.comments}</span>
        )}
      </div>
    </div>
  );
}

function VideoThumb() {
  return (
    <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-lg border border-sr-line bg-gradient-to-br from-sr-bg-3 to-sr-cream">
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid size-10 place-items-center rounded-full bg-white text-sr-text shadow-md">
          <Play className="size-4 fill-current" />
        </span>
      </div>
      <span className="absolute bottom-2 left-2 rounded bg-sr-text/85 px-1.5 py-0.5 text-[10px] font-medium text-white">
        TIKTOK
      </span>
      <span className="absolute bottom-2 right-2 rounded bg-sr-text/85 px-1.5 py-0.5 text-[10px] font-medium text-white">
        :15
      </span>
    </div>
  );
}
