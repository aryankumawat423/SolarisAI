"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SolarPanelDamageDetectionForm } from "@/components/solar-panel-damage-detection-form";
import { EnergyLossPrediction } from "@/components/energy-loss-prediction";
import { SolarPanelPositionOptimization } from "@/components/solar-panel-position-optimization";
import { Chatbot } from "@/components/chatbot";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!showDemo) {
      toast({
        title: "Welcome to SolarisAI!",
        description:
          "Maximize Your Solar Power with AI! Click on 'Try the Demo' to get started.",
      });
      setShowDemo(true);
    }
  }, [toast, showDemo]);

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Maximize Your Solar Power with AI!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Unlock the full potential of your solar panels with our AI-powered
          platform.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="accent" onClick={() => alert("Demo Clicked")}>
            Try the Demo
          </Button>
          <Button>Upload Image</Button>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Solar Panel Damage Detection</CardTitle>
            <CardDescription>
              Upload an image to detect dust, cracks, discoloration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SolarPanelDamageDetectionForm />
          </CardContent>
        </Card>

        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Energy Loss Prediction</CardTitle>
            <CardDescription>
              Show predicted percentage energy loss.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EnergyLossPrediction />
          </CardContent>
        </Card>

        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Solar Panel Position Optimization</CardTitle>
            <CardDescription>
              Suggest ideal tilt using NASA data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SolarPanelPositionOptimization />
          </CardContent>
        </Card>
      </section>
      {isClient && <Chatbot />}
    </div>
  );
};

export default Home;
