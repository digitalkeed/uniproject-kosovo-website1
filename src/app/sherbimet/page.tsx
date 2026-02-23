import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

const services = [
  { slug: "pastrim-profesional", title: "Pastrim profesional", description: "Pastrim ditor, industrial, pas ndërtimit, qendra tregtare." },
  { slug: "facility-management", title: "Facility Management", description: "Mirembajtje teknike, consumables, supervizim, raportim." },
  { slug: "dezinfektim-sanitizim", title: "Dezinfektim & Sanitizim", description: "SIP standardeve, me preparate të certifikuara." },
  { slug: "fasadash-lartesi", title: "Pastrim fasadash & lartësi", description: "Dritare, fasadë, punë në lartësi." },
  { slug: "panelesh-solare", title: "Pastrim panelesh solare (robotike)", description: "Pajisje speciale dhe robotike." },
  { slug: "on-call", title: "On-call / emergjencë / sezonale", description: "Kurdo që kërkohet, orar i zgjatur." },
];

export default function SherbimetPage() {
  return (
    <Section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-foreground">Shërbimet</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Pastrim profesional, facility management dhe shërbime të specializuara.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.slug} href={`/sherbimet/${s.slug}`} variant="service">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
