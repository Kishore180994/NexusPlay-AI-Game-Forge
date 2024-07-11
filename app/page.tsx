"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Questionnaire from "./components/Questionnaire";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  const [gameIdea, setGameIdea] = useState("");
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const handleIdeaSubmit = (idea: string) => {
    setGameIdea(idea);
    setShowQuestionnaire(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {!showQuestionnaire ? (
          <>
            <Hero onIdeaSubmit={handleIdeaSubmit} />
            <Features />
            <HowItWorks />
          </>
        ) : (
          <Questionnaire initialIdea={gameIdea} />
        )}
      </main>
      <Footer />
    </div>
  );
}
