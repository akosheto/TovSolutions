import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Boxes, Wrench, Settings, Zap, CheckCircle2 } from "lucide-react";
import siemensImage from "@assets/generated_images/Siemens_PLC_service_detail_3ba9a526.png";
import allenBradleyImage from "@assets/generated_images/Allen_Bradley_equipment_detail_6679b7fe.png";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "PLC Programming",
      description: "Custom PLC programming solutions designed for your specific manufacturing needs.",
      features: [
        "Ladder Logic Development",
        "Structured Text Programming",
        "Function Block Diagrams",
        "HMI Development",
        "System Troubleshooting",
        "Code Optimization",
      ],
    },
    {
      icon: Boxes,
      title: "Siemens Integration",
      description: "Comprehensive Siemens automation from design through implementation and support.",
      features: [
        "S7-1200/1500 Programming",
        "TIA Portal Development",
        "SCADA Integration",
        "System Migration",
        "Network Configuration",
        "Performance Optimization",
      ],
    },
    {
      icon: Wrench,
      title: "Allen Bradley Solutions",
      description: "Complete Rockwell Automation services for reliable industrial control.",
      features: [
        "ControlLogix/CompactLogix",
        "Studio 5000 Programming",
        "FactoryTalk Integration",
        "Legacy System Upgrades",
        "Network Architecture",
        "Remote Support",
      ],
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of automation systems with existing infrastructure.",
      features: [
        "Multi-Vendor Integration",
        "Protocol Conversion",
        "Data Collection Systems",
        "Process Optimization",
        "Custom Solutions",
        "Testing & Validation",
      ],
    },
    {
      icon: Zap,
      title: "Modernization",
      description: "Upgrade legacy systems to modern, efficient automation platforms.",
      features: [
        "Legacy System Assessment",
        "Migration Planning",
        "Minimal Downtime Upgrades",
        "Training & Documentation",
        "Performance Enhancement",
        "Future-Proof Solutions",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Support & Maintenance",
      description: "Ongoing support to keep your automation systems running at peak performance.",
      features: [
        "24/7 Emergency Support",
        "Preventive Maintenance",
        "Remote Diagnostics",
        "On-Site Service",
        "System Monitoring",
        "Performance Reports",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive industrial automation solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate" data-testid={`service-detail-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <service.icon className="h-8 w-8 text-primary flex-shrink-0" />
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-chart-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Technology Partners</h2>
              <p className="text-lg text-muted-foreground">
                Working with industry-leading automation platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={siemensImage} alt="Siemens PLC Equipment" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Siemens</CardTitle>
                  <CardDescription className="text-base">
                    Certified partner for Siemens automation systems including TIA Portal, S7 series PLCs, 
                    and SCADA solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TIA Portal</Badge>
                    <Badge variant="secondary">S7-1200</Badge>
                    <Badge variant="secondary">S7-1500</Badge>
                    <Badge variant="secondary">WinCC</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={allenBradleyImage} alt="Allen Bradley Equipment" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Allen Bradley / Rockwell Automation</CardTitle>
                  <CardDescription className="text-base">
                    Expert implementation of Allen Bradley control systems, Studio 5000, and FactoryTalk platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">ControlLogix</Badge>
                    <Badge variant="secondary">CompactLogix</Badge>
                    <Badge variant="secondary">Studio 5000</Badge>
                    <Badge variant="secondary">FactoryTalk</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
