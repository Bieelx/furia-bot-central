
import { Brain, Calendar, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ChatBubble from '@/components/ChatBubble';

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Trivia Quiz",
      description: "Test your FURIA knowledge with our interactive quiz system."
    },
    {
      icon: Calendar,
      title: "Match Calendar",
      description: "Never miss a game with our real-time match schedule."
    },
    {
      icon: Users,
      title: "Meet the Players",
      description: "Learn about your favorite FURIA players and their stats."
    },
    {
      icon: MessageSquare,
      title: "Fun Facts & Curiosities",
      description: "Discover interesting stories and facts about the team."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Meet FURIA Bot – Your Ultimate CS Companion
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Your all-in-one bot for FURIA Esports! Get match updates, player stats,
            team trivia, and exclusive fun facts about your favorite CS:GO team.
          </p>
          <Button className="bg-purple-500 hover:bg-purple-600 text-lg py-6 px-8">
            Try the Bot
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#221F26]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to stay connected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            See the bot in action
          </h2>
          <div className="max-w-md mx-auto glass-card p-6">
            <div className="space-y-4">
              <ChatBubble
                message="When is the next game?"
                isBot={false}
              />
              <ChatBubble
                message="Our next match is against G2, this Saturday at 6PM!"
                isBot={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#221F26]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Built with</h3>
            <div className="flex justify-center gap-4 text-gray-400">
              <span>React</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>ChatGPT API</span>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2025 FURIA Bot. This is a demo project.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
