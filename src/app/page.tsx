import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ValueCards } from "@/components/home/ValueCards";
import { Pillars } from "@/components/home/Pillars";
import { WhyUs } from "@/components/home/WhyUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FullSolution } from "@/components/home/FullSolution";
import { SectorsStrip } from "@/components/home/SectorsStrip";
import { ProcessBreakdown } from "@/components/home/ProcessBreakdown";
import { Testimonials } from "@/components/home/Testimonials";
import { References } from "@/components/home/References";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueCards />
      <Pillars />
      <WhyUs />
      <HowItWorks />
      <FullSolution />
      <SectorsStrip />
      <ProcessBreakdown />
      <Testimonials />
      <References />
      <CTASection />
    </>
  );
}
