"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Upload } from "lucide-react";
import { SolarPanelDamageDetectionForm } from "@/components/solar-panel-damage-detection-form";
import { EnergyLossPrediction } from "@/components/energy-loss-prediction";
import { SolarPanelPositionOptimization } from "@/components/solar-panel-position-optimization";
import { Chatbot } from "@/components/chatbot";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!showDemo) {
      toast({
        title: "Welcome to SolarisAI!",
        description:
          "Maximize Your Solar Power with AI!",
      });
      setShowDemo(true);
    }
  }, [toast, showDemo]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            SolarisAI: Optimizing Solar Energy with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Harness the power of artificial intelligence to maximize the efficiency
            and longevity of your solar panels. From damage detection to position
            optimization, SolarisAI provides comprehensive solutions for sustainable energy.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="accent" onClick={() => alert("Demo Clicked")}>
              Try the Demo
            </Button>
            <div className="relative">
              <Input
                type="file"
                id="image-upload"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageUpload}
                accept="image/*"
              />
              <Button asChild>
                <label htmlFor="image-upload" className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Image</span>
                </label>
              </Button>
            </div>
          </div>
          {uploadedImage && (
            <div className="mt-6">
              <img
                src={uploadedImage}
                alt="Uploaded Solar Panel"
                className="max-w-md mx-auto rounded-md shadow-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glassmorphism">
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

        <Card className="glassmorphism">
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

        <Card className="glassmorphism">
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

      {isClient && <Chatbot />}
    </div>
  );
};

export default Home;
