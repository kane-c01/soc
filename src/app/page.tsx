import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";

import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PainPoints } from "@/components/sections/PainPoints";
import { Mechanism } from "@/components/sections/Mechanism";
import { ReviewableEngagement } from "@/components/sections/ReviewableEngagement";
import { ContentDeepDive } from "@/components/sections/ContentDeepDive";
import { ConversionRouting } from "@/components/sections/ConversionRouting";
import { ProofGallery } from "@/components/sections/ProofGallery";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CaseComparison } from "@/components/sections/CaseComparison";
import { VCModule } from "@/components/sections/VCModule";
import { WhyNow } from "@/components/sections/WhyNow";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Home IA — B2B SaaS 经典 funnel：HOOK → PROOF → PAIN → SOLUTION → WHO → EVIDENCE → PRICE → CTA
 *
 *   1) Hero                  ─ HOOK：极简一屏（badge / 标题 / 副文 / CTA / ctaNote）
 *      TrustStrip            ─ SOCIAL PROOF：独立窄条（KPI 4 列 + 平台 logos 跑马灯）
 *   2) PainPoints            ─ PAIN：机会 + 为什么传统手段抓不到
 *   3) Mechanism             ─ SOLUTION 核心：Discover / Identify / Prioritize 三步
 *   4) ReviewableEngagement  ─ SOLUTION 能力 1：可审核触达
 *      ContentDeepDive       ─ SOLUTION 示例：5 平台高保真评论
 *   5) ConversionRouting     ─ SOLUTION 能力 2：从触达到转化闭环
 *   6) ProofGallery          ─ EVIDENCE 视觉：4 组真实截图（#results）
 *   7) VCModule              ─ WHO IT'S FOR：VC / 投后客户专属（#vc）
 *                              （做 Evidence 三段的断点，避免节奏疲劳）
 *      CaseStudies           ─ EVIDENCE 叙事：飞书三个真实案例
 *      CaseComparison        ─ EVIDENCE 结构化：三案例横向对比
 *   8) WhyNow                ─ URGENCY：3 个 KPI 强化「现在就该做」决策催化
 *   9) Pricing               ─ PRICING：7-14 天测试 + Growth Sprint
 *  10) FinalCTA              ─ CTA：提交产品信息，获取测试建议
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* 1 · HOOK — 极简一屏 */}
        <Hero />

        {/* 1.5 · SOCIAL PROOF — 独立窄条（KPI + 平台 logos） */}
        <TrustStrip />

        {/* 2 · PAIN — 用户机会 + 传统手段失效 */}
        <PainPoints />

        {/* 3 · SOLUTION 核心 — 三步发现机制 */}
        <Mechanism />

        {/* 4 · SOLUTION 能力 1 — 可审核触达 */}
        <ReviewableEngagement />

        {/* 4.5 · SOLUTION 示例 — 5 平台高保真评论 mock */}
        <ContentDeepDive />

        {/* 5 · SOLUTION 能力 2 — 把用户带到转化路径 */}
        <ConversionRouting />

        {/* 6 · EVIDENCE 视觉 — 真实截图与 KPI */}
        <ProofGallery />

        {/* 7 · WHO IT'S FOR — VC / 投后专属（断点：避免 3 段 Evidence 连续疲劳） */}
        <VCModule />

        {/* 8 · EVIDENCE 叙事 — 三个真实案例（多 tab） */}
        <CaseStudies />

        {/* 9 · EVIDENCE 结构化 — 三案例横向对比表 */}
        <CaseComparison />

        {/* 10 · URGENCY — 为什么是现在（紧迫感催化） */}
        <WhyNow />

        {/* 11 · PRICING */}
        <Pricing />

        {/* 12 · CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
