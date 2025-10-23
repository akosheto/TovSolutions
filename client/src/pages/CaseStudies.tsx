import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import bakeryImage from "@assets/generated_images/Bakery_automation_case_study_417f70b8.png";
import manufacturingImage from "@assets/generated_images/Manufacturing_automation_case_study_c606602e.png";
import siemensImage from "@assets/generated_images/Siemens_PLC_service_detail_3ba9a526.png";
import allenBradleyImage from "@assets/generated_images/Allen_Bradley_equipment_detail_6679b7fe.png";

export default function CaseStudies() {
  const [filter, setFilter] = useState<string>("all");

  const caseStudies = [
    {
      image: bakeryImage,
      industry: "Food Processing",
      category: "siemens",
      title: "Commercial Bakery Production Line",
      challenge: "Manual production processes causing inconsistent quality and high waste rates.",
      solution: "Implemented OMRON PLC system with automated mixing, baking, and packaging controls.",
      results: ["40% efficiency increase", "25% waste reduction", "Consistent quality output"],
      equipment: "OMRON PLC, TIA Portal, WinCC HMI",
    },
    {
      image: manufacturingImage,
      industry: "Manufacturing",
      category: "allen-bradley",
      title: "Assembly Line Modernization",
      challenge: "Outdated relay-based control system causing frequent breakdowns and production delays.",
      solution: "Complete system upgrade to Allen Bradley ControlLogix with Studio 5000 programming.",
      results: ["60% reduction in errors", "90% less downtime", "Remote monitoring capability"],
      equipment: "ControlLogix 5580, Studio 5000, FactoryTalk View",
    },
    {
      image: siemensImage,
      industry: "Material Handling",
      category: "siemens",
      title: "Warehouse Automation System",
      challenge: "Inefficient material flow and inventory tracking causing bottlenecks.",
      solution: "Integrated conveyor control system with automated sorting and tracking.",
      results: ["50% faster throughput", "99.5% tracking accuracy", "Reduced labor costs"],
      equipment: "OMRON PLC, Profinet Network, RFID Integration",
    },
    {
      image: allenBradleyImage,
      industry: "Food Processing",
      category: "allen-bradley",
      title: "Packaging Line Optimization",
      challenge: "Multiple packaging lines with inconsistent speeds and frequent jams.",
      solution: "Synchronized control system with predictive maintenance monitoring.",
      results: ["35% speed increase", "70% fewer jams", "Predictive maintenance"],
      equipment: "CompactLogix 5380, PowerFlex Drives, Connected Components",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "siemens", label: "OMRON" },
    { id: "allen-bradley", label: "Allen-Bradley" },
  ];

  const filteredStudies = filter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Real results from Ontario manufacturers and processors
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={filter === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(cat.id)}
                    data-testid={`filter-${cat.id}`}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden hover-elevate" data-testid={`detailed-case-study-${index}`}>
                  <div className="aspect-video overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      {study.results.slice(0, 1).map((result, i) => (
                        <Badge key={i} className="bg-chart-3 text-white">{result}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-chart-3"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Equipment:</span> {study.equipment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
