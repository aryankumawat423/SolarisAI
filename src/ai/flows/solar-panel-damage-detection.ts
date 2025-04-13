'use server';
/**
 * @fileOverview Detects damage in a solar panel image and suggests actions.
 *
 * - solarPanelDamageDetection - A function that handles the solar panel damage detection process.
 * - SolarPanelDamageDetectionInput - The input type for the solarPanelDamageDetection function.
 * - SolarPanelDamageDetectionOutput - The return type for the solarPanelDamageDetection function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SolarPanelDamageDetectionInputSchema = z.object({
  photoUrl: z.string().describe('The URL of the solar panel photo.'),
});
export type SolarPanelDamageDetectionInput = z.infer<
  typeof SolarPanelDamageDetectionInputSchema
>;

const SolarPanelDamageDetectionOutputSchema = z.object({
  damageType: z
    .string()
    .describe(
      'The type of damage detected (cracks, dust, discoloration, none).'
    ),
  suggestedAction: z
    .string()
    .describe('The suggested action (clean, repair, replace, none).'),
  energyLossPercentage: z
    .number()
    .optional()
    .describe('The estimated percentage of energy loss due to the damage.'),
});
export type SolarPanelDamageDetectionOutput = z.infer<
  typeof SolarPanelDamageDetectionOutputSchema
>;

export async function solarPanelDamageDetection(
  input: SolarPanelDamageDetectionInput
): Promise<SolarPanelDamageDetectionOutput> {
  return solarPanelDamageDetectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solarPanelDamageDetectionPrompt',
  input: {
    schema: z.object({
      photoUrl: z.string().describe('The URL of the solar panel photo.'),
    }),
  },
  output: {
    schema: z.object({
      damageType: z
        .string()
        .describe(
          'The type of damage detected (cracks, dust, discoloration, none).'
        ),
      suggestedAction: z
        .string()
        .describe('The suggested action (clean, repair, replace, none).'),
      energyLossPercentage: z
        .number()
        .optional()
        .describe('The estimated percentage of energy loss due to the damage.'),
    }),
  },
  prompt: `You are an expert in solar panel maintenance and diagnostics.

You will analyze the provided image of a solar panel and identify any potential damage or issues.  Based on your analysis, you will suggest the most appropriate action to take.

Analyze the following solar panel image:

Image: {{media url=photoUrl}}

Consider these factors when making your determination:

*   Presence of cracks or physical damage
*   Accumulation of dust, dirt, or debris
*   Discoloration or staining of the panel surface

Based on your analysis, determine the damageType and suggestedAction. If there is no damage, set the damageType to "none" and the suggestedAction to "none".  Also, if possible, estimate the energyLossPercentage caused by the damage.
`,
});

const solarPanelDamageDetectionFlow = ai.defineFlow<
  typeof SolarPanelDamageDetectionInputSchema,
  typeof SolarPanelDamageDetectionOutputSchema
>( {name: 'solarPanelDamageDetectionFlow', inputSchema: SolarPanelDamageDetectionInputSchema, outputSchema: SolarPanelDamageDetectionOutputSchema}, async input => {
  const {output} = await prompt(input);
  return output!;
});
