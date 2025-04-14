"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { solarPanelDamageDetection } from "@/ai/flows/solar-panel-damage-detection";
import { Upload } from "lucide-react";
import { saveResult } from "../mongodb/db-utils";

export const SolarPanelDamageDetectionForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [damageType, setDamageType] = useState<string | null>(null);
  const [suggestedAction, setSuggestedAction] = useState<string | null>(null);
  const [energyLossPercentage, setEnergyLossPercentage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null); // For image preview

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Generate a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!selectedImage) {
        alert("Please select an image.");
        setIsLoading(false);
        return;
      }

      // Convert image to base64 string
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const result = await solarPanelDamageDetection({ photoUrl: base64String });
        setDamageType(result.damageType);
        setSuggestedAction(result.suggestedAction);
        setEnergyLossPercentage(result.energyLossPercentage || null);
        try {
          const saveResultResponse = await saveResult(
            "damageDetectionResults",
            {
              photoUrl: base64String,
              damageType: result.damageType,
              suggestedAction: result.suggestedAction,
              energyLossPercentage: result.energyLossPercentage,
            }
          );
          if (saveResultResponse) {
            console.log("Damage detection result saved to database with ID:", saveResultResponse);
          } else {
            console.error("Failed to save damage detection result to database.");
          }
        } catch (error) {
          console.error("Error saving damage detection result to database:", error);
        }
      };
      reader.readAsDataURL(selectedImage);

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
      <div className="relative">
        <Input
          type="file"
          id="image-upload"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          onChange={handleImageChange}
          accept="image/*"
        />
        <Button asChild>
          <label htmlFor="image-upload" className="flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Upload Image</span>
          </label>
        </Button>
      </div>

      {previewImage && (
        <div>
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-md rounded-md"
          />
        </div>
      )}

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

