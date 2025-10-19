import { Card, CardContent } from "@/components/ui/card";
import bakeryImage from "@assets/generated_images/Bakery_automation_case_study_417f70b8.png";
import manufacturingImage from "@assets/generated_images/Manufacturing_automation_case_study_c606602e.png";
import siemensImage from "@assets/generated_images/Siemens_PLC_service_detail_3ba9a526.png";

export function IndustriesSection() {
  const industries = [
    { name: "Small Manufacturing", image: manufacturingImage },
    { name: "Food Processing & Bakeries", image: bakeryImage },
    { name: "Material Handling", image: siemensImage },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">
            Specialized automation solutions across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`industry-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-center">{industry.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
