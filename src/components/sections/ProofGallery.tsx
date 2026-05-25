"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROOF_GALLERY } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * 第 6.2 屏（飞书：效果截图墙 · Proof Gallery）
 *
 * 4 组 tab：TikTok 询盘 / Instagram 询盘 / Instagram 曝光 / 执行 Dashboard
 *
 * 加载策略：
 *   - 直接读 /screenshots/xxx.png（next/public 静态目录）
 *   - 文件不存在时 onError 自动切到占位卡（带 ImageOff icon 与提示）
 *   - 客户自己把飞书里的截图放进 web/public/screenshots/ 即可即时显示，无需改代码
 */
export function ProofGallery() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(PROOF_GALLERY.groups[0].key);
  const group =
    PROOF_GALLERY.groups.find((g) => g.key === active) ??
    PROOF_GALLERY.groups[0];

  return (
    <section
      id="proof"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(PROOF_GALLERY.eyebrow)}
          title={t(PROOF_GALLERY.heading)}
          sub={t(PROOF_GALLERY.sub)}
        />

        {/* tabs */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-sr-line bg-sr-bg-3/40 p-1.5 sm:grid-cols-4">
            {PROOF_GALLERY.groups.map((g) => {
              const isActive = g.key === active;
              return (
                <button
                  key={g.key}
                  onClick={() => setActive(g.key)}
                  className={cn(
                    "relative h-11 rounded-lg text-[13px] font-medium transition-colors sm:text-sm",
                    isActive
                      ? "text-white"
                      : "text-sr-text-2 hover:text-sr-text",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="proof-tab-active"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-sr-text shadow-sm"
                    />
                  )}
                  {t(g.label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 描述 + 图片网格 — 列数 / 宽度按图片数量自适应，避免少图被挤到一侧 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className={cn(
              "mx-auto mt-8",
              group.images.length >= 3
                ? "max-w-6xl"
                : group.images.length === 2
                  ? "max-w-4xl"
                  : "max-w-2xl",
            )}
          >
            <p className="mx-auto max-w-2xl text-center text-[14px] leading-relaxed text-sr-text-2">
              {t(group.desc)}
            </p>

            <div
              className={cn(
                "mt-8 grid gap-4",
                group.images.length >= 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : group.images.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1",
              )}
            >
              {group.images.map((src, i) => (
                <ProofImage
                  key={src}
                  src={src}
                  label={`${t(group.label)} · ${i + 1}`}
                  emptyHint={
                    lang === "zh"
                      ? "把飞书原图放入 web/public/screenshots/ 自动显示"
                      : "Drop the original into web/public/screenshots/ to display"
                  }
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

/**
 * 单张截图：成功加载则正常展示；加载失败（即文件还没放）显示占位卡。
 */
function ProofImage({
  src,
  label,
  emptyHint,
}: {
  src: string;
  label: string;
  emptyHint: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm">
      {failed ? (
        <div className="flex aspect-[3/4] flex-col items-center justify-center gap-3 bg-sr-bg-3/35 px-6 text-center">
          <span className="grid size-12 place-items-center rounded-2xl border border-sr-line bg-white text-sr-muted">
            <ImageOff className="size-5" />
          </span>
          <p className="text-[12.5px] font-medium text-sr-text-2">{label}</p>
          <p className="text-[11.5px] leading-relaxed text-sr-muted">
            {emptyHint}
          </p>
          <code className="rounded bg-white px-2 py-0.5 font-mono text-[11px] text-sr-text-2">
            {src}
          </code>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={label}
          loading="lazy"
          onError={() => setFailed(true)}
          className="block h-auto max-h-[560px] w-full bg-sr-bg-3/25 object-contain"
        />
      )}
    </div>
  );
}
