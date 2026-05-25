"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Building2, Sparkles, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LinkButton } from "@/components/ui/Button";
import { DASHBOARD_NOTE } from "@/lib/content";
import { useLang } from "@/lib/i18n";

/**
 * 第 6.4 屏（飞书：Dashboard 不只看执行量，更看增长判断）
 *
 * 左：大字标题 + 副标题
 * 右：两栏并列「创业者关注 vs VC 关注」
 * 底：双 CTA（查看 Demo Dashboard / 申请 7-14 天测试）
 */
export function DashboardNote() {
  const { t } = useLang();

  return (
    <section id="dashboard" className="relative scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow={t(DASHBOARD_NOTE.eyebrow)}
          title={t(DASHBOARD_NOTE.heading)}
          sub={t(DASHBOARD_NOTE.sub)}
        />

        {/* 两列对照：创业者关注 vs VC 关注 */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          <ConcernCard
            icon={<Building2 className="size-4" />}
            label={t(DASHBOARD_NOTE.founderMetrics.title)}
            items={DASHBOARD_NOTE.founderMetrics.items.map((i) => t(i))}
            accentClass="bg-sr-text text-white"
          />
          <ConcernCard
            icon={<Sparkles className="size-4" />}
            label={t(DASHBOARD_NOTE.vcMetrics.title)}
            items={DASHBOARD_NOTE.vcMetrics.items.map((i) => t(i))}
            accentClass="bg-sr-red text-white"
          />
        </div>

        {/* 底部 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mx-auto mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton
            href={DASHBOARD_NOTE.ctas[0].href}
            variant="ghost"
            size="lg"
            iconLeft={<BarChart3 className="size-4" />}
          >
            {t(DASHBOARD_NOTE.ctas[0].label)}
          </LinkButton>
          <LinkButton
            href={DASHBOARD_NOTE.ctas[1].href}
            variant="primary"
            size="lg"
            iconRight={<ArrowRight className="size-4" />}
          >
            {t(DASHBOARD_NOTE.ctas[1].label)}
          </LinkButton>
        </motion.div>
      </Container>
    </section>
  );
}

/** 单栏关注点卡 — Founder / VC 通用 */
function ConcernCard({
  icon,
  label,
  items,
  accentClass,
}: {
  icon: React.ReactNode;
  label: string;
  items: string[];
  accentClass: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-2xl border border-sr-line bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid size-9 place-items-center rounded-xl ${accentClass}`}
        >
          {icon}
        </span>
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-sr-muted">
          {label}
        </p>
      </div>
      <ul className="mt-6 space-y-3.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-[15px] leading-snug text-sr-text"
          >
            <Check className="mt-1 size-4 shrink-0 text-sr-red" />
            <span className="font-medium">{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
