"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNasaSolarData } from "@/services/nasa";
import { saveResult } from "../mongodb/db-utils";

export const SolarPanelPositionOptimization = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [optimalTilt, setOptimalTilt] = useState<number | null>(null);
  const [energyGain, setEnergyGain] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getNasaSolarData(
        parseFloat(latitude),
        parseFloat(longitude)
      );
      setOptimalTilt(result.optimalTilt);
      setEnergyGain(result.energyGain);
      try {
        const saveResultResponse = await saveResult(
          "positionOptimizationResults",
          {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            optimalTilt: result.optimalTilt,
            energyGain: result.energyGain,
          }
        );
        if (saveResultResponse) {
          console.log("Position optimization result saved to database with ID:", saveResultResponse);
        } else {
          console.error("Failed to save position optimization result to database.");
        }
      } catch (error) {
        console.error("Error saving position optimization result to database:", error);
      } 

    } catch (error) {
      console.error("Error fetching NASA solar data:", error);
      setOptimalTilt(null);
      setEnergyGain(null);
    } finally {
      setIsLoading(false);
      setLatitude("");
      setLongitude("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Optimizing..." : "Optimize Position"}
      </Button>

      {optimalTilt !== null && energyGain !== null && (
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Optimization Results</CardTitle>
            <CardDescription>
              Recommended tilt and expected energy gain
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Optimal Tilt:</strong> {optimalTilt}°
            </p>
            <p>
              <strong>Expected Energy Gain:</strong> {energyGain * 100} %
            </p>
          </CardContent>
        </Card>
      )}
    </form>
  );
};
