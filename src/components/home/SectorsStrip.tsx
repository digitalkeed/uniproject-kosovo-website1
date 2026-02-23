"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { homeSectionImages } from "@/content/images";

const sectors = [
  {
    href: "/sektoret/banka",
    label: "Banka & rrjet filialesh",
    image: homeSectionImages.sectorsStrip.banka,
    imageAlt: "Banka dhe rrjet filialesh",
  },
  {
    href: "/sektoret/qendra-tregtare",
    label: "Qendra tregtare",
    image: homeSectionImages.sectorsStrip.qendraTregtare,
    imageAlt: "Qendra tregtare",
  },
  {
    href: "/sektoret/publike",
    label: "Institucione publike / ndërkombëtare",
    image: homeSectionImages.sectorsStrip.publike,
    imageAlt: "Institucione publike",
  },
  {
    href: "/sektoret/shendetesi-arsim",
    label: "Shëndetësi & arsim",
    image: homeSectionImages.sectorsStrip.shendetesiArsim,
    imageAlt: "Shëndetësi dhe arsim",
  },
  {
    href: "/sektoret/industri",
    label: "Industri & prodhim",
    image: homeSectionImages.sectorsStrip.industri,
    imageAlt: "Industri dhe prodhim",
  },
];

export function SectorsStrip() {
  return (
    <Section className="bg-gradient-to-b from-white to-muted/40">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Sektorët
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Shërbejmë në të gjithë Kosovën – nga banka tek industria.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s, i) => (
          <motion.div
            key={s.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <Link
              href={s.href}
              className="group block rounded-[1.25rem] border border-slate-100 bg-white shadow-[var(--shadow-card)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/20 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 flex items-center justify-between gap-3">
                <span className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                  {s.label}
                </span>
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
