import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Industrial_automation_control_panel_hero_1638edd6.png";

export function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          PLC Industrial Automation Experts
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
          15+ years of proven expertise in PLC programming, including OMRON and Allen-Bradley systems. Trusted by SME manufacturers and bakeries across Ontario.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/case-studies" data-testid="link-view-work">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover-elevate active-elevate-2">
              View Our Work
            </Button>
          </Link>
          <Link href="/contact" data-testid="link-contact-team">
            <Button size="lg" className="bg-chart-2 text-white hover-elevate active-elevate-2">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
