"use client";
import { useState, useEffect } from "react";
import QuestionnaireResult from "./QuestionnaireResult";
import QuestionnaireStep from "./QuestionnaireStep";

interface Question {
  id: number;
  text: string;
  type: "text" | "multiple-choice";
  options?: string[];
}

interface Answer {
  questionId: number;
  answer: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    text: "What's the main genre of your game?",
    type: "multiple-choice",
    options: ["Action", "Adventure", "Puzzle", "RPG"],
  },
  { id: 2, text: "Describe your main character", type: "text" },
  { id: 3, text: "What's the primary setting of your game?", type: "text" },
  {
    id: 4,
    text: "What's a unique gameplay mechanic in your game?",
    type: "text",
  },
  {
    id: 5,
    text: "Who is the target audience for your game?",
    type: "multiple-choice",
    options: ["Kids", "Teens", "Adults", "All ages"],
  },
];

interface QuestionnaireProps {
  initialIdea: string;
}

export default function Questionnaire({ initialIdea }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [generatedConcept, setGeneratedConcept] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setAnswers([
      ...answers,
      { questionId: mockQuestions[currentStep].id, answer },
    ]);
    if (currentStep < mockQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateConcept();
    }
  };

  const generateConcept = () => {
    // Simulate API call to generate concept
    setTimeout(() => {
      const concept = `Based on your inputs, here's a concept for your game:
      
      A ${answers[0].answer.toLowerCase()} game featuring a ${
        answers[1].answer
      } as the main character.
      Set in ${
        answers[2].answer
      }, players will experience a unique gameplay mechanic: ${
        answers[3].answer
      }.
      This game is designed to appeal to ${answers[4].answer.toLowerCase()}.
      
      The game starts with ${initialIdea} and evolves into an engaging experience that combines
      familiar elements of the ${answers[0].answer.toLowerCase()} genre with innovative twists.`;

      setGeneratedConcept(concept);
    }, 2000);
  };

  if (generatedConcept) {
    return (
      <QuestionnaireResult
        initialIdea={initialIdea}
        answers={answers}
        generatedConcept={generatedConcept}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Refine Your Game Idea</h2>
      <p className="mb-6">Initial Idea: {initialIdea}</p>
      <QuestionnaireStep
        question={mockQuestions[currentStep]}
        onAnswer={handleAnswer}
        stepNumber={currentStep + 1}
        totalSteps={mockQuestions.length}
      />
    </div>
  );
}
