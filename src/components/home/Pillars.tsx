import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { homeSectionImages } from "@/content/images";

const pillars = [
  {
    title: "Pastrim Profesional",
    description:
      "Nga zyret tek qendrat tregtare, industriale dhe pas ndërtimit – përfshire dezinfektim dhe pastrim në lartësi.",
    href: "/sherbimet/pastrim-profesional",
    image: homeSectionImages.pillars.pastrim,
    imageAlt: "Pastrim profesional",
  },
  {
    title: "Facility Management",
    description:
      "Mirembajtje teknike, consumables, supervizim dhe monitorim cilësie me raportim.",
    href: "/sherbimet/facility-management",
    image: homeSectionImages.pillars.facility,
    imageAlt: "Objekt profesional – facility management",
  },
  {
    title: "On-call & Emergjenca",
    description:
      "Shërbime sezonale, emergjente dhe orar i zgjatur, kurdo që kërkohet.",
    href: "/sherbimet/on-call",
    image: homeSectionImages.pillars.oncall,
    imageAlt: "Gati 24/7",
  },
];

export function Pillars() {
  return (
    <Section id="sherbimet" className="bg-section-alt">
      <div className="text-center mb-12">
        <h2 className="text-h2 font-bold text-foreground">
          Shërbimet tona kryesore
        </h2>
        <p className="mt-3 text-body-lg text-muted-foreground max-w-content mx-auto">
          Mbështetuni te ne si partner i besueshëm – pastrim profesional, facility management
          dhe shërbime të specializuara për çdo sektor.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <Card key={p.title} href={p.href} variant="service">
            <div className="relative aspect-[16/10] -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-card">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                className="object-cover transition-transform duration-slow ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-h3 text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
