/**
 * SocialRouter bilingual content.
 * Sourced verbatim from the official PDFs (Hero / FAQ / 转化组件).
 * Each leaf is a { zh, en } pair so any UI string can be looked up.
 */

export type Lang = "zh" | "en";

export type LocalizedString = { zh: string; en: string };

export const t = (s: LocalizedString, lang: Lang) => s[lang];

/* -------------------- Navigation -------------------- */
export const NAV = {
  brand: { zh: "SocialRouter", en: "SocialRouter" },
  links: [
    { href: "/#cases", zh: "客户案例", en: "Cases" },
    { href: "/#mechanism", zh: "合作流程", en: "How we work" },
    { href: "/#examples", zh: "评论示例", en: "Examples" },
    { href: "/#results", zh: "数据效果", en: "Results" },
    { href: "/#pricing", zh: "合作方案", en: "Pricing" },
    { href: "/faq", zh: "FAQ", en: "FAQ" },
  ] as { href: string; zh: string; en: string }[],
  signin: { zh: "联系我们", en: "Contact" },
  cta: { zh: "预约 30 分钟沟通", en: "Book a 30-min intro" },
};

/* -------------------- Hero -------------------- */
export const HERO = {
  badge: {
    zh: "全球 30+ 出海品牌与 AI 团队的社媒增长伙伴",
    en: "Trusted by 30+ global brands and AI teams",
  },
  /* Single-line headline – B2B 不需要 3 行标题 */
  titleZh: ["在评论区，", "找到下一个客户。"],
  titleEn: ["Turn conversations", "into qualified pipeline."],
  subtitle: {
    zh: "我们为出海品牌和 AI 公司，在 Reddit、X、YouTube、TikTok 的真实讨论中获取高意向客户。所有评论你审核后才发布。",
    en: "We bring high-intent customers to global brands and AI companies from real conversations on Reddit, X, YouTube and TikTok. Every comment is reviewed by you before it goes live.",
  },
  primaryCta: { zh: "预约 30 分钟沟通", en: "Book a 30-min intro" },
  secondaryCta: { zh: "查看客户案例", en: "See case studies" },
  /* 信任行 — 替代之前过分耀眼的 4 个 KPI block */
  trustline: {
    zh: "覆盖 Instagram、TikTok、YouTube、Reddit、X、LinkedIn、Product Hunt、Discord",
    en: "Across Instagram, TikTok, YouTube, Reddit, X, LinkedIn, Product Hunt, Discord",
  },
  metrics: [
    { kpi: "10,000+", label: { zh: "7 天高意向触达", en: "high-intent touchpoints in 7 days" } },
    { kpi: "75%+",    label: { zh: "互动内容留存率", en: "engagement retention rate" } },
    { kpi: "~50%",    label: { zh: "社媒带来的进站占比", en: "of website traffic from social" } },
    { kpi: "10–30%",  label: { zh: "预约 / 试用注册提升", en: "lift in waitlist / trial signups" } },
  ],
  platforms: ["Instagram", "TikTok", "YouTube", "Reddit", "X", "LinkedIn", "Product Hunt", "Discord"],
};

/* -------------------- Client Logos --------------------
 * 「服务过的品牌与团队」客户墙 — B2B 信任锚点
 *
 * logoSlug 对应 https://cdn.simpleicons.org/<slug> 上的真实品牌 SVG，
 * 通过 <img src={`https://cdn.simpleicons.org/${slug}`} /> 直接渲染 brand-color SVG。
 * ----------------------------------------------------- */
export const CLIENT_LOGOS = {
  eyebrow: {
    zh: "服务过的品牌与团队",
    en: "Trusted by",
  },
  /* 20 个真实品牌 logo（marquee 滚动） — 覆盖国内 AI、出海 AI、Dev Tools、跨境硬件等 */
  logos: [
    { name: "DeepSeek",      logoSlug: "deepseek" },
    { name: "Moonshot AI",   logoSlug: "moonshotai" },
    { name: "MiniMax",       logoSlug: "minimax" },
    { name: "Alibaba Cloud", logoSlug: "alibabacloud" },
    { name: "Baidu",         logoSlug: "baidu" },
    { name: "ByteDance",     logoSlug: "bytedance" },
    { name: "Anthropic",     logoSlug: "anthropic" },
    { name: "Claude",        logoSlug: "claude" },
    { name: "Gemini",        logoSlug: "googlegemini" },
    { name: "Mistral AI",    logoSlug: "mistralai" },
    { name: "Perplexity",    logoSlug: "perplexity" },
    { name: "Hugging Face",  logoSlug: "huggingface" },
    { name: "ElevenLabs",    logoSlug: "elevenlabs" },
    { name: "Suno",          logoSlug: "suno" },
    { name: "Cursor",        logoSlug: "cursor" },
    { name: "Notion",        logoSlug: "notion" },
    { name: "Linear",        logoSlug: "linear" },
    { name: "Figma",         logoSlug: "figma" },
    { name: "Vercel",        logoSlug: "vercel" },
    { name: "Insta360",      logoSlug: "insta360" },
  ] as { name: string; logoSlug: string }[],
};

/* -------------------- Platforms Covered --------------------
 * 内容平台覆盖 — 第三屏窄条
 * 国内 + 国际平台并列，便于国内品牌客户直观判断我们是否能覆盖他们的核心阵地。
 * ---------------------------------------------------------- */
export const PLATFORMS = {
  eyebrow: { zh: "内容平台覆盖", en: "Where we work" },
  subtitle: {
    zh: "海外 + 国内主流社媒与社区均可覆盖，平台组合按目标用户阵地定制",
    en: "Global and Chinese platforms, mix tailored to where your audience actually hangs out",
  },
  global: {
    label: { zh: "海外", en: "Global" },
    items: [
      "Instagram",
      "TikTok",
      "YouTube",
      "Reddit",
      "X",
      "LinkedIn",
      "Facebook",
      "Product Hunt",
      "Discord",
      "Quora",
      "Medium",
      "Threads",
    ],
  },
  china: {
    label: { zh: "国内", en: "China" },
    items: [
      "小红书",
      "抖音",
      "B站",
      "知乎",
      "微博",
      "微信公众号",
      "微信视频号",
      "快手",
      "即刻",
      "脉脉",
      "豆瓣",
      "虎扑",
    ],
  },
};

/* -------------------- Pain Points -------------------- */
export const PAIN = {
  eyebrow: { zh: "为什么 AI 出海会卡住", en: "Why global GTM stalls" },
  heading: {
    zh: "AI 初创出海失败，往往不是技术不够先进，而是没能快速找到真实的市场需求场景。",
    en: "Most AI startups don't fail abroad because their tech isn't advanced enough — they fail because they can't locate real demand contexts fast enough.",
  },
  sub: {
    zh: "对初创团队而言，海外冷启动从来不是「多发内容」或「多买流量」，而是快速回答四个核心问题：",
    en: "Cold-start abroad is never about \"publish more\" or \"buy more clicks\". It's about answering four questions fast:",
  },
  questions: [
    { zh: "用户会在哪些平台讨论这类需求？", en: "Where exactly are users talking about this kind of need?" },
    { zh: "他们正在对比哪些替代产品？", en: "Which alternatives are they comparing right now?" },
    { zh: "他们为什么关注这类 AI 产品？", en: "Why do they care about this kind of AI product?" },
    { zh: "这些信号能否转化为有效引流、用户反馈与增长决策？", en: "Can these signals become traffic, feedback, and growth decisions?" },
  ],
  cards: [
    {
      tag: { zh: "SEO", en: "SEO" },
      title: { zh: "SEO 周期太长，冷启动耗不起", en: "SEO is too slow for cold-start" },
      body: {
        zh: "搜索流量需数月积累，但融资后的 AI 团队，需要快速验证关键词、市场与使用场景的可行性。",
        en: "Search traffic compounds over months. Funded AI teams need keyword/market/use-case validation in weeks, not quarters.",
      },
    },
    {
      tag: { zh: "Paid Ads", en: "Paid Ads" },
      title: { zh: "广告能买流量，却买不到真实需求", en: "Ads buy clicks, not real demand" },
      body: {
        zh: "付费广告带来访问量，但难以解释用户兴趣来源、流失原因与原有使用习惯，无法支撑精准决策。",
        en: "Paid ads bring visits but rarely explain where interest comes from, why users drop off, or what they switched from.",
      },
    },
    {
      tag: { zh: "Founder-led", en: "Founder-led" },
      title: { zh: "创始人发帖有热度，却无法规模化", en: "Founder posts spark heat, but don't scale" },
      body: {
        zh: "创始人在 X / LinkedIn 发声能获得关注，但难以稳定覆盖竞品评论区、测评视频、社区讨论及热门内容场景。",
        en: "Founder-led posting attracts attention but can't reliably cover competitor comment threads, review videos, communities, and trending content.",
      },
    },
    {
      tag: { zh: "Competitor", en: "Competitor" },
      title: { zh: "竞品流量藏着需求，却缺少捕获方式", en: "Competitor traffic hides demand you can't capture" },
      body: {
        zh: "用户已在评论区、测评视频、工具推荐帖中询价、吐槽、对比、寻找替代品，但多数团队没有系统化能力，将这些需求转化为引流与反馈。",
        en: "Prospects already ask for pricing, complain, compare, and hunt for alternatives in competitor threads — most teams have no systematic way to turn that into traffic and feedback.",
      },
    },
  ],
  outro: {
    title: { zh: "SocialRouter 把高意向社媒讨论，转化为可追踪的精准流量与真实用户反馈。", en: "SocialRouter converts high-intent social conversations into trackable, high-quality traffic and real user feedback." },
  },
};

/* -------------------- How we work --------------------
 * 改写自原 MECH（Discover → Engage → Route）：
 * B2B 客户要的是"我跟你合作，每一周会发生什么"，不是抽象动词三段式。
 * 用 4 周时间线 + 客户可见的产出物，把"agency 黑盒"变成"项目交付物"。
 * ----------------------------------------------------- */
export const MECH = {
  eyebrow: { zh: "合作流程", en: "How we work" },
  heading: {
    zh: "一个新客户的前 4 周",
    en: "What the first 4 weeks look like",
  },
  sub: {
    zh: "和市场 / 品牌团队对接的方式 — 每一步都有你能看到的产出，每一条评论都要你点头才会发布。",
    en: "How we plug into your marketing / brand team — concrete deliverables every week, and every comment is reviewed by you before it ships.",
  },
  steps: [
    {
      step: "01",
      key: "kickoff",
      title: { zh: "Week 1 · Kickoff & 战场扫描", en: "Week 1 · Kickoff & landscape audit" },
      desc: {
        zh: "和你的市场 / 增长团队对齐目标客户、竞品、上线 KPI，并产出第一份「热点讨论清单」。",
        en: "Align with your marketing / growth team on ICP, competitors, and KPIs. Deliver the first 'high-intent thread inventory'.",
      },
      bullets: [
        { zh: "客户画像 & 上线目标对齐", en: "ICP & launch goals alignment" },
        { zh: "竞品账号 / 关键词 / 视频清单", en: "Competitor accounts / keywords / videos" },
        { zh: "前 100 条高价值讨论清单", en: "First 100 high-value threads listed" },
      ],
    },
    {
      step: "02",
      key: "strategy",
      title: { zh: "Week 2 · 话术策略 & 你审核", en: "Week 2 · Messaging strategy & your review" },
      desc: {
        zh: "我们出话术库和风格指南，你点头后才进入下一步。任何不符合品牌语调的句子都改回到你满意为止。",
        en: "We draft the messaging library and tone-of-voice guide. You sign off line by line — anything off-brand goes back to revision until you approve.",
      },
      bullets: [
        { zh: "话术库 / 禁用词", en: "Messaging library & blocklist" },
        { zh: "品牌语调指南", en: "Tone-of-voice guide" },
        { zh: "落地页 / UTM 配置", en: "Landing page & UTM setup" },
      ],
    },
    {
      step: "03",
      key: "pilot",
      title: { zh: "Week 3 · 小规模灰度执行", en: "Week 3 · Small-batch pilot" },
      desc: {
        zh: "在 2–3 个平台先发 100–300 条，每条评论上线前都进你的审批群。",
        en: "Roll out 100–300 comments across 2–3 platforms. Every single comment passes through your approval channel before it goes live.",
      },
      bullets: [
        { zh: "每条评论你审批后才发", en: "Every comment is approved by you" },
        { zh: "实时看板：触达 / 点击 / 留存", en: "Live dashboard: reach / clicks / retention" },
        { zh: "周中调整：放大有效话术", en: "Mid-week pivot: scale what works" },
      ],
    },
    {
      step: "04",
      key: "report",
      title: { zh: "Week 4 · 复盘 & 放大方案", en: "Week 4 · Review & scale plan" },
      desc: {
        zh: "出一份完整的报告 — 哪些平台值得放大、哪些话术失效、用户为什么进站、为什么流失，下一阶段怎么投。",
        en: "Deliver a full report — which platforms to scale, which messages failed, why users converted or bounced, and a clear plan for the next phase.",
      },
      bullets: [
        { zh: "进站用户反馈摘要", en: "Visitor feedback summary" },
        { zh: "投放放大建议（按平台/话术）", en: "Scale-up plan by platform / message" },
        { zh: "可续约的长期增长方案", en: "Long-term growth retainer proposal" },
      ],
    },
  ],
};

/* -------------------- Features (6 modules) -------------------- */
export const FEATURES = {
  eyebrow: { zh: "功能模块", en: "Capabilities" },
  heading: { zh: "支撑增长信号测试的六大模块", en: "Six modules that power the signal test" },
  sub: { zh: "从扫描到反馈，每一步都可追踪、可审、可优化。", en: "Every step — from scanning to feedback — is reviewable, trackable, and tunable." },
  items: [
    {
      id: "signal-mapping",
      title: { zh: "Social Signal Mapping", en: "Social Signal Mapping" },
      subtitle: { zh: "社媒增长信号扫描", en: "Map demand across every social surface" },
      bullets: [
        { zh: "竞品账号监控：实时跟踪竞品社媒内容、评论区动态及用户反馈", en: "Competitor monitoring — live tracking of social posts, comments, and user reactions" },
        { zh: "行业关键词扫描：定位用户高频搜索、讨论、对比的核心问题", en: "Keyword scanning — surface what users search, debate, and compare" },
        { zh: "热点内容识别：锁定高流量、高互动内容，作为精准切入场景", en: "Trend detection — lock onto high-traffic, high-engagement content as entry contexts" },
      ],
    },
    {
      id: "intent",
      title: { zh: "Intent-based User Discovery", en: "Intent-based User Discovery" },
      subtitle: { zh: "高意图用户识别", en: "Find buyers, not bystanders" },
      bullets: [
        { zh: "「有没有用于销售外呼的 AI 助手？」—— 寻找工具", en: "“Any AI assistant for outbound sales calls?” — tool hunting" },
        { zh: "「有没有比 X 更好用的替代工具？」—— 竞品对比", en: "“Anything better than X?” — competitor comparison" },
        { zh: "「能和 Slack / Notion / GitHub 集成吗？」—— 使用疑问", en: "“Does it integrate with Slack / Notion / GitHub?” — usage questions" },
        { zh: "「提供免费试用吗？」—— 购买咨询", en: "“Is there a free trial?” — purchase intent" },
      ],
    },
    {
      id: "reviewable",
      title: { zh: "Reviewable Engagement Strategy", en: "Reviewable Engagement Strategy" },
      subtitle: { zh: "可审核互动策略", en: "Every strategy reviewed before launch" },
      bullets: [
        { zh: "目标平台：Instagram / TikTok / YouTube / Reddit / X / LinkedIn", en: "Target platforms: Instagram / TikTok / YouTube / Reddit / X / LinkedIn" },
        { zh: "目标竞品：账号、关键词、链接、视频、帖子", en: "Target competitors: accounts, keywords, links, videos, posts" },
        { zh: "话术方向：专业推荐、场景分享、问题引导、替代方案", en: "Messaging angles: pro recs, scenario sharing, question-led, alternatives" },
        { zh: "禁用表达：拒绝夸大、不冒充、不虚假承诺", en: "Forbidden phrases: no hype, no impersonation, no false claims" },
      ],
    },
    {
      id: "koc",
      title: { zh: "KOC / Creator Matrix Execution", en: "KOC / Creator Matrix Execution" },
      subtitle: { zh: "KOC / 素人矩阵执行", en: "Real creators, real conversations" },
      bullets: [
        { zh: "依托真实 KOC 账号与素人内容矩阵", en: "Powered by real KOC accounts and creator content matrices" },
        { zh: "在适配社媒场景中开展自然互动", en: "Engages naturally inside the right social contexts" },
        { zh: "摒弃品牌账号硬广刷屏模式", en: "No brand-account spam, no copy-paste comments" },
        { zh: "提升用户信任度与转化意愿", en: "Increases trust and intent to convert" },
      ],
    },
    {
      id: "routing",
      title: { zh: "Conversion Routing", en: "Conversion Routing" },
      subtitle: { zh: "转化路径", en: "Route demand to the right landing surface" },
      bullets: [
        { zh: "官网 → AI SaaS / AI Tool", en: "Website → AI SaaS / AI Tool" },
        { zh: "Waitlist → 还未正式开放注册的产品", en: "Waitlist → pre-launch products" },
        { zh: "Demo 页面 → B2B SaaS / AI Infra", en: "Demo page → B2B SaaS / AI Infra" },
        { zh: "Product Hunt → 新品发布期", en: "Product Hunt → launch-phase products" },
        { zh: "Discord / Telegram → 开发者工具 / AI 助手", en: "Discord / Telegram → developer tools / AI assistants" },
        { zh: "表单 / CRM → 销售驱动型产品", en: "Form / CRM → sales-led products" },
      ],
    },
    {
      id: "dashboard",
      title: { zh: "Dashboard & Feedback Report", en: "Dashboard & Feedback Report" },
      subtitle: { zh: "数据看板与反馈报告", en: "Full transparency, structured deliverables" },
      bullets: [
        { zh: "执行概览 · 合格触达量 / 发布量 / 内容存活量", en: "Execution overview — qualified touches / published / surviving content" },
        { zh: "平台效果 · 分平台分项指标", en: "Platform performance — per-platform breakdown" },
        { zh: "进站数据 · UTM 点击 / 停留时长 / 来源", en: "Site traffic — UTM clicks / dwell time / sources" },
        { zh: "用户反馈 · 痛点 / 诉求 / 对比 / 价格接受度", en: "User feedback — pain points / asks / comparison / price acceptance" },
        { zh: "增长建议 · 推荐放大的平台、关键词、话术方向", en: "Growth recommendations — what to scale next" },
      ],
    },
  ],
};

/* -------------------- Use cases (AI product types) -------------------- */
export const USE_CASES = {
  eyebrow: { zh: "适用产品", en: "Built for" },
  heading: { zh: "为四类 AI 产品而生", en: "Tuned for four kinds of AI product" },
  items: [
    {
      key: "agent",
      tag: "AI Agent",
      reason: {
        zh: "用户高频在 X、Reddit、YouTube、LinkedIn 讨论工作流、自动化与替代方案。",
        en: "Users frequently discuss workflows, automation, and alternatives on X, Reddit, YouTube, LinkedIn.",
      },
      platforms: ["X", "Reddit", "YouTube", "LinkedIn"],
    },
    {
      key: "saas",
      tag: "AI SaaS",
      reason: {
        zh: "适配从竞品内容、产品测评、工具合集中捕获高意向用户。",
        en: "Capture high-intent users from competitor content, reviews, and tool round-ups.",
      },
      platforms: ["YouTube", "Reddit", "LinkedIn", "X"],
    },
    {
      key: "tool",
      tag: "AI Tool",
      reason: {
        zh: "适配通过 TikTok、Instagram、YouTube Shorts 获取轻量化试用流量。",
        en: "Drive lightweight trial traffic from TikTok, Instagram, YouTube Shorts.",
      },
      platforms: ["TikTok", "Instagram", "YouTube"],
    },
    {
      key: "infra",
      tag: "AI Infra",
      reason: {
        zh: "适配从 Reddit、X、YouTube、LinkedIn 捕获开发者讨论及技术替代需求。",
        en: "Tap developer discussions and technical-substitution demand on Reddit, X, YouTube, LinkedIn.",
      },
      platforms: ["Reddit", "X", "YouTube", "LinkedIn"],
    },
  ],
};

/* -------------------- VC module -------------------- */
export const VC = {
  eyebrow: { zh: "VC 专属", en: "For VCs" },
  heading: { zh: "为投资机构定制的增长信号交付", en: "Portfolio-grade growth signal delivery" },
  sub: { zh: "把组合企业的海外增长，搬上同一个数据语言。", en: "Bring portfolio growth onto a single data language." },
  items: [
    {
      title: { zh: "Portfolio Growth Audit", en: "Portfolio Growth Audit" },
      desc: { zh: "组合企业增长诊断 — 为单个项目开展社媒增长全面评估。", en: "Full social growth diagnostic for any single portfolio company." },
    },
    {
      title: { zh: "7-Day Market Signal Test", en: "7-Day Market Signal Test" },
      desc: { zh: "7 天市场信号测试 — 快速验证海外真实用户反馈与市场接受度。", en: "Validate real overseas user feedback and market acceptance in 7 days." },
    },
    {
      title: { zh: "Competitor Demand Map", en: "Competitor Demand Map" },
      desc: { zh: "竞品需求图谱 — 输出竞品流量分布、用户痛点地图与切入机会。", en: "Map competitor traffic distribution, user pain points, and entry opportunities." },
    },
    {
      title: { zh: "Investor Update Metrics", en: "Investor Update Metrics" },
      desc: { zh: "投后汇报数据 — 生成标准化数据报表，支撑投后复盘与决策。", en: "Standardized investor-update dataset for portfolio reviews and decisions." },
    },
    {
      title: { zh: "Repeatable GTM Playbook", en: "Repeatable GTM Playbook" },
      desc: { zh: "可复制增长方案 — 沉淀适配组合企业的标准化海外增长打法。", en: "A repeatable cross-portfolio GTM playbook for global expansion." },
    },
  ],
};

/* -------------------- Pricing / Plans --------------------
 * 3 档：Pilot（短期试） · Growth（推荐，4-12 周） · Enterprise（按 SOW 定制）
 * 删掉了之前 "Pre-seed AI 团队 / 已融资 AI" 这种限定，让企业品牌也能对号入座。
 * ----------------------------------------------------------- */
export const PRICING = {
  eyebrow: { zh: "合作方案", en: "Engagement" },
  heading: { zh: "三档合作，按你节奏来", en: "Three engagements, move at your pace" },
  sub: {
    zh: "从一次小试到长期增长伙伴，价格按平台数、内容量、市场范围定制。",
    en: "From a pilot to a long-term growth partner. Pricing scales by platforms, content volume, and market scope.",
  },
  plans: [
    {
      name: { zh: "Pilot", en: "Pilot" },
      tagline: { zh: "想先试一次的品牌 / AI 团队", en: "Brands or AI teams running a first test" },
      duration: { zh: "2 周 · 小规模灰度", en: "2 weeks · Small batch" },
      bullets: [
        { zh: "1–2 个平台、100–300 条评论", en: "1–2 platforms, 100–300 comments" },
        { zh: "话术库 + 你逐条审核", en: "Messaging library, you approve line by line" },
        { zh: "实时看板 + 收尾报告", en: "Live dashboard + closing report" },
      ],
      cta: { zh: "申请 Pilot", en: "Start a Pilot" },
      ctaHref: "/apply",
      highlight: false,
    },
    {
      name: { zh: "Growth", en: "Growth" },
      tagline: { zh: "需要稳定海外增长的品牌 / AI 公司", en: "Brands / AI companies scaling globally" },
      duration: { zh: "4 周 / 12 周 · 深度执行", en: "4 / 12 weeks · Full execution" },
      bullets: [
        { zh: "3–5 个平台 · 全竞品评论区覆盖", en: "3–5 platforms · full competitor coverage" },
        { zh: "KOC / 素人矩阵规模化执行", en: "KOC / creator matrix at scale" },
        { zh: "每周复盘 + 月度增长建议", en: "Weekly review + monthly growth memo" },
        { zh: "1 位品牌专属顾问", en: "1 dedicated brand strategist" },
      ],
      cta: { zh: "预约 30 分钟沟通", en: "Book a 30-min intro" },
      ctaHref: "/apply",
      highlight: true,
      recommendedLabel: { zh: "最常选", en: "Most popular" },
    },
    {
      name: { zh: "Enterprise", en: "Enterprise" },
      tagline: { zh: "全球品牌 / 投后组合 / 集团总部", en: "Global brands · VC portfolios · HQs" },
      duration: { zh: "按季度 / 年度 · 定制 SOW", en: "Quarterly / annual · custom SOW" },
      bullets: [
        { zh: "多市场、多语言、多产品线", en: "Multi-market, multi-language, multi-product" },
        { zh: "SLA + 合规 + NDA 全覆盖", en: "SLA + compliance + NDA covered" },
        { zh: "对接你的 CRM / BI / 法务", en: "Connects with your CRM / BI / legal" },
        { zh: "按需投后报告（含 VC 模板）", en: "Investor / HQ reporting templates" },
      ],
      cta: { zh: "联系销售", en: "Talk to sales" },
      ctaHref: "mailto:hello@socialrouter.ai",
      highlight: false,
    },
  ],
};

/* -------------------- Content Deep Dive --------------------
 * 高保真平台帖子示例 — 替代之前的极简模拟
 * 现在 Instagram / Facebook 各做一张"看着就像真截图"的卡，
 * 上面有真实用户评论 + 我们的 AI 评论（高亮）。
 * ------------------------------------------------------------ */
export const DEEP_DIVES = {
  eyebrow: { zh: "评论示例", en: "Comments at work" },
  heading: { zh: "真实评论，真实样子", en: "What our comments actually look like" },
  sub: {
    zh: "下面两张是模拟 — 真实帖子截图签 NDA 后会议中展示。文字 / 排版与平台原生 UI 一致，红色框是我们发布的评论。",
    en: "Both screens below are mockups — real client posts are shown under NDA. Layout matches each platform's native UI; the red frame is the comment we published.",
  },
  /* Instagram 高保真：runway_daily + sarah_creates 用户评 + ai_studio_fan AI 接话 */
  instagram: {
    platform: "Instagram",
    account: "runway_daily",
    accountSub: { zh: "认证账号 · 关注 187K", en: "Verified · 187K followers" },
    timeAgo: { zh: "2 小时前", en: "2 HOURS AGO" },
    location: "Brooklyn, NY",
    bgImage:
      "https://picsum.photos/seed/socialrouter-ig-gen3-frame/1080/1080",
    caption: {
      author: "runway_daily",
      text: "Gen-3 image-to-video is wild but credits vanish in one afternoon. Cheaper stack that still feels Runway-level? 🎬 #aifilm #genai #creator",
    },
    likes: "1,247",
    comments: [
      {
        who: "sarah_creates",
        verified: true,
        time: { zh: "1 小时", en: "1 h" },
        text: "Same — Runway quality, indie budget. Anyone batch-export 9:16 without burning credits?",
        likes: 23,
        tone: "user" as const,
      },
      {
        who: "filmkid_dev",
        verified: false,
        time: { zh: "47 分钟", en: "47 m" },
        text: "Have you tried Pika? Way cheaper but motion is meh",
        likes: 11,
        tone: "user" as const,
      },
      {
        who: "ai_studio_fan",
        verified: false,
        time: { zh: "32 分钟", en: "32 m" },
        text: "We moved to [Product] after Runway pricing jumped — motion presets + auto-caption on a real free tier. Still use Runway for hero shots only. Link in bio 🔗",
        likes: 47,
        tone: "ai" as const,
      },
      {
        who: "mira.films",
        verified: true,
        time: { zh: "18 分钟", en: "18 m" },
        text: "@ai_studio_fan oh interesting, just tried it — the captioning is shockingly good 👀",
        likes: 18,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI 接话 · 已上线", en: "Comment by us · live" },
    userTag: { zh: "真实用户", en: "Real user" },
  },
  /* Facebook 高保真：indie_dad-budget thread */
  facebook: {
    platform: "Facebook",
    group: { zh: "Indie Hackers · 公开小组 (38K)", en: "Indie Hackers · Public group (38K)" },
    author: "Marcus T.",
    authorSub: { zh: "管理员 · 2 周前", en: "Admin · 2w ago" },
    caption: {
      text: "Anyone running paid ads on a $500/mo budget without burning the whole thing in week 1? Tried Meta and Google, both eat the budget in 3 days flat. Open to anything that actually paces.",
    },
    stats: {
      reactions: 142,
      comments: 38,
      shares: 12,
    },
    comments: [
      {
        who: "Priya S.",
        time: { zh: "1 天前", en: "1 d" },
        text: "Try smaller daily caps. Meta's auto-bidding is brutal at low budgets.",
        likes: 14,
        replies: 2,
        tone: "user" as const,
      },
      {
        who: "indie_dad",
        time: { zh: "16 小时前", en: "16 h" },
        text: "Switched to [Product] after blowing $400 in 3 days on Meta. The auto-pacing actually works at sub-$500/mo. We're at week 6 now, still under budget.",
        likes: 47,
        replies: 8,
        tone: "ai" as const,
      },
      {
        who: "alex_wu",
        time: { zh: "5 小时前", en: "5 h" },
        text: "@indie_dad which markets? US-only or global?",
        likes: 6,
        replies: 1,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI 接话 · 已上线", en: "Comment by us · live" },
    userTag: { zh: "真实用户", en: "Real user" },
  },
  /* TikTok 高保真 — 竖屏视频 + 右侧 icon stack + 评论 */
  tiktok: {
    platform: "TikTok",
    handle: "@capcut_ai",
    handleSub: { zh: "认证 · 4.2M 粉丝", en: "Verified · 4.2M followers" },
    caption: {
      text: "POV: you wanted CapCut for free but watermarks + export caps killed all 3 of your edits 😩 #editortok #aicreator",
    },
    music: "Original sound - capcut_ai",
    stats: { likes: "12.4K", comments: "1,287", shares: "2,043", saves: "8,912" },
    bgImage:
      "https://picsum.photos/seed/socialrouter-tiktok-creator-edit/900/1600",
    comments: [
      {
        who: "@sam_films",
        verified: false,
        time: { zh: "2 小时", en: "2 h" },
        text: "literally just paid for the watermark removal 😭 worst $9 of my life",
        likes: 412,
        tone: "user" as const,
      },
      {
        who: "@ops_lily",
        verified: false,
        time: { zh: "1 小时", en: "1 h" },
        text: "switched to [Product] last week — clean captions, free quota is real, not 3 clips and done. Was skeptical too, link in bio 🔗",
        likes: 728,
        tone: "ai" as const,
      },
      {
        who: "@miguelxc",
        verified: false,
        time: { zh: "47 分钟", en: "47 m" },
        text: "@ops_lily ok i tried it, the auto-caption is unreal what??",
        likes: 184,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI 接话 · 已上线", en: "Comment by us · live" },
  },
  /* Reddit 高保真 — subreddit + 投票按钮 + 评论 thread */
  reddit: {
    platform: "Reddit",
    subreddit: "r/SaaS",
    subredditSub: { zh: "公开 · 142K 成员", en: "Public · 142K members" },
    author: "u/gtm_anon",
    authorSub: { zh: "Posted by u/gtm_anon · 8h", en: "Posted by u/gtm_anon · 8h" },
    title: "Perplexity Pro vs ChatGPT Deep Research for GTM teams?",
    body: "Spent the last 2 weeks running both side-by-side for buyer research and competitor mapping. Curious what others are seeing — does one actually replace the other or is everyone stitching them together?",
    flair: "Question",
    score: 312,
    commentCount: 47,
    comments: [
      {
        who: "u/saas_lifer",
        time: { zh: "5h", en: "5h" },
        text: "Perplexity for sources, GPT for synthesis. Anything outside of that is a fight.",
        score: 184,
        replies: 12,
        depth: 0,
        tone: "user" as const,
      },
      {
        who: "u/dev_tools_daily",
        time: { zh: "4h", en: "4h" },
        text: "Tested both for 2 weeks. Perplexity wins on citations + speed, GPT wins on synthesis. We use [Product] to stitch them — sources + summary in one doc. Saves us ~3 hours / week per AE. Happy to share the workflow.",
        score: 312,
        replies: 28,
        depth: 0,
        tone: "ai" as const,
      },
      {
        who: "u/founderfrank",
        time: { zh: "3h", en: "3h" },
        text: "@dev_tools_daily got a link to the workflow? Trying to set this up for our SDR team",
        score: 64,
        replies: 3,
        depth: 1,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI 接话 · 已上线", en: "Comment by us · live" },
  },
  /* X (Twitter) 高保真 — 推文 + 4 metrics + 回复 thread */
  x: {
    platform: "X",
    handle: "@startup_jenny",
    handleSub: { zh: "Jenny · @startup_jenny", en: "Jenny · @startup_jenny" },
    time: { zh: "2h", en: "2h" },
    body: "Claude Code vs Cursor for a Next.js monorepo — which ships faster for a 2-person team? Need real numbers, not vibes.",
    bgImage: "https://picsum.photos/seed/socialrouter-x-ide-monitor/1200/675",
    stats: {
      replies: "187",
      reposts: "94",
      likes: "1,402",
      views: "48.2K",
    },
    replies: [
      {
        who: "@indie_dev",
        verified: false,
        time: { zh: "1h", en: "1h" },
        text: "we use both — Cursor for tab-complete, Claude Code for multi-file refactors",
        likes: 64,
        tone: "user" as const,
      },
      {
        who: "@dev_tools_daily",
        verified: true,
        time: { zh: "47 分钟", en: "47m" },
        text: "[Product] — Cursor for tab-complete, Claude Code for multi-file refactors. Free tier covered our entire MVP. Gist with setup: link 🔗",
        likes: 401,
        tone: "ai" as const,
      },
      {
        who: "@startup_jenny",
        verified: false,
        time: { zh: "30 分钟", en: "30m" },
        text: "@dev_tools_daily oh nice — just bookmarked, thanks 🙏",
        likes: 28,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI 接话 · 已上线", en: "Comment by us · live" },
  },
};

/* -------------------- Content examples (legacy short cards) -------------------- */
export const CONTENT_EXAMPLES = {
  eyebrow: { zh: "AI 评论", en: "AI Engagement" },
  heading: { zh: "真实评论，真实效果", en: "Real comments, real impact" },
  sub: {
    zh: "上方为十余款社媒与社区的评论 / 回复语示意；正式上线稿按产品与合规校准。",
    en: "Sample comment / reply formats across 10+ social platforms and communities — production copy is calibrated per product and compliance review.",
  },
  cards: [
    {
      platform: "Instagram",
      title: { zh: "求推荐 · 轻量化背书", en: "Asking for recs · light endorsement" },
      desc: {
        zh: "公开聊「不贵、好用」时，用一句落到功能点上的证明接话。",
        en: "When users openly discuss \"affordable, works well\", we drop a single proof line that lands on a product feature.",
      },
      handle: "runway_daily",
      handleSub: "Runway Gen-3 · 帖子 · 评论",
      mainPost: {
        author: "runway_daily",
        text: "Gen-3 image-to-video is wild but credits vanish in one afternoon. Cheaper stack that still feels Runway-level?",
      },
      replies: [
        {
          who: "sarah_creates",
          tone: { zh: "用户评", en: "user reply" },
          text: "Same — Runway quality, indie budget. Anyone batch-export 9:16 without burning credits?",
        },
        {
          who: "ai_studio_fan",
          tone: { zh: "AI 接话", en: "AI engagement" },
          text: "We moved to [Product] after Runway pricing jumped — motion presets + auto-caption on a real free tier. Still use Runway for hero shots only.",
          link: "bio",
        },
      ],
      stats: { likes: 24, comments: 0 },
    },
    {
      platform: "TikTok",
      title: { zh: "短评串 · 高密度梗 + 信息", en: "Comment threads · meme density + info" },
      desc: {
        zh: "评论得快快 — 先对齐视频里正在秒的点，再给可点路径。",
        en: "Comment fast — first land on the moment users are reacting to, then drop a clickable path.",
      },
      handle: "@capcut_ai",
      handleSub: "CapCut AI · 评论区",
      mainPost: {
        author: "@capcut_ai",
        thumbnail: true,
      },
      replies: [
        {
          who: "@sam_films",
          tone: { zh: "用户评", en: "user reply" },
          text: "CapCut AI auto-cuts are slick but watermark + export flags are killing my drafts — what are you using?",
        },
        {
          who: "@ops_lily",
          tone: { zh: "AI 接话", en: "AI engagement" },
          text: "[Product] after CapCut started flagging exports — clean captions, free quota is real, not 3 clips and done.",
        },
      ],
      stats: { likes: "1.2k", comments: 0 },
    },
    {
      platform: "Twitter/X",
      title: { zh: "短帖追问 · 结论先行", en: "X threads · lead with the verdict" },
      desc: {
        zh: "字符少、节奏快 — 结论 + 迁移 / 免费档事实，附可点资源。",
        en: "Short chars, fast tempo — verdict first + migration / free-tier facts + a clickable resource.",
      },
      handle: "@startup_jenny",
      handleSub: "X · 回复",
      mainPost: {
        author: "@startup_jenny",
        text: "Claude Code vs Cursor for a Next.js monorepo — which ships faster for a 2-person team?",
      },
      replies: [
        {
          who: "@dev_tools_daily",
          tone: { zh: "AI 接话", en: "AI engagement" },
          text: "[Product] — Cursor for tab-complete, Claude Code for multi-file refactors. Free tier covered our MVP. Setup gist: link",
        },
      ],
      stats: { likes: 401, comments: 2 },
    },
    {
      platform: "Facebook",
      title: { zh: "小组/公共主页 · 口吻更生活化", en: "Groups / pages · everyday voice" },
      desc: {
        zh: "熟人圈层留言 — 少用广告腔，多用「我们也是这么踩坑过来的」句式。",
        en: "Peer-group voice — less ad copy, more \"we walked the same path\" framing.",
      },
      handle: "@growth_kit",
      handleSub: "Facebook · 小组",
      mainPost: {
        author: "@growth_kit",
        text: "Anyone running paid ads on a $500/mo budget without burning the whole thing in week 1?",
      },
      replies: [
        {
          who: "@indie_dad",
          tone: { zh: "AI 接话", en: "AI engagement" },
          text: "Switched to [Product] after blowing $400 in 3 days on Meta. The auto-pacing actually works at that budget.",
        },
      ],
      stats: { likes: 87, comments: 12 },
    },
    {
      platform: "Reddit",
      title: { zh: "选型帖 · 长文可信度", en: "Reddit tooling threads · long-form credibility" },
      desc: {
        zh: "标题已定场景 — 正文用事实线 + 「我们并排试过」口吻收尾。",
        en: "Title fixes the context — body leads with facts and a \"we ran them side-by-side\" close.",
      },
      handle: "r/SaaS",
      handleSub: "Reddit · 帖子",
      mainPost: {
        author: "r/SaaS",
        text: "Perplexity Pro vs ChatGPT Deep Research for GTM teams?",
      },
      replies: [
        {
          who: "u/gtm_anon",
          tone: { zh: "AI 接话", en: "AI engagement" },
          text: "Tested both for 2 weeks. Perplexity wins on citations + speed, GPT wins on synthesis. We use [Product] to stitch them — sources + summary in one doc.",
        },
      ],
      stats: { likes: 312, comments: 47 },
    },
    {
      platform: "LinkedIn",
      title: { zh: "B2B 帖子 · 数据+口吻克制", en: "LinkedIn posts · data + restrained voice" },
      desc: {
        zh: "适合 B2B / 开发者类 — 一句结论 + 一组数据 + 一个可验证链接。",
        en: "Best for B2B / dev tools — one verdict + one data point + one verifiable link.",
      },
      handle: "Marcus T.",
      handleSub: "LinkedIn · 评论",
      mainPost: {
        author: "Marcus T.",
        text: "Anyone moved off Apollo for outbound? Lists feel stale and pricing keeps creeping.",
      },
      replies: [
        {
          who: "Priya S.",
          tone: { zh: "AI 接话", en: "AI engagement" },
          text: "Moved 4-person SDR team to [Product] last quarter. Lists refresh weekly, ~38% lower per-seat cost. Happy to share the audit doc.",
        },
      ],
      stats: { likes: 142, comments: 28 },
    },
  ],
};

/* -------------------- Case studies (tabbed) -------------------- */
export const CASES = {
  eyebrow: { zh: "客户案例", en: "Customer Cases" },
  heading: { zh: "真实案例，真实增长", en: "Real cases, real growth" },
  sub: { zh: "每一组数据，都对应可追踪的执行链路。", en: "Every number maps to a trackable execution trace." },
  tabs: [
    {
      id: "software-ai",
      label: { zh: "软件 / AI", en: "Software / AI" },
      title: { zh: "某北美 LLM API 路由与聚合平台", en: "A North American LLM API routing & aggregation platform" },
      subtitle: {
        zh: "统一 OpenAI 兼容接口 · 多模型调度与计费 · Reddit / X / Hacker News / GitHub 讨论高度集中",
        en: "Unified OpenAI-compatible API · multi-model routing & billing · concentrated discussions on Reddit / X / Hacker News / GitHub",
      },
      lead: {
        zh: "选型、比价、fallback、供应商锁定，以及竞品故障后的「替代品」长楼——多是已经要写代码接入的决策现场；回复必须可验证，链到文档与计费口径。",
        en: "Stack selection, price comparison, fallback, vendor lock-in, and \"alternatives\" threads when competitors go down — most are real integration decisions. Replies must be verifiable and link to docs and billing baselines.",
      },
      blocks: [
        {
          title: { zh: "卡点", en: "Bottleneck" },
          body: {
            zh: "买量能堆注册，但增长团队难向内部证明「讨论 → 文档/控制台 → 付费线索」这条链路；需要可审计的归因与周报，而不是只看产品大盘曲线。",
            en: "Paid acquisition stacks signups, but growth teams can't prove the \"discussion → docs/console → paid lead\" chain internally. Auditable attribution beats top-line curves.",
          },
        },
        {
          title: { zh: "人去哪吵", en: "Where the demand lives" },
          body: {
            zh: "机器学习 / 本地大模型子版、HN、GitHub Discussions；竞品安全事件窗口期会出现集中的「迁移 / 替代」讨论（监测期可见）。",
            en: "ML / local-LLM subs, HN, GitHub Discussions; concentrated \"migration / replacement\" threads emerge during competitor incident windows (visible during the monitoring window).",
          },
        },
        {
          title: { zh: "我们怎么干", en: "What we did" },
          body: {
            zh: "锚定速率限制、账单字段与官方文档深链，少用口号；对比帖里给可复现路径。按人群分桶话术：个人开发者 · Agent / 系统自动集成、面向下游收费的 SaaS。周报纳入站外讨论热度与流量样本（第三方监测），砍掉只蹭梗、不进控制台的楼层。",
            en: "Anchor on rate-limit copy, billing fields, and deep links to official docs — minimize slogans. In comparison threads we give a reproducible path. Persona-bucketed messaging: indie devs · Agent / auto-integrations · downstream-billed SaaS. Weeklies include off-site discussion temperature & traffic samples (third-party monitored). We cut floors that only ride memes but never reach the console.",
          },
        },
      ],
      stats: [
        { value: "95万", label: { zh: "注册用户", en: "registered users" }, accent: "primary" },
        { value: "32.72万", label: { zh: "持续调用（调用率 34.44%）", en: "monthly active callers (34.44% activation)" }, accent: "primary" },
        { value: "7.96万", label: { zh: "付费用户（付费率 24.33%）", en: "paid users (24.33% paid rate)" }, accent: "primary" },
      ],
      quote: {
        text: {
          zh: "竞品出事那几周「替代品」帖子的讨论井喷，我们和 SocialRouter 一起把技术约束和首笔付费调用的入口讲清楚——评论真的把人带到了控制台、注册、充值。这不是曝光数据，是真实增长。",
          en: "During competitor outage weeks, alternatives threads spiked. SocialRouter helped us turn those comments into real signups, first paid API calls, and recharge conversion — not impressions.",
        },
        author: { zh: "Head of Growth · 北美 LLM API 网关平台（NDA 保护，会议中可披露）", en: "Head of Growth · North American LLM API gateway (NDA, available on call)" },
      },
    },
    {
      id: "dtc-b2b",
      label: { zh: "DTC / B2B", en: "DTC / B2B" },
      title: { zh: "某北美 DTC 智能硬件品牌", en: "A North American DTC smart-hardware brand" },
      subtitle: {
        zh: "中高客单 · 长决策周期 · TikTok / Instagram / YouTube / Reddit 评测帖高度集中",
        en: "Mid-high AOV · long decision cycle · concentrated review threads on TikTok / Instagram / YouTube / Reddit",
      },
      lead: {
        zh: "用户在测评帖、对比视频、Reddit 选型楼里反复问「真的值这个价吗 / 退货政策怎样 / 比 X 强在哪」——这是已经在做最后决策的人群，回复必须给到可验证的对比与售后细节。",
        en: "Buyers ask \"is it worth the price / what's the return policy / how is it better than X\" in review posts, comparison videos, and Reddit selection threads — these are users at final-decision stage. Replies must give verifiable comparisons and after-sales details.",
      },
      blocks: [
        {
          title: { zh: "卡点", en: "Bottleneck" },
          body: {
            zh: "广告 ROI 见顶，retargeting 触达的还是同一批人；新用户多在评测视频与 Reddit 选型楼里完成「最后一公里」，但品牌账号下场答疑会显得在打广告。",
            en: "Paid ROI plateaued — retargeting hits the same cohort. New buyers finish their \"last mile\" inside review videos and Reddit threads, but brand replies feel like ads.",
          },
        },
        {
          title: { zh: "人去哪吵", en: "Where the demand lives" },
          body: {
            zh: "YouTube 测评视频的评论区、TikTok 高赞对比视频、r/smarthome 与产品类 sub 的选型楼，以及 Instagram 测评号的提问区。",
            en: "YouTube review comment sections, TikTok high-engagement comparison videos, r/smarthome and product subs, and IG review-account Q&A surfaces.",
          },
        },
        {
          title: { zh: "我们怎么干", en: "What we did" },
          body: {
            zh: "用 KOC / 素人口吻在评测下场答疑：对比维度具体到型号与配件、给退货链路、给售后联系方式。话术按用户阶段分层：第一次接触 vs 在比较中 vs 已经下单但犹豫退。每周复盘哪些评测视频带来了「评论 → 落地页 → 加购」全链路，下一周加码。",
            en: "KOC / creator voices answer questions inside review threads: spec-level comparisons, return path, after-sales contact. Messaging tiered by stage: first-touch vs comparing vs already-ordered-but-hesitating. Weeklies map which review videos drove the full \"comment → LP → add-to-cart\" path; the next week we double down on the winners.",
          },
        },
      ],
      stats: [
        { value: "640+", label: { zh: "评测视频触达", en: "review videos reached" }, accent: "primary" },
        { value: "12.4%", label: { zh: "评论 → 进站点击率", en: "comment → site CTR" }, accent: "primary" },
        { value: "3.2x", label: { zh: "加购率（对比纯广告人群）", en: "add-to-cart vs ads-only cohort" }, accent: "primary" },
      ],
      quote: {
        text: {
          zh: "以前我们不敢在测评视频下用品牌账号回复，怕看起来像广告。SocialRouter 用 KOC 的口吻把对比维度和退货政策讲清楚，最后变成评论区点赞最多的那条回复——这一季度退货率没涨，加购率却明显上去。",
          en: "We used to be afraid to comment with our brand account on review videos — felt too ad-like. SocialRouter's KOC voice laid out comparisons and return policy clearly and became the top-liked reply. Returns held flat, add-to-cart went up.",
        },
        author: { zh: "Head of Growth · 北美 DTC 智能硬件品牌（NDA 保护）", en: "Head of Growth · North American DTC smart-hardware brand (NDA)" },
      },
    },
  ],
};

/* -------------------- Acquisition results -------------------- */
export const RESULTS = {
  eyebrow: { zh: "获客效果", en: "Acquisition Results" },
  heading: {
    zh: "每 10,000 条精准评论 / 回复\n带来 1,000–3,000 个进站用户",
    en: "Every 10,000 targeted comments / replies\nbring 1,000–3,000 site visitors",
  },
  sub: { zh: "产品、行业略有差距。", en: "Numbers vary by product and category." },
  primary: [
    { value: "10–30%", label: { zh: "进站率", en: "site CTR" } },
    { value: "$1–3",   label: { zh: "单用户获取成本", en: "cost per visitor" } },
    { value: "15–30%", label: { zh: "注册率 / 询盘率", en: "signup / inquiry rate" } },
    { value: "1/10",    label: { zh: "仅为传统广告成本", en: "vs traditional ad cost" } },
  ],
  highlight: [
    { value: "96%",   label: { zh: "客户满意度", en: "client satisfaction" } },
    { value: "600%+", label: { zh: "代表性项目 ROI 峰值", en: "peak ROI on flagship projects" } },
  ],
  deliverables: [
    { zh: "用户高频痛点与核心诉求", en: "User pain points & core asks" },
    { zh: "优先放大的市场与平台", en: "Markets & platforms to scale" },
    { zh: "高引流 / 高转化关键词", en: "High-traffic / high-conversion keywords" },
    { zh: "高价值竞品场景与切入方向", en: "High-value competitor contexts & entry angles" },
  ],
};

/* -------------------- FAQ -------------------- */
export const FAQ = {
  eyebrow: { zh: "FAQ", en: "FAQ" },
  heading: { zh: "常见问题", en: "Frequently asked questions" },
  items: [
    {
      q: { zh: "SocialRouter 是什么？", en: "What is SocialRouter?" },
      a: {
        zh: "SocialRouter 是面向已融资 AI 初创企业的海外社媒增长信号测试系统。我们在海外社媒平台中，精准识别与你产品相关的竞品讨论、工具推荐、用户痛点、使用场景及高意向内容；再通过可审核的 KOC / 素人矩阵进行自然互动，将精准用户引导至你的官网、产品页、预约列表、演示页或其他转化路径。",
        en: "SocialRouter is a social signal testing system built for funded AI startups going global. We identify competitor conversations, tool recommendations, user pain points, use-case discussions, and high-intent content across global social platforms, then route relevant users to your website, product page, waitlist, demo page, or conversion flow through reviewable KOC and creator-style engagement.",
      },
    },
    {
      q: { zh: "SocialRouter 适合哪些 AI 公司？", en: "Which AI companies is it for?" },
      a: {
        zh: "SocialRouter 更适合已有成熟产品、官网或承接页面的 AI Agent、AI SaaS、AI 工具及 AI 基础设施团队。尤其适配已完成融资、正启动海外冷启动，但尚未明确：目标用户活跃平台、高价值竞品、有效引流信息的初创团队。",
        en: "SocialRouter is best suited for AI Agent, AI SaaS, AI Tool, and AI Infra teams that already have a product, website, or conversion page — especially funded startups entering global markets but still validating where users talk, which competitors matter, and what messaging drives real traffic and feedback.",
      },
    },
    {
      q: { zh: "你们承诺注册量或付费转化吗？", en: "Do you guarantee signups or paid conversions?" },
      a: {
        zh: "不承诺。注册与付费转化受产品定位、落地页质量、定价、转化路径、市场成熟度等多重因素影响。SocialRouter 承诺：在真实海外社媒场景中完成高质量触达、带来可追踪的精准流量、输出用户反馈报告，并提供下一步增长策略建议。",
        en: "No. Signups and paid conversions depend on your positioning, landing page, pricing, activation flow, and market readiness. SocialRouter guarantees qualified outreach, trackable traffic, user feedback, and actionable GTM recommendations from real social contexts.",
      },
    },
    {
      q: { zh: "什么是「合格触达」？", en: "What is a \"qualified touchpoint\"?" },
      a: {
        zh: "合格触达并非简单发布评论或私信，而是满足：目标内容与产品高度相关、用户场景存在潜在需求、互动内容匹配既定策略、执行数据可在看板全程追踪。我们优先保障触达质量，而非单纯追求数量。",
        en: "A qualified touchpoint is not just a posted comment or DM. The target content must be relevant to your product, the user context must show potential demand, the engagement must match an approved strategy, and execution data must be trackable in the dashboard. We prioritize signal quality over raw volume.",
      },
    },
    {
      q: { zh: "会不会做 spam、虚假评论或冒充用户？", en: "Do you do spam, fake reviews, or impersonation?" },
      a: {
        zh: "绝对不会。SocialRouter 严格杜绝垃圾营销、冒充品牌身份、发布虚假评论、恶意攻击竞品或夸大产品能力。所有互动基于 KOC / 素人内容矩阵，以自然讨论、场景分享、需求引导、替代方案推荐为核心；客户可提前审核互动策略与话术边界。",
        en: "Never. SocialRouter does not do spam, impersonation, fake reviews, competitor attacks, or false product claims. Engagement uses KOC and creator-style content matrices focused on natural discussion, use-case sharing, question-led engagement, and alternative-solution discovery. Clients can review the strategy and messaging boundaries before execution.",
      },
    },
    {
      q: { zh: "客户可以审核评论策略和话术吗？", en: "Can clients review the engagement strategy?" },
      a: {
        zh: "可以。正式执行前，客户可审核：目标平台、竞品名单、关键词库、沟通方向、转化引导、禁用表述及品牌规范。建议提前明确内容边界、优先切入场景，确保执行结果符合品牌形象与合规要求。",
        en: "Yes. Before execution, clients can review target platforms, competitor lists, keyword pools, messaging angles, CTAs, restricted phrases, and brand boundaries.",
      },
    },
    {
      q: { zh: "SocialRouter 会覆盖哪些平台？", en: "Which platforms are covered?" },
      a: {
        zh: "SocialRouter 支持多类海外社媒与内容平台，不局限单一渠道。平台组合将根据产品类型、目标市场、用户讨论场景、转化路径定制：C 端 / 工具类 AI 产品，优先短视频与视觉平台；B2B / 开发者 / 基础设施类产品，侧重专业讨论与内容社区。",
        en: "Multiple global social and content platforms. Platform mix depends on product type, target market, user discussion context, and conversion path — short-form/visual for consumer/tools, discussion/professional communities for B2B/developer/infra.",
      },
    },
    {
      q: { zh: "测试结束后会交付什么？", en: "What do I get at the end of the test?" },
      a: {
        zh: "测试完成后，SocialRouter 提供用户反馈与增长信号报告，包含：执行概况、平台效果、引流数据、用户反馈汇总、高频痛点、高转化关键词、优质竞品场景、内容表现及后续增长建议。同时客户可查看数据看板或演示截图，清晰掌握执行数据与转化链路效果。",
        en: "A user feedback and growth signal report — execution overview, platform performance, website traffic, user feedback summary, recurring questions, high-performing keywords, validated competitor contexts, content performance, and next-step GTM recommendations. Clients can also review the dashboard or demo dashboard screenshots.",
      },
    },
    {
      q: { zh: "我们需要提前准备什么？", en: "What should we prepare?" },
      a: {
        zh: "你需提供：产品官网 / 承接页面、目标市场、核心竞品、当前增长目标及基础产品介绍。若已有预约列表、演示页、UTM 链接、数据埋点或 CRM，可直接接入测试；若无，我们会在测试前提供最简转化路径方案。",
        en: "Provide your website or conversion page, target market, key competitors, current growth goal, and basic product positioning. If you already have a waitlist, demo page, UTM links, tracking, or CRM, we plug straight in. If not, we'll recommend a minimum viable conversion path before execution.",
      },
    },
    {
      q: { zh: "价格是多少？", en: "How much does it cost?" },
      a: {
        zh: "SocialRouter 从小规模测试包起步，具体价格根据产品类型、目标市场、平台组合、执行范围及数据交付需求定制。提交产品信息后，团队会评估适配度，并提供专属测试方案与报价。",
        en: "SocialRouter starts with a small-scale pilot package. Pricing depends on product type, target market, platform mix, execution scope, and reporting needs. Submit your product info and our team will assess fit and propose a custom plan.",
      },
    },
    {
      q: { zh: "SocialRouter 和广告投放有什么区别？", en: "How is it different from paid ads?" },
      a: {
        zh: "广告侧重曝光与点击量，SocialRouter 聚焦真实需求场景。我们不向陌生用户推送广告，而是精准切入用户讨论竞品、寻找工具、对比方案、表达痛点的场景，帮助团队快速判断：哪些场景存在真实需求、哪些沟通内容能有效引流并获取反馈。",
        en: "Ads focus on impressions and clicks. SocialRouter focuses on real demand contexts — entering places where users already compare competitors, hunt for tools, and express pain points. You learn which contexts show real demand and which messages drive traffic and feedback.",
      },
    },
    {
      q: { zh: "测试之后可以继续放大吗？", en: "Can we scale beyond the test?" },
      a: {
        zh: "可以。若测试验证出高效平台、高转化关键词、优质竞品场景或有效沟通方向，可升级至长期增长执行：扩大触达范围、优化内容矩阵、完善转化路径、升级数据看板，搭建长期稳定的海外社媒增长体系。",
        en: "Yes. If the test identifies strong platforms, keywords, competitor contexts, or messaging angles, we move into a broader growth execution phase — expanding touchpoints, optimizing the content matrix, improving conversion paths, and building a long-term overseas social growth system.",
      },
    },
  ],
};

/* -------------------- CTA / Form -------------------- */
export const FORM = {
  eyebrow: { zh: "申请测试方案", en: "Apply for a Signal Test" },
  heading: { zh: "用 7–14 天，判断 SocialRouter 是否适合你的海外增长。", en: "Find out whether SocialRouter fits your global GTM in 7–14 days." },
  body: {
    zh: "提交你的产品官网、目标市场及竞品链接。我们团队会评估你的产品是否适合通过 SocialRouter 开展增长测试，并提供定制化测试方案建议。",
    en: "Submit your product website, target market, and competitor links. Our team will evaluate whether your product is suitable for a social signal test and recommend a testing path.",
  },
  evaluatesTitle: { zh: "我们通常会重点判断：", en: "We typically evaluate:" },
  evaluates: [
    { zh: "你的产品是否适合通过社媒场景测试需求", en: "Whether your product is suitable for social demand testing" },
    { zh: "哪些平台和内容场景更可能产生有效进站", en: "Which platforms and contexts may drive qualified traffic" },
    { zh: "竞品流量是否具备切入价值", en: "Whether competitor traffic offers clear entry opportunities" },
    { zh: "当前落地页是否能够承接测试流量", en: "Whether your landing page can capture test traffic" },
    { zh: "是否适合进入小规模测试包", en: "Whether a small-scale pilot makes sense" },
  ],
  formTitle: { zh: "申请 SocialRouter 测试方案", en: "Apply for a SocialRouter Signal Test" },
  formSub: {
    zh: "请填写基础产品信息。我们会先评估适配度，再由专属顾问对接，提供定制化测试建议。",
    en: "Submit your basic product information. Our team will first evaluate fit, then contact you with a recommended testing path.",
  },
  fields: {
    company: { zh: "公司名称", en: "Company Name" },
    website: { zh: "产品官网 / Landing Page", en: "Product Website / Landing Page" },
    productType: { zh: "产品类型", en: "Product Type" },
    funding: { zh: "融资阶段", en: "Funding Stage" },
    market: { zh: "目标海外市场", en: "Target Market" },
    competitors: { zh: "主要竞品链接", en: "Competitor Links" },
    growthGoal: { zh: "当前核心增长目标", en: "Current Growth Goal" },
    channels: { zh: "当前主要获客渠道", en: "Current Acquisition Channels" },
    contact: { zh: "联系方式（微信 / WhatsApp / 邮箱）", en: "Contact (WeChat / WhatsApp / Email)" },
    note: { zh: "你希望我们重点评估哪些方向？", en: "What do you want us to evaluate?" },
  },
  productTypes: ["AI Agent", "AI SaaS", "AI Tool", "AI Infra", "Other"],
  fundingStages: ["Pre-seed", "Seed", "Series A", "Series B+", "Not disclosed"],
  growthGoals: [
    { zh: "Website traffic", en: "Website traffic" },
    { zh: "Waitlist", en: "Waitlist" },
    { zh: "Demo requests", en: "Demo requests" },
    { zh: "Trial users", en: "Trial users" },
    { zh: "Community members", en: "Community members" },
    { zh: "User feedback", en: "User feedback" },
    { zh: "Market validation", en: "Market validation" },
  ],
  acquisitionChannels: [
    "SEO",
    "Paid Ads",
    "Founder-led X / LinkedIn",
    "TikTok / Instagram",
    "YouTube",
    "Product Hunt",
    "Community / Discord",
    "Other",
  ],
  submit: { zh: "提交，获取测试建议", en: "Submit for Review" },
  footnote: {
    zh: "我们不会直接群发报价。团队会先判断你的产品是否适合 SocialRouter，再联系你确认测试范围。",
    en: "We do not send generic quotes. Our team will first evaluate product fit, then contact you to confirm the testing scope.",
  },
  successTitle: { zh: "提交成功", en: "Submission received" },
  successBody: {
    zh: "我们已经收到你的产品信息。团队会先评估你的产品类型、目标市场、竞品场景和承接路径。如果适合测试，我们会通过微信或 WhatsApp 联系你，并给出建议测试方案。",
    en: "We've received your product information. Our team will evaluate your product type, target market, competitor contexts, and conversion path. If your product is suitable for a signal test, we'll contact you via WeChat or WhatsApp with a recommended testing plan.",
  },
  successContact: { zh: "添加微信 / WhatsApp 联系团队", en: "Contact us on WeChat / WhatsApp" },
  backHome: { zh: "返回首页", en: "Back to Home" },
};

/* -------------------- Final CTA (homepage bottom) -------------------- */
export const FINAL_CTA = {
  eyebrow: { zh: "下一步", en: "Next step" },
  heading: {
    zh: "用 7–14 天，判断 SocialRouter 是否适合你的海外增长",
    en: "Find out whether SocialRouter fits your global GTM in 7–14 days",
  },
  body: {
    zh: "提交基础产品信息，我们团队会评估适配度，再提供定制化测试方案建议。",
    en: "Submit your basic product info — our team will evaluate fit and recommend a custom testing path.",
  },
  primary: { zh: "申请测试方案", en: "Apply for Signal Test" },
  secondary: { zh: "先看常见问题", en: "Read FAQ first" },
};

/* -------------------- FAQ page bottom CTA -------------------- */
export const FAQ_CTA = {
  heading: { zh: "还有其他问题？", en: "Still have questions?" },
  body: {
    zh: "提交产品信息后，我们会直接安排顾问与你 1v1 对接，再给出建议测试方案。",
    en: "Submit your product info and we'll set up a 1-on-1 with our team, then propose a tailored testing plan.",
  },
  primary: { zh: "申请测试方案", en: "Apply for Signal Test" },
  secondary: { zh: "返回首页", en: "Back to home" },
};

/* -------------------- Sticky bar -------------------- */
export const STICKY = {
  text: { zh: "想知道你的 AI 产品适不适合做海外社媒获客？", en: "Want to know if your AI product is suitable for a social signal test?" },
  cta: { zh: "提交产品信息", en: "Submit Product Info" },
};

/* -------------------- Footer -------------------- */
export const FOOTER = {
  tagline: {
    zh: "把海外社媒里的真实讨论，转化为 AI 产品的增长信号。",
    en: "Route real social conversations into early growth signals for your AI product.",
  },
  groups: [
    {
      title: { zh: "产品", en: "Product" },
      links: [
        { href: "/#mechanism", zh: "核心机制", en: "How it works" },
        { href: "/#examples", zh: "评论示例", en: "Examples" },
        { href: "/#pricing", zh: "合作方案", en: "Pricing" },
      ],
    },
    {
      title: { zh: "资源", en: "Resources" },
      links: [
        { href: "/#cases", zh: "客户案例", en: "Cases" },
        { href: "/#results", zh: "获客效果", en: "Results" },
        { href: "/faq", zh: "FAQ", en: "FAQ" },
      ],
    },
    {
      title: { zh: "联系", en: "Contact" },
      links: [
        { href: "/apply", zh: "申请测试", en: "Apply for Signal Test" },
        { href: "/apply", zh: "微信 / WhatsApp", en: "WeChat / WhatsApp" },
      ],
    },
  ],
  copyright: { zh: "© 2026 SocialRouter. 保留所有权利。", en: "© 2026 SocialRouter. All rights reserved." },
};
