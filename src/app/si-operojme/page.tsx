import { Section } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

const steps = [
  { title: "Vlerësim", description: "Auditim i objektit, sektori, fluksi, risku." },
  { title: "Plan pune", description: "SLA, frekuenca, ekipe, furnizime." },
  { title: "Ekzekutim", description: "Implementim me supervizim." },
  { title: "Kontroll & raportim", description: "Monitorim cilësie dhe raportim dixhital." },
];

export default function SiOperojmePage() {
  return (
    <Section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-foreground">Si operojmë</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Modeli ynë: vlerësim → plan pune → ekzekutim → kontroll cilësie & raportim.
        </p>
      </div>
      <ProcessTimeline steps={steps} />
    </Section>
  );
}
