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
    { id: "mechanism", zh: "核心机制", en: "How it works" },
    { id: "features", zh: "功能模块", en: "Features" },
    { id: "use-cases", zh: "适用产品", en: "Use cases" },
    { id: "pricing", zh: "合作方案", en: "Pricing" },
    { id: "cases", zh: "数据案例", en: "Results" },
    { id: "faq", zh: "FAQ", en: "FAQ" },
  ] as { id: string; zh: string; en: string }[],
  signin: { zh: "联系我们", en: "Contact" },
  cta: { zh: "申请测试方案", en: "Apply for Signal Test" },
};

/* -------------------- Hero -------------------- */
export const HERO = {
  badge: { zh: "面向已融资 AI 初创的海外社媒增长信号系统", en: "Social signal testing for funded AI startups going global" },
  titleZh: ["把海外社媒里的真实讨论，", "转化为 AI 产品的", "第一批增长信号"],
  titleEn: ["Route real social conversations", "into early growth signals", "for your AI product."],
  subtitle: {
    zh: "SocialRouter 在 Instagram、TikTok、YouTube、Reddit、X、LinkedIn 等平台中，精准识别竞品讨论、高意向用户与真实需求场景；通过可审核的 KOC / 素人矩阵内容，将精准流量引导至官网、预约列表、演示页或产品入口。",
    en: "SocialRouter identifies high-intent conversations across Instagram, TikTok, YouTube, Reddit, X, and LinkedIn, then routes them to your website, waitlist, demo page, or product funnel through reviewable KOC and creator-style engagement.",
  },
  primaryCta: { zh: "获取 7–14 天增长信号测试方案", en: "Get a 7–14 Day Signal Test Plan" },
  secondaryCta: { zh: "查看交付样例", en: "View Sample Deliverables" },
  metrics: [
    { kpi: "10,000+", label: { zh: "7 天高意向触达", en: "high-intent touchpoints in 7 days" } },
    { kpi: "75%+",    label: { zh: "互动内容留存率", en: "engagement retention rate" } },
    { kpi: "~50%",    label: { zh: "社媒带来的进站占比", en: "of website traffic from social" } },
    { kpi: "10–30%",  label: { zh: "预约 / 试用注册提升", en: "lift in waitlist / trial signups" } },
  ],
  platforms: ["Instagram", "TikTok", "YouTube", "Reddit", "X", "LinkedIn", "Product Hunt", "Discord"],
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

/* -------------------- Mechanism -------------------- */
export const MECH = {
  eyebrow: { zh: "核心机制", en: "Core Mechanism" },
  heading: {
    zh: "Discover → Engage → Route",
    en: "Discover → Engage → Route",
  },
  sub: { zh: "三段闭环，从社媒讨论到承接落地，全链路可审、可追踪。", en: "A reviewable, traceable loop from social conversation to landing-page conversion." },
  steps: [
    {
      step: "01",
      key: "discover",
      title: { zh: "Discover · 发现", en: "Discover" },
      desc: {
        zh: "挖掘竞品动态、热门内容、关键词讨论、用户痛点、工具推荐场景。",
        en: "Find competitor conversations, keyword discussions, and high-intent user signals.",
      },
      bullets: [
        { zh: "竞品账号监控", en: "Competitor account monitoring" },
        { zh: "行业关键词扫描", en: "Industry keyword scanning" },
        { zh: "热点内容识别", en: "Trending content detection" },
        { zh: "用户意图识别", en: "User intent classification" },
      ],
    },
    {
      step: "02",
      key: "engage",
      title: { zh: "Engage · 互动", en: "Engage" },
      desc: {
        zh: "基于可审核话术库与 KOC / 素人矩阵，开展自然、合规的互动沟通。",
        en: "Engage through reviewable KOC-style and creator-style responses.",
      },
      bullets: [
        { zh: "可审核话术库", en: "Reviewable messaging library" },
        { zh: "KOC / 素人账号矩阵", en: "KOC / creator account matrix" },
        { zh: "场景化自然对话", en: "Context-native conversations" },
        { zh: "拒绝 spam / 冒充", en: "No spam, no impersonation" },
      ],
    },
    {
      step: "03",
      key: "route",
      title: { zh: "Route · 转化", en: "Route" },
      desc: {
        zh: "将精准用户引导至官网、产品页、Waitlist、Demo、社区或 CRM。",
        en: "Route users to your website, waitlist, demo, Discord, or CRM.",
      },
      bullets: [
        { zh: "UTM 全链路追踪", en: "End-to-end UTM tracking" },
        { zh: "多目标承接路径", en: "Multi-target landing flows" },
        { zh: "数据看板可视化", en: "Live dashboard visualization" },
        { zh: "用户反馈结构化", en: "Structured user feedback" },
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

/* -------------------- Pricing / Plans -------------------- */
export const PRICING = {
  eyebrow: { zh: "合作方案", en: "Engagement" },
  heading: { zh: "两种节奏，适配不同阶段", en: "Two cadences, two stages" },
  sub: { zh: "从信号测试到深度增长执行，按节奏推进。", en: "From signal test to growth sprint — move at the right pace." },
  plans: [
    {
      name: { zh: "Signal Test", en: "Signal Test" },
      tagline: { zh: "Pre-seed / Seed AI 团队", en: "Pre-seed / Seed AI teams" },
      duration: { zh: "7–14 天 · 小规模测试", en: "7–14 days · Small-scale pilot" },
      bullets: [
        { zh: "输出海外市场信号", en: "Overseas market signal report" },
        { zh: "可追踪引流数据", en: "Trackable traffic data" },
        { zh: "用户反馈摘要", en: "User feedback summary" },
        { zh: "适配性评估与下一步建议", en: "Fit assessment & next-step recommendations" },
      ],
      highlight: false,
    },
    {
      name: { zh: "Growth Sprint", en: "Growth Sprint" },
      tagline: { zh: "已融资 AI SaaS / Agent", en: "Funded AI SaaS / Agent" },
      duration: { zh: "4 周 · 深度执行", en: "4 weeks · Deep execution" },
      bullets: [
        { zh: "多平台竞品评论区精准触达", en: "Multi-platform competitor-thread targeting" },
        { zh: "关键词矩阵 + 高意图场景覆盖", en: "Keyword matrix + high-intent context coverage" },
        { zh: "KOC / 素人矩阵规模化执行", en: "KOC / creator matrix at scale" },
        { zh: "增长看板 + 周复盘", en: "Growth dashboard + weekly review" },
      ],
      highlight: true,
    },
  ],
};

/* -------------------- Case studies / metrics -------------------- */
export const CASES = {
  eyebrow: { zh: "数据与案例", en: "Results" },
  heading: { zh: "可被验证的增长信号，不是营销叙事", en: "Verifiable growth signal, not marketing storytelling" },
  sub: { zh: "每一组数据，都对应可追踪的执行链路。", en: "Every number maps to a trackable execution trace." },
  metrics: [
    {
      kpi: "10,000+",
      label: { zh: "7 天内触达的高意向讨论场景", en: "high-intent discussion contexts reached in 7 days" },
    },
    {
      kpi: "75%+",
      label: { zh: "成功发布且留存的互动内容占比", en: "of engagements published and retained" },
    },
    {
      kpi: "≈ 50%",
      label: { zh: "社媒互动带来的访问占总流量比例", en: "share of website traffic from social engagement" },
    },
    {
      kpi: "10–30%",
      label: { zh: "预约列表 / 试用注册提升幅度", en: "lift in waitlist / trial signups" },
    },
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
        { id: "mechanism", zh: "核心机制", en: "How it works" },
        { id: "features", zh: "功能模块", en: "Features" },
        { id: "use-cases", zh: "适用产品", en: "Use cases" },
        { id: "pricing", zh: "合作方案", en: "Pricing" },
      ],
    },
    {
      title: { zh: "资源", en: "Resources" },
      links: [
        { id: "cases", zh: "案例与数据", en: "Results" },
        { id: "faq", zh: "FAQ", en: "FAQ" },
        { id: "vc", zh: "VC 专属", en: "For VCs" },
      ],
    },
    {
      title: { zh: "联系", en: "Contact" },
      links: [
        { id: "apply", zh: "申请测试", en: "Apply for Signal Test" },
        // Falls back to #apply until you wire a real WeChat/WhatsApp link.
        { id: "apply", zh: "微信 / WhatsApp", en: "WeChat / WhatsApp" },
      ],
    },
  ],
  copyright: { zh: "© 2026 SocialRouter. 保留所有权利。", en: "© 2026 SocialRouter. All rights reserved." },
};
