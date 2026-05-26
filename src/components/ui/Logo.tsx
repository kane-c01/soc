import { cn } from "@/lib/utils";

/**
 * SocialRouter brand logo mark — 金色对称双弧设计
 *
 * 用透明 PNG 渲染（替代原 SVG ribbon 设计）。
 *
 * 资产（全部为透明 PNG，alpha 通道完整）：
 * - /brand/logo.png  256x262 trim 后无空白，本组件引用（小尺寸显示最佳）
 * - /logo.png        512x512 居中正方形，通用版（OG 卡片等地方可引用）
 * - app/icon.png     256x256 → 浏览器 tab favicon
 * - app/apple-icon.png 180x180 → iOS 主屏图标
 *
 * 用 <img> 而非 next/image：
 * - 文件本身已 < 50KB，above-the-fold 元素无需 lazy load
 * - 避免 next/image 自动生成 srcset 在小尺寸（32px 显示）下的 overhead
 * - 通过 className 灵活控制尺寸（如 size-8 / size-10）
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/brand/logo.png"
      alt=""
      aria-hidden
      className={cn("select-none object-contain", className)}
      draggable={false}
    />
  );
}

/**
 * Logo — 品牌标志组合（logo mark + 文字 wordmark）
 *
 * @param withText 是否显示「SocialRouter」文字 wordmark
 */
export function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="size-8 shrink-0" />
      {withText && (
        <span className="text-[15px] font-semibold tracking-tight text-sr-text">
          SocialRouter
        </span>
      )}
    </span>
  );
}
