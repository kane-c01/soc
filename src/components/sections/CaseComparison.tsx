"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight, Bot, Building2, Wand2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CASE_COMPARISON } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * 三案例横向对比表（统一单表布局，桌面/移动同源）
 *
 * 设计策略：
 * - 全部屏幕宽度都用同一个表格，不再桌面/移动双分支
 * - 表格 min-w-[640px]，mobile (< 640px) 自动触发横向滚动
 * - 第一列「指标」sticky left-0 → 横滚时始终可见，对照不丢失
 * - mobile 顶部加一个「横向滑动查看 3 个案例」的提示
 * - 字号在 mobile 略小（10.5–12.5px）保证信息密度
 * - 列宽 mobile 用绝对 px (140/160)，desktop 用百分比 (22%/26%) 自适应
 */
const CASE_ICONS = [Bot, Building2, Wand2];

export function CaseComparison() {
  const { t, lang } = useLang();
  const { cases, rows } = CASE_COMPARISON;

  return (
    <section
      id="case-comparison"
      className="relative scroll-mt-24 bg-sr-bg-3/45 py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={t(CASE_COMPARISON.eyebrow)}
          title={t(CASE_COMPARISON.heading)}
          sub={t(CASE_COMPARISON.sub)}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-10 max-w-6xl sm:mt-12"
        >
          {/* 横向滑动提示 — 仅 mobile 显示，告诉用户表格可以横滑 */}
          <div className="mb-3 flex items-center justify-center gap-1.5 text-[11px] text-sr-muted sm:hidden">
            <ArrowLeftRight className="size-3 text-sr-red" />
            {lang === "zh"
              ? "横向滑动查看 3 个案例"
              : "Swipe horizontally to compare all 3 cases"}
          </div>

          <div className="overflow-hidden rounded-2xl border border-sr-line bg-white shadow-sm">
            <div className="overflow-x-auto [scrollbar-width:thin]">
              <table className="w-full min-w-[640px] table-fixed border-collapse sm:min-w-0">
                <thead>
                  <tr className="bg-sr-text text-white">
                    <th className="sticky left-0 z-20 w-[150px] min-w-[140px] bg-sr-text px-4 py-4 text-left text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/70 shadow-[8px_0_8px_-8px_rgba(0,0,0,0.18)] sm:w-[22%] sm:px-5 sm:py-5 sm:text-[11px] sm:tracking-[0.18em] sm:shadow-none">
                      {lang === "zh" ? "对比指标" : "Metric"}
                    </th>
                    {cases.map((c, i) => {
                      const Icon = CASE_ICONS[i] ?? Bot;
                      return (
                        <th
                          key={c.id}
                          className="w-[170px] min-w-[160px] px-4 py-4 text-left sm:w-[26%] sm:min-w-0 sm:px-5 sm:py-5"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/[0.08] text-sr-red">
                              <Icon className="size-4" />
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-[12.5px] font-semibold text-white sm:text-[13px]">
                                {t(c.label)}
                              </p>
                              <p className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[10.5px] sm:tracking-[0.14em]">
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
                  {rows.map((row) => (
                    <tr
                      key={row.key}
                      className={cn(
                        "border-t border-sr-line",
                        row.highlight ? "bg-sr-red/[0.04]" : "bg-white",
                      )}
                    >
                      <td
                        className={cn(
                          "sticky left-0 z-20 px-4 py-3 text-[12px] font-semibold tracking-tight text-sr-text sm:px-5 sm:py-4 sm:text-[13px]",
                          /* 关键：sticky cell 必须用「实色背景」（非透明 alpha），
                             否则横滚时右边数据会透过来"穿透"显示。
                             #fdf5f5 = bg-sr-red/[0.04] on white 的等价实色。
                             右侧 box-shadow 制造分隔线，mobile 横滚时让用户看到边界 */
                          row.highlight ? "bg-[#fdf5f5]" : "bg-white",
                          "shadow-[8px_0_8px_-8px_rgba(33,19,15,0.10)] sm:shadow-none",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {row.highlight && (
                            <span className="size-1.5 shrink-0 rounded-full bg-sr-red" />
                          )}
                          <span className="leading-snug">{t(row.label)}</span>
                        </div>
                      </td>
                      {row.values.map((v, vi) => {
                        const text = t(v);
                        const isDash = text === "—";
                        return (
                          <td
                            key={vi}
                            className={cn(
                              "px-4 py-3 align-middle text-[12.5px] leading-snug sm:px-5 sm:py-4 sm:text-[14px]",
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
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
