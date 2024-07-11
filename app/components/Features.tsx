import { Zap, Cpu, Users, Palette } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Transform ideas into playable game concepts in minutes, not months.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Generation",
    description:
      "Leverage advanced AI to create unique and engaging game mechanics.",
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: `Share your creations and get inspired by other developers&apos; games.`,
  },
  {
    icon: Palette,
    title: "Customizable Output",
    description:
      "Fine-tune and customize the AI-generated concepts to match your vision.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-b from-purple-900 to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose NexusPlay?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg">
              <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
