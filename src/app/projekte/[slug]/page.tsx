import { Section } from "@/components/ui/Section";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <Section className="py-16">
      <Link href="/projekte" className="text-sm text-primary hover:underline">
        ← Projekte
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{name}</h1>
      <p className="mt-4 text-muted-foreground">
        Case study: problem → zgjidhje → proces → rezultat. Foto do të shtohen.
      </p>
    </Section>
  );
}
