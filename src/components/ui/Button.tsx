import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";
  className?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3",
  ghost:
    "text-foreground hover:bg-muted px-6 py-3",
  inverse:
    "bg-white text-primary hover:bg-white/90 px-6 py-3",
  outlineInverse:
    "border-2 border-white text-white bg-transparent hover:bg-white/10 px-6 py-3",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
