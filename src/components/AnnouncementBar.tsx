import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnnouncementBar = () => {
  return (
    <div className="relative bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 text-center">
            <p className="text-sm font-medium tracking-wide">
              New Collection Available - <span className="font-semibold">15% OFF</span> with code{" "}
              <span className="font-semibold">NEWSEASON</span>
            </p>
          </div>
          
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
