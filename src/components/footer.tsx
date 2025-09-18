import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X, Linkedin, Github, Mail } from "lucide-react";
import React from "react";
export function Footer() {
  const footerLinks = {
    Product: [
      "Features",
      "Integrations", 
      "Pricing",
      "API Docs",
      "Changelog"
    ],
    Company: [
      "About Us",
      "Careers",
      "Blog",
      "Press Kit",
      "Contact"
    ],
    Resources: [
      "Documentation",
      "Help Center", 
      "Community",
      "Templates",
      "Status Page"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Security",
      "GDPR",
      "Compliance"
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl mb-4 text-card-foreground">Stay updated with WorkFlow.AI</h3>
              <p className="text-muted-foreground">
                Get the latest features, automation tips, and product updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg mr-3"></div>
              <span className="text-xl text-card-foreground">WorkFlow.AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming how teams work with intelligent automation. Build, deploy, and scale workflows that adapt to your business needs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-card-foreground">
                <X className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-card-foreground">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-card-foreground">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-card-foreground">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-card-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 WorkFlow.AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="text-muted-foreground text-sm">Made with ❤️ for productivity</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}