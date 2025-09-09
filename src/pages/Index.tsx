// Welcome to Pama Delivery Services - A modern logistics platform

import { Navigation } from "@/components/common/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold text-gradient">Pama Delivery Services</h1>
          <p className="text-xl text-muted-foreground">Modern logistics platform for pickup & delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
