"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  /**
   * 可选步骤序号（如 "01" / "02"）。
   * 当传入 step 时，eyebrow chip 内会显示 mono 序号代替默认 dot，
   * 用于让一组连续 section 形成可感知的"路径感"（如 4 步方法论）。
   */
  step?: string;
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  step,
  eyebrow,
  title,
  sub,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-sr-red/25 bg-sr-red/[0.06] px-3 py-1 text-[12px] font-semibold tracking-tight text-sr-red"
        >
          {step ? (
            <>
              <span className="font-mono text-[10.5px] font-bold tracking-[0.04em]">
                {step}
              </span>
              <span className="text-sr-red/40">·</span>
            </>
          ) : (
            <span className="size-1.5 rounded-full bg-sr-red" />
          )}
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-balance text-2xl font-semibold tracking-[-0.02em] text-sr-text sm:text-3xl lg:text-[40px] lg:leading-[1.15]"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-pretty text-[14px] leading-relaxed text-sr-text-2 sm:text-[15px]"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
