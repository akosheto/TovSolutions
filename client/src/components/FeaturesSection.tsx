import { CheckCircle2, HeadphonesIcon, TrendingUp, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Proven Expertise",
      description: "15 years of hands-on experience with PLC systems, OMRON, and Allen Bradley platforms.",
    },
    {
      icon: Users,
      title: "Local Service",
      description: "Ontario-based with deep understanding of local manufacturing needs and rapid on-site support.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of improving efficiency, reducing downtime, and modernizing legacy systems.",
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Ongoing support and maintenance to keep your automation systems running smoothly.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose TOV Industrial Automations?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center" data-testid={`feature-${index}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
