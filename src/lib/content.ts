/**
 * SocialRouter bilingual content.
 * Sourced verbatim from the official PDFs (Hero / FAQ / 转化组件).
 * Each leaf is a { zh, en } pair so any UI string can be looked up.
 */

export type Lang = "zh" | "en";

export type LocalizedString = { zh: string; en: string };

export const t = (s: LocalizedString, lang: Lang) => s[lang];

/* -------------------- Navigation --------------------
 * 7-屏 IA：
 *   Hero → Pain → Mechanism → Review → Routing → Results → Cases → VC → Pricing → CTA
 * 顶部导航只暴露关键锚点，避免视觉拥挤。
 * ---------------------------------------------------- */
export const NAV = {
  brand: { zh: "SocialRouter", en: "SocialRouter" },
  links: [
    { href: "/#mechanism", zh: "工作机制", en: "How it works" },
    { href: "/#review", zh: "可审核触达", en: "Reviewable" },
    { href: "/#results", zh: "数据与截图", en: "Proof" },
    { href: "/#cases", zh: "客户案例", en: "Cases" },
    { href: "/#pricing", zh: "合作方案", en: "Pricing" },
    { href: "/faq", zh: "FAQ", en: "FAQ" },
  ] as { href: string; zh: string; en: string }[],
  signin: { zh: "联系我们", en: "Contact" },
  cta: { zh: "获取 7\u201314 天测试方案", en: "Get a 7\u201314 day test plan" },
};

/* -------------------- Hero --------------------
 * 第 1 屏（按飞书 Landing Page 修改版）：
 * 「你们不是帮我做泛流量，而是帮我从海外社媒里找正在找我这类产品的人」
 * --------------------------------------------- */
export const HERO = {
  badge: {
    zh: "面向 AI / SaaS / Tool / Infra 的海外社媒增长伙伴",
    en: "Social growth partner for AI / SaaS / Tool / Infra teams",
  },
  /* 红色重点放在「正在找你这类产品的人」 */
  titleZh: ["从海外社媒里，", "找到正在找你这类产品的人"],
  titleEn: ["Find the people", "already looking for what you're building"],
  subtitle: {
    zh: "为 AI / SaaS / Tool / Infra 产品，在海外社媒里找到正在表达需求的用户，通过可审核的 Creator Matrix 导向 Waitlist / Demo / 注册 / 销售路径。",
    en: "Find users already expressing demand across global social, and route them to your Waitlist / Demo / signup / sales path via a reviewable Creator Matrix.",
  },
  primaryCta: { zh: "获取 7\u201314 天测试方案", en: "Get a 7\u201314 day test plan" },
  secondaryCta: { zh: "查看交付样例", en: "See delivery samples" },
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
 * 「重点覆盖的平台与社区」平台墙 — 不冒充客户背书
 *
 * logoSlug 对应 https://cdn.simpleicons.org/<slug> 上的真实品牌 SVG，
 * 通过 <img src={`https://cdn.simpleicons.org/${slug}`} /> 直接渲染 brand-color SVG。
 * ----------------------------------------------------- */
export const CLIENT_LOGOS = {
  eyebrow: {
    zh: "重点覆盖的平台与社区",
    en: "Core platforms covered",
  },
  /* 只展示平台覆盖，不展示未经授权的客户 Logo。 */
  logos: [
    { name: "Instagram",     logoSlug: "instagram" },
    { name: "TikTok",        logoSlug: "tiktok" },
    { name: "YouTube",       logoSlug: "youtube" },
    { name: "Reddit",        logoSlug: "reddit" },
    { name: "X",             logoSlug: "x" },
    { name: "LinkedIn",      logoSlug: "linkedin" },
    { name: "Product Hunt",  logoSlug: "producthunt" },
    { name: "Discord",       logoSlug: "discord" },
    { name: "Facebook",      logoSlug: "facebook" },
    { name: "Quora",         logoSlug: "quora" },
    { name: "Medium",        logoSlug: "medium" },
    { name: "Threads",       logoSlug: "threads" },
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

/* -------------------- Pain Points --------------------
 * 第 2 屏（你的潜在用户，已经在海外社媒里出现了）
 * 双层结构：4 个「场景卡」（人在哪里） + 4 个「痛点卡」（为什么抓不到）
 * ---------------------------------------------------- */
export const PAIN = {
  eyebrow: { zh: "你的潜在用户在哪里", en: "Where your users are" },
  heading: {
    zh: "你的潜在用户，已经在海外社媒里出现了",
    en: "Your future users are already on social",
  },
  sub: {
    zh: "冷启动真正难的不是发更多内容，而是快速找到真实需求出现在哪里。",
    en: "The hard part isn't posting more — it's finding where real demand already lives.",
  },
  /* —— 4 个场景卡（飞书第 2 屏 · 场景） —— */
  scenarios: [
    {
      tag: { zh: "竞品评论区", en: "Competitor comments" },
      quote: { zh: "「有没有更便宜的替代品？」", en: "\u201cAny cheaper alternative?\u201d" },
    },
    {
      tag: { zh: "测评视频下方", en: "Review videos" },
      quote: { zh: "「有没有适合小团队用的 AI 工具？」", en: "\u201cAny AI tool that fits a small team?\u201d" },
    },
    {
      tag: { zh: "Reddit / X / LinkedIn", en: "Reddit / X / LinkedIn" },
      quote: { zh: "「这个工具太慢、太贵、太复杂。」", en: "\u201cThis tool is too slow, too expensive, too complex.\u201d" },
    },
    {
      tag: { zh: "工具推荐帖", en: "Tool round-ups" },
      quote: { zh: "「有没有比 X 更好用的替代方案？」", en: "\u201cAnything better than X?\u201d" },
    },
  ],
  /* —— 4 个痛点卡（飞书第 2 屏 · 痛点） —— */
  cards: [
    {
      tag: { zh: "SEO", en: "SEO" },
      title: { zh: "SEO 太慢", en: "SEO is too slow" },
      body: {
        zh: "搜索流量需要时间积累，但冷启动阶段需要更快验证市场。",
        en: "Search traffic compounds over months \u2014 but cold-start needs faster market validation.",
      },
    },
    {
      tag: { zh: "Paid Ads", en: "Paid Ads" },
      title: { zh: "广告太泛", en: "Ads are too broad" },
      body: {
        zh: "广告可以买点击，但很难知道用户为什么感兴趣、为什么流失。",
        en: "Ads buy clicks, but rarely explain why users care, or why they drop off.",
      },
    },
    {
      tag: { zh: "Founder-led", en: "Founder-led" },
      title: { zh: "创始人发帖不可复制", en: "Founder posts don't scale" },
      body: {
        zh: "X / LinkedIn 有热度，但很难稳定覆盖竞品评论区、测评视频和工具帖。",
        en: "Founder posts spark heat, but can't reliably cover competitor threads, review videos and tool round-ups.",
      },
    },
    {
      tag: { zh: "Competitor", en: "Competitor" },
      title: { zh: "竞品流量没有被系统捕获", en: "Competitor traffic goes uncaptured" },
      body: {
        zh: "用户已经在询价、吐槽、对比、找替代品，但多数团队没有能力把这些需求转化成线索。",
        en: "Users are pricing, complaining, comparing and hunting for alternatives \u2014 most teams have no way to turn that into pipeline.",
      },
    },
  ],
  outro: {
    title: {
      zh: "SocialRouter 把高意向社媒讨论，转化为可追踪的精准流量与真实用户反馈。",
      en: "SocialRouter converts high-intent social conversations into trackable, high-quality traffic and real user feedback.",
    },
  },
};

/* -------------------- Reviewable Engagement --------------------
 * 第 4 屏（找到人之后，用可审核的方式触达他们）
 * 强信任三段式：No spam. No impersonation. No fake reviews.
 * --------------------------------------------------------------- */
export const REVIEW = {
  eyebrow: { zh: "可审核触达", en: "Reviewable engagement" },
  heading: {
    zh: "先审核，再发布",
    en: "Review first, then publish",
  },
  sub: {
    zh: "上线前，你可以审核目标平台、竞品、关键词、话术、禁用词、品牌边界和转化路径。",
    en: "Before launch, you can review platforms, competitors, keywords, messaging, blocklist, brand boundaries and conversion paths.",
  },
  /* 三句强信任承诺 */
  pledges: [
    { zh: "No spam", en: "No spam" },
    { zh: "No impersonation", en: "No impersonation" },
    { zh: "No fake reviews", en: "No fake reviews" },
  ],
  pledgeBody: {
    zh: "我们不做垃圾营销、不冒充用户、不发布虚假评论。所有触达策略上线前都可以审核。",
    en: "No spam marketing, no impersonation of users, no fabricated reviews. Every outreach strategy is reviewable before it goes live.",
  },
  /* 客户可审核的 6 项内容 */
  items: [
    {
      title: { zh: "目标平台", en: "Target platforms" },
      desc: {
        zh: "我们要进入哪些平台、覆盖哪些社区。",
        en: "Which platforms we'll work on and which communities we'll cover.",
      },
    },
    {
      title: { zh: "目标竞品", en: "Target competitors" },
      desc: {
        zh: "我们要监控哪些竞品账号、视频、帖子、关键词。",
        en: "Which competitor accounts, videos, posts and keywords we'll monitor.",
      },
    },
    {
      title: { zh: "关键词池", en: "Keyword pool" },
      desc: {
        zh: "我们用来识别高意向用户的关键词清单。",
        en: "The keyword list we'll use to identify high-intent users.",
      },
    },
    {
      title: { zh: "话术方向", en: "Messaging angles" },
      desc: {
        zh: "话术库 + 风格指南 + 品牌语调，按行你点头。",
        en: "Messaging library + style guide + tone, signed off line by line.",
      },
    },
    {
      title: { zh: "禁用表达", en: "Blocked phrases" },
      desc: {
        zh: "你定义哪些表达 / 承诺 / 比较是绝对不允许出现的。",
        en: "You define which phrases, promises or comparisons must never appear.",
      },
    },
    {
      title: { zh: "品牌边界 & 转化路径", en: "Brand boundary & conversion path" },
      desc: {
        zh: "我们引流到哪里、UTM 怎么打、什么场景禁止介入。",
        en: "Where we route users, how we tag UTM, and which contexts we'll never enter.",
      },
    },
  ],
  /* 飞书第 4 屏「Demo 占位」：执行前会真实给到客户的 4 类交付物 */
  deliverables: {
    eyebrow: { zh: "执行前你能看到的", en: "Reviewable before launch" },
    title: {
      zh: "上线前 4 类交付物，你审批后我们再发",
      en: "4 reviewable artifacts before anything goes live",
    },
    items: [
      {
        title: { zh: "话术审核截图", en: "Messaging review screenshots" },
        desc: {
          zh: "每条话术的版本、改动记录与品牌语调注释。",
          en: "Versioned messaging with edits and brand-tone annotations.",
        },
      },
      {
        title: { zh: "禁用表达清单", en: "Blocked-phrase list" },
        desc: {
          zh: "不能出现的承诺、对比、夸张表达；按品牌定义。",
          en: "Promises, comparisons and hype phrasing we'll never use.",
        },
      },
      {
        title: { zh: "目标竞品 / 关键词列表", en: "Competitor & keyword list" },
        desc: {
          zh: "我们计划进入的竞品账号、视频、帖子和关键词池。",
          en: "Target competitor accounts, videos, posts and keyword pools.",
        },
      },
      {
        title: { zh: "执行前审核流程图", en: "Pre-launch approval flow" },
        desc: {
          zh: "从话术 → 审核 → 上线 → 监测的每一步都可被追溯。",
          en: "Messaging → review → launch → monitoring, every step traceable.",
        },
      },
    ],
  },
};

/* -------------------- Conversion Routing --------------------
 * 第 5 屏（从触达到转化闭环）
 * ----------------------------------------------------------- */
export const ROUTING = {
  eyebrow: { zh: "转化路径", en: "Conversion routing" },
  heading: {
    zh: "从触达到转化闭环",
    en: "From outreach to a closed-loop conversion",
  },
  sub: {
    zh: "SocialRouter 会根据你的增长目标，把高意向用户导向最合适的承接路径。",
    en: "SocialRouter routes high-intent users to the conversion surface that matches your growth goal.",
  },
  paths: [
    {
      dest: { zh: "官网", en: "Website" },
      fit: { zh: "AI SaaS / AI Tool", en: "AI SaaS / AI Tool" },
    },
    {
      dest: { zh: "Waitlist", en: "Waitlist" },
      fit: { zh: "还未正式开放注册的产品", en: "Pre-launch products" },
    },
    {
      dest: { zh: "Demo 页面", en: "Demo page" },
      fit: { zh: "B2B SaaS / AI Infra", en: "B2B SaaS / AI Infra" },
    },
    {
      dest: { zh: "Product Hunt", en: "Product Hunt" },
      fit: { zh: "新品发布期", en: "Launch-phase products" },
    },
    {
      dest: { zh: "Discord / Telegram", en: "Discord / Telegram" },
      fit: { zh: "开发者工具 / AI 助手", en: "Dev tools / AI assistants" },
    },
    {
      dest: { zh: "表单 / CRM", en: "Form / CRM" },
      fit: { zh: "销售驱动型产品", en: "Sales-led products" },
    },
  ],
  conclusion: {
    zh: "SocialRouter 不是只做触达，而是把海外社媒里的需求路由到正确的业务承接路径。",
    en: "SocialRouter doesn't just generate outreach — it routes overseas social demand into the right business surface.",
  },
  /* 飞书第 5 屏「场景示例」：来自三个真实案例方向 */
  examples: [
    {
      product: { zh: "AI Agent", en: "AI Agent" },
      signal: {
        zh: "「自动化重复工作流」相关讨论",
        en: "“Automating repetitive workflows” discussions",
      },
      surface: { zh: "Waitlist / Demo 页面", en: "Waitlist / Demo page" },
      channels: ["Reddit", "YouTube"],
    },
    {
      product: { zh: "AI SaaS", en: "AI SaaS" },
      signal: {
        zh: "「减少跟进遗漏 / 自动 follow-up」相关讨论",
        en: "“Reduce follow-up misses / auto follow-up” discussions",
      },
      surface: { zh: "Demo 预约表单 / CRM", en: "Demo booking / CRM" },
      channels: ["YouTube", "LinkedIn"],
    },
    {
      product: { zh: "AI Tool", en: "AI Tool" },
      signal: {
        zh: "「可直接用的短视频脚本模板」相关讨论",
        en: "“Ready-to-use short-video script templates” discussions",
      },
      surface: { zh: "试用注册页", en: "Trial signup page" },
      channels: ["TikTok", "YouTube Shorts"],
    },
  ],
};

/* -------------------- How we work --------------------
 * 第 3 屏（三步发现机制 · Discover / Identify / Prioritize）
 * 「我们不是先投广告，而是先找到真实需求场景」
 * ----------------------------------------------------- */
export const MECH = {
  eyebrow: { zh: "工作机制", en: "How it works" },
  heading: {
    zh: "我们会精准定位需求场景",
    en: "We pinpoint where real demand lives",
  },
  sub: {
    zh: "先扫描竞品账号、评论区、热门内容和工具推荐场景，判断哪些平台与话题真正存在需求。",
    en: "First scan competitor accounts, comments, trending content and tool round-ups to see where real demand lives.",
  },
  steps: [
    {
      step: "01",
      key: "discover",
      title: { zh: "Discover · 找场景", en: "Discover · find the contexts" },
      desc: {
        zh: "识别竞品动态、热门内容、关键词讨论、工具推荐帖和用户痛点。",
        en: "Identify competitor moves, trending content, keyword discussions, tool round-ups and user pain points.",
      },
      bullets: [
        { zh: "竞品账号 / 视频 / 帖子动态", en: "Competitor accounts / videos / posts" },
        { zh: "热门内容与关键词讨论", en: "Trending content & keyword threads" },
        { zh: "工具推荐帖与用户痛点", en: "Tool round-ups & user pain points" },
      ],
    },
    {
      step: "02",
      key: "identify",
      title: { zh: "Identify · 找用户", en: "Identify · find the people" },
      desc: {
        zh: "筛选正在表达明确需求的用户——找工具、对比竞品、吐槽现有方案、询问价格 / 试用 / 集成、寻找替代产品。",
        en: "Surface users actively expressing demand \u2014 hunting for tools, comparing competitors, complaining, asking about price / trial / integration, looking for alternatives.",
      },
      bullets: [
        { zh: "正在找同类工具", en: "Hunting for tools" },
        { zh: "正在对比竞品", en: "Comparing competitors" },
        { zh: "正在吐槽现有方案", en: "Complaining about current tools" },
        { zh: "正在询问价格 / 试用 / 集成", en: "Asking about price / trial / integration" },
        { zh: "正在寻找替代产品", en: "Looking for alternatives" },
      ],
    },
    {
      step: "03",
      key: "prioritize",
      title: { zh: "Prioritize · 找切入口", en: "Prioritize · pick the entry" },
      desc: {
        zh: "判断哪些平台、关键词、竞品场景和话术方向最值得测试，给出可执行的测试方案。",
        en: "Decide which platforms, keywords, competitor contexts and messaging angles deserve the first test \u2014 with an actionable test plan.",
      },
      bullets: [
        { zh: "优先测试平台", en: "Priority platforms" },
        { zh: "高价值竞品场景", en: "High-value competitor contexts" },
        { zh: "高意向关键词", en: "High-intent keywords" },
        { zh: "推荐沟通角度", en: "Recommended messaging angles" },
      ],
    },
  ],
  /* —— Discover \u2192 Identify \u2192 Prioritize 三步执行完，会交付的产物 —— */
  outputs: {
    title: { zh: "你最终拿到的产出", en: "What you actually get" },
    items: [
      { zh: "优先测试平台", en: "Priority platforms" },
      { zh: "高价值竞品场景", en: "High-value competitor contexts" },
      { zh: "高意向关键词", en: "High-intent keywords" },
      { zh: "用户痛点方向", en: "User pain-point directions" },
      { zh: "推荐沟通角度", en: "Recommended messaging angles" },
      { zh: "初步转化路径", en: "Initial conversion path" },
    ],
  },
  /* —— 飞书第 3 屏结尾：原始产品模块里的 5 类核心能力 —— */
  coreModules: {
    label: { zh: "背后调用的核心能力", en: "Powered by core modules" },
    items: [
      { zh: "Social Signal Mapping", en: "Social Signal Mapping" },
      { zh: "Intent User Discovery", en: "Intent User Discovery" },
      { zh: "Reviewable Engagement", en: "Reviewable Engagement" },
      { zh: "Conversion Routing", en: "Conversion Routing" },
      { zh: "Dashboard & Feedback Report", en: "Dashboard & Feedback Report" },
    ],
  },
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
 * 飞书第 7 屏：合作模式
 * 两类合作方式：Signal Test / Growth Sprint
 * ----------------------------------------------------------- */
export const PRICING = {
  eyebrow: { zh: "合作模式", en: "Engagement model" },
  heading: { zh: "两类合作方式：先验证，再放大", en: "Two ways to work: validate first, then scale" },
  sub: {
    zh: "先用 7–14 天判断海外社媒里是否存在真实需求；如果验证出有效平台、关键词和话术，再进入持续放大的 Growth Sprint。",
    en: "Start with a 7–14 day signal test to see whether real demand exists on social. If platforms, keywords and messaging work, move into a Growth Sprint.",
  },
  plans: [
    {
      name: { zh: "Signal Test", en: "Signal Test" },
      tagline: { zh: "7–14 天市场信号测试", en: "7–14 day market signal test" },
      duration: { zh: "适合：想先验证是否值得做海外社媒增长的团队", en: "For teams validating whether social growth is worth pursuing" },
      bullets: [
        { zh: "扫描目标市场、竞品场景、关键词和高意向讨论", en: "Scan target markets, competitor contexts, keywords and high-intent discussions" },
        { zh: "输出优先测试平台、高价值竞品场景、高意向关键词", en: "Deliver priority platforms, high-value competitor contexts and high-intent keywords" },
        { zh: "小规模可审核触达，验证 Waitlist / Demo / 试用 / 询盘路径", en: "Run small-batch reviewable outreach to test Waitlist / Demo / trial / inquiry paths" },
        { zh: "交付 Dashboard 截图、用户反馈摘要和下一阶段放大建议", en: "Deliver dashboard screenshots, user feedback summary and scale-up recommendations" },
      ],
      cta: { zh: "获取 7–14 天测试方案", en: "Get the 7–14 day test plan" },
      ctaHref: "/apply",
      highlight: true,
      recommendedLabel: { zh: "建议先做", en: "Start here" },
    },
    {
      name: { zh: "Growth Sprint", en: "Growth Sprint" },
      tagline: { zh: "验证有效后的持续放大", en: "Scale what the test proves" },
      duration: { zh: "适合：已经验证出有效平台与话术，需要持续获客的团队", en: "For teams with proven channels and messaging that need repeatable acquisition" },
      bullets: [
        { zh: "围绕已验证的平台、关键词、竞品场景持续放大", en: "Scale around validated platforms, keywords and competitor contexts" },
        { zh: "持续优化 Creator Matrix、话术库、禁用表达和品牌边界", en: "Continuously optimize Creator Matrix, messaging library, blocklist and brand boundaries" },
        { zh: "每周复盘平台效果、进站路径、用户反馈和转化质量", en: "Weekly review of platform performance, site routing, user feedback and conversion quality" },
        { zh: "沉淀 Repeatable GTM Playbook，供团队长期复用", en: "Build a repeatable GTM playbook the team can reuse" },
      ],
      cta: { zh: "讨论 Growth Sprint", en: "Discuss Growth Sprint" },
      ctaHref: "/apply",
      highlight: false,
    },
  ],
};

/* -------------------- Content Deep Dive --------------------
 * 高保真平台帖子示例 — 替代之前的极简模拟
 * 现在 Instagram / Facebook 各做一张"看着就像真截图"的卡，
 * 上面有真实用户评论 + 我们的 AI 评论（高亮）。
 * ------------------------------------------------------------ */
/**
 * DEEP_DIVES — 评论示例
 * 5 个平台 × 5 类 AI 产品话题，展示在不同社媒语境下的自然接话风格。
 * 红色边框 = 我们发出的评论；其它 = 真实用户回复。
 */
export const DEEP_DIVES = {
  eyebrow: { zh: "评论示例", en: "Comments in the wild" },
  heading: {
    zh: "真实评论，真实样子",
    en: "What our comments actually look like",
  },
  sub: {
    zh: "Instagram / Facebook / TikTok / Reddit / X 上的 5 个真实评论场景。",
    en: "Five real comment threads across Instagram / Facebook / TikTok / Reddit / X.",
  },
  /* Instagram · 创作者 AI 视频工具场景 */
  instagram: {
    platform: "Instagram",
    account: "ai_video_lab",
    accountSub: { zh: "认证账号 · 关注 187K", en: "Verified · 187K followers" },
    timeAgo: { zh: "2 小时前", en: "2 HOURS AGO" },
    location: "Brooklyn, NY",
    bgImage: "/deep-dive/ai-video-studio.png",
    caption: {
      author: "ai_video_lab",
      text: "Testing 6 AI video tools for Reels this week. Visuals are amazing, but I still spend the whole afternoon rewriting hooks + captions so they don't sound generic. What's your actual shipping workflow?",
    },
    likes: "1,247",
    comments: [
      {
        who: "sarah_creates",
        verified: true,
        time: { zh: "1 小时", en: "1 h" },
        text: "Same here. The hard part is not generating the clip — it's getting 10 usable hooks for TikTok / Reels without rewriting the whole script.",
        likes: 23,
        tone: "user" as const,
      },
      {
        who: "filmkid_dev",
        verified: false,
        time: { zh: "47 分钟", en: "47 m" },
        text: "Most tools solve visuals, not the creator workflow. I'm still stitching script docs + captions manually in 3 tabs.",
        likes: 11,
        tone: "user" as const,
      },
      {
        who: "ai_studio_fan",
        verified: false,
        time: { zh: "32 分钟", en: "32 m" },
        text: "If the real pain is hooks + captions + scripts (not just one more generated clip), a template-first workflow ships a Reel in ~12 min — that's the actual unlock, not the model.",
        likes: 47,
        tone: "ai" as const,
      },
      {
        who: "mira.films",
        verified: true,
        time: { zh: "18 分钟", en: "18 m" },
        text: "@ai_studio_fan saved — template + caption combo is exactly what my team keeps asking for.",
        likes: 18,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI", en: "AI" },
    userTag: { zh: "真实用户", en: "Real user" },
  },
  /* Facebook · B2B AI 销售助手场景 */
  facebook: {
    platform: "Facebook",
    group: { zh: "B2B SaaS Growth · 公开小组 · 38K 成员", en: "B2B SaaS Growth · Public group · 38K members" },
    author: "Marcus T.",
    authorSub: { zh: "Admin · 发布于 2 周前", en: "Admin · 2w ago" },
    caption: {
      text: "Small sales team problem: leads come in from webinars, LinkedIn, and website forms — but follow-ups still slip through. Looking for an AI workflow that reminds reps, drafts the follow-up, and doesn't force a 3-month CRM migration. What's actually working for 5–10 person teams?",
    },
    bgImage: "/deep-dive/ai-sales-copilot.png",
    stats: {
      reactions: 142,
      comments: 38,
      shares: 12,
    },
    comments: [
      {
        who: "Priya S.",
        time: { zh: "1 天前", en: "1 d" },
        text: "We tried adding follow-up tasks inside HubSpot, but reps still ignore them after the first week.",
        likes: 14,
        replies: 2,
        tone: "user" as const,
      },
      {
        who: "growth_marcus",
        time: { zh: "16 小时前", en: "16 h" },
        text: "A 6-rep SaaS team measured this last quarter — pure CRM tasks recovered ~12% of leads, an AI copilot that drafts the follow-up email recovered ~38%. The wedge isn't the reminder, it's the pre-written draft.",
        likes: 64,
        replies: 11,
        tone: "ai" as const,
      },
      {
        who: "alex_wu",
        time: { zh: "5 小时前", en: "5 h" },
        text: "@growth_marcus 38% matches what we saw too — the moment the email is pre-drafted, reps actually click send.",
        likes: 9,
        replies: 1,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI", en: "AI" },
    userTag: { zh: "真实用户", en: "Real user" },
  },
  /* TikTok · AI 短视频脚本场景 */
  tiktok: {
    platform: "TikTok",
    handle: "@creator_ai_stack",
    handleSub: { zh: "认证 · 4.2M 粉丝", en: "Verified · 4.2M followers" },
    caption: {
      text: "POV: your AI gave you 100 video ideas but none of them sound like a real TikTok hook 😩 #aitools #creatorworkflow",
    },
    music: "Original sound · capcut_ai",
    stats: { likes: "12.4K", comments: "1,287", shares: "2,043", saves: "8,912" },
    bgImage: "/deep-dive/ai-creator-kit.png",
    videoSrc: "/deep-dive/creator-demo.mp4",
    comments: [
      {
        who: "@sam_films",
        verified: false,
        time: { zh: "2 小时", en: "2 h" },
        text: "I don't need 100 ideas, I need 5 hooks I can actually record today 🙏",
        likes: 412,
        tone: "user" as const,
      },
      {
        who: "@ops_lily",
        verified: false,
        time: { zh: "1 小时", en: "1 h" },
        text: "Hook pack > idea generator every single time. A 5-hook-per-niche template — copy, film, ship in under 20 min.",
        likes: 728,
        tone: "ai" as const,
      },
      {
        who: "@miguelxc",
        verified: false,
        time: { zh: "47 分钟", en: "47 m" },
        text: "@ops_lily ran with the cliffhanger one — first Reel hit 14K in 6h. Wild.",
        likes: 184,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI", en: "AI" },
  },
  /* Reddit · AI 工作流 Agent 场景 */
  reddit: {
    platform: "Reddit",
    subreddit: "r/SaaS",
    subredditSub: { zh: "公开 · 142K 成员", en: "Public · 142K members" },
    author: "u/gtm_anon",
    authorSub: { zh: "Posted by u/gtm_anon · 8h", en: "Posted by u/gtm_anon · 8h" },
    title: "Anyone using AI agents to actually automate repetitive ops across Slack, Notion and CRM (not just demo)?",
    body: "We're not looking for another generic agent demo. We need something that can pick up repeated workflows: summarize customer notes, update CRM fields, post into the right Slack channel — and not break the moment permissions change. What's working in production for a 12-person ops team?",
    bgImage: "/deep-dive/ai-workflow-agent.png",
    flair: "Question",
    score: 312,
    commentCount: 47,
    comments: [
      {
        who: "u/saas_lifer",
        time: { zh: "5h", en: "5h" },
        text: "Most agent demos fall apart the moment you need stable permissions + clean CRM writes.",
        score: 184,
        replies: 12,
        depth: 0,
        tone: "user" as const,
      },
      {
        who: "u/dev_ops_daily",
        time: { zh: "4h", en: "4h" },
        text: "Ran this exact eval last month for a 12-person ops team. Honest breakdown:\n\n• Zapier / Make — fast to wire, breaks on multi-step CRM logic\n• Generic GPT-agent demos — great in screenshots, terrible at consistent writes\n• Workflow-native AI agent (Slack → summary → Notion → CRM → notify) — ~9 min saved per run, ~1,200 runs/mo\n\nThe wedge is treating the workflow as the unit, not the model.",
        score: 412,
        replies: 28,
        depth: 0,
        tone: "ai" as const,
      },
      {
        who: "u/founderfrank",
        time: { zh: "3h", en: "3h" },
        text: "Cleanest breakdown in the whole thread — saving the comparison + sharing with our ops lead.",
        score: 64,
        replies: 3,
        depth: 1,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI", en: "AI" },
  },
  /* X · AI 买家研究 / GTM 定位场景 */
  x: {
    platform: "X",
    handle: "@startup_jenny",
    handleSub: { zh: "Jenny · @startup_jenny", en: "Jenny · @startup_jenny" },
    time: { zh: "2h", en: "2h" },
    body: "Trying to validate an AI research product for GTM teams. Should we position around \u201cAI research agent\u201d, or around \u201cfind competitor demand + buyer pain faster\u201d? Need real angles, not vibes.",
    bgImage: "/deep-dive/ai-research-stack.png",
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
        text: "I'd avoid \u201cAI research agent\u201d. Sounds generic. The real pain is buyer research speed.",
        likes: 64,
        tone: "user" as const,
      },
      {
        who: "@gtm_jess",
        verified: true,
        time: { zh: "47 分钟", en: "47m" },
        text: "Position on the outcome, not the model. A/B'd both: \u201cAI research agent\u201d → 1.4% CTR. \u201cFind buyer pain before buying ads\u201d → 6.8% CTR, ~4.8× lift. Outcome > model every time.",
        likes: 401,
        tone: "ai" as const,
      },
      {
        who: "@startup_jenny",
        verified: false,
        time: { zh: "30 分钟", en: "30m" },
        text: "@gtm_jess 4.8× is wild — that's the framing I was looking for. Bookmarked.",
        likes: 28,
        tone: "user" as const,
      },
    ],
    aiTag: { zh: "AI", en: "AI" },
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

/* -------------------- Case studies (tabbed) --------------------
 * 三个真实案例（客户名脱敏 · NDA 保护）
 *   1. AI Agent  ─ 海外冷启动 · X / Reddit / YouTube · Waitlist / Demo
 *   2. AI SaaS   ─ B2B Demo 预约 · YouTube / LinkedIn / X · 销售线索
 *   3. AI Tool   ─ 创作者试用注册 · TikTok / Instagram / YouTube Shorts · 试用注册
 *
 * 数据来源：飞书文档 Case 1/2/3；不在案例卡内伪造精确数字。
 *           全站通用效果区间统一放在 RESULTS 区块。
 * ------------------------------------------------------------- */
export const CASES = {
  eyebrow: { zh: "客户案例", en: "Customer Cases" },
  heading: { zh: "三类 AI 产品，三种验证目标", en: "Three AI categories, three growth questions" },
  sub: {
    zh: "全部数据来自飞书 Sample Results 表格；客户名 NDA 保护，会议中可披露。",
    en: "All data from Feishu Sample Results; client names NDA, available on call.",
  },
  tabs: [
    /* ---------- Case 1 · AI Agent ---------- */
    {
      id: "ai-agent",
      label: { zh: "AI Agent", en: "AI Agent" },
      title: { zh: "AI Agent 海外冷启动测试", en: "AI Agent cold-start in NA / UK" },
      subtitle: {
        zh: "面向知识工作者的 AI Agent · 北美 + 英国市场 · X / Reddit / YouTube 集中讨论",
        en: "Knowledge-worker AI Agent · North America + UK · concentrated on X / Reddit / YouTube",
      },
      lead: {
        zh: "目标：验证北美和英国是否存在「自动化工作流」真实需求，获取第一批 Waitlist 与 Demo 注册用户。我们扫描竞品讨论、工具推荐与效率工作流相关内容，筛出高意向用户，通过可审核的 Creator Matrix 将用户导向 Waitlist 与 Demo 页面。",
        en: "Goal: validate real demand for \"workflow automation\" in NA + UK, and capture the first batch of Waitlist / Demo signups. We scanned competitor threads, tool recommendations, and productivity workflow contexts, then routed high-intent users to Waitlist and Demo via a reviewable Creator Matrix.",
      },
      blocks: [
        {
          title: { zh: "目标", en: "Objective" },
          body: {
            zh: "验证北美和英国市场是否存在自动化工作流需求，并获取第一批 Waitlist / 试用注册用户。",
            en: "Validate whether NA and UK markets show demand for automated workflows, and capture the first Waitlist / trial users.",
          },
        },
        {
          title: { zh: "人去哪吵", en: "Where demand lives" },
          body: {
            zh: "X、Reddit、YouTube 上的竞品讨论、工具推荐和效率工作流相关内容。",
            en: "Competitor discussions, tool recommendations and productivity workflow content on X, Reddit and YouTube.",
          },
        },
        {
          title: { zh: "关键发现", en: "Key finding" },
          body: {
            zh: "用户对「自动化重复工作流」的兴趣高于「通用 AI Agent」概念。下一阶段建议聚焦 Reddit + YouTube，围绕工具集成、重复任务自动化和竞品替代场景持续放大。",
            en: "Users showed stronger interest in “automated repetitive workflows” than in the generic “AI Agent” concept. Next phase: focus Reddit + YouTube around tool integration, repetitive-task automation and competitor-replacement scenarios.",
          },
        },
      ],
      stats: [
        { value: "10,000", unit: { zh: "条", en: "" }, label: { zh: "触达内容生成", en: "Outreach content generated" }, highlight: true },
        { value: "131", unit: { zh: "个", en: "" }, label: { zh: "Waitlist / 试用注册", en: "Waitlist / trial signups" }, highlight: true },
        { value: "Reddit + YouTube", unit: { zh: "", en: "" }, label: { zh: "最优平台", en: "Top platforms" }, highlight: true },
        { value: "7", unit: { zh: "天", en: "days" }, label: { zh: "测试时间", en: "Test duration" } },
        { value: "23", unit: { zh: "个", en: "" }, label: { zh: "高意向场景", en: "High-intent contexts" } },
        { value: "8,600", unit: { zh: "次", en: "" }, label: { zh: "合格触达", en: "Qualified touches" } },
        { value: "1,600", unit: { zh: "次", en: "" }, label: { zh: "UTM 点击", en: "UTM clicks" } },
        { value: "74", unit: { zh: "条", en: "" }, label: { zh: "用户反馈", en: "User feedback" } },
      ],
      quote: {
        text: {
          zh: "案例重点不是证明「通用 AI Agent」受欢迎，而是识别出用户真正愿意响应的需求表达：自动化重复工作流。131 个 Waitlist / 试用注册都来自这条线索。",
          en: "The case didn't prove generic “AI Agent” demand. It identified the real signal users responded to: automating repetitive workflows. All 131 Waitlist / trial signups came from that thread.",
        },
        author: { zh: "Founder · 北美 AI Agent 团队（NDA 保护，会议中可披露）", en: "Founder · NA-based AI Agent team (NDA, available on call)" },
      },
    },
    /* ---------- Case 2 · AI SaaS ---------- */
    {
      id: "ai-saas",
      label: { zh: "AI SaaS", en: "AI SaaS" },
      title: { zh: "AI SaaS Demo 预约测试", en: "AI SaaS demo-booking test" },
      subtitle: {
        zh: "面向中小企业销售团队的 AI SaaS · 北美 B2B · YouTube / LinkedIn / X 集中讨论",
        en: "AI SaaS for SMB sales teams · North America B2B · concentrated on YouTube / LinkedIn / X",
      },
      lead: {
        zh: "目标：验证北美 B2B 用户是否愿意从社媒讨论进入 Demo 预约页面，并获取第一批销售线索。我们扫描销售自动化、CRM、AI sales assistant、lead management 相关讨论，筛出有明确购买意向的用户，通过可审核的 Creator Matrix 引导至 Demo 预约页面。",
        en: "Goal: validate whether NA B2B users will move from social conversations to a Demo-booking page, and capture the first batch of sales leads. We scanned sales-automation, CRM, AI sales assistant, and lead-management discussions, qualified buying-intent users, and routed them to the Demo page via a reviewable Creator Matrix.",
      },
      blocks: [
        {
          title: { zh: "目标", en: "Objective" },
          body: {
            zh: "验证北美 B2B 用户是否愿意从社媒讨论进入 Demo 预约页面，并获取第一批销售线索。",
            en: "Validate whether NA B2B users are willing to move from social discussions into a Demo-booking page, and capture the first sales leads.",
          },
        },
        {
          title: { zh: "人去哪吵", en: "Where demand lives" },
          body: {
            zh: "YouTube、LinkedIn、X 上围绕销售自动化、CRM、AI sales assistant 和 lead management 的相关讨论。",
            en: "YouTube, LinkedIn and X discussions around sales automation, CRM, AI sales assistant and lead management.",
          },
        },
        {
          title: { zh: "关键发现", en: "Key finding" },
          body: {
            zh: "用户对「减少销售跟进遗漏」「提升线索响应速度」「自动生成 follow-up」的兴趣高于泛泛的「AI sales tool」。下一阶段建议聚焦 YouTube + LinkedIn，围绕 CRM 集成、销售跟进自动化和小团队销售效率持续放大。",
            en: "Users showed stronger interest in “reducing missed follow-ups”, “faster lead response” and “auto-generated follow-ups” than in generic “AI sales tool” framing. Next phase: focus YouTube + LinkedIn around CRM integration, sales follow-up automation and small-team sales efficiency.",
          },
        },
      ],
      stats: [
        { value: "27", unit: { zh: "个", en: "" }, label: { zh: "Demo 预约", en: "Demo bookings" }, highlight: true },
        { value: "14", unit: { zh: "个", en: "" }, label: { zh: "合格销售线索", en: "Qualified sales leads" }, highlight: true },
        { value: "4.40", unit: { zh: "%", en: "%" }, label: { zh: "点击 → Demo 预约 转化率", en: "Click → Demo booking rate" }, highlight: true },
        { value: "7", unit: { zh: "天", en: "days" }, label: { zh: "测试时间", en: "Test duration" } },
        { value: "18", unit: { zh: "个", en: "" }, label: { zh: "核心高意向场景", en: "High-intent contexts" } },
        { value: "4,200", unit: { zh: "次", en: "" }, label: { zh: "合格触达", en: "Qualified touches" } },
        { value: "620", unit: { zh: "次", en: "" }, label: { zh: "UTM 点击", en: "UTM clicks" } },
        { value: "52", unit: { zh: "条", en: "" }, label: { zh: "用户反馈", en: "User feedback" } },
        { value: "YouTube + LinkedIn", unit: { zh: "", en: "" }, label: { zh: "最优平台", en: "Top platforms" } },
      ],
      quote: {
        text: {
          zh: "把「AI sales tool」拆成销售跟进遗漏、线索响应速度、自动 follow-up 三类具体场景后，4,200 次合格触达带来了 27 个真实 Demo 预约和 14 个合格销售线索。",
          en: "After breaking “AI sales tool” into missed follow-ups, lead response speed and auto follow-ups, 4,200 qualified touches produced 27 real Demo bookings and 14 qualified leads.",
        },
        author: { zh: "Head of Growth · 北美 AI SaaS 销售工具（NDA 保护，会议中可披露）", en: "Head of Growth · NA AI sales SaaS (NDA, available on call)" },
      },
    },
    /* ---------- Case 3 · AI Tool ---------- */
    {
      id: "ai-tool",
      label: { zh: "AI Tool", en: "AI Tool" },
      title: { zh: "AI Tool 试用注册测试", en: "AI Tool trial-signup test" },
      subtitle: {
        zh: "面向创作者与营销团队的 AI Tool · 美国 + 东南亚 · TikTok / Instagram / YouTube Shorts 集中讨论",
        en: "AI Tool for creators & marketing teams · US + SEA · concentrated on TikTok / Instagram / YouTube Shorts",
      },
      lead: {
        zh: "目标：验证美国与东南亚市场是否存在内容生成需求，通过短视频与社媒讨论场景获取试用注册用户。我们扫描工具推荐、内容创作教程、AI video tool 对比、creator workflow 等场景，经过 4 轮话术与落地页迭代，将高意向用户引导至产品试用页。",
        en: "Goal: validate content-generation demand in US + SEA, and acquire trial signups through short-video and social conversations. We scanned tool recommendations, creator tutorials, AI video tool comparisons, and creator-workflow contexts, then iterated through 4 rounds of messaging + LP to route high-intent users to the trial page.",
      },
      blocks: [
        {
          title: { zh: "目标", en: "Objective" },
          body: {
            zh: "验证美国和东南亚市场是否存在内容生成需求，并通过短视频和社媒讨论场景获取试用注册用户。",
            en: "Validate content-generation demand in the US and Southeast Asia, and acquire trial signups through short-video and social-discussion contexts.",
          },
        },
        {
          title: { zh: "人去哪吵", en: "Where demand lives" },
          body: {
            zh: "TikTok、Instagram、YouTube Shorts 上的工具推荐、内容创作教程、AI video tool 对比和 creator workflow 场景。",
            en: "Tool recommendations, content-creation tutorials, AI video tool comparisons and creator-workflow contexts across TikTok, Instagram and YouTube Shorts.",
          },
        },
        {
          title: { zh: "关键发现", en: "Key finding" },
          body: {
            zh: "用户对「可直接使用的短视频脚本模板」的兴趣高于泛泛的「AI 内容生成」。经过 4 轮话术与落地页迭代后，下一阶段建议聚焦 YouTube Shorts + TikTok，围绕 TikTok / Reels / Shorts 脚本模板、广告文案优化和多平台内容生产持续放大。",
            en: "Users showed stronger interest in “ready-to-use short-video script templates” than in generic “AI content generation”. After 4 rounds of messaging and landing-page iteration, the next phase should focus YouTube Shorts + TikTok around TikTok / Reels / Shorts script templates, ad-copy optimization and multi-platform production.",
          },
        },
      ],
      stats: [
        { value: "13,800", unit: { zh: "个", en: "" }, label: { zh: "Trial Signup", en: "Trial signups" }, highlight: true },
        { value: "32.90", unit: { zh: "%", en: "%" }, label: { zh: "UTM 点击 → Trial 转化率", en: "Click → Trial conversion" }, highlight: true },
        { value: "100,000", unit: { zh: "次", en: "" }, label: { zh: "合格触达", en: "Qualified touches" }, highlight: true },
        { value: "21", unit: { zh: "天", en: "days" }, label: { zh: "测试周期", en: "Test duration" } },
        { value: "4", unit: { zh: "轮", en: "rounds" }, label: { zh: "话术 / 落地页迭代", en: "Messaging + LP iterations" } },
        { value: "86", unit: { zh: "个", en: "" }, label: { zh: "核心高意向场景", en: "High-intent contexts" } },
        { value: "42,000", unit: { zh: "次", en: "" }, label: { zh: "UTM 点击", en: "UTM clicks" } },
        { value: "36,000", unit: { zh: "次", en: "" }, label: { zh: "官网访问", en: "Site visits" } },
        { value: "1,860", unit: { zh: "条", en: "" }, label: { zh: "用户反馈", en: "User feedback" } },
        { value: "YouTube Shorts + TikTok", unit: { zh: "", en: "" }, label: { zh: "最优平台", en: "Top platforms" } },
      ],
      quote: {
        text: {
          zh: "21 天 + 4 轮话术 / 落地页迭代，10 万次合格触达带来 36,000 次官网访问和 13,800 个 Trial Signup，UTM 点击到 Trial 的转化率做到 32.90%。",
          en: "Over 21 days and 4 rounds of messaging + LP iteration, 100K qualified touches drove 36K site visits and 13,800 Trial signups, with a 32.90% click → Trial conversion rate.",
        },
        author: { zh: "Founder · 美国 + 东南亚 AI Tool 团队（NDA 保护，会议中可披露）", en: "Founder · US + SEA AI Tool team (NDA, available on call)" },
      },
    },
  ],
};

/* -------------------- Case Comparison --------------------
 * 三案例横向对比表 — 销售视角：一眼判断哪类 case 最接近客户产品
 * 数据全部来自飞书 Case 1 / 2 / 3 Sample Results 表格
 * --------------------------------------------------------- */
export const CASE_COMPARISON = {
  eyebrow: { zh: "三案例横向对比", en: "Side-by-side comparison" },
  heading: {
    zh: "三类 AI 产品，同维度数据并列对比",
    en: "Three AI products, compared metric by metric",
  },
  sub: {
    zh: "三个真实案例同一行对比，一眼判断哪类最接近你的产品。",
    en: "Three real cases compared row by row — find the closest match to your product.",
  },
  cases: [
    { id: "ai-agent", label: { zh: "AI Agent", en: "AI Agent" }, sub: { zh: "海外冷启动", en: "Cold-start" } },
    { id: "ai-saas", label: { zh: "AI SaaS", en: "AI SaaS" }, sub: { zh: "B2B Demo 预约", en: "Demo booking" } },
    { id: "ai-tool", label: { zh: "AI Tool", en: "AI Tool" }, sub: { zh: "创作者试用注册", en: "Trial signup" } },
  ],
  rows: [
    {
      key: "duration",
      label: { zh: "测试周期", en: "Test duration" },
      values: [
        { zh: "7 天", en: "7 days" },
        { zh: "7 天", en: "7 days" },
        { zh: "21 天 · 4 轮迭代", en: "21 days · 4 iterations" },
      ],
    },
    {
      key: "contexts",
      label: { zh: "高意向场景", en: "High-intent contexts" },
      values: [
        { zh: "23 个", en: "23" },
        { zh: "18 个", en: "18" },
        { zh: "86 个", en: "86" },
      ],
    },
    {
      key: "touches",
      label: { zh: "合格触达", en: "Qualified touches" },
      values: [
        { zh: "8,600 次", en: "8,600" },
        { zh: "4,200 次", en: "4,200" },
        { zh: "100,000 次", en: "100,000" },
      ],
    },
    {
      key: "clicks",
      label: { zh: "UTM 点击", en: "UTM clicks" },
      values: [
        { zh: "1,600 次", en: "1,600" },
        { zh: "620 次", en: "620" },
        { zh: "42,000 次", en: "42,000" },
      ],
    },
    {
      key: "site-visits",
      label: { zh: "官网访问", en: "Site visits" },
      values: [
        { zh: "—", en: "—" },
        { zh: "—", en: "—" },
        { zh: "36,000 次", en: "36,000" },
      ],
    },
    {
      key: "primary-conversion",
      label: { zh: "核心转化", en: "Primary conversion" },
      values: [
        { zh: "131 Waitlist / 试用", en: "131 Waitlist / trial" },
        { zh: "27 Demo + 14 销售线索", en: "27 Demo + 14 leads" },
        { zh: "13,800 Trial Signup", en: "13,800 Trial signups" },
      ],
      highlight: true,
    },
    {
      key: "rate",
      label: { zh: "点击 → 转化率", en: "Click → conversion rate" },
      values: [
        { zh: "—", en: "—" },
        { zh: "4.40%", en: "4.40%" },
        { zh: "32.90%", en: "32.90%" },
      ],
      highlight: true,
    },
    {
      key: "feedback",
      label: { zh: "用户反馈", en: "User feedback" },
      values: [
        { zh: "74 条", en: "74" },
        { zh: "52 条", en: "52" },
        { zh: "1,860 条", en: "1,860" },
      ],
    },
    {
      key: "platforms",
      label: { zh: "最优放大平台", en: "Top platforms" },
      values: [
        { zh: "Reddit + YouTube", en: "Reddit + YouTube" },
        { zh: "YouTube + LinkedIn", en: "YouTube + LinkedIn" },
        { zh: "YouTube Shorts + TikTok", en: "YouTube Shorts + TikTok" },
      ],
    },
  ],
  footnote: {
    zh: "「—」表示该案例飞书表格中无对应字段，并不代表该指标为 0。",
    en: "An em-dash means that field is not present in the Feishu table for that case — not that the metric is zero.",
  },
};

/* -------------------- Acquisition results --------------------
 * 第 6 屏（真实数据与效果证明）
 * 组成：顶部大数字 + Proof Gallery 截图墙 + Dashboard 说明
 *   以下 RESULTS 负责「顶部大数字 + 交付产物」两件事
 * ------------------------------------------------------------- */
export const RESULTS = {
  eyebrow: { zh: "三案例累计实测", en: "Aggregated real results" },
  heading: {
    zh: "三案例累计实测",
    en: "Aggregated real numbers",
  },
  sub: {
    zh: "三个真实案例飞书 Sample Results 表格累计求和，不做估算。",
    en: "Direct sum across three real Feishu Sample Results tables — no estimates.",
  },
  primary: [
    { value: "112,800", label: { zh: "累计合格触达", en: "Qualified touches" } },
    { value: "44,220",  label: { zh: "累计 UTM 点击", en: "UTM clicks" } },
    { value: "13,958",  label: { zh: "累计 Waitlist / Demo / Trial", en: "Total signups" } },
    { value: "1,986",   label: { zh: "累计用户反馈", en: "User feedback" } },
  ],
  highlight: [
    { value: "32.90%", label: { zh: "AI Tool · UTM → Trial 转化率", en: "AI Tool · Click → Trial rate" } },
    { value: "4.40%",  label: { zh: "AI SaaS · Click → Demo 转化率", en: "AI SaaS · Click → Demo rate" } },
  ],
  deliverables: [
    { zh: "用户高频痛点与核心诉求", en: "User pain points & core asks" },
    { zh: "优先放大的市场与平台", en: "Markets & platforms to scale" },
    { zh: "高引流 / 高转化关键词", en: "High-traffic / high-conversion keywords" },
    { zh: "高价值竞品场景与切入方向", en: "High-value competitor contexts & entry angles" },
  ],
};

/* -------------------- Proof Gallery (效果截图墙) --------------------
 * 第 6.2 屏：4 组真实截图（飞书文档里已有原始素材）。
 * 使用方式：用户下载飞书里的截图后，按以下路径放入 web/public/screenshots/
 *   代码会自动加载；文件不存在时呈现占位。
 * -------------------------------------------------------------------- */
export const PROOF_GALLERY = {
  eyebrow: { zh: "效果截图", en: "Proof gallery" },
  heading: { zh: "从触达到询盘，结果可被看见", en: "From outreach to inquiry, results you can see" },
  sub: {
    zh: "真实项目截图（客户名 NDA 保护），每类 2–3 张代表性素材。",
    en: "Real engagement screenshots (client names under NDA), 2–3 per category.",
  },
  groups: [
    {
      key: "tiktok-inquiry",
      label: { zh: "TikTok 询盘量", en: "TikTok Inquiry Signals" },
      desc: {
        zh: "短视频评论区里被 SocialRouter 触发的询盘 / 试用 / 加好友信号。",
        en: "Inquiry / trial / DM-add signals triggered by SocialRouter inside TikTok comment threads.",
      },
      images: [
        "/screenshots/tiktok-inquiry-1.png",
        "/screenshots/tiktok-inquiry-2.png",
        "/screenshots/tiktok-inquiry-3.png",
      ],
    },
    {
      key: "instagram-inquiry",
      label: { zh: "Instagram 询盘量", en: "Instagram Inquiry Signals" },
      desc: {
        zh: "Instagram 帖子 / Reels 下方的高意向询问与私信意向。",
        en: "High-intent questions and DM signals under Instagram posts and Reels.",
      },
      images: [
        "/screenshots/ig-inquiry-1.png",
        "/screenshots/ig-inquiry-2.png",
        "/screenshots/ig-inquiry-3.png",
      ],
    },
    {
      key: "instagram-reach",
      label: { zh: "Instagram 曝光量", en: "Instagram Reach Signals" },
      desc: {
        zh: "通过精准场景介入获得的自然曝光、互动与收藏数据。",
        en: "Organic reach, engagement and saves earned through context-driven engagement.",
      },
      images: [
        "/screenshots/ig-reach-1.png",
        "/screenshots/ig-reach-2.png",
        "/screenshots/ig-reach-3.png",
      ],
    },
    {
      key: "dashboard",
      label: { zh: "执行 Dashboard", en: "Execution Dashboard" },
      desc: {
        zh: "客户实时可见的执行 / 触达 / 进站 / 询盘看板。",
        en: "Real-time dashboard \u2014 execution / reach / site visits / inquiries.",
      },
      images: [
        "/screenshots/dashboard-1.png",
        "/screenshots/dashboard-2.png",
      ],
    },
  ],
};

/* -------------------- Product Results (三类产品结果卡) --------------------
 * 第 6.3 屏：不同 AI 产品验证的是不同增长问题
 * 数据来源：飞书 Case 1/2/3 三个真实案例的「关键结论」
 * ------------------------------------------------------------------------- */
export const PRODUCT_RESULTS = {
  eyebrow: { zh: "三类产品结果", en: "Three categories, three outcomes" },
  heading: {
    zh: "不同 AI 产品，验证的是不同增长结果",
    en: "Different AI products, different growth signals",
  },
  sub: {
    zh: "AI Agent / AI SaaS / AI Tool 三类案例，要验证的增长问题完全不同。",
    en: "AI Agent / AI SaaS / AI Tool — each validates a different growth question.",
  },
  items: [
    {
      tag: "AI Agent",
      goal: { zh: "Waitlist / Demo", en: "Waitlist / Demo" },
      finding: {
        zh: "用户更关心「自动化重复工作流」，而不是泛泛的「通用 AI Agent」。",
        en: "Users care about \u201cautomating repetitive workflows\u201d \u2014 not generic \u201cAI Agent\u201d framing.",
      },
      scale: { zh: "建议放大：Reddit + YouTube", en: "Scale: Reddit + YouTube" },
      kpi: {
        primary: {
          value: "131",
          unit: { zh: "个", en: "" },
          label: { zh: "Waitlist / 试用注册", en: "Waitlist / trial signups" },
        },
        secondary: {
          value: "8,600",
          unit: { zh: "次", en: "" },
          label: { zh: "合格触达", en: "Qualified touches" },
        },
        cycle: { zh: "7 天测试", en: "7-day test" },
      },
    },
    {
      tag: "AI SaaS",
      goal: { zh: "Demo 预约 / 销售线索", en: "Demo / Sales leads" },
      finding: {
        zh: "用户更关心「减少销售跟进遗漏」「提升线索响应速度」「自动生成 follow-up」，而不是泛泛的「AI sales tool」。",
        en: "Users care about \u201creducing follow-up misses\u201d, \u201cfaster lead response\u201d, \u201cauto-generated follow-ups\u201d \u2014 not generic \u201cAI sales tool\u201d.",
      },
      scale: { zh: "建议放大：YouTube + LinkedIn", en: "Scale: YouTube + LinkedIn" },
      kpi: {
        primary: {
          value: "27",
          unit: { zh: "个", en: "" },
          label: { zh: "Demo 预约", en: "Demo bookings" },
        },
        secondary: {
          value: "4.40",
          unit: { zh: "%", en: "%" },
          label: { zh: "点击 → Demo 预约 转化率", en: "Click → Demo rate" },
        },
        cycle: { zh: "7 天测试", en: "7-day test" },
      },
    },
    {
      tag: "AI Tool",
      goal: { zh: "试用注册", en: "Trial signups" },
      finding: {
        zh: "用户更关心「可直接使用的短视频脚本模板」，而不是泛泛的「AI 内容生成」。",
        en: "Users care about \u201cready-to-use short-video script templates\u201d \u2014 not generic \u201cAI content generation\u201d.",
      },
      scale: { zh: "建议放大：YouTube Shorts + TikTok", en: "Scale: YouTube Shorts + TikTok" },
      kpi: {
        primary: {
          value: "13,800",
          unit: { zh: "个", en: "" },
          label: { zh: "Trial Signup", en: "Trial signups" },
        },
        secondary: {
          value: "32.90",
          unit: { zh: "%", en: "%" },
          label: { zh: "UTM 点击 → Trial 转化率", en: "Click → Trial rate" },
        },
        cycle: { zh: "21 天 · 4 轮迭代", en: "21 days · 4 iterations" },
      },
    },
  ],
};

/* -------------------- Dashboard Note --------------------
 * 第 6.4 屏：Dashboard 说明。不只看执行量，更看增长判断。
 * --------------------------------------------------------- */
export const DASHBOARD_NOTE = {
  eyebrow: { zh: "Dashboard", en: "Dashboard" },
  heading: {
    zh: "Dashboard 不只看执行量，更看增长判断",
    en: "Dashboards aren't just execution counters \u2014 they're growth decisions",
  },
  sub: {
    zh: "创业者看：能不能获客 / 多便宜 / 能不能转收入。VC 看：市场是否真实 / 是否可放大 / 模型是否健康。",
    en: "Founders watch: acquire / how cheap / convert to revenue. VCs watch: real market / scalable / healthy model.",
  },
  founderMetrics: {
    title: { zh: "创业者关注", en: "Founders watch" },
    items: [
      { zh: "能不能获客", en: "Can we acquire users" },
      { zh: "获客贵不贵", en: "How cheap is acquisition" },
      { zh: "能不能转化成收入", en: "Does it convert to revenue" },
    ],
  },
  vcMetrics: {
    title: { zh: "VC 关注", en: "VCs watch" },
    items: [
      { zh: "市场是否真实", en: "Is the market real" },
      { zh: "增长是否可放大", en: "Is growth scalable" },
      { zh: "商业模型是否健康", en: "Is the model healthy" },
    ],
  },
  ctas: [
    { label: { zh: "查看 Demo Dashboard", en: "See Demo Dashboard" }, href: "/apply" },
    { label: { zh: "申请 7\u201314 天测试方案", en: "Apply for the 7\u201314 day test" }, href: "/apply" },
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
  eyebrow: { zh: "谁适合做，怎么开始", en: "Who it's for · How to start" },
  /* 飞书第 7 屏标题 */
  heading: {
    zh: "让我们帮你测一轮：海外社媒里有没有正在找你的人",
    en: "Let us run one round: see if anyone on global social is already looking for you",
  },
  /* 飞书第 7 屏正文 + 最终 CTA 正文（合并表述） */
  body: {
    zh: "提交你的产品官网、目标市场和竞品链接。我们会先判断你的产品是否适合 SocialRouter，再给你建议测试方案。如果适合测试，团队会通过微信或 WhatsApp 联系你。",
    en: "Submit your product website, target market and competitor links. We'll first evaluate whether your product fits SocialRouter, then propose a recommended test plan. If it's a fit, our team will reach out via WeChat or WhatsApp.",
  },
  primary: { zh: "提交，获取测试建议", en: "Submit for testing advice" },
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
