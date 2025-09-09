import { useState } from "react";
import { Navigation } from "@/components/common/Navigation";
import { Button } from "@/components/ui/pama-button";
import { Card } from "@/components/ui/card";
import { Package, Truck, Settings, MapPin, Clock } from "lucide-react";
import pamaLogo from "@/assets/pama-logo.png";

export default function Home() {
  const [userType, setUserType] = useState<'customer' | 'agent' | null>(null);

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent to-background">
        <div className="max-w-md mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 pt-16">
            <div className="mb-6 animate-fade-in">
              <img src={pamaLogo} alt="Pama Delivery Services" className="w-24 h-24 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gradient mb-2">Pama Delivery</h1>
              <p className="text-muted-foreground text-lg">Fast, reliable pickup & delivery services</p>
            </div>
          </div>

          {/* Role Selection */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl font-semibold text-center mb-6">Choose your role</h2>
            
            <Card 
              className="pama-card p-6 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setUserType('customer')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">I need delivery</h3>
                  <p className="text-muted-foreground">Send packages & items</p>
                </div>
              </div>
            </Card>

            <Card 
              className="pama-card p-6 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setUserType('agent')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">I want to deliver</h3>
                  <p className="text-muted-foreground">Become a delivery agent</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Features preview */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="animate-fade-in">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Real-time tracking</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="p-3 rounded-full bg-secondary/10 w-fit mx-auto mb-2">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <p className="text-sm text-muted-foreground">Fast delivery</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-3 rounded-full bg-success/10 w-fit mx-auto mb-2">
                <Settings className="h-5 w-5 text-success" />
              </div>
              <p className="text-sm text-muted-foreground">Easy to use</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (userType === 'customer') {
    return <CustomerDashboard onBack={() => setUserType(null)} />;
  }

  return <AgentDashboard onBack={() => setUserType(null)} />;
}

function CustomerDashboard({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Customer Dashboard" showBack onBack={onBack} showNotifications showProfile />
      
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <Card className="pama-card p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button variant="hero" size="lg" className="w-full">
              <Package className="h-5 w-5" />
              Request Pickup
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <MapPin className="h-5 w-5" />
              Track Order
            </Button>
          </div>
        </Card>

        {/* Recent Orders */}
        <Card className="pama-card p-6">
          <h3 className="font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
              <div>
                <p className="font-medium">#PD001234</p>
                <p className="text-sm text-muted-foreground">Electronics → Downtown</p>
              </div>
              <span className="pama-status-active">Delivered</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
              <div>
                <p className="font-medium">#PD001235</p>
                <p className="text-sm text-muted-foreground">Documents → Office</p>
              </div>
              <span className="pama-status-pending">In Transit</span>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="pama-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Total Orders</div>
          </Card>
          <Card className="pama-card p-4 text-center">
            <div className="text-2xl font-bold text-secondary">₦25,600</div>
            <div className="text-sm text-muted-foreground">Total Spent</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function AgentDashboard({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Agent Dashboard" showBack onBack={onBack} showNotifications showProfile />
      
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Status Card */}
        <Card className="pama-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Status</h3>
            <span className="pama-status-active">Online</span>
          </div>
          <Button variant="secondary" size="lg" className="w-full">
            <MapPin className="h-5 w-5" />
            Find Nearby Pickups
          </Button>
        </Card>

        {/* Available Requests */}
        <Card className="pama-card p-6">
          <h3 className="font-semibold mb-4">Available Requests</h3>
          <div className="space-y-3">
            <div className="border border-border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">Electronics Pickup</p>
                  <p className="text-sm text-muted-foreground">0.8 km away</p>
                </div>
                <span className="text-lg font-bold text-secondary">₦2,500</span>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="success" className="flex-1">Accept</Button>
                <Button size="sm" variant="outline" className="flex-1">Details</Button>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">Document Delivery</p>
                  <p className="text-sm text-muted-foreground">1.2 km away</p>
                </div>
                <span className="text-lg font-bold text-secondary">₦1,800</span>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="success" className="flex-1">Accept</Button>
                <Button size="sm" variant="outline" className="flex-1">Details</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Today's Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="pama-card p-4 text-center">
            <div className="text-xl font-bold text-primary">8</div>
            <div className="text-xs text-muted-foreground">Deliveries</div>
          </Card>
          <Card className="pama-card p-4 text-center">
            <div className="text-xl font-bold text-secondary">₦18,400</div>
            <div className="text-xs text-muted-foreground">Earnings</div>
          </Card>
          <Card className="pama-card p-4 text-center">
            <div className="text-xl font-bold text-success">4.9</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </Card>
        </div>
      </div>
    </div>
  );
}