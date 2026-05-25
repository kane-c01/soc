import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ApplyForm } from "@/components/sections/ApplyForm";

export const metadata: Metadata = {
  title: "申请测试方案 · 7-14 天判断海外社媒增长适配度",
  description:
    "提交你的产品官网、目标市场及竞品链接。SocialRouter 团队会评估你的产品是否适合通过增长信号测试，并给出定制化测试方案。",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-16">
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
