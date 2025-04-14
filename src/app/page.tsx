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
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            SolarisAI: Optimizing Solar Energy with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock the full potential of your solar panels with SolarisAI. Our AI-powered platform provides advanced
            solutions for damage detection, energy loss prediction, and position optimization, ensuring maximum
            efficiency and sustainable energy production.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glassmorphism" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(7px)'}}>
          <CardHeader>
            <CardTitle>Solar Panel Damage Detection</CardTitle>
            <CardDescription>
              Detect cracks, dust, and discoloration using AI-powered image analysis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SolarPanelDamageDetectionForm />
          </CardContent>
        </Card>

        <Card className="glassmorphism" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(7px)'}}>
          <CardHeader>
            <CardTitle>Energy Loss Prediction</CardTitle>
            <CardDescription>
              Predict energy loss percentage based on damage and dirt levels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EnergyLossPrediction />
          </CardContent>
        </Card>

        <Card className="glassmorphism" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(7px)'}}>
          <CardHeader>
            <CardTitle>Solar Panel Position Optimization</CardTitle>
            <CardDescription>
              Optimize panel tilt for maximum energy gain using NASA data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SolarPanelPositionOptimization />
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="text-center py-12 bg-secondary rounded-md">
        <h2 className="text-3xl font-semibold mb-4 text-secondary-foreground">Contact Us</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Reach out for inquiries, support, and further information.
        </p>
        <div className="flex justify-center space-x-6">
          <div>
            <a
              href="mailto:support@solarisai.com"
              className="flex items-center space-x-3 text-secondary-foreground hover:underline"
            >
              <Mail className="h-5 w-5" />
              <span>support@solarisai.com</span>
            </a>
          </div>
          <div>
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-3 text-secondary-foreground hover:underline"
            >
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>

      {isClient && <Chatbot/>}
    </div>
  );
};

export default Home;
