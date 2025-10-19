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
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="14" width="8" height="14" className="fill-primary" />
                <rect x="6" y="16" width="1.5" height="2" className="fill-card" />
                <rect x="9.5" y="16" width="1.5" height="2" className="fill-card" />
                <rect x="6" y="20" width="1.5" height="2" className="fill-card" />
                <rect x="9.5" y="20" width="1.5" height="2" className="fill-card" />
                <rect x="6" y="24" width="1.5" height="2" className="fill-card" />
                <rect x="9.5" y="24" width="1.5" height="2" className="fill-card" />
                <rect x="14" y="10" width="10" height="18" className="fill-primary" />
                <rect x="16" y="12" width="2" height="2.5" className="fill-card" />
                <rect x="20" y="12" width="2" height="2.5" className="fill-card" />
                <rect x="16" y="16" width="2" height="2.5" className="fill-card" />
                <rect x="20" y="16" width="2" height="2.5" className="fill-card" />
                <rect x="16" y="20" width="2" height="2.5" className="fill-card" />
                <rect x="20" y="20" width="2" height="2.5" className="fill-card" />
                <rect x="16" y="24" width="2" height="2.5" className="fill-card" />
                <rect x="20" y="24" width="2" height="2.5" className="fill-card" />
                <rect x="26" y="18" width="6" height="10" className="fill-primary" />
                <rect x="27.5" y="20" width="1.5" height="2" className="fill-card" />
                <rect x="27.5" y="24" width="1.5" height="2" className="fill-card" />
                <path d="M18 6 L19 10 L17 10 Z" className="fill-primary" />
              </svg>
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
