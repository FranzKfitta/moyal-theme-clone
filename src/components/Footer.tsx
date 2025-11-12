import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-script text-3xl font-bold mb-4">The Pure</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Timeless elegance and refined luxury for the modern woman.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sale</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Lookbooks</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive exclusive updates and offers.
            </p>
            <div className="flex gap-2 mb-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background"
              />
              <Button size="icon" className="shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 The Pure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
