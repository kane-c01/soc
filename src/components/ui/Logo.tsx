import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden {...props}>
      <defs>
        <linearGradient id="sr-mark-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F87F23" />
          <stop offset="0.55" stopColor="#E53E41" />
          <stop offset="1" stopColor="#CC0A0D" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect x="0.5" y="0.5" width="27" height="27" rx="8" fill="url(#sr-mark-grad)" />
      {/* Routing icon — three nodes connected by a forking path */}
      <circle cx="7.5" cy="14" r="1.6" fill="#fff" />
      <circle cx="20.5" cy="8.5" r="1.6" fill="#fff" />
      <circle cx="20.5" cy="19.5" r="1.6" fill="#fff" />
      <path
        d="M9 13.2c3-1.6 5.5-2.6 9.2-4.4M9 14.8c3 1.6 5.5 2.6 9.2 4.4"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Inner highlight */}
      <rect x="1" y="1" width="26" height="26" rx="7.5" stroke="rgba(255,255,255,0.22)" />
    </svg>
  );
}

export function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark className="size-7" />
      {withText && (
        <span className="text-[15px] font-semibold tracking-tight text-sr-text">
          SocialRouter
        </span>
      )}
    </span>
  );
}
