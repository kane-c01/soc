"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { STICKY } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function StickyBar() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      const showAfter = 600;
      const bottomEpsilon = 200;
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const viewH = window.innerHeight;
      const nearBottom = y + viewH > docH - bottomEpsilon;
      setVisible(!dismissed && y > showAfter && !nearBottom);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed inset-x-3 bottom-4 z-40 sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="sr-glass-strong sr-highlight-top flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_20px_60px_-20px_rgba(204,10,13,0.6)] sm:max-w-md">
            <span className="hidden size-9 shrink-0 place-items-center rounded-xl border border-sr-line-2 bg-gradient-to-br from-sr-orange/25 to-sr-red/25 text-sr-orange sm:grid">
              <span className="relative grid place-items-center">
                <span className="size-2 rounded-full bg-sr-orange" />
                <span className="absolute inset-0 -m-2 rounded-full bg-sr-orange/40 sr-pulse" />
              </span>
            </span>
            <p className="min-w-0 flex-1 text-[13px] leading-snug text-sr-text-2">
              {t(STICKY.text)}
            </p>
            <a
              href="#apply"
              className="sr-btn-primary inline-flex h-9 items-center gap-1 rounded-lg px-3 text-xs font-medium text-white whitespace-nowrap"
            >
              {t(STICKY.cta)}
              <ArrowRight className="size-3.5" />
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="grid size-7 place-items-center rounded-md text-sr-muted transition hover:bg-white/[0.06] hover:text-sr-text"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
