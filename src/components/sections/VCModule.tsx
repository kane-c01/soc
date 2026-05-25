"use client";

import { motion } from "framer-motion";
import { Briefcase, Telescope, MapPinned, FileBarChart2, BookOpenCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VC } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const ICONS = [Briefcase, Telescope, MapPinned, FileBarChart2, BookOpenCheck];

export function VCModule() {
  const { t, lang } = useLang();

  return (
    <section id="vc" className="relative py-16 sm:py-20">
      <div aria-hidden className="absolute inset-0 -z-10 sr-grid opacity-40" />
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-sr-line-2 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sr-text-2">
              <span className="size-1.5 rounded-full bg-sr-orange sr-pulse" />
              {t(VC.eyebrow)}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-sr-text sm:text-4xl">
              <span className="sr-gradient-text">{t(VC.heading)}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-sr-text-2">
              {t(VC.sub)}
            </p>

            <div className="mt-8 rounded-2xl border border-sr-line bg-sr-bg-2 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-sr-muted">
                {lang === "zh" ? "适用对象" : "Built for"}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-sr-text-2">
                <li>· {lang === "zh" ? "出海 GP / Portfolio 增长负责人" : "Global GPs / Portfolio growth leads"}</li>
                <li>· {lang === "zh" ? "已投 AI Agent / SaaS / Tool / Infra 项目" : "Funded AI Agent / SaaS / Tool / Infra portfolios"}</li>
                <li>· {lang === "zh" ? "需要可比对的数据语言做投后复盘" : "Teams that need a shared data language for portfolio reviews"}</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {VC.items.map((it, i) => {
                const Icon = ICONS[i] ?? Briefcase;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="group relative overflow-hidden rounded-xl border border-sr-line bg-sr-bg-2 p-5 transition-all hover:-translate-y-0.5 hover:border-sr-line-2"
                  >
                    <span className="grid size-9 place-items-center rounded-lg border border-sr-line-2 bg-white/[0.03] text-sr-orange">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-sr-text">
                      {t(it.title)}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-sr-text-2">
                      {t(it.desc)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
