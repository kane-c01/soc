"use client";

import { Container } from "@/components/ui/Container";
import { CLIENT_LOGOS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * ClientLogos — 单行无限 marquee 的平台覆盖墙
 *
 * 视觉策略：
 * - 横向无限滚动，hover 暂停（沿用 sr-marquee class）
 * - 每个 logo = SimpleIcons CDN 提供的平台 brand-color SVG + wordmark
 * - 上下边缘 fade，让 logo 不在边界硬切，更接近真实 logo wall 体验
 */
export function ClientLogos() {
  const { t } = useLang();

  /* 复制一份用于无缝衔接 */
  const dup = [...CLIENT_LOGOS.logos, ...CLIENT_LOGOS.logos];

  return (
    <section className="relative border-y border-sr-line bg-sr-bg-3/55 py-14 sm:py-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-sr-muted">
            {t(CLIENT_LOGOS.eyebrow)}
          </span>
        </div>
      </Container>

      {/* Marquee 不放在 Container 内 — 让左右两侧 mask 直接吃到屏幕边 */}
      <div
        className={cn(
          "relative mt-10 w-full overflow-hidden",
          "[mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)]",
          "[-webkit-mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)]",
        )}
      >
        <ul
          className="flex w-max items-center gap-x-6 sr-marquee"
          style={{ animationDuration: "42s" }}
        >
          {dup.map((l, i) => (
            <LogoChip key={`${l.name}-${i}`} item={l} ariaHidden={i >= CLIENT_LOGOS.logos.length} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function LogoChip({
  item,
  ariaHidden,
}: {
  item: { name: string; logoSlug: string };
  ariaHidden?: boolean;
}) {
  return (
    <li
      aria-hidden={ariaHidden}
      className="inline-flex shrink-0 items-center gap-2.5 rounded-xl border border-sr-line bg-white px-4 py-2.5 shadow-sm transition hover:border-sr-line-2 hover:bg-white"
    >
      {/* SimpleIcons CDN 直接提供平台品牌色 SVG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${item.logoSlug}`}
        alt={`${item.name} logo`}
        width={20}
        height={20}
        loading="lazy"
        className="size-5 shrink-0 select-none"
        draggable={false}
      />
      <span className="text-[15px] font-semibold tracking-tight text-sr-text">
        {item.name}
      </span>
    </li>
  );
}
