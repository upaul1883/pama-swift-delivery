import { MapPin } from "lucide-react";

export function MapView() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border overflow-hidden">
      {/* Map placeholder with grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Service coverage indicators */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Service Coverage Area</span>
          </div>
          <p className="text-sm text-muted-foreground">Lagos • Abuja • Port Harcourt</p>
        </div>
      </div>
      
      {/* Animated pins */}
      <div className="absolute top-4 left-8">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg"></div>
      </div>
      <div className="absolute bottom-6 right-12">
        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="absolute top-12 right-6">
        <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}