import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://socialrouter.ai"),
  title: {
    default: "SocialRouter — 把海外社媒的真实讨论，变成 AI 产品的增长信号",
    template: "%s · SocialRouter",
  },
  description:
    "面向已融资 AI 初创的海外社媒增长信号测试系统。在 Instagram / TikTok / YouTube / Reddit / X / LinkedIn 上识别高意向讨论，并通过 KOC / 素人矩阵将精准用户导向你的官网、Waitlist 或 Demo。",
  keywords: [
    "SocialRouter",
    "AI startup growth",
    "social signal testing",
    "海外社媒增长",
    "AI 出海",
    "KOC 营销",
    "Reddit growth",
    "TikTok growth",
    "X growth",
  ],
  openGraph: {
    title: "SocialRouter — Social signal testing for funded AI startups",
    description:
      "Route real social conversations into early growth signals for your AI product.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image", title: "SocialRouter" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-sr-bg text-sr-text font-sans selection:bg-sr-red/15 selection:text-sr-text">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
