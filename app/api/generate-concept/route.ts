import { NextRequest, NextResponse } from "next/server";
import { Answer } from "../../utils/types";

export async function POST(request: NextRequest) {
  const answers: Answer[] = await request.json();

  const theme = answers.find((a) => a.questionId === 1)?.answer;
  const genre = answers.find((a) => a.questionId === 2)?.answer;
  const character = answers.find((a) => a.questionId === 3)?.answer;
  const setting = answers.find((a) => a.questionId === 4)?.answer;
  const mechanic = answers.find((a) => a.questionId === 5)?.answer;

  const concept = `Your game idea is a ${genre?.toLowerCase()} game set in a ${setting?.toLowerCase()} world. The main character, ${character}, navigates through this world, exploring the theme of ${theme}. The game features a unique gameplay mechanic: ${mechanic}. This combination creates an engaging and innovative gaming experience that blends familiar elements with fresh ideas.`;

  return NextResponse.json({ concept });
}
