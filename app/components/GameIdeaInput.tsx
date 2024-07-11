"use client";

import { useState } from "react";
import AIStarIcon from "./AIStarIcon";

interface GameIdeaInputProps {
  onSubmit: (idea: string) => void;
}

export default function GameIdeaInput({ onSubmit }: GameIdeaInputProps) {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter your game idea here..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="w-full px-4 py-3 text-lg rounded-lg bg-white bg-opacity-20 border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 glow-border"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-800 transition-colors duration-300 flex items-center"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          Generate
        </button>
      </div>
    </form>
  );
}
