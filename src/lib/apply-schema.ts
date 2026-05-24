/**
 * Pure-TS validation for the SocialRouter "Apply for Signal Test" form.
 * Kept dependency-free so it works the same on the API route and the client.
 */

export const PRODUCT_TYPES = [
  "AI Agent",
  "AI SaaS",
  "AI Tool",
  "AI Infra",
  "Other",
] as const;

export const FUNDING_STAGES = [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B+",
  "Not disclosed",
] as const;

export const GROWTH_GOALS = [
  "Website traffic",
  "Waitlist",
  "Demo requests",
  "Trial users",
  "Community members",
  "User feedback",
  "Market validation",
] as const;

export const ACQUISITION_CHANNELS = [
  "SEO",
  "Paid Ads",
  "Founder-led X / LinkedIn",
  "TikTok / Instagram",
  "YouTube",
  "Product Hunt",
  "Community / Discord",
  "Other",
] as const;

export type ApplyPayload = {
  company: string;
  website: string;
  productType: (typeof PRODUCT_TYPES)[number];
  funding: (typeof FUNDING_STAGES)[number];
  markets: string[];
  competitors?: string;
  goals: string[];
  channels: string[];
  contact: string;
  note?: string;
  lang?: "zh" | "en";
  /** Honeypot field — bots tend to fill every input. Real users leave empty. */
  hp?: string;
};

export type ValidationError = { field: keyof ApplyPayload | "_"; message: string };

export function validateApplyPayload(raw: unknown): {
  ok: true;
  data: ApplyPayload;
} | {
  ok: false;
  errors: ValidationError[];
} {
  const errors: ValidationError[] = [];
  const r = raw as Partial<ApplyPayload> | null | undefined;
  if (!r || typeof r !== "object") {
    return { ok: false, errors: [{ field: "_", message: "Empty body" }] };
  }

  const company = trim(r.company);
  if (!company) errors.push({ field: "company", message: "公司名称必填" });
  else if (company.length > 120) errors.push({ field: "company", message: "公司名称过长" });

  const website = trim(r.website);
  if (!website) errors.push({ field: "website", message: "官网必填" });
  else if (!isUrl(website)) errors.push({ field: "website", message: "官网格式不正确" });

  const productType = trim(r.productType);
  if (!PRODUCT_TYPES.includes(productType as (typeof PRODUCT_TYPES)[number])) {
    errors.push({ field: "productType", message: "产品类型不在选项内" });
  }

  const funding = trim(r.funding);
  if (!FUNDING_STAGES.includes(funding as (typeof FUNDING_STAGES)[number])) {
    errors.push({ field: "funding", message: "融资阶段不在选项内" });
  }

  const markets = arr(r.markets);
  if (markets.length > 20) errors.push({ field: "markets", message: "目标市场过多" });

  const goals = arr(r.goals);
  const channels = arr(r.channels);

  const contact = trim(r.contact);
  if (!contact) errors.push({ field: "contact", message: "联系方式必填" });
  else if (contact.length > 200) errors.push({ field: "contact", message: "联系方式过长" });

  const competitors = trim(r.competitors);
  if (competitors && competitors.length > 2000)
    errors.push({ field: "competitors", message: "竞品链接过长" });

  const note = trim(r.note);
  if (note && note.length > 2000)
    errors.push({ field: "note", message: "备注过长" });

  const lang =
    r.lang === "en" || r.lang === "zh" ? r.lang : ("zh" as const);

  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    data: {
      company,
      website,
      productType: productType as (typeof PRODUCT_TYPES)[number],
      funding: funding as (typeof FUNDING_STAGES)[number],
      markets,
      competitors: competitors || undefined,
      goals,
      channels,
      contact,
      note: note || undefined,
      lang,
      hp: typeof r.hp === "string" ? r.hp : undefined,
    },
  };
}

function trim(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.trim();
}
function arr(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x) => typeof x === "string" && x.trim() !== "");
}
function isUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}
