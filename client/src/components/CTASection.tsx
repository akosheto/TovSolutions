import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Automate Your Operations?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Let's discuss how we can help optimize your manufacturing processes with proven automation solutions.
        </p>
        <Link href="/contact" data-testid="link-get-started">
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            Get Started Today
          </Button>
        </Link>
      </div>
    </section>
  );
}
