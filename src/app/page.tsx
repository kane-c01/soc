import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";

import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { PainPoints } from "@/components/sections/PainPoints";
import { Mechanism } from "@/components/sections/Mechanism";
import { ReviewableEngagement } from "@/components/sections/ReviewableEngagement";
import { ContentDeepDive } from "@/components/sections/ContentDeepDive";
import { ConversionRouting } from "@/components/sections/ConversionRouting";
import { Results } from "@/components/sections/Results";
import { ProofGallery } from "@/components/sections/ProofGallery";
import { ProductResults } from "@/components/sections/ProductResults";
import { DashboardNote } from "@/components/sections/DashboardNote";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CaseComparison } from "@/components/sections/CaseComparison";
import { VCModule } from "@/components/sections/VCModule";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Home IA — 按飞书《SocialRouter Landing Page 修改版》完整 7 屏：
 *
 *   1) Hero                 ─ 一句话讲清产品
 *   2) PainPoints           ─ 用户在哪里 + 为什么传统方式抓不到
 *   3) Mechanism            ─ Discover / Identify / Prioritize 三步
 *   4) ReviewableEngagement ─ 可审核触达，降低合规顾虑
 *   5) ConversionRouting    ─ 用户被带到哪里
 *   6) Results + Proof      ─ 数据 + 真实截图 + 三类产品结果 + Dashboard 说明
 *   7) CaseStudies          ─ 飞书三个真实案例
 *   8) VCModule + Pricing   ─ VC / 投后适用 + 合作模式
 *   9) FinalCTA             ─ 提交产品信息，获取测试建议
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* 1 · Hero */}
        <Hero />
        <ClientLogos />

        {/* 2 · 你的潜在用户在哪里 + 为什么传统手段抓不到 */}
        <PainPoints />

        {/* 3 · 三步发现机制 */}
        <Mechanism />

        {/* 4 · 可审核触达 */}
        <ReviewableEngagement />

        {/* 4.5 · 高保真平台评论示例（Instagram / Facebook / TikTok / Reddit / X） */}
        <ContentDeepDive />

        {/* 5 · 把用户带到转化路径 */}
        <ConversionRouting />

        {/* 6 · 真实数据与效果证明 */}
        <Results />
        <ProofGallery />
        <ProductResults />
        <DashboardNote />

        {/* 真实案例（深度补充三个 tab） */}
        <CaseStudies />

        {/* 三案例横向对比表 */}
        <CaseComparison />

        {/* VC / 投后团队适用 */}
        <VCModule />

        {/* 合作方案 */}
        <Pricing />

        {/* 7 · 最终 CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
