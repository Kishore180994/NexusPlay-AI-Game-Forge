import { useState } from "react";

interface QuestionnaireStepProps {
  question: {
    text: string;
    type: "text" | "multiple-choice";
    options?: string[];
  };
  onAnswer: (answer: string) => void;
  stepNumber: number;
  totalSteps: number;
}

export default function QuestionnaireStep({
  question,
  onAnswer,
  stepNumber,
  totalSteps,
}: QuestionnaireStepProps) {
  const [textAnswer, setTextAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textAnswer.trim()) {
      onAnswer(textAnswer);
      setTextAnswer("");
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      {question.type === "text" ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            className="w-full p-2 mb-4 bg-purple-800 text-white rounded"
            placeholder="Type your answer here"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </form>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div className="mt-4">
        <p className="text-sm text-gray-400">
          Step {stepNumber} of {totalSteps}
        </p>
        <div className="w-full bg-purple-900 rounded-full h-2.5 mt-2">
          <div
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
