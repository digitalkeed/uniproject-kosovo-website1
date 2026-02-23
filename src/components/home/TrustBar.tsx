import { Section } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";

const stats = [
  { value: "24+", label: "Vite përvoja" },
  { value: "270+", label: "Profesionistë" },
  { value: "ISO", label: "9001 / 45001 / 14001" },
  { value: "24/7", label: "Shërbim" },
];

export function TrustBar() {
  return (
    <Section className="bg-gradient-to-r from-muted/60 via-muted/80 to-muted/60 py-12">
      <p className="text-center text-sm font-medium text-muted-foreground mb-8">
        I besuar nga banka, qendra tregtare, institucione publike dhe biznese në të gjithë Kosovën
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </Section>
  );
}
