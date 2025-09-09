import { useState } from "react";
import { Navigation } from "@/components/common/Navigation";
import { Button } from "@/components/ui/pama-button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, Star, CheckCircle, Clock, Truck } from "lucide-react";

export default function TrackOrder() {
  const [orderStatus] = useState({
    id: "PD001236",
    status: "in_transit",
    pickupAddress: "123 Ikeja Way, Lagos",
    deliveryAddress: "456 Victoria Island, Lagos",
    item: "Electronics Package",
    estimatedTime: "15 mins",
    agent: {
      name: "John Adebayo",
      phone: "+234 801 234 5678",
      rating: 4.8,
      vehicle: "Honda Bike - ABC 123"
    }
  });

  const trackingSteps = [
    { id: 1, title: "Order Confirmed", description: "Your pickup request has been confirmed", completed: true, time: "2:30 PM" },
    { id: 2, title: "Agent Assigned", description: "John Adebayo is heading to pickup location", completed: true, time: "2:35 PM" },
    { id: 3, title: "Item Picked Up", description: "Your item has been collected", completed: true, time: "2:45 PM" },
    { id: 4, title: "In Transit", description: "On the way to delivery location", completed: false, active: true, time: "Now" },
    { id: 5, title: "Delivered", description: "Item delivered successfully", completed: false, time: "ETA 3:15 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Track Order" showBack />
      
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Live Map Mockup */}
        <Card className="pama-card p-6">
          <div className="h-48 bg-accent rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="z-10 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Live Map Integration</p>
              <p className="text-xs text-muted-foreground">Real-time agent location</p>
            </div>
            
            {/* Animated tracking dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="w-8 h-8 bg-primary/20 rounded-full absolute -top-2 -left-2 animate-ping"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Order #{orderStatus.id}</p>
              <p className="text-sm text-muted-foreground">ETA: {orderStatus.estimatedTime}</p>
            </div>
            <span className="pama-status-pending">In Transit</span>
          </div>
        </Card>

        {/* Agent Info */}
        <Card className="pama-card p-6">
          <h3 className="font-semibold mb-4">Your Delivery Agent</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">{orderStatus.agent.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="font-medium">{orderStatus.agent.name}</p>
                <p className="text-sm text-muted-foreground">{orderStatus.agent.vehicle}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-secondary fill-current" />
                  <span className="text-sm">{orderStatus.agent.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <MessageCircle className="h-4 w-4" />
              Chat
            </Button>
          </div>
        </Card>

        {/* Tracking Progress */}
        <Card className="pama-card p-6">
          <h3 className="font-semibold mb-4">Tracking Progress</h3>
          <div className="space-y-4">
            {trackingSteps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {step.completed ? (
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-success-foreground" />
                    </div>
                  ) : step.active ? (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <Truck className="h-3 w-3 text-primary-foreground" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-border rounded-full flex items-center justify-center">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <p className={`font-medium ${step.completed || step.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </p>
                    <span className="text-xs text-muted-foreground">{step.time}</span>
                  </div>
                  <p className={`text-sm ${step.completed || step.active ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
                    {step.description}
                  </p>
                </div>
                
                {index < trackingSteps.length - 1 && (
                  <div className="absolute left-[35px] mt-8 w-px h-4 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Order Details */}
        <Card className="pama-card p-6">
          <h3 className="font-semibold mb-4">Order Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">From:</span>
              <span className="font-medium text-right">{orderStatus.pickupAddress}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">To:</span>
              <span className="font-medium text-right">{orderStatus.deliveryAddress}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Item:</span>
              <span className="font-medium">{orderStatus.item}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Paid:</span>
              <span className="font-semibold text-secondary">₦2,500</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}