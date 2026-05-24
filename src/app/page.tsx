import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBar } from "@/components/layout/StickyBar";

import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Mechanism } from "@/components/sections/Mechanism";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { VCModule } from "@/components/sections/VCModule";
import { Pricing } from "@/components/sections/Pricing";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FAQ } from "@/components/sections/FAQ";
import { ApplyForm } from "@/components/sections/ApplyForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <PainPoints />
        <Mechanism />
        <Features />
        <UseCases />
        <VCModule />
        <Pricing />
        <CaseStudies />
        <FAQ />
        <ApplyForm />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
