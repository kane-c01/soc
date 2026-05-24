"use client";

import { PlatformIcon } from "@/components/ui/PlatformIcons";
import { cn } from "@/lib/utils";

type Props = {
  platforms: string[];
  className?: string;
  /** Animation duration in seconds (default 28s). */
  durationSec?: number;
};

/**
 * Edge-faded horizontal marquee for platform logos.
 *
 * The list is rendered TWICE back-to-back; the inner track is animated by
 * translateX(-50%) so when one full copy has scrolled offscreen the second
 * copy is exactly in its place — giving a seamless infinite loop.
 *
 * Hovering pauses the animation. The animation respects
 * `prefers-reduced-motion` via the CSS keyframe definition.
 */
export function PlatformMarquee({ platforms, className, durationSec = 28 }: Props) {
  // The CSS class `.sr-marquee` defaults to 38s; per-instance speed is
  // overridable via inline animation-duration.
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        // Soft fade on left + right edges so logos slide in/out elegantly.
        "[mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)]",
        className,
      )}
    >
      <div
        className="flex w-max items-center gap-x-10 py-1.5 sr-marquee"
        style={{ animationDuration: `${durationSec}s` }}
        aria-hidden={false}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-x-10"
            aria-hidden={copy === 1}
          >
            {platforms.map((p) => (
              <li
                key={`${copy}-${p}`}
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-sr-text-2"
              >
                <PlatformIcon name={p} size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
