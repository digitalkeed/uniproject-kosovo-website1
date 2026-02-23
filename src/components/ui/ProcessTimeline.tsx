"use client";

import { motion } from "framer-motion";

type Step = { title: string; description: string };

type ProcessTimelineProps = {
  steps: Step[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-sm">
                {i + 1}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
