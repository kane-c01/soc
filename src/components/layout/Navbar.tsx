"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, toggle, t } = useLang();
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

  /* Close menu when the viewport reaches lg (links return). */
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

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sr-text-2 transition-colors hover:text-sr-text"
            >
              {link[lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="hidden h-9 items-center gap-1 rounded-lg border border-sr-line-2 bg-white px-3 text-xs font-medium text-sr-text-2 transition hover:bg-sr-bg-3 hover:text-sr-text md:inline-flex"
            aria-label="Toggle language"
          >
            <span className={cn(lang === "zh" && "text-sr-text")}>中</span>
            <span className="text-sr-muted">/</span>
            <span className={cn(lang === "en" && "text-sr-text")}>EN</span>
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
            // Clicking the empty backdrop closes the menu
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <Container className="flex flex-col gap-1 py-6">
            {NAV.links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-sr-text-2 transition hover:bg-white/[0.04] hover:text-sr-text"
              >
                {link[lang]}
              </motion.a>
            ))}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={toggle}
                className="inline-flex h-11 flex-1 items-center justify-center gap-1 rounded-lg border border-sr-line-2 px-3 text-sm font-medium"
              >
                <span className={cn(lang === "zh" && "text-sr-text")}>中文</span>
                <span className="text-sr-muted mx-1">/</span>
                <span className={cn(lang === "en" && "text-sr-text")}>English</span>
              </button>
              <LinkButton
                href="/apply"
                variant="primary"
                size="md"
                className="h-11 flex-[1.5]"
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
