"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { SolarPanelDamageDetectionForm } from "@/components/solar-panel-damage-detection-form";
import { EnergyLossPrediction } from "@/components/energy-loss-prediction";
import { SolarPanelPositionOptimization } from "@/components/solar-panel-position-optimization";
import { Chatbot } from "@/components/chatbot";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/contexts/AuthContext"; // Import the AuthContext


const Home = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { currentUser } = useAuth();


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (currentUser) {
      router.push('/login');
    }
    else if (!showDemo) {
      toast({
        title: "Welcome to SolarisAI!",
        description:
          "Maximize Your Solar Power with AI!",
      });
      setShowDemo(true);
    }
  }, [toast, showDemo, router, currentUser]);




  return (
    <div className="container mx-auto p-4 bg-background min-h-screen"
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1605296867304-46dcd258eb07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundBlendMode: 'overlay',
         }}>
      {/* Hero Section */}
      <section className="text-center py-16 glassmorphism-enhanced p-8 rounded-2xl">
        <div className="max-w-4xl mx-auto glassmorphism-enhanced p-8 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6">
            SolarisAI: Optimizing Solar Energy with AI
          </h1>
          <p className="text-xl text-foreground mb-8">
            Unlock the full potential of your solar panels with SolarisAI. Our AI-powered platform provides advanced
            solutions for damage detection, energy loss prediction, and position optimization, ensuring maximum
            efficiency and sustainable energy production.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="glassmorphism-enhanced card-hover border-t-4 border-yellow-400">
          <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-t-lg">
            <CardTitle className="text-primary text-2xl">Solar Panel Damage Detection</CardTitle>
            <CardDescription>
              Detect cracks, dust, and discoloration using AI-powered image analysis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SolarPanelDamageDetectionForm />
          </CardContent>
        </Card>

        <Card className="glassmorphism-enhanced card-hover border-t-4 border-blue-400">
          <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-t-lg">
            <CardTitle className="text-secondary text-2xl">Energy Loss Prediction</CardTitle>
            <CardDescription>
              Predict energy loss percentage based on damage and dirt levels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EnergyLossPrediction />
          </CardContent>
        </Card>

        <Card className="glassmorphism-enhanced card-hover border-t-4 border-orange-400">
          <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-t-lg">
            <CardTitle className="text-accent text-2xl">Solar Panel Position Optimization</CardTitle>
            <CardDescription>
              Optimize panel tilt for maximum energy gain using NASA data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SolarPanelPositionOptimization />
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="mb-12 py-8 glassmorphism-enhanced">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
            <p className="text-foreground/80">Accuracy in Damage Detection</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-secondary mb-2">30%</h3>
            <p className="text-foreground/80">Average Efficiency Increase</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-accent mb-2">1000+</h3>
            <p className="text-foreground/80">Solar Systems Optimized</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-green-500 mb-2">24/7</h3>
            <p className="text-foreground/80">AI-Powered Monitoring</p>
          </div>
        </div>
      </section>

      {isClient && <Chatbot/>}
    </div>
  );
};

export default Home;
