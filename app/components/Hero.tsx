"use client";

import GameIdeaInput from "./GameIdeaInput";

interface HeroProps {
  onIdeaSubmit: (idea: string) => void;
}

export default function Hero({ onIdeaSubmit }: HeroProps) {
  return (
    <section className="hero text-center py-20">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
        Create AI-Powered Games in Minutes
      </h1>
      <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
        Turn your ideas into playable games with the power of AI
      </p>
      <GameIdeaInput onSubmit={onIdeaSubmit} />
    </section>
  );
}
