interface QuestionnaireResultProps {
  initialIdea: string;
  answers: Array<{ questionId: number; answer: string }>;
  generatedConcept: string;
}

export default function QuestionnaireResult({
  initialIdea,
  answers,
  generatedConcept,
}: QuestionnaireResultProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Game Concept</h2>
      <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Initial Idea</h3>
        <p className="mb-4">{initialIdea}</p>
        <h3 className="text-xl font-semibold mb-4">Your Answers</h3>
        <ul className="list-disc list-inside mb-4">
          {answers.map((answer, index) => (
            <li key={answer.questionId} className="mb-2">
              <span className="font-semibold">Question {index + 1}:</span>{" "}
              {answer.answer}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-4">Generated Concept</h3>
        <p className="whitespace-pre-wrap">{generatedConcept}</p>
      </div>
      <button
        onClick={() => window.location.reload()} // This is a simple way to restart; you might want a more sophisticated approach
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Over
      </button>
    </div>
  );
}
