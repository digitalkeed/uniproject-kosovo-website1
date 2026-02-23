import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const heroImage =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80";

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-background pt-16 pb-0 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Lider në Kosovë që nga 2001
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Mjedise të pastra. Objekte funksionale. Shërbim 24/7.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            UNI PROJECT ofron pastrim profesional, mirembajtje teknike dhe
            facility management në të gjithë Kosovën – me standarde ISO, staf të
            trajnuar dhe raportim dixhital.
          </p>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <Button href="/kontakt" variant="primary">
              Kerko oferte
            </Button>
            <Button href="/kontakt" variant="secondary">
              Na kontakto
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={heroImage}
            alt="Pastrim profesional – ambient i pastër dhe i rregulluar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </Section>
  );
}
