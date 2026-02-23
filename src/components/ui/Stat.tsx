"use client";

import { motion } from "framer-motion";

type StatProps = {
  value: string;
  label: string;
};

export function Stat({ value, label }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl font-bold text-primary">
        {value}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground mt-1">
        {label}
      </div>
    </motion.div>
  );
}
