"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  href?: string;
  variant?: "default" | "service";
  className?: string;
};

export function Card({
  children,
  href,
  variant = "default",
  className = "",
}: CardProps) {
  const Wrapper = href ? Link : "div";
  const isService = variant === "service";

  return (
    <motion.div
      whileHover={isService ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={className}
    >
      <Wrapper
        href={href ?? "#"}
        className={`
          block rounded-xl border border-border bg-white p-6 shadow-sm
          transition-shadow duration-200
          ${isService ? "hover:shadow-md hover:ring-2 hover:ring-primary/20" : ""}
          ${!href ? "pointer-events-none" : ""}
        `}
      >
        {children}
      </Wrapper>
    </motion.div>
  );
}
