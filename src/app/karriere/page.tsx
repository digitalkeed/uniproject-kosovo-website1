import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function KarrierePage() {
  return (
    <Section className="py-16">
      <h1 className="text-3xl font-bold text-foreground">Karrierë</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Apliko te ne. Kulturë trajnimi dhe rritje profesionale – Akademia e
        Trajnimit na ndihmon të mbajmë standarde të larta.
      </p>
      <Button href="/kontakt" variant="primary" className="mt-6">
        Apliko
      </Button>
    </Section>
  );
}
