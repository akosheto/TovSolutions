import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Boxes, Wrench } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Code2,
      title: "Custom PLC Automation",
      description: "Custom PLC programming solutions tailored to your manufacturing processes. Expert development and troubleshooting for reliable automation systems.",
    },
    {
      icon: Boxes,
      title: "OMRON PLC",
      description: "Comprehensive OMRON automation solutions from design to implementation. Leveraging industry-leading technology for optimal performance.",
    },
    {
      icon: Wrench,
      title: "Allen-Bradley PLC",
      description: "Complete Allen Bradley and Rockwell Automation services. Installation, programming, and ongoing support for your control systems.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial automation solutions designed for Ontario manufacturers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate" data-testid={`service-card-${index}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </div>
                <service.icon className="h-10 w-10 text-primary flex-shrink-0" />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                <Link href="/services" data-testid={`link-service-${index}`}>
                  <Button variant="ghost" size="sm">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
