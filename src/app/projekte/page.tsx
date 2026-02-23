import { Section } from "@/components/ui/Section";
import Link from "next/link";

const projects = [
  { slug: "eulex", name: "EULEX" },
  { slug: "osce", name: "OSCE" },
  { slug: "kuvendi", name: "Kuvendi" },
];

export default function ProjektePage() {
  return (
    <Section className="py-16">
      <h1 className="text-3xl font-bold text-foreground">
        Projekte & Referenca
      </h1>
      <p className="mt-2 text-muted-foreground">
        Projekte me afat dhe case studies.
      </p>
      <ul className="mt-8 space-y-4">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projekte/${p.slug}`}
              className="text-primary hover:underline font-medium"
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
