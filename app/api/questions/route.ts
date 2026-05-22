import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const jobTitle = body.jobTitle;

    if (!jobTitle) {
      return NextResponse.json(
        { error: "Job title is required" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "microsoft/phi-3-mini-128k-instruct:free",
      messages: [
        {
          role: "user",
          content: `Generate 3 thoughtful interview questions for a ${jobTitle} role.

Requirements:
- Focus on communication
- Focus on problem-solving
- Keep questions concise
- Return only a numbered list`,
        },
      ],
    });

    const text = completion.choices[0].message.content;

    return NextResponse.json({
      questions: text,
    });
  } catch (error: any) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        error: error.message || "Server failed",
      },
      { status: 500 }
    );
  }
}