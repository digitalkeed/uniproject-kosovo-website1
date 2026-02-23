import { Section } from "@/components/ui/Section";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return (
    <Section className="py-16">
      <Link href="/sektoret" className="text-sm text-primary hover:underline">
        ← Sektorët
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-muted-foreground">
        Përmbajtja e këtij sektori do të shtohet këtu.
      </p>
    </Section>
  );
}
