import { Lightbulb, Code, Share } from "lucide-react";

export default function ToolInfo() {
  return (
    <section className="bg-black bg-opacity-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How NexusPlay Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">1. Share Your Idea</h3>
            <p>
              Enter your game concept in the input field. Be as creative as you
              like!
            </p>
          </div>
          <div className="text-center">
            <Code className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">2. AI Generation</h3>
            <p>
              Our AI analyzes your idea and generates a detailed game concept.
            </p>
          </div>
          <div className="text-center">
            <Share className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">3. Refine and Share</h3>
            <p>
              Review the generated concept, make adjustments, and share your
              creation!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
