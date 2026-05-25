"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  Compass,
  Globe,
  Layers,
  Menu,
  MessageSquareText,
  Route,
  ShieldCheck,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import { NAV, type NavItem, type NavLink } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * 顶部导航
 * - 桌面端 (lg+)：5 个一级菜单，其中「方法 / 客户」用 hover dropdown 展开二级链接
 * - 移动端 (< lg)：抽屉式折叠菜单，group 直接以 section title 形式展开，所有子链接缩进显示
 *
 * dropdown 视觉：每个子链接左侧配 lucide icon（与卡片 icon 风格一致：圆角方块 + 红色），
 * hover 时方块反转为红底白字，强化"可点击"感受
 */

/* 子链接 href → lucide icon 映射（仅在 Navbar 内使用，不污染 content.ts 纯数据） */
type IconCmp = React.ComponentType<{ className?: string }>;
const NAV_ICONS: Record<string, IconCmp> = {
  "/#mechanism": Compass,
  "/#review": ShieldCheck,
  "/#examples": MessageSquareText,
  "/#routing": Route,
  "/#pain": Layers,
  "/#vc": Briefcase,
};
export function Navbar() {
  const { lang, t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the mobile menu is open so the user never ends
     up at a "partial" scroll position after closing it. Persist & restore
     the scrollY so closing the menu returns the user exactly where they
     started (instead of dropping them to the top). */
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const original = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = original.position;
      document.body.style.top = original.top;
      document.body.style.width = original.width;
      document.body.style.overflow = original.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  /* Close mobile menu when the viewport reaches lg (desktop links return). */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-sr-line bg-sr-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-sr-bg/55 backdrop-blur-md",
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="SocialRouter">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.items.map((item, idx) =>
              item.type === "link" ? (
                <a
                  key={`nav-link-${idx}-${item.href}`}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-sr-text-2 transition-colors hover:bg-sr-bg-3/60 hover:text-sr-text"
                >
                  {item[lang]}
                </a>
              ) : (
                <NavDropdown key={`nav-group-${idx}-${item.en}`} item={item} lang={lang} />
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {/* 中英切换 — 桌面端 pill 风格 */}
            <button
              type="button"
              onClick={toggle}
              aria-label={lang === "zh" ? "Switch to English" : "切换为中文"}
              title={lang === "zh" ? "Switch to English" : "切换为中文"}
              className="hidden h-8 items-center gap-1 rounded-full border border-sr-line bg-white px-2.5 text-[11.5px] font-semibold text-sr-text-2 transition hover:border-sr-line-2 hover:text-sr-text md:inline-flex"
            >
              <Globe className="size-3.5 text-sr-red" />
              <span
                className={cn(
                  lang === "zh" ? "text-sr-text" : "text-sr-muted",
                )}
              >
                中
              </span>
              <span className="text-sr-line-2">/</span>
              <span
                className={cn(
                  lang === "en" ? "text-sr-text" : "text-sr-muted",
                )}
              >
                EN
              </span>
            </button>
            <LinkButton
              href="/apply"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              {t(NAV.cta)}
            </LinkButton>
            <button
              className="grid size-9 place-items-center rounded-lg border border-sr-line-2 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile menu — rendered as a SIBLING of the header (not inside) so the
        header's framer-motion transform doesn't trap our `position: fixed`
        drawer inside its containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto border-t border-sr-line bg-sr-bg/95 backdrop-blur-2xl lg:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV.items.map((item, i) => (
                <MobileNavItem
                  key={`m-nav-${i}-${item.en}`}
                  item={item}
                  lang={lang}
                  index={i}
                  onNavigate={() => setOpen(false)}
                />
              ))}
              <div className="mt-4 flex items-center gap-2">
                {/* 中英切换 — 移动端按钮 */}
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={lang === "zh" ? "Switch to English" : "切换为中文"}
                  className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-lg border border-sr-line bg-white px-3 text-sm font-medium text-sr-text-2 transition hover:border-sr-line-2 hover:text-sr-text"
                >
                  <Globe className="size-4 text-sr-red" />
                  <span className={cn(lang === "zh" ? "text-sr-text" : "text-sr-muted")}>
                    中
                  </span>
                  <span className="text-sr-line-2">/</span>
                  <span className={cn(lang === "en" ? "text-sr-text" : "text-sr-muted")}>
                    EN
                  </span>
                </button>
                <LinkButton
                  href="/apply"
                  variant="primary"
                  size="md"
                  className="h-11 flex-1"
                  onClick={() => setOpen(false)}
                >
                  {t(NAV.cta)}
                </LinkButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
 * 桌面端 dropdown：hover 触发，离开 120ms 延迟关闭防止抖动
 * ============================================================ */

type GroupItem = Extract<NavItem, { type: "group" }>;

function NavDropdown({ item, lang }: { item: GroupItem; lang: "zh" | "en" }) {
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors",
          open
            ? "bg-sr-bg-3/60 text-sr-text"
            : "text-sr-text-2 hover:bg-sr-bg-3/60 hover:text-sr-text",
        )}
        onClick={() => setOpen((v) => !v)}
      >
        {item[lang]}
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute left-0 top-full z-50 mt-2 w-[360px] overflow-hidden rounded-xl border border-sr-line bg-white p-1.5 shadow-[0_12px_40px_-8px_rgba(33,19,15,0.18)]"
          >
            {item.links.map((link) => (
              <DropdownLink key={link.href} link={link} lang={lang} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownLink({ link, lang }: { link: NavLink; lang: "zh" | "en" }) {
  const desc = lang === "zh" ? link.descZh : link.descEn;
  const Icon = NAV_ICONS[link.href];
  return (
    <a
      role="menuitem"
      href={link.href}
      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-sr-bg-3/60"
    >
      {Icon && (
        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-sr-line bg-sr-bg-3/40 text-sr-red transition-all duration-200 group-hover:border-sr-red/30 group-hover:bg-sr-red group-hover:text-white">
          <Icon className="size-4" />
        </span>
      )}
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[13.5px] font-medium text-sr-text">{link[lang]}</span>
        {desc && (
          <span className="text-[12px] leading-snug text-sr-muted group-hover:text-sr-text-2">
            {desc}
          </span>
        )}
      </div>
    </a>
  );
}

/* ============================================================
 * 移动端 nav item：link 直接渲染；group 显示为 section header + 缩进子链接
 * ============================================================ */

function MobileNavItem({
  item,
  lang,
  index,
  onNavigate,
}: {
  item: NavItem;
  lang: "zh" | "en";
  index: number;
  onNavigate: () => void;
}) {
  if (item.type === "link") {
    return (
      <motion.a
        href={item.href}
        onClick={onNavigate}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: index * 0.04 }}
        className="rounded-lg px-3 py-3.5 text-base font-medium text-sr-text transition hover:bg-sr-bg-3/60"
      >
        {item[lang]}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="mt-2 first:mt-0"
    >
      <div className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sr-muted">
        {item[lang]}
      </div>
      <div className="flex flex-col">
        {item.links.map((link) => {
          const desc = lang === "zh" ? link.descZh : link.descEn;
          const Icon = NAV_ICONS[link.href];
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-lg px-3 py-3 transition hover:bg-sr-bg-3/60"
            >
              {Icon && (
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-sr-line bg-sr-bg-3/40 text-sr-red">
                  <Icon className="size-3.5" />
                </span>
              )}
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[15px] font-medium text-sr-text">{link[lang]}</span>
                {desc && <span className="text-[12.5px] leading-snug text-sr-muted">{desc}</span>}
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
