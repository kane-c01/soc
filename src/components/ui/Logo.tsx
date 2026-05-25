import type { SVGProps } from "react";

/**
 * SocialRouter brand mark — "Trefoil Router"
 *
 * Three signal nodes interwoven by a continuous gradient ribbon.
 * The ribbon never starts or ends — it loops between every pair of
 * platforms, the same way SocialRouter loops attention between every
 * social channel. Dark squircle container keeps the mark cohesive on
 * any background, while the warm crimson→tangerine gradient mirrors
 * the brand palette.
 */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient
          id="sr-ribbon"
          x1="4"
          y1="6"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBA047" />
          <stop offset="0.45" stopColor="#F87F23" />
          <stop offset="0.85" stopColor="#E53E41" />
          <stop offset="1" stopColor="#CC0A0D" />
        </linearGradient>

        <linearGradient
          id="sr-shell"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1B100C" />
          <stop offset="1" stopColor="#070403" />
        </linearGradient>

        <radialGradient
          id="sr-node-glow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 16) scale(14)"
        >
          <stop stopColor="#F87F23" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#CC0A0D" stopOpacity="0.12" />
          <stop offset="1" stopColor="#CC0A0D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dark squircle shell */}
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="9"
        fill="url(#sr-shell)"
      />

      {/* Inner red/orange glow ambience */}
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="9"
        fill="url(#sr-node-glow)"
      />

      {/* Top edge highlight (Linear-style premium rim) */}
      <path
        d="M9.5 1H22.5"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* Subtle outer border */}
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="9"
        stroke="rgba(255,255,255,0.10)"
      />

      {/* Trefoil ribbon — three interlocking arcs that visit every node */}
      <g
        stroke="url(#sr-ribbon)"
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
      >
        {/* Arc:  top-node  →  bottom-left-node  (curves left) */}
        <path d="M15 8.6 C 8.2 11, 6.4 18, 10 22.2" />
        {/* Arc:  top-node  →  bottom-right-node  (curves right) */}
        <path d="M17 8.6 C 23.8 11, 25.6 18, 22 22.2" />
        {/* Arc:  bottom-left  →  bottom-right  (curves down, weaves under) */}
        <path d="M10.7 23.4 C 13.5 26.4, 18.5 26.4, 21.3 23.4" />
      </g>

      {/* Three signal nodes */}
      <g>
        {/* Top node */}
        <circle cx="16" cy="8" r="2.3" fill="url(#sr-ribbon)" />
        <circle
          cx="16"
          cy="8"
          r="2.3"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.5"
        />
        {/* Bottom-left node */}
        <circle cx="9.5" cy="23" r="2.3" fill="url(#sr-ribbon)" />
        <circle
          cx="9.5"
          cy="23"
          r="2.3"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.5"
        />
        {/* Bottom-right node */}
        <circle cx="22.5" cy="23" r="2.3" fill="url(#sr-ribbon)" />
        <circle
          cx="22.5"
          cy="23"
          r="2.3"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
}

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
