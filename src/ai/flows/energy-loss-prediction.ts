// energy-loss-prediction.ts
'use server';

/**
 * @fileOverview Predicts the percentage of energy loss due to dirt and damage on a solar panel.
 *
 * - predictEnergyLoss - A function that handles the energy loss prediction process.
 * - PredictEnergyLossInput - The input type for the predictEnergyLoss function.
 * - PredictEnergyLossOutput - The return type for the predictEnergyLoss function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PredictEnergyLossInputSchema = z.object({
  damageDescription: z
    .string()
    .describe('Description of the damage on the solar panel.'),
  dirtLevel: z
    .string()
    .describe('Level of dirt accumulation on the solar panel (e.g., light, moderate, heavy).'),
});
export type PredictEnergyLossInput = z.infer<typeof PredictEnergyLossInputSchema>;

const PredictEnergyLossOutputSchema = z.object({
  energyLossPercentage: z
    .number()
    .describe(
      'The predicted percentage of energy loss due to dirt and damage on the solar panel.'
    ),
  suggestedAction: z
    .string()
    .describe('Suggested action to mitigate energy loss (e.g., cleaning, repair).'),
});
export type PredictEnergyLossOutput = z.infer<typeof PredictEnergyLossOutputSchema>;

export async function predictEnergyLoss(
  input: PredictEnergyLossInput
): Promise<PredictEnergyLossOutput> {
  return predictEnergyLossFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictEnergyLossPrompt',
  input: {
    schema: z.object({
      damageDescription: z
        .string()
        .describe('Description of the damage on the solar panel.'),
      dirtLevel: z
        .string()
        .describe(
          'Level of dirt accumulation on the solar panel (e.g., light, moderate, heavy).'
        ),
    }),
  },
  output: {
    schema: z.object({
      energyLossPercentage: z
        .number()
        .describe(
          'The predicted percentage of energy loss due to dirt and damage on the solar panel.'
        ),
      suggestedAction: z
        .string()
        .describe(
          'Suggested action to mitigate energy loss (e.g., cleaning, repair).'
        ),
    }),
  },
  prompt: `You are an AI expert in solar panel efficiency.

  Based on the description of the damage and dirt level of the solar panel, predict the percentage of energy loss and suggest an action to mitigate the loss.

  Damage Description: {{{damageDescription}}}
  Dirt Level: {{{dirtLevel}}}

  Respond with the predicted energy loss percentage and a suggested action, like so:
  {
   "energyLossPercentage": 10,
   "suggestedAction": "Clean the solar panel."
  }`,
});

const predictEnergyLossFlow = ai.defineFlow<
  typeof PredictEnergyLossInputSchema,
  typeof PredictEnergyLossOutputSchema
>(
  {
    name: 'predictEnergyLossFlow',
    inputSchema: PredictEnergyLossInputSchema,
    outputSchema: PredictEnergyLossOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
