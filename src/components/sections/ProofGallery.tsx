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
 * 第 6.2 屏 · 效果截图墙
 *
 * 交互：
 *   - 上方 tab 固定 4 列，点击切换分类
 *   - 手机端：每个分类内的多张图片横向滑动（snap-x）
 *   - 桌面端 (sm+)：图片按数量自适应 2/3 列网格
 *
 * 图片：直接读 /screenshots/xxx.png；文件不存在时 onError 显示占位卡。
 */
export function ProofGallery() {
  const { t, lang } = useLang();
  const groups = PROOF_GALLERY.groups;
  const [active, setActive] = useState(groups[0].key);
  const group = groups.find((g) => g.key === active) ?? groups[0];

  return (
    <section
      id="results"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(PROOF_GALLERY.eyebrow)}
          title={t(PROOF_GALLERY.heading)}
          sub={t(PROOF_GALLERY.sub)}
        />

        {/* tabs — mobile 横向滑动（避免 4 列拥挤换行），sm+ 恢复 4 列 grid 均分 */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div
            role="tablist"
            aria-label={lang === "zh" ? "效果截图分类" : "Proof gallery categories"}
            className={cn(
              /* mobile: flex 横滑，gap-1，隐藏滚动条 */
              "flex gap-1 overflow-x-auto rounded-xl border border-sr-line bg-sr-bg-3/40 p-1.5",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              /* sm+: grid 4 列均分 */
              "sm:grid sm:grid-cols-4 sm:gap-1.5 sm:overflow-visible",
            )}
          >
            {groups.map((g) => {
              const isActive = g.key === active;
              return (
                <button
                  key={g.key}
                  role="tab"
                  type="button"
                  id={`proof-tab-${g.key}`}
                  aria-selected={isActive}
                  aria-controls={`proof-panel-${g.key}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(g.key)}
                  className={cn(
                    /* mobile: shrink-0 + min-w 保证标签一行显示，不再被挤换行 */
                    "relative h-10 shrink-0 rounded-lg px-3 text-[11.5px] font-medium leading-tight whitespace-nowrap transition-colors",
                    "min-w-[110px]",
                    /* sm+: 取消 min-width，恢复 grid 均分（w-full + shrink） */
                    "sm:h-11 sm:w-full sm:min-w-0 sm:shrink sm:whitespace-normal sm:px-2 sm:text-sm",
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
      </Container>

      <AnimatePresence mode="wait">
        <motion.div
          key={group.key}
          role="tabpanel"
          id={`proof-panel-${group.key}`}
          aria-labelledby={`proof-tab-${group.key}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {/* 分组描述 */}
          <Container>
            <p className="mx-auto max-w-2xl text-center text-[14px] leading-relaxed text-sr-text-2">
              {t(group.desc)}
            </p>
          </Container>

          {/* 图片区 — 手机端横向滑动 / 桌面端网格 */}
          <div
            className={cn(
              /* mobile: 水平 snap 滚动，溢出到屏幕边缘 */
              "mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-6 pb-2 sm:px-10",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              /* sm+: 改成 grid 网格居中 */
              "sm:mx-auto sm:grid sm:gap-4 sm:overflow-visible sm:px-6",
              group.images.length >= 3
                ? "sm:max-w-6xl sm:grid-cols-2 lg:grid-cols-3"
                : group.images.length === 2
                  ? "sm:max-w-4xl sm:grid-cols-2"
                  : "sm:max-w-2xl sm:grid-cols-1",
            )}
          >
            {group.images.map((src, i) => (
              <div
                key={src}
                className="w-[82vw] max-w-[380px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink"
              >
                <ProofImage
                  src={src}
                  label={`${t(group.label)} · ${i + 1}`}
                  emptyHint={
                    lang === "zh"
                      ? "把飞书原图放入 web/public/screenshots/ 自动显示"
                      : "Drop the original into web/public/screenshots/ to display"
                  }
                />
              </div>
            ))}
            {/* 右尾 spacer，让最后一张能完整居中 */}
            <div aria-hidden className="w-3 shrink-0 sm:hidden" />
          </div>

          {/* 手机端提示 — 多于 1 张才显示 */}
          {group.images.length > 1 && (
            <p className="mt-3 text-center text-[11px] text-sr-muted sm:hidden">
              {lang === "zh"
                ? `← 左右滑动 (${group.images.length} 张) →`
                : `← Swipe (${group.images.length} images) →`}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

/** 单张截图：成功加载则正常展示；加载失败显示占位卡。 */
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
