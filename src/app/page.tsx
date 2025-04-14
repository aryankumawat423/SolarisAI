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
      <section className="text-center py-16 glassmorphism-enhanced p-8 rounded-2xl mb-16">
        <div className="max-w-4xl mx-auto glassmorphism-enhanced p-8 rounded-2xl">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            SolarisAI: Optimizing Solar Energy with AI
          </h1>
          <p className="text-xl text-foreground mb-8">
            Unlock the full potential of your solar panels with SolarisAI. Our AI-powered platform provides advanced
            solutions for damage detection, energy loss prediction, and position optimization, ensuring maximum
            efficiency and sustainable energy production.
          </p>
        </div>
      </section>
      <section id="about" className="mb-20 glassmorphism-enhanced p-10 rounded-2xl">
        <h2 className="text-4xl font-semibold mb-8 text-center bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">About SolarisAI</h2>
        <p className="text-lg mb-8">
          SolarisAI is an innovative platform that leverages artificial intelligence to optimize solar energy systems.
          Our mission is to make solar energy more efficient, accessible, and manageable for everyone.
        </p>
        
        <h3 className="text-3xl font-semibold mb-6 mt-10 text-amber-500">Our Features</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-primary">Solar Panel Damage Detection</h4>
            <p>
              Our AI-powered system can analyze images of solar panels to detect damages, cracks, or defects.
              This helps in early identification of issues, preventing energy loss and extending the lifespan of your solar panels.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-secondary">Energy Loss Prediction</h4>
            <p>
              Using historical data and machine learning algorithms, SolarisAI can predict potential energy losses
              and suggest preventive measures to maintain optimal performance of your solar energy system.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-accent">Solar Panel Position Optimization</h4>
            <p>
              Our advanced algorithms calculate the optimal positioning of solar panels based on your location,
              weather patterns, and surrounding environment to maximize energy generation throughout the year.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-medium mb-3 text-green-500">AI Chatbot Support</h4>
            <p>
              Get instant answers to your questions about solar panel maintenance, performance optimization,
              and troubleshooting through our intelligent chatbot available 24/7.
            </p>
          </div>
        </div>
        
        <h3 className="text-3xl font-semibold mb-6 mt-10 text-cyan-500">Our Technology</h3>
        <p className="text-lg mb-4">
          SolarisAI combines cutting-edge technologies including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Computer vision for damage detection</li>
          <li>Machine learning for performance prediction</li>
          <li>Geospatial analysis for optimal positioning</li>
          <li>Natural language processing for our interactive chatbot</li>
          <li>Real-time data processing for accurate insights</li>
        </ul>
      </section>


      {/* Feature Highlights */}
      <section className="mt-16 mb-20">
        <h2 className="text-4xl font-semibold mb-10 text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20 py-12 glassmorphism-enhanced rounded-2xl">
        <h2 className="text-4xl font-semibold mb-10 text-center bg-gradient-to-r from-rose-500 to-pink-500 text-transparent bg-clip-text">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-8">
            <h3 className="text-5xl font-bold text-primary mb-3">98%</h3>
            <p className="text-foreground/80 text-lg">Accuracy in Damage Detection</p>
          </div>
          <div className="p-8">
            <h3 className="text-5xl font-bold text-secondary mb-3">30%</h3>
            <p className="text-foreground/80 text-lg">Average Efficiency Increase</p>
          </div>
          <div className="p-8">
            <h3 className="text-5xl font-bold text-accent mb-3">1000+</h3>
            <p className="text-foreground/80 text-lg">Solar Systems Optimized</p>
          </div>
          <div className="p-8">
            <h3 className="text-5xl font-bold text-green-500 mb-3">24/7</h3>
            <p className="text-foreground/80 text-lg">AI-Powered Monitoring</p>
          </div>
        </div>
      </section>

    
      <section className="mt-16 mb-10">
        {isClient && <Chatbot/>}
      </section>
    </div>
  );
};

export default Home;
