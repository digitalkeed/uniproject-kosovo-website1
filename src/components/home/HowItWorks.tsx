"use client";

import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Zgjidhni shërbimin",
    description: "Na tregoni çfarë ju duhet – pastrim, facility management apo shërbime të specializuara.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Caktoni takimin",
    description: "Vlerësojmë objektin dhe ju dërgojmë një ofertë të qartë, pa surpriza.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Ne kujdesemi për gjithçka",
    description: "Ekipi ynë fillon punën me supervizim dhe raportim të vazhdueshëm.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-gradient-to-b from-muted/40 to-muted/60">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Si funksionon
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Tre hapa të thjeshtë – nga kërkesa juaj deri te rezultati.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div className="h-full rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Hapi {s.step}
                  </span>
                  <h3 className="mt-0.5 text-lg font-semibold text-foreground">{s.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed pl-0 md:pl-16">
                {s.description}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div
                className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 -translate-y-1/2 z-0"
                aria-hidden
              />
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
        >
          Kerko oferte
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
