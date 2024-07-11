export interface Question {
  id: number;
  type: "text" | "multiple";
  question: string;
  options?: string[];
}

export interface Answer {
  questionId: number;
  answer: string;
}

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

export const mockAPI = {
  getQuestions: async (): Promise<Question[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    return questions;
  },

  generateConcept: async (answers: Answer[]): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
    const theme = answers.find((a) => a.questionId === 1)?.answer;
    const genre = answers.find((a) => a.questionId === 2)?.answer;
    const character = answers.find((a) => a.questionId === 3)?.answer;
    const setting = answers.find((a) => a.questionId === 4)?.answer;
    const mechanic = answers.find((a) => a.questionId === 5)?.answer;

    return `Your game idea is a ${genre?.toLowerCase()} game set in a ${setting?.toLowerCase()} world. The main character, ${character}, navigates through this world, exploring the theme of ${theme}. The game features a unique gameplay mechanic: ${mechanic}. This combination creates an engaging and innovative gaming experience that blends familiar elements with fresh ideas.`;
  },
};
