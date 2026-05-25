"use client";

import { motion } from "framer-motion";
import { Bot, Building2, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CASE_COMPARISON } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * 三案例横向对比表 — 销售视角
 *
 * Desktop (md+)：左列指标 + 3 列 case，sticky 左列
 * Mobile (sm)：3 张堆叠卡，每张卡列出全部 9 行指标
 */
const CASE_ICONS = [Bot, Building2, Wand2];

export function CaseComparison() {
  const { t, lang } = useLang();
  const { cases, rows, footnote } = CASE_COMPARISON;

  return (
    <section
      id="case-comparison"
      className="relative scroll-mt-24 bg-sr-bg-3/35 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(CASE_COMPARISON.eyebrow)}
          title={t(CASE_COMPARISON.heading)}
          sub={t(CASE_COMPARISON.sub)}
        />

        {/* ============ Desktop 表格 ============ */}
        <div className="mx-auto mt-12 hidden max-w-6xl md:block">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="bg-sr-text text-white">
                    <th className="sticky left-0 z-10 w-[22%] bg-sr-text px-5 py-5 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {lang === "zh" ? "对比指标" : "Metric"}
                    </th>
                    {cases.map((c, i) => {
                      const Icon = CASE_ICONS[i] ?? Bot;
                      return (
                        <th
                          key={c.id}
                          className="w-[26%] px-5 py-5 text-left"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="grid size-8 place-items-center rounded-lg bg-white/[0.08] text-sr-red">
                              <Icon className="size-4" />
                            </span>
                            <div>
                              <p className="text-[13px] font-semibold text-white">
                                {t(c.label)}
                              </p>
                              <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/55">
                                {t(c.sub)}
                              </p>
                            </div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr
                      key={row.key}
                      className={cn(
                        "border-t border-sr-line",
                        row.highlight ? "bg-sr-red/[0.04]" : "bg-white",
                      )}
                    >
                      <td
                        className={cn(
                          "sticky left-0 z-10 px-5 py-4 text-[13px] font-semibold tracking-tight text-sr-text",
                          row.highlight
                            ? "bg-sr-red/[0.04]"
                            : ri % 2 === 0
                              ? "bg-white"
                              : "bg-white",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {row.highlight && (
                            <span className="size-1.5 shrink-0 rounded-full bg-sr-red" />
                          )}
                          {t(row.label)}
                        </div>
                      </td>
                      {row.values.map((v, vi) => {
                        const text = t(v);
                        const isDash = text === "—";
                        return (
                          <td
                            key={vi}
                            className={cn(
                              "px-5 py-4 align-middle text-[14px]",
                              isDash
                                ? "text-sr-muted"
                                : row.highlight
                                  ? "font-mono font-semibold text-sr-red"
                                  : "font-mono font-medium text-sr-text",
                            )}
                          >
                            {text}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <p className="mt-3 px-1 text-[11.5px] leading-relaxed text-sr-muted">
            {t(footnote)}
          </p>
        </div>

        {/* ============ Mobile 堆叠卡 ============ */}
        <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 md:hidden">
          {cases.map((c, ci) => {
            const Icon = CASE_ICONS[ci] ?? Bot;
            return (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: ci * 0.06 }}
                className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm"
              >
                <header className="flex items-center justify-between border-b border-sr-line bg-sr-text px-5 py-4 text-white">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg bg-white/[0.08] text-sr-red">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold">{t(c.label)}</p>
                      <p className="text-[10.5px] uppercase tracking-[0.14em] text-white/55">
                        {t(c.sub)}
                      </p>
                    </div>
                  </div>
                </header>
                <dl>
                  {rows.map((row, ri) => {
                    const text = t(row.values[ci]);
                    const isDash = text === "—";
                    return (
                      <div
                        key={row.key}
                        className={cn(
                          "flex items-center justify-between gap-3 border-t border-sr-line px-5 py-3",
                          row.highlight
                            ? "bg-sr-red/[0.05]"
                            : ri % 2 === 0
                              ? "bg-white"
                              : "bg-sr-bg-3/20",
                        )}
                      >
                        <dt className="flex items-center gap-1.5 text-[12px] font-medium text-sr-text-2">
                          {row.highlight && (
                            <span className="size-1.5 shrink-0 rounded-full bg-sr-red" />
                          )}
                          {t(row.label)}
                        </dt>
                        <dd
                          className={cn(
                            "shrink-0 text-right text-[13px]",
                            isDash
                              ? "text-sr-muted"
                              : row.highlight
                                ? "font-mono font-semibold text-sr-red"
                                : "font-mono font-medium text-sr-text",
                          )}
                        >
                          {text}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </motion.article>
            );
          })}
          <p className="px-1 text-[11.5px] leading-relaxed text-sr-muted">
            {t(footnote)}
          </p>
        </div>
      </Container>
    </section>
  );
}
