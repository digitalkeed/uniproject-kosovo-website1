"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function TechnologyBlurb() {
  return (
    <Section className="bg-gradient-to-b from-muted/30 to-white">
      <motion.div
        className="max-w-2xl mx-auto rounded-2xl border border-border bg-white p-8 sm:p-10 text-center shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Teknologjia & Inovacioni
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Evidencojmë prezencën dhe performancën në kohë reale, me aplikacion
          mobil dhe logjikë automatike të orarit.
        </p>
        <Button href="/teknologjia" variant="secondary" className="mt-6">
          Mëso më shumë
        </Button>
      </motion.div>
    </Section>
  );
}
