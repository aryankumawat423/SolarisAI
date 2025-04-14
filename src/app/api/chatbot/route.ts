import { NextResponse } from 'next/server';
import { chatbot } from '@/ai/flows/chatbot-flow';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const result = await chatbot({ message });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in chatbot API route:', error);
    return NextResponse.json(
      { error: 'Failed to process chatbot request' },
      { status: 500 }
    );
  }
}