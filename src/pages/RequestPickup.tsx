import { useState } from "react";
import { Navigation } from "@/components/common/Navigation";
import { Button } from "@/components/ui/pama-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Package, CreditCard, Clock } from "lucide-react";

export default function RequestPickup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupAddress: "",
    deliveryAddress: "",
    itemDescription: "",
    itemSize: "",
    itemWeight: "",
    recipientName: "",
    recipientPhone: "",
    paymentMethod: "",
    priority: "standard"
  });

  const estimatedPrice = 2500; // Mock calculation
  const estimatedTime = "30-45 mins";

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Request Pickup" showBack onBack={handleBack} />
      
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
            <span className="text-sm text-muted-foreground">{Math.round((step/3) * 100)}%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step/3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Addresses */}
        {step === 1 && (
          <Card className="pama-card p-6 animate-slide-up">
            <h3 className="font-semibold mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Pickup & Delivery Locations
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="pickup">Pickup Address</Label>
                <Input
                  id="pickup"
                  className="pama-input mt-1"
                  placeholder="Enter pickup address"
                  value={formData.pickupAddress}
                  onChange={(e) => setFormData({...formData, pickupAddress: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="delivery">Delivery Address</Label>
                <Input
                  id="delivery"
                  className="pama-input mt-1"
                  placeholder="Enter delivery address"
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="recipient">Recipient Name</Label>
                <Input
                  id="recipient"
                  className="pama-input mt-1"
                  placeholder="Enter recipient's name"
                  value={formData.recipientName}
                  onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="phone">Recipient Phone</Label>
                <Input
                  id="phone"
                  className="pama-input mt-1"
                  placeholder="Enter recipient's phone"
                  value={formData.recipientPhone}
                  onChange={(e) => setFormData({...formData, recipientPhone: e.target.value})}
                />
              </div>
            </div>

            <Button 
              variant="primary" 
              size="lg" 
              className="w-full mt-6"
              onClick={handleNext}
              disabled={!formData.pickupAddress || !formData.deliveryAddress || !formData.recipientName}
            >
              Continue
            </Button>
          </Card>
        )}

        {/* Step 2: Item Details */}
        {step === 2 && (
          <Card className="pama-card p-6 animate-slide-up">
            <h3 className="font-semibold mb-6 flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Item Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Item Description</Label>
                <Textarea
                  id="description"
                  className="pama-input mt-1"
                  placeholder="Describe what you're sending"
                  value={formData.itemDescription}
                  onChange={(e) => setFormData({...formData, itemDescription: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="size">Item Size</Label>
                  <Select value={formData.itemSize} onValueChange={(value) => setFormData({...formData, itemSize: value})}>
                    <SelectTrigger className="pama-input mt-1">
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                      <SelectItem value="extra-large">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    className="pama-input mt-1"
                    placeholder="Weight"
                    type="number"
                    value={formData.itemWeight}
                    onChange={(e) => setFormData({...formData, itemWeight: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="priority">Delivery Priority</Label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                  <SelectTrigger className="pama-input mt-1">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (30-60 mins)</SelectItem>
                    <SelectItem value="express">Express (15-30 mins) +₦500</SelectItem>
                    <SelectItem value="urgent">Urgent (5-15 mins) +₦1000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              variant="primary" 
              size="lg" 
              className="w-full mt-6"
              onClick={handleNext}
              disabled={!formData.itemDescription || !formData.itemSize}
            >
              Continue
            </Button>
          </Card>
        )}

        {/* Step 3: Payment & Confirmation */}
        {step === 3 && (
          <div className="space-y-6 animate-slide-up">
            <Card className="pama-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Delivery Summary
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">From:</span>
                  <span className="font-medium">{formData.pickupAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">To:</span>
                  <span className="font-medium">{formData.deliveryAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Item:</span>
                  <span className="font-medium">{formData.itemDescription}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium capitalize">{formData.itemSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Priority:</span>
                  <span className="font-medium capitalize">{formData.priority}</span>
                </div>
              </div>
            </Card>

            <Card className="pama-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                Pricing & Payment
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Base delivery fee:</span>
                  <span>₦2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance charge:</span>
                  <span>₦500</span>
                </div>
                {formData.priority !== 'standard' && (
                  <div className="flex justify-between">
                    <span>Priority fee:</span>
                    <span>+₦{formData.priority === 'express' ? '500' : '1000'}</span>
                  </div>
                )}
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-secondary">₦{estimatedPrice}</span>
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Estimated delivery: {estimatedTime}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Payment Method</Label>
                <Select value={formData.paymentMethod} onValueChange={(value) => setFormData({...formData, paymentMethod: value})}>
                  <SelectTrigger className="pama-input">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wallet">Pama Wallet</SelectItem>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="transfer">Bank Transfer</SelectItem>
                    <SelectItem value="cash">Cash on Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={!formData.paymentMethod}
            >
              Confirm & Request Pickup
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}