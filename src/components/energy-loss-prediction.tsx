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
import { predictEnergyLoss } from "@/ai/flows/energy-loss-prediction";
import { saveResult } from "../mongodb/db-utils";

export const EnergyLossPrediction = () => {
  const [damageDescription, setDamageDescription] = useState("");
  const [dirtLevel, setDirtLevel] = useState("");
  const [predictedLoss, setPredictedLoss] = useState<number | null>(null);
  const [suggestedAction, setSuggestedAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await predictEnergyLoss({ damageDescription, dirtLevel });
      setPredictedLoss(result.energyLossPercentage);
      setSuggestedAction(result.suggestedAction);
      try {
        const saveResultResponse = await saveResult(
          "energyLossPredictions",
          {
            damageDescription,
            dirtLevel,
            energyLossPercentage: result.energyLossPercentage,
            suggestedAction: result.suggestedAction,
          }
        );
        if (saveResultResponse) {
          console.log("Energy loss prediction saved to database with ID:", saveResultResponse);
        } else {
          console.error("Failed to save energy loss prediction to database.");
        }
      } catch (error) {
        console.error("Error saving energy loss prediction to database:", error);
      }
    } catch (error) {
      console.error("Error predicting energy loss:", error);
      setPredictedLoss(null);
      setSuggestedAction("Could not predict energy loss. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Damage Description"
        value={damageDescription}
        onChange={(e) => setDamageDescription(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Dirt Level (e.g., light, moderate, heavy)"
        value={dirtLevel}
        onChange={(e) => setDirtLevel(e.target.value)}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Predicting..." : "Predict Energy Loss"}
      </Button>

      {predictedLoss !== null && (
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Prediction Results</CardTitle>
            <CardDescription>
              Estimated energy loss and suggested action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Predicted Energy Loss:</strong> {predictedLoss}%
            </p>
            <p>
              <strong>Suggested Action:</strong> {suggestedAction}
            </p>
          </CardContent>
        </Card>
      )}
    </form>
  );
};
