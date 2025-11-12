import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = ["NEWS", "SHOP", "ARCHIVES SALES", "LOOKBOOKS", "ABOUT"];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <h1 className="font-script text-4xl font-bold tracking-wider">
              The Pure
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
