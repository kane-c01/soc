import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";

import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Mechanism } from "@/components/sections/Mechanism";
import { ContentDeepDive } from "@/components/sections/ContentDeepDive";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Home IA (B2B-first):
 *   Hero  ▸  ClientLogos  ▸  CaseStudies  ▸  Mechanism  ▸  ContentExamples
 *         ▸  Results  ▸  Pricing  ▸  FinalCTA
 *
 * PainPoints removed — 企业客户已知自己的痛点，无须铺陈 4 张抱怨卡片。
 * ClientLogos & CaseStudies 前置 — B2B 第一印象 = "做过谁"。
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <ClientLogos />
        <CaseStudies />
        <Mechanism />
        <ContentDeepDive />
        <Results />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
