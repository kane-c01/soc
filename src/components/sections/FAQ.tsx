"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ as FAQ_DATA } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(FAQ_DATA.eyebrow)}
          title={t(FAQ_DATA.heading)}
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-sr-line rounded-2xl border border-sr-line bg-white shadow-sm overflow-hidden">
          {FAQ_DATA.items.map((item, i) => {
            const expanded = open === i;
            const triggerId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i}>
                <button
                  type="button"
                  id={triggerId}
                  onClick={() => setOpen(expanded ? null : i)}
                  className={cn(
                    "flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors",
                    expanded ? "bg-sr-bg-3/35" : "hover:bg-sr-bg-3/20",
                  )}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center font-mono text-xs text-sr-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-medium text-sr-text sm:text-base">
                      {t(item.q)}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-7 shrink-0 place-items-center rounded-full transition-all duration-300",
                      expanded
                        ? "rotate-45 bg-sr-text text-white"
                        : "border border-sr-line-2 bg-white text-sr-text-2",
                    )}
                  >
                    <Plus className="size-3.5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-sr-text-2 sm:text-[15px]">
                        {t(item.a)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
