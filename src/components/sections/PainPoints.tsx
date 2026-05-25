"use client";

import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  Video,
  Hash,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PAIN } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 2 屏（飞书：你的潜在用户，已经在海外社媒里出现了）
 *
 * 4 个「场景卡」：用户已经在哪里说什么
 */
const SCENARIO_ICONS = [MessageSquareQuote, Video, Hash, Sparkles];

export function PainPoints() {
  const { t } = useLang();

  return (
    <section id="pain" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(PAIN.eyebrow)}
          title={t(PAIN.heading)}
          sub={t(PAIN.sub)}
        />

        {/* 场景卡：他们已经在这里说话 */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN.scenarios.map((sc, i) => {
            const Icon = SCENARIO_ICONS[i] ?? MessageSquareQuote;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-sr-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid size-9 place-items-center rounded-xl border border-sr-line bg-sr-bg-3/60 text-sr-red">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold tracking-tight text-sr-red">
                    {t(sc.tag)}
                  </p>
                  <p className="mt-2.5 text-[14.5px] font-medium leading-snug text-sr-text">
                    {t(sc.quote)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
