export default function StepByStep() {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Getting Started with NexusPlay
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Sign Up</h3>
              <p className="mb-4">
                Create your free account to get started with NexusPlay.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                2. Enter Your Idea
              </h3>
              <p className="mb-4">
                Type in your game idea in the provided input field on the
                homepage.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                3. Refine Your Concept
              </h3>
              <p className="mb-4">
                Answer the AI&apos;s questions to add depth to your game
                concept.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                4. Review and Customize
              </h3>
              <p className="mb-4">
                Review the generated game concept and make any desired
                adjustments.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Creating Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
