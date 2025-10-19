import { Award, Briefcase, MapPin, Cpu } from "lucide-react";

export function TrustBar() {
  const stats = [
    { icon: Award, label: "15+ Years Experience" },
    { icon: Briefcase, label: "100+ Projects" },
    { icon: MapPin, label: "Ontario-Based" },
    { icon: Cpu, label: "PLC Experts" },
  ];

  return (
    <section className="py-8 bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
              data-testid={`stat-${index}`}
            >
              <stat.icon className="h-8 w-8 text-primary flex-shrink-0" />
              <span className="font-mono text-sm md:text-base font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
