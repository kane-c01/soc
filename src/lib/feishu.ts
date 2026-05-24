/**
 * Feishu (open.feishu.cn) integration — group-chat custom-bot only.
 *
 * The website's application form posts each submission as a rich
 * interactive card to a Feishu group chat. No custom app, no Bitable
 * setup, no app permissions — just a webhook URL pasted from your group's
 * "群机器人 → 自定义机器人" panel.
 *
 * Reads env vars:
 *  - FEISHU_NOTIFY_WEBHOOK  (required, the bot's webhook URL)
 *  - FEISHU_NOTIFY_SECRET   (optional, sign-verification secret)
 */

import { createHmac } from "node:crypto";

export type CardField = { tag: string; text: string };

export function feishuEnvCheck(): { ok: boolean; missing: string[] } {
  const required = ["FEISHU_NOTIFY_WEBHOOK"];
  const missing = required.filter((k) => !process.env[k]);
  return { ok: missing.length === 0, missing };
}

/**
 * POST an interactive card to the configured Feishu group-chat bot.
 *
 * Card layout:
 *   ┌──────────────────────────────────────┐
 *   │  🔥 New SocialRouter application      │  ← red header
 *   ├──────────────────────────────────────┤
 *   │  Company:  Acme AI                    │
 *   │  Website:  https://acme.ai            │
 *   │  ...                                  │
 *   ├──────────────────────────────────────┤
 *   │  [ Open website ]                     │  ← action button (optional)
 *   └──────────────────────────────────────┘
 */
export async function sendChatNotification(
  title: string,
  fields: CardField[],
  link?: { text: string; url: string },
): Promise<{ ok: true; raw?: unknown } | { ok: false; error: string }> {
  const webhook = process.env.FEISHU_NOTIFY_WEBHOOK;
  if (!webhook) return { ok: false, error: "FEISHU_NOTIFY_WEBHOOK missing" };

  const secret = process.env.FEISHU_NOTIFY_SECRET;

  // Build card body
  const elements: unknown[] = [];
  for (const f of fields) {
    elements.push({
      tag: "div",
      text: {
        tag: "lark_md",
        content: `**${f.tag}**\n${escapeMd(f.text || "—")}`,
      },
    });
  }
  if (link) {
    elements.push({
      tag: "action",
      actions: [
        {
          tag: "button",
          text: { tag: "plain_text", content: link.text },
          url: link.url,
          type: "primary",
        },
      ],
    });
  }

  const card = {
    config: { wide_screen_mode: true },
    header: {
      template: "red",
      title: { tag: "plain_text", content: title },
    },
    elements,
  };

  const payload: Record<string, unknown> = {
    msg_type: "interactive",
    card,
  };

  // Optional sign verification — see https://open.feishu.cn/document/client-docs/bot-v1/add-custom-bot
  if (secret) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const sign = createHmac("sha256", `${timestamp}\n${secret}`)
      .update("")
      .digest("base64");
    payload.timestamp = timestamp;
    payload.sign = sign;
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const text = await res.text();
    let raw: unknown;
    try {
      raw = text ? JSON.parse(text) : {};
    } catch {
      raw = text;
    }
    // Feishu chat-bot returns { StatusCode: 0, ... } on success.
    if (
      !res.ok ||
      (typeof raw === "object" &&
        raw &&
        "StatusCode" in raw &&
        (raw as { StatusCode: number }).StatusCode !== 0)
    ) {
      return {
        ok: false,
        error: `HTTP ${res.status} ${JSON.stringify(raw).slice(0, 300)}`,
      };
    }
    return { ok: true, raw };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}

function escapeMd(s: string): string {
  // Lark Markdown — escape underscores / asterisks that would otherwise
  // be interpreted as formatting.
  return s.replace(/([_*])/g, "\\$1");
}
