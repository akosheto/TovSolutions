import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import bakeryImage from "@assets/generated_images/Bakery_automation_case_study_417f70b8.png";
import manufacturingImage from "@assets/generated_images/Manufacturing_automation_case_study_c606602e.png";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      image: bakeryImage,
      industry: "Food Processing",
      title: "Commercial Bakery Automation",
      description: "Automated production line control system for a mid-sized Ontario bakery, improving efficiency by 40% and reducing downtime.",
      results: "40% efficiency increase",
    },
    {
      image: manufacturingImage,
      industry: "Manufacturing",
      title: "Assembly Line Optimization",
      description: "Complete PLC upgrade and integration for small manufacturer, modernizing legacy systems with Allen Bradley controllers.",
      results: "60% reduction in errors",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real Ontario businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`case-study-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <Badge className="bg-chart-3 text-white">{study.results}</Badge>
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-base">{study.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies" data-testid="link-all-case-studies">
            <Button>View All Case Studies</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
