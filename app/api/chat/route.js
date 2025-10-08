// /app/api/chat/route.js

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client with your API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    // This is the system prompt. It gives the AI its personality and instructions.
    const systemPrompt = {
      role: 'system',
      content: "You are JapaPortal AI, an expert assistant specializing in global relocation, visas, and immigration. Your users are planning to move abroad ('Japa'). Provide clear, accurate, and supportive answers. Cover all countries and visa types. Always be encouraging and professional."
    };

    // Make the API call to OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // Or "gpt-3.5-turbo" for a faster, cheaper option
      messages: [systemPrompt, ...messages], // Prepend the system prompt to the chat history
    });

    // Extract the AI's response
    const aiResponse = completion.choices[0].message;

    return NextResponse.json(aiResponse);

  } catch (error) {
    console.error('[CHAT_API_ERROR]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}