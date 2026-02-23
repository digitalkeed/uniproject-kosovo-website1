import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const sectors = [
  { slug: "banka", title: "Banka & rrjet filialesh" },
  { slug: "qendra-tregtare", title: "Qendra tregtare" },
  { slug: "publike", title: "Institucione publike / ndërkombëtare" },
  { slug: "shendetesi-arsim", title: "Shëndetësi & arsim" },
  { slug: "industri", title: "Industri & prodhim" },
];

export default function SektoretPage() {
  return (
    <Section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-foreground">Sektorët</h1>
        <p className="mt-2 text-muted-foreground">
          Shërbejmë në të gjithë Kosovën – nga banka tek industria.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <Card key={s.slug} href={`/sektoret/${s.slug}`} variant="service">
            <h2 className="text-lg font-semibold">{s.title}</h2>
          </Card>
        ))}
      </div>
    </Section>
  );
}
