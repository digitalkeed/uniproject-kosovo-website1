import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { getServiceBySlug } from "@/content/services";

import {
  serviceHeroImages,
  serviceHeroDefault,
} from "@/content/images";

const heroImages = serviceHeroImages;
const defaultHeroImage = serviceHeroDefault;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Shërbim | UNI PROJECT" };
  return {
    title: `${service.title} | UNI PROJECT`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const body = service.longDescription ?? service.shortDescription;
  const heroImage = heroImages[slug] ?? defaultHeroImage;

  return (
    <>
      <PageHero
        layout="imageRight"
        lead="Shërbimet"
        title={service.title}
        description={service.shortDescription}
        image={{
          src: heroImage,
          alt: `${service.title} – UNI PROJECT`,
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Të gjitha shërbimet", href: "/sherbimet" }}
      />
      <Section className="py-14 bg-section-alt">
        <nav className="text-sm text-muted-foreground">
          <Link href="/sherbimet" className="text-primary hover:underline">
            Shërbimet
          </Link>
          <span className="mx-2">→</span>
          <span className="text-foreground">{service.title}</span>
        </nav>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed max-w-content">
            {body}
          </p>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={heroImage}
              alt={`${service.title} – në praktikë`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-100 shadow-[var(--shadow-card)] max-w-content">
          <h3 className="font-semibold text-foreground">
            Si të filloni me këtë shërbim
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Na tregoni objektin – lokacione, m², frekuencë – dhe do të
            përgatitim një ofertë të përshtatshme. Pa angazhim. Ju kontaktojmë
            brenda 24–48 orëve.
          </p>
        </div>
      </Section>
      <CTA
        title="Dëshironi një ofertë për këtë shërbim?"
        description="Plotësoni formularin ose na kontaktoni direkt. Do të ju përgjigjemi brenda 24–48 orëve."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Të gjitha shërbimet"
        secondaryHref="/sherbimet"
      />
    </>
  );
}
