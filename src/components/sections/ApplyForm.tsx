"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Loader2,
  Sparkles,
  Lock,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { FORM } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ApplyForm() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [productType, setProductType] = useState<string>("AI SaaS");
  const [funding, setFunding] = useState<string>("Seed");
  const [markets, setMarkets] = useState<string[]>(["United States"]);
  const [goals, setGoals] = useState<string[]>([]);
  const [channels, setChannels] = useState<string[]>([]);

  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    value: string,
  ) => {
    setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      company: String(fd.get("company") ?? ""),
      website: String(fd.get("website") ?? ""),
      productType,
      funding,
      markets,
      competitors: String(fd.get("competitors") ?? ""),
      goals,
      channels,
      contact: String(fd.get("contact") ?? ""),
      note: String(fd.get("note") ?? ""),
      lang,
      hp: String(fd.get("hp") ?? ""),
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        message?: string;
        hint?: string;
      };

      if (res.ok && json.ok) {
        setStatus("success");
        return;
      }

      const fallback =
        lang === "zh"
          ? "提交失败，请稍后再试或直接联系我们。"
          : "Submission failed. Please try again or contact us directly.";
      setStatus("error");
      setErrorMsg(json.message ?? json.hint ?? json.error ?? fallback);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        lang === "zh"
          ? `网络异常：${(err as Error).message}`
          : `Network error: ${(err as Error).message}`,
      );
    }
  }

  return (
    <section id="apply" className="relative scroll-mt-24 py-24 sm:py-32">
      {/* Aurora glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="sr-aurora opacity-70" />
      </div>
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left: copy + evaluates */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-sr-line-2 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sr-text-2">
              <span className="size-1.5 rounded-full bg-sr-orange sr-pulse" />
              {t(FORM.eyebrow)}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-sr-text sm:text-4xl">
              <span className="sr-gradient-text">{t(FORM.heading)}</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-sr-text-2">{t(FORM.body)}</p>

            <div className="mt-8 rounded-2xl border border-sr-line bg-sr-bg-2 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sr-muted">
                {t(FORM.evaluatesTitle)}
              </p>
              <ul className="mt-3 space-y-2.5">
                {FORM.evaluates.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-sr-text-2"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sr-orange to-sr-red text-[11px] font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{t(e)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-sr-muted">
              <Lock className="size-3.5" /> {lang === "zh" ? "信息仅用于评估，不对外披露" : "Information is for evaluation only — never shared"}
            </p>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-b from-sr-orange/15 via-sr-red/10 to-transparent blur-2xl"
              />
              <div className="sr-glass-strong sr-highlight-top relative overflow-hidden rounded-2xl p-6 sm:p-8 shadow-[0_30px_120px_-30px_rgba(204,10,13,0.45)]">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-sr-line pb-5">
                  <span className="grid size-10 place-items-center rounded-xl border border-sr-line-2 bg-gradient-to-br from-sr-orange/20 to-sr-red/20 text-sr-orange">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-sr-text">
                      {t(FORM.formTitle)}
                    </h3>
                    <p className="text-xs text-sr-text-2">{t(FORM.formSub)}</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {status !== "success" ? (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      <Field label={t(FORM.fields.company)} required>
                        <Input name="company" required />
                      </Field>
                      <Field label={t(FORM.fields.website)} required>
                        <Input name="website" type="url" placeholder="https://" required />
                      </Field>

                      <Field label={t(FORM.fields.productType)} className="sm:col-span-1">
                        <ChipGroup
                          options={FORM.productTypes.map((o) => ({ value: o, label: o }))}
                          value={[productType]}
                          onToggle={(v) => setProductType(v)}
                          single
                        />
                      </Field>
                      <Field label={t(FORM.fields.funding)} className="sm:col-span-1">
                        <ChipGroup
                          options={FORM.fundingStages.map((o) => ({ value: o, label: o }))}
                          value={[funding]}
                          onToggle={(v) => setFunding(v)}
                          single
                        />
                      </Field>

                      <Field label={t(FORM.fields.market)} className="sm:col-span-2">
                        <ChipGroup
                          options={[
                            { value: "United States", label: "US" },
                            { value: "Europe", label: "Europe" },
                            { value: "UK", label: "UK" },
                            { value: "Southeast Asia", label: "SEA" },
                            { value: "Japan", label: "JP" },
                            { value: "MENA", label: "MENA" },
                            { value: "LATAM", label: "LATAM" },
                            { value: "Global", label: "Global" },
                          ]}
                          value={markets}
                          onToggle={(v) => toggle(markets, setMarkets, v)}
                        />
                      </Field>

                      <Field label={t(FORM.fields.competitors)} className="sm:col-span-2">
                        <Textarea
                          name="competitors"
                          rows={2}
                          placeholder={lang === "zh" ? "1 行 1 个，最多 5 个链接" : "One per line, up to 5"}
                        />
                      </Field>

                      <Field label={t(FORM.fields.growthGoal)} className="sm:col-span-2">
                        <ChipGroup
                          options={FORM.growthGoals.map((o) => ({ value: o.en, label: t(o) }))}
                          value={goals}
                          onToggle={(v) => toggle(goals, setGoals, v)}
                        />
                      </Field>

                      <Field label={t(FORM.fields.channels)} className="sm:col-span-2">
                        <ChipGroup
                          options={FORM.acquisitionChannels.map((o) => ({ value: o, label: o }))}
                          value={channels}
                          onToggle={(v) => toggle(channels, setChannels, v)}
                        />
                      </Field>

                      <Field label={t(FORM.fields.contact)} required className="sm:col-span-2">
                        <Input
                          name="contact"
                          placeholder={lang === "zh" ? "微信 / WhatsApp / 邮箱 任意一个" : "WeChat / WhatsApp / Email"}
                          required
                        />
                      </Field>

                      <Field label={t(FORM.fields.note)} className="sm:col-span-2">
                        <Textarea name="note" rows={3} />
                      </Field>

                      {/* Honeypot — visually hidden, bots fill it, real users don't. */}
                      <div
                        aria-hidden
                        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
                      >
                        <label>
                          Leave this field empty
                          <input
                            type="text"
                            name="hp"
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </label>
                      </div>

                      {status === "error" && errorMsg && (
                        <div className="sm:col-span-2 flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2.5 text-xs text-red-200">
                          <AlertTriangle className="mt-0.5 size-3.5 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div className="sm:col-span-2 flex flex-col gap-3">
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="sr-btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium text-white disabled:opacity-70"
                        >
                          {status === "submitting" ? (
                            <Loader2 className="size-4 animate-spin" />
                          ) : (
                            <ArrowRight className="size-4" />
                          )}
                          {t(FORM.submit)}
                        </button>
                        <p className="text-xs text-sr-muted">{t(FORM.footnote)}</p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-8 text-center"
                    >
                      <div className="mx-auto grid size-14 place-items-center rounded-full bg-gradient-to-br from-sr-orange/30 to-sr-red/30 text-sr-orange">
                        <CheckCircle2 className="size-7" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-sr-text">
                        {t(FORM.successTitle)}
                      </h3>
                      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-sr-text-2">
                        {t(FORM.successBody)}
                      </p>
                      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <LinkButton
                          href="#"
                          variant="ghost"
                          size="md"
                        >
                          {t(FORM.backHome)}
                        </LinkButton>
                        <LinkButton
                          href="#"
                          variant="primary"
                          size="md"
                          iconLeft={<MessageCircle className="size-4" />}
                        >
                          {t(FORM.successContact)}
                        </LinkButton>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------- form atoms ----------------- */

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-xs font-medium text-sr-text-2">
        {label}
        {required && <span className="ml-1 text-sr-orange">*</span>}
      </span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-11 rounded-lg border border-sr-line bg-white/[0.02] px-3.5 text-sm text-sr-text placeholder:text-sr-muted transition focus:border-sr-orange/60 focus:outline-none focus:ring-2 focus:ring-sr-orange/30",
        props.className,
      )}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "rounded-lg border border-sr-line bg-white/[0.02] px-3.5 py-3 text-sm text-sr-text placeholder:text-sr-muted transition focus:border-sr-orange/60 focus:outline-none focus:ring-2 focus:ring-sr-orange/30",
        props.className,
      )}
    />
  );
}

function ChipGroup({
  options,
  value,
  onToggle,
  single,
}: {
  options: { value: string; label: string }[];
  value: string[];
  onToggle: (v: string) => void;
  single?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const active = value.includes(o.value);
        return (
          <button
            type="button"
            key={o.value}
            onClick={() => onToggle(o.value)}
            className={cn(
              "inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium transition",
              active
                ? "border-transparent bg-gradient-to-br from-sr-orange to-sr-red text-white shadow-[0_4px_18px_-6px_rgba(204,10,13,0.6)]"
                : "border-sr-line bg-white/[0.03] text-sr-text-2 hover:border-sr-line-2 hover:text-sr-text",
            )}
            aria-pressed={active}
          >
            {o.label}
          </button>
        );
      })}
      {single && <span className="sr-only">single-select</span>}
    </div>
  );
}
