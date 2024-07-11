export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How NexusPlay Works
        </h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-purple-900">
                1
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                Enter Your Game Idea
              </h3>
              <p className="mb-4 text-base font-normal text-gray-300">
                Start by entering a brief description of your game idea. Be as
                creative or specific as you like!
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-purple-900">
                2
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white">
                AI Analysis
              </h3>
              <p className="text-base font-normal text-gray-300">
                Our AI analyzes your idea and generates a series of targeted
                questions to refine the concept.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-purple-900">
                3
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white">
                Answer Questions
              </h3>
              <p className="text-base font-normal text-gray-300">
                Respond to the AI&apos;s questions to provide more details and
                shape your game concept.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-purple-900">
                4
              </span>
              <h3 className="mb-1 text-lg font-semibold text-white">
                Receive Your Game Concept
              </h3>
              <p className="text-base font-normal text-gray-300">
                Get a detailed game concept based on your inputs, including
                gameplay mechanics, story elements, and visual style
                suggestions.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
