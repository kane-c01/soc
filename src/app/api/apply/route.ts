import { NextResponse, type NextRequest } from "next/server";
import { feishuEnvCheck, sendChatNotification } from "@/lib/feishu";
import { validateApplyPayload, type ApplyPayload } from "@/lib/apply-schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* -----------------------------------------------------------------
 * Tiny in-memory rate limiter (per-IP, 5 requests / minute).
 * ----------------------------------------------------------------- */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const buckets = new Map<string, number[]>();
function rateLimit(ip: string): boolean {
  const now = Date.now();
  const list = (buckets.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (list.length >= RATE_LIMIT_MAX) {
    buckets.set(ip, list);
    return false;
  }
  list.push(now);
  buckets.set(ip, list);
  return true;
}

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Look up a human-readable region for the IP.
 *
 * Order of preference:
 *  1. Vercel edge headers (`x-vercel-ip-city|country|country-region`) —
 *     free, no network round-trip, available once deployed to Vercel.
 *  2. Public `ipapi.co` lookup over HTTPS — free 1000/day, plenty for a
 *     marketing form. Short timeout so submission never blocks on this.
 *  3. Empty string for private/loopback IPs.
 */
async function lookupRegion(
  req: NextRequest,
  ip: string,
): Promise<string> {
  const vCountry = req.headers.get("x-vercel-ip-country");
  const vCity = req.headers.get("x-vercel-ip-city");
  const vRegion = req.headers.get("x-vercel-ip-country-region");
  if (vCountry || vCity || vRegion) {
    const parts = [
      vCity ? safeDecode(vCity) : "",
      vRegion ? safeDecode(vRegion) : "",
      vCountry ? safeDecode(vCountry) : "",
    ].filter(Boolean);
    return parts.join(", ");
  }

  if (!ip || ip === "unknown" || isPrivateIp(ip)) return "";

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: controller.signal,
      cache: "no-store",
      headers: { accept: "application/json" },
    });
    clearTimeout(timer);
    if (!res.ok) return "";
    const j = (await res.json()) as {
      city?: string;
      region?: string;
      country_name?: string;
      country?: string;
      error?: boolean;
    };
    if (j.error) return "";
    return [j.city, j.region, j.country_name ?? j.country]
      .filter(Boolean)
      .join(", ");
  } catch {
    return "";
  }
}

function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

function isPrivateIp(ip: string): boolean {
  return (
    ip === "::1" ||
    ip === "0.0.0.0" ||
    ip.startsWith("127.") ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip) ||
    ip.startsWith("fe80:") ||
    ip.startsWith("fc00:") ||
    ip.startsWith("fd00:")
  );
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests, please wait a minute." },
      { status: 429 },
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const result = validateApplyPayload(raw);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "validation_failed", errors: result.errors },
      { status: 400 },
    );
  }
  const data = result.data;

  /* ---------------- Honeypot — silently ack and drop ---------------- */
  if (data.hp && data.hp.trim() !== "") {
    return NextResponse.json({ ok: true, accepted: false, reason: "spam" });
  }

  /* ---------------- Env / config sanity ---------------- */
  const env = feishuEnvCheck();
  if (!env.ok) {
    console.error("[api/apply] Feishu env missing:", env.missing.join(","));
    return NextResponse.json(
      {
        ok: false,
        error: "server_unconfigured",
        missing: env.missing,
        hint:
          "Set FEISHU_NOTIFY_WEBHOOK in .env.local (your group's custom-bot webhook URL).",
      },
      { status: 503 },
    );
  }

  /* ---------------- Build card + send to group chat ---------------- */
  const region = await lookupRegion(req, ip);

  const fields = [
    { tag: "🏢 公司名称 / Company", text: data.company },
    { tag: "🌐 产品官网 / Website", text: data.website },
    {
      tag: "🧠 产品类型 + 融资 / Product · Stage",
      text: `${data.productType}  ·  ${data.funding}`,
    },
    {
      tag: "🌎 目标市场 / Markets",
      text: data.markets.join(", ") || "—",
    },
    {
      tag: "🎯 增长目标 / Goals",
      text: data.goals.join(", ") || "—",
    },
    {
      tag: "📣 当前渠道 / Channels",
      text: data.channels.join(", ") || "—",
    },
    {
      tag: "🥷 竞品链接 / Competitors",
      text: truncate(data.competitors || "—", 600),
    },
    { tag: "📞 联系方式 / Contact", text: data.contact },
    {
      tag: "📝 备注 / Note",
      text: truncate(data.note || "—", 600),
    },
    {
      tag: "📍 IP · 地区 / Origin",
      text: region ? `${ip}\n${region}` : ip,
    },
  ];

  const sent = await sendChatNotification(
    "🔥 新申请 · SocialRouter Signal Test",
    fields,
  );

  if (!sent.ok) {
    console.error("[api/apply] feishu webhook failed:", sent.error);
    return NextResponse.json(
      {
        ok: false,
        error: "feishu_send_failed",
        message: sent.error,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n) + "…" : s;
}

// Re-export the ApplyPayload type for IDE consumers that import from this file.
export type { ApplyPayload };
