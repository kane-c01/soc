"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Hourglass,
  CalendarCheck,
  Trophy,
  MessagesSquare,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTING } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 5 屏（飞书：把用户带到你的转化路径）
 *
 * 视觉策略：
 *   6 张转化路径卡，2 行 3 列。
 *   每张卡：左侧 icon + 大字目的地，右侧 → 小箭头 + 适配产品类型。
 *   底部一句"结论"，红色描边强调。
 */
const PATH_ICONS = [
  Globe,
  Hourglass,
  CalendarCheck,
  Trophy,
  MessagesSquare,
  ClipboardList,
];

export function ConversionRouting() {
  const { t } = useLang();

  return (
    <section
      id="routing"
      className="relative scroll-mt-24 bg-sr-bg-3/45 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(ROUTING.eyebrow)}
          title={t(ROUTING.heading)}
          sub={t(ROUTING.sub)}
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTING.paths.map((p, i) => {
            const Icon = PATH_ICONS[i] ?? Globe;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-sr-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sr-line-2 hover:shadow-md"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-sr-line bg-sr-bg-3/60 text-sr-red">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-semibold tracking-tight text-sr-text">
                      {t(p.dest)}
                    </p>
                    <p className="mt-0.5 truncate text-[12.5px] text-sr-text-2">
                      {t(p.fit)}
                    </p>
                  </div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-sr-muted transition-transform group-hover:translate-x-0.5 group-hover:text-sr-red" />
              </motion.article>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
