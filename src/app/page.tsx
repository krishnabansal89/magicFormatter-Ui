import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Workflow from "@/components/Workflow";
import BetaProgram from "@/components/BetaProgram";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/Faq";
export default function Home() {
  return (
    <div className="md:pt-12">
      <Hero />
      <Features />
      <Benefits />
      <Workflow />
      <Pricing />
      <FAQ />
      <BetaProgram />
    </div>
  );
}
