import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "PLC Programming", path: "/services" },
        { label: "Siemens Integration", path: "/services" },
        { label: "Allen Bradley Solutions", path: "/services" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 bg-primary rounded-sm rotate-45"></div>
                <div className="absolute inset-1 bg-background rounded-sm rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-sm"></div>
                </div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-lg font-bold leading-none">TOV</span>
                <span className="text-xs font-medium text-muted-foreground leading-none">INDUSTRIAL AUTOMATION</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Expert industrial automation solutions across Ontario for over 15 years.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.path} data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-foreground">
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Ontario, Canada</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@tovautomation.ca</span>
              </li>
            </ul>
            <div className="mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">
                <Button variant="ghost" size="icon">
                  <SiLinkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Tov Industrial Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
