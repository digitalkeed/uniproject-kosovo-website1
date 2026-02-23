"use client";

import { Section } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Auditim i objektit",
    description: "Sektori, fluksi, risku – kuptojmë nevojat tuaja.",
  },
  {
    title: "Plan pune & SLA",
    description: "Frekuenca, ekipe, furnizime – marrëveshje e qartë.",
  },
  {
    title: "Ekzekutim me supervizim",
    description: "Implementim me ndjekje të vazhdueshme.",
  },
  {
    title: "Kontroll cilësie + raportim",
    description: "Sistem dixhital për transparencë dhe përmirësim.",
  },
];

export function Process() {
  return (
    <Section id="si-punojme" className="bg-gradient-to-b from-white to-muted/30">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Si punojmë
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Nga vlerësimi deri te raportimi – një proces i qartë dhe i matshëm.
        </p>
      </motion.div>
      <ProcessTimeline steps={steps} />
    </Section>
  );
}
