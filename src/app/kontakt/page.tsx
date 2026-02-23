import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export default function KontaktPage() {
  return (
    <Section className="py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground">
          Kontakt / Kerko oferte
        </h1>
        <p className="mt-2 text-muted-foreground">
          Plotësoni formularin – do të ju kontaktojmë brenda shkurt.
        </p>
        <ContactForm />
      </div>
    </Section>
  );
}
