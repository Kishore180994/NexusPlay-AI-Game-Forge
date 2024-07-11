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
