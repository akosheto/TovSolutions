import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesOverview } from "@/components/ServicesOverview";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ServicesOverview />
        <CaseStudiesSection />
        <FeaturesSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
