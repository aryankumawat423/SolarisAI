"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { solarPanelDamageDetection } from "@/ai/flows/solar-panel-damage-detection";

export const SolarPanelDamageDetectionForm = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [damageType, setDamageType] = useState<string | null>(null);
  const [suggestedAction, setSuggestedAction] = useState<string | null>(null);
  const [energyLossPercentage, setEnergyLossPercentage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await solarPanelDamageDetection({ photoUrl });
      setDamageType(result.damageType);
      setSuggestedAction(result.suggestedAction);
      setEnergyLossPercentage(result.energyLossPercentage || null);
    } catch (error) {
      console.error("Error detecting damage:", error);
      setDamageType("Error");
      setSuggestedAction("Could not detect damage. Please try again.");
      setEnergyLossPercentage(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="url"
        placeholder="Enter photo URL"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Detecting..." : "Detect Damage"}
      </Button>

      {damageType && (
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Detection Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Damage Type:</strong> {damageType}
            </p>
            <p>
              <strong>Suggested Action:</strong> {suggestedAction}
            </p>
            {energyLossPercentage !== null && (
              <p>
                <strong>Estimated Energy Loss:</strong> {energyLossPercentage}%
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </form>
  );
};
