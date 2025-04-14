"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">About SolarisAI</h1>
          <p className="text-lg mb-6">
            SolarisAI is an innovative platform that leverages artificial intelligence to optimize solar energy systems.
            Our mission is to make solar energy more efficient, accessible, and manageable for everyone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-3">Solar Panel Damage Detection</h3>
              <p>
                Our AI-powered system can analyze images of solar panels to detect damages, cracks, or defects.
                This helps in early identification of issues, preventing energy loss and extending the lifespan of your solar panels.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-3">Energy Loss Prediction</h3>
              <p>
                Using historical data and machine learning algorithms, SolarisAI can predict potential energy losses
                and suggest preventive measures to maintain optimal performance of your solar energy system.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-3">Solar Panel Position Optimization</h3>
              <p>
                Our advanced algorithms calculate the optimal positioning of solar panels based on your location,
                weather patterns, and surrounding environment to maximize energy generation throughout the year.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-3">AI Chatbot Support</h3>
              <p>
                Get instant answers to your questions about solar panel maintenance, performance optimization,
                and troubleshooting through our intelligent chatbot available 24/7.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Technology</h2>
          <p className="text-lg mb-4">
            SolarisAI combines cutting-edge technologies including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Computer vision for damage detection</li>
            <li>Machine learning for performance prediction</li>
            <li>Geospatial analysis for optimal positioning</li>
            <li>Natural language processing for our interactive chatbot</li>
            <li>Real-time data processing for accurate insights</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;