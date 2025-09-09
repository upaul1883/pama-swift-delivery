import { ArrowLeft, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/pama-button";
import pamaLogo from "@/assets/pama-logo.png";

interface NavigationProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showMenu?: boolean;
  showProfile?: boolean;
  showNotifications?: boolean;
}

export const Navigation = ({
  title,
  showBack = false,
  onBack,
  showMenu = false,
  showProfile = false,
  showNotifications = false,
}: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between p-4 max-w-md mx-auto">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {showBack ? (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          ) : showMenu ? (
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <img src={pamaLogo} alt="Pama" className="w-8 h-8" />
              <span className="text-gradient font-bold text-lg">Pama</span>
            </div>
          )}
          
          {title && (
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-warning rounded-full border-2 border-background"></span>
            </Button>
          )}
          
          {showProfile && (
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};