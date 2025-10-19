import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Factory } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3">
              <Factory className="w-8 h-8 text-primary flex-shrink-0" />
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold leading-none">TOV</span>
                <span className="text-xs font-medium text-muted-foreground hidden sm:inline leading-none">INDUSTRIAL AUTOMATION</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="hidden md:inline-block" data-testid="link-cta-consultation">
              <Button size="sm" className="bg-chart-2 text-white hover-elevate active-elevate-2">
                Request Consultation
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" data-testid="link-mobile-cta">
              <Button className="w-full bg-chart-2 text-white" onClick={() => setMobileMenuOpen(false)}>
                Request Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
