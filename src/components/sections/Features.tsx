"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Target,
  ShieldCheck,
  Users2,
  Route as RouteIcon,
  BarChart3,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS = [Radar, Target, ShieldCheck, Users2, RouteIcon, BarChart3];

export function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sr-line-2 to-transparent" />
      <Container>
        <SectionHeader
          eyebrow={t(FEATURES.eyebrow)}
          title={<span className="sr-gradient-text">{t(FEATURES.heading)}</span>}
          sub={t(FEATURES.sub)}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.items.map((item, i) => {
            const Icon = ICONS[i] ?? Radar;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group sr-glass relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sr-line-2"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-32 -right-16 size-56 rounded-full bg-gradient-to-br from-sr-orange/20 to-sr-red/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="grid size-12 place-items-center rounded-xl border border-sr-line-2 bg-gradient-to-br from-white/[0.05] to-white/[0.01] text-sr-orange">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-sr-text">
                  {t(item.title)}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-sr-text-2">
                  {t(item.subtitle)}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-sr-line pt-5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-[13.5px] text-sr-text-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-sr-orange" />
                      <span className="leading-relaxed">{t(b)}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
