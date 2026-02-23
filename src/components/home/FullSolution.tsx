import Image from "next/image";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const points = [
  { label: "Eksperiencë 24+ vjeçare", icon: "★" },
  { label: "Profesionistë të trajnuar dhe të certifikuar", icon: "✓" },
  { label: "Standard i lartë pune – ISO 9001, 45001, 14001", icon: "◆" },
  { label: "Përkushtim maksimal ndaj klientëve", icon: "♥" },
];

export function FullSolution() {
  return (
    <Section className="bg-muted/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Zgjidhje e plotë për çdo objekt
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Pavarësisht nëse keni nevojë për pastrim ditor, facility management,
            dezinfektim apo shërbime në lartësi, UNI PROJECT kujdeset për
            gjithçka. Ekipi ynë garanton siguri, cilësi dhe transparencë për ju.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p.label} className="flex items-center gap-3 text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {p.icon}
                </span>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/sherbimet"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Eksploro shërbimet
          </Link>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
            alt="Zyrë moderne – pastrim dhe menaxhim profesional"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
