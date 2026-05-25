"use client";

import { motion } from "framer-motion";
import { Bot, Layers, Wand2, Server } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlatformIcon } from "@/components/ui/PlatformIcons";
import { USE_CASES } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  agent: Bot,
  saas: Layers,
  tool: Wand2,
  infra: Server,
};

export function UseCases() {
  const { t } = useLang();

  return (
    <section id="use-cases" className="relative py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(USE_CASES.eyebrow)}
          title={<span className="sr-gradient-text">{t(USE_CASES.heading)}</span>}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.items.map((item, i) => {
            const Icon = ICONS[item.key] ?? Bot;
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-sr-line bg-sr-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sr-line-2"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-sr-orange/0 to-sr-red/0 transition-all duration-300 group-hover:from-sr-orange/15 group-hover:to-sr-red/10"
                />
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border border-sr-line-2 bg-gradient-to-br from-white/[0.05] to-white/[0.01] text-sr-orange">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-sr-line-2 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sr-text-2">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-sr-text-2">
                  {t(item.reason)}
                </p>
                <div className="mt-5 flex items-center gap-2 border-t border-sr-line pt-4 text-sr-text-2">
                  {item.platforms.map((p) => (
                    <span
                      key={p}
                      title={p}
                      className="inline-flex size-7 items-center justify-center rounded-md border border-sr-line bg-white/[0.03] transition hover:text-sr-text"
                    >
                      <PlatformIcon name={p} size={14} />
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
