"use client";

import { motion } from "framer-motion";
import { Clock4, LineChart, Megaphone, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PAIN } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS = [Clock4, LineChart, Megaphone, Users];

export function PainPoints() {
  const { t } = useLang();

  return (
    <section className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 sr-grid opacity-50" />
      <Container>
        <SectionHeader
          eyebrow={t(PAIN.eyebrow)}
          title={<span className="sr-gradient-text">{t(PAIN.heading)}</span>}
          sub={t(PAIN.sub)}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PAIN.cards.map((card, i) => {
            const Icon = ICONS[i] ?? Clock4;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-2/70 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-sr-line-2"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sr-line-2 bg-white/[0.03] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-sr-text-2">
                    <span className="size-1.5 rounded-full bg-sr-orange" />
                    {t(card.tag)}
                  </span>
                  <span className="grid size-9 place-items-center rounded-xl border border-sr-line bg-white/[0.02] text-sr-orange">
                    <Icon className="size-4" />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-sr-text sm:text-xl">
                  {t(card.title)}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-sr-text-2">
                  {t(card.body)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
