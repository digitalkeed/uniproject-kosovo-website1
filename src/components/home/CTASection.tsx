import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Zgjidhja për objektin tuaj fillon këtu
        </h2>
        <p className="mt-3 text-primary-foreground/90">
          Na tregoni për objektin – lokacione, m², frekuencë – dhe do të
          ju kontaktojmë brenda shkurt. Pa angazhim.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href="/kontakt" variant="inverse">
            Kerko oferte
          </Button>
          <Button href="/sherbimet" variant="outlineInverse">
            Shiko shërbimet
          </Button>
        </div>
      </div>
    </Section>
  );
}
