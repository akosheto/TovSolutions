import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Target, Shield, Users } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "2010", event: "Founded Tov Industrial Automation" },
    { year: "2013", event: "Expanded to serve bakeries across Ontario" },
    { year: "2017", event: "Became Certified Siemens Partner" },
    { year: "2020", event: "Completed 100th successful automation project" },
    { year: "2025", event: "15 years of continuous excellence" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Building systems you can depend on, every single day.",
    },
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Staying at the forefront of automation technology.",
    },
    {
      icon: Target,
      title: "Local Partnership",
      description: "Supporting Ontario manufacturers with dedicated service.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced engineers committed to your success.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tov Industrial Automation</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                15 years of dedication to industrial automation excellence
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-semibold mb-6 text-center">Our Company</h2>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>
                      Since 2010, Tov Industrial Automation has been serving Ontario's manufacturing sector 
                      with expert automation solutions. Our team of experienced engineers specializes in 
                      PLC programming, Siemens integration, and Allen Bradley systems.
                    </p>
                    <p>
                      We focus on helping small to mid-sized manufacturers and food processing facilities 
                      modernize their operations efficiently and cost-effectively. Our approach combines 
                      technical expertise with a deep understanding of our clients' unique operational needs.
                    </p>
                    <p>
                      With over 100 successful projects across Ontario, our commitment to technical excellence 
                      and personalized service has built lasting partnerships throughout the province, delivering 
                      proven results that improve efficiency and reduce downtime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">Our Journey</h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <Card key={index} data-testid={`timeline-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                          <span className="font-mono font-semibold text-lg">{item.year}</span>
                          <span className="text-muted-foreground">—</span>
                          <span>{item.event}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} data-testid={`value-${index}`}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-primary/10 mb-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
