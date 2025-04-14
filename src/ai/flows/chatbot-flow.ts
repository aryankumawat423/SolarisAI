'use server';

/**
 * @fileOverview AI Chatbot support flow
 *
 * - chatbot - A function that handles the chatbot process.
 * - ChatbotInput - The input type for the chatbot function.
 * - ChatbotOutput - The return type for the chatbot function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ChatbotInputSchema = z.object({
  message: z.string().describe('The message from the user.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the AI chatbot.'),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {
    schema: z.object({
      message: z.string().describe('The message from the user.'),
    }),
  },
  output: {
    schema: z.object({
      response: z.string().describe('The response from the AI chatbot.'),
    }),
  },
  prompt: `You are an AI chatbot support for a solar panel optimization platform. Your goal is to provide helpful and informative responses to user questions related to solar panel maintenance, performance, and optimization.

User message: {{{message}}}

Respond with a helpful answer.`,
});

const chatbotFlow = ai.defineFlow<
  typeof ChatbotInputSchema,
  typeof ChatbotOutputSchema
>(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
