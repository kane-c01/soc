"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { FAQ_CTA } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function FAQFooterCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-sr-line bg-sr-bg-3/45 p-8 text-center sm:p-10"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-sr-text sm:text-3xl">
            {t(FAQ_CTA.heading)}
          </h3>
          <p className="max-w-lg text-[15px] leading-relaxed text-sr-text-2">
            {t(FAQ_CTA.body)}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <LinkButton
              href="/apply"
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="size-4" />}
            >
              {t(FAQ_CTA.primary)}
            </LinkButton>
            <LinkButton
              href="/"
              variant="ghost"
              size="md"
              iconLeft={<Home className="size-4" />}
            >
              {t(FAQ_CTA.secondary)}
            </LinkButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
