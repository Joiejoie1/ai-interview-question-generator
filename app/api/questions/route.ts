import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { jobTitle } = await req.json();

    if (!jobTitle) {
      return NextResponse.json(
        { error: "Job title is required" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "openchat/openchat-7b:free",
      messages: [
        {
          role: "user",
          content: `Generate 3 thoughtful interview questions for a ${jobTitle} role.

Requirements:
- Focus on communication, problem-solving, and role-specific thinking
- Keep questions concise
- Return only the questions as a numbered list.`,
        },
      ],
    });

    const text = completion.choices[0].message.content;

    return NextResponse.json({
      questions: text,
    });
  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
