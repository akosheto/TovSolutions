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
        { label: "Custom PLC Programming", path: "/services" },
        { label: "OMRON PLC", path: "/services" },
        { label: "Allen-Bradley PLC Solutions", path: "/services" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F2ea65458d04b4b71ad4b92e42dbb930b%2F2b544f904a694bbb815ba9c8094ed0a7" alt="TOV Industrial Automation" className="w-auto" style={{ height: "130px" }} />
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
                <span>(647) 376-5406</span>
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
          <p>&copy; {currentYear} TOV Industrial Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
