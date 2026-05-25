/**
 * Tiny inline SVGs for the platforms SocialRouter covers.
 * Kept as monochrome currentColor glyphs so they tint per parent.
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function withDefaults({ size = 22, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    ...rest,
  };
}

export function InstagramIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <path
        d="M14 4v9.5a3 3 0 11-3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 4c.5 2.4 2.2 4 4.5 4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function YoutubeIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.75v4.5L14.5 12 10.5 9.75z" fill="currentColor" />
    </svg>
  );
}

export function RedditIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9.5" cy="13" r="1" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1" fill="currentColor" />
      <path d="M9 16c.8.7 2 1.1 3 1.1s2.2-.4 3-1.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="18.5" cy="8" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15 5l3.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function XIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkedInIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.5" cy="8" r="1" fill="currentColor" />
      <path d="M7 11v6M11 11v6M11 13.5a2 2 0 014 0V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ProductHuntIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8h3.5a2.5 2.5 0 010 5H10V8zm0 5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DiscordIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <path
        d="M8 8c2.5-1 5.5-1 8 0M8 16c2.5 1 5.5 1 8 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="9" cy="13" rx="1" ry="1.5" fill="currentColor" />
      <ellipse cx="15" cy="13" rx="1" ry="1.5" fill="currentColor" />
      <path
        d="M6 7l1.5 11c1.5.7 3 1 4.5 1s3-.3 4.5-1L18 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FacebookIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <path
        d="M14 21V14h2.5l.5-3H14V9c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H8.5v3H11v7h3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function QuoraIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14.5 16l2 2.5M11.5 14a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MediumIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <circle cx="7" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="15" cy="12" rx="1.5" ry="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ThreadsIcon(p: IconProps) {
  return (
    <svg {...withDefaults(p)}>
      <path
        d="M15.5 8.5C14.5 6.5 13 5.5 11 5.5c-3 0-5 2.5-5 6s2 6.5 5.5 6.5c2 0 3.5-1 4-2.5.4-1.4-.5-2.5-2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export const PLATFORM_ICONS: Record<
  string,
  (p: IconProps) => React.JSX.Element
> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YoutubeIcon,
  Reddit: RedditIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  "Product Hunt": ProductHuntIcon,
  Discord: DiscordIcon,
  Quora: QuoraIcon,
  Medium: MediumIcon,
  Threads: ThreadsIcon,
};

/**
 * 国内平台的 monogram fallback
 * - 不画 SVG，用首字符占位，保持一致的方框尺寸
 * - 国内平台名通常是中文 2-3 个字，取首字
 */
const CHINESE_MONOGRAM: Record<string, string> = {
  小红书: "红",
  抖音: "抖",
  B站: "B",
  知乎: "知",
  微博: "微",
  微信公众号: "公",
  微信视频号: "视",
  快手: "快",
  即刻: "即",
  脉脉: "脉",
  豆瓣: "豆",
  虎扑: "扑",
};

export function PlatformIcon({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = PLATFORM_ICONS[name];
  if (Cmp) return <Cmp size={size} className={className} />;

  const ch = CHINESE_MONOGRAM[name] ?? name.charAt(0).toUpperCase();
  const fontSize = Math.max(8, Math.round(size * 0.55));
  return (
    <span
      className={className}
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: size,
        height: size,
        borderRadius: 4,
        background: "currentColor",
        color: "transparent",
        position: "relative",
      }}
      aria-hidden
    >
      <span
        style={{
          position: "absolute",
          fontFamily:
            "var(--font-mono, ui-monospace), 'SF Mono', monospace",
          fontWeight: 700,
          fontSize,
          lineHeight: 1,
          color: "var(--sr-bg, #faf7f2)",
        }}
      >
        {ch}
      </span>
    </span>
  );
}
