"use client";

import { motion } from "framer-motion";
import { Globe2, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PLATFORMS } from "@/lib/content";
import { PlatformIcon } from "@/components/ui/PlatformIcons";
import { useLang } from "@/lib/i18n";

/**
 * PlatformsCovered — 国内 + 海外平台双列
 *
 * 设计目标：让国内品牌客户直接看到"小红书 / 抖音 / B 站 / 知乎"等阵地都能做。
 * 视觉：白底卡片 + 两列分区 + 平台 icon（无 icon 时回退 monogram）。
 */
export function PlatformsCovered() {
  const { t } = useLang();

  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-sr-muted">
              <span className="h-px w-6 bg-sr-red/60" />
              {t(PLATFORMS.eyebrow)}
            </span>
            <p className="mt-3 max-w-2xl text-sm text-sr-text-2 sm:text-[15px]">
              {t(PLATFORMS.subtitle)}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <PlatformGroup
              icon={<Globe2 className="size-4" />}
              label={t(PLATFORMS.global.label)}
              items={PLATFORMS.global.items}
            />
            <PlatformGroup
              icon={<Star className="size-4" />}
              label={t(PLATFORMS.china.label)}
              items={PLATFORMS.china.items}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlatformGroup({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl border border-sr-line bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-sr-bg-3 text-sr-red">
          {icon}
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sr-text">
          {label}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((p) => (
          <span
            key={p}
            className="inline-flex items-center gap-1.5 rounded-lg border border-sr-line bg-sr-bg-3/30 px-2.5 py-1.5 text-[12.5px] font-medium text-sr-text transition hover:bg-sr-bg-3/60"
          >
            <PlatformIcon name={p} size={13} />
            <span>{p}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
