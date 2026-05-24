"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
};

function variantClasses(variant: Variant) {
  switch (variant) {
    case "primary":
      return "sr-btn-primary text-white font-medium";
    case "ghost":
      return "sr-btn-ghost text-sr-text font-medium";
    case "outline":
      return "border border-sr-line-2 text-sr-text font-medium hover:bg-white/[0.04]";
  }
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, iconLeft, iconRight, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap transition will-change-transform",
        sizes[size],
        variantClasses(variant),
        className,
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
});

type LinkButtonProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  iconLeft,
  iconRight,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap transition will-change-transform",
        sizes[size],
        variantClasses(variant),
        className,
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </a>
  );
}
