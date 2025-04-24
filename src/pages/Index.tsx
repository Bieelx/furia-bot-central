
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
      description: "Challenge yourself with FURIA trivia and earn points."
    },
    {
      icon: Calendar,
      title: "Match Calendar",
      description: "Stay updated with upcoming matches and tournaments."
    },
    {
      icon: Users,
      title: "Meet the Players",
      description: "Get to know your favorite FURIA players better."
    },
    {
      icon: MessageSquare,
      title: "Fun Facts",
      description: "Discover interesting stories about the team."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2D243A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-yellow-200 bg-clip-text text-transparent">
                Meet FURIA Bot – Your Ultimate CS Companion
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Your all-in-one assistant for FURIA Esports. Get instant updates on matches,
                dive into team trivia, and discover exclusive insights about your favorite CS team.
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600 text-lg py-6 px-8">
                Try the Bot
              </Button>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="space-y-4">
                <ChatBubble message="When is the next game?" isBot={false} />
                <ChatBubble message="Our next match is against G2, this Saturday at 6PM!" isBot={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#221F26]/50">
        <div className="max-w-6xl mx-auto">
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

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#1A1F2C]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Built with</h3>
            <div className="flex justify-center gap-4 text-gray-400">
              <span>React</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>ChatGPT API</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            © 2025 FURIA Bot. This is a demo project.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
