import { NextResponse } from "next/server";
import { Question } from "../../utils/types";

const questions: Question[] = [
  { id: 1, type: "text", question: "What is the main theme of your game?" },
  {
    id: 2,
    type: "multiple",
    question: "What genre best fits your game idea?",
    options: ["Action", "Adventure", "Puzzle", "Strategy"],
  },
  {
    id: 3,
    type: "text",
    question: "Describe the main character or protagonist of your game.",
  },
  {
    id: 4,
    type: "multiple",
    question: "What is the primary setting of your game?",
    options: [
      "Fantasy World",
      "Sci-Fi Universe",
      "Modern City",
      "Historical Era",
    ],
  },
  {
    id: 5,
    type: "text",
    question: "What is a unique gameplay mechanic in your game?",
  },
];

export async function GET() {
  return NextResponse.json(questions);
}
