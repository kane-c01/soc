import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { FAQFooterCTA } from "@/components/sections/FAQFooterCTA";

export const metadata: Metadata = {
  title: "常见问题 · FAQ",
  description:
    "关于 SocialRouter 海外社媒增长信号测试的常见问题：服务范围、测试时长、合规边界、平台覆盖、价格区间、交付物等。",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-16">
        <FAQ />
        <FAQFooterCTA />
      </main>
      <Footer />
    </>
  );
}
