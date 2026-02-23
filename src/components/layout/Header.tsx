"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Ballina" },
  { href: "/sherbimet", label: "Shërbimet" },
  { href: "/sektoret", label: "Sektorët" },
  { href: "/si-operojme", label: "Si operojmë" },
  { href: "/teknologjia", label: "Teknologjia" },
  { href: "/standardet", label: "Standarde & Siguria" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 flex items-center" aria-label="UNI PROJECT – Ballina">
          <Image
            src="/logo.svg"
            alt="UNI PROJECT"
            width={140}
            height={62}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Kryesor">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+38344123456"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            044 123 456
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Kerko oferte
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Hap menynë"
        >
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobil">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-foreground hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 py-2 text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              Kerko oferte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
