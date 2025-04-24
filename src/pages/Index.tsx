import { useState } from 'react';
import { ShoppingBag, Calendar, Users, MessageSquare, Camera, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ChatDialog from '@/components/ChatDialog';
import ChatBubble from '@/components/ChatBubble';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);

  const teams = [
    {
      name: "CS2",
      players: "KSCERATO, yuurih, FalleN, chelo, VINI",
      achievements: "ESL Pro League Season 16 Champions",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920"
    },
    {
      name: "VALORANT",
      players: "dgzin, Quick, Khalil, Mazin, frz",
      achievements: "VCT Americas 2023 Finalists",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1920"
    },
    {
      name: "APEX LEGENDS",
      players: "fluaxx, Raf, baga",
      achievements: "ALGS 2022 Split 2 Champions",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  const matches = [
    { opponent: "G2", date: "April 28, 2025", time: "18:00", competition: "ESL Pro League" },
    { opponent: "Liquid", date: "May 2, 2025", time: "15:30", competition: "BLAST Premier" },
    { opponent: "NAVI", date: "May 10, 2025", time: "20:00", competition: "IEM Cologne" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f6f6] to-[#f9f9f9]">
      <Navbar />
      
      {/* Hero Section with Light Theme */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1A1F2C] leading-tight">
            Welcome to the <span className="text-[#D4AF37]">FURIA</span> Experience
          </h1>
          <p className="text-xl md:text-2xl text-[#1A1F2C]/80 mb-10 max-w-3xl mx-auto">
            Where passion meets competition
          </p>
          <Button 
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-white font-bold text-lg py-6 px-10 rounded-md"
          >
            Explore
          </Button>
        </div>
      </section>

      {/* Rest of the sections with adjusted colors for light theme */}
      <section className="py-20 px-4 bg-[#f6f6f6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Our Teams</h2>
            <div className="flex gap-4">
              {teams.map((team, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTeam(idx)}
                  className={`px-4 py-2 font-medium rounded transition-all ${
                    activeTeam === idx
                      ? "bg-[#D4AF37] text-white"
                      : "text-[#1A1F2C] border border-[#D4AF37]/30 hover:border-[#D4AF37]"
                  }`}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" 
                 style={{ backgroundImage: `url(${teams[activeTeam].image})` }}>
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-4xl font-bold text-[#D4AF37] mb-4">{teams[activeTeam].name}</h3>
              <div className="text-[#1A1F2C]/90 mb-4">
                <p className="text-xl mb-2">Players: {teams[activeTeam].players}</p>
                <p className="text-xl">Achievement: {teams[activeTeam].achievements}</p>
              </div>
              <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-white font-medium w-fit">
                Team Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Matches Section */}
      <section className="py-20 px-4 bg-[#f9f9f9]/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-12">Upcoming Matches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matches.map((match, idx) => (
              <Card key={idx} className="glass-card border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-[#1A1F2C]">FURIA vs {match.opponent}</div>
                    <div className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded text-sm">{match.competition}</div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-[#D4AF37] mr-2" />
                    <span className="text-[#1A1F2C]/80">{match.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" className="border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#1A1F2C]">
                      Set Reminder
                    </Button>
                    <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-white">
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4 bg-[#f6f6f6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C]">Media Gallery</h2>
            <Button variant="outline" className="border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#1A1F2C]">
              View All <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="aspect-square bg-[#f9f9f9]/50 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-cover bg-center" 
                     style={{backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?&auto=format&fit=crop&q=80&w=800)`}}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#f6f6f6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/lovable-uploads/8592197a-d9fc-4b86-8aa0-63492ccb0f54.png"
              alt="FURIA Logo"
              className="h-16 mb-6"
            />
            <p className="text-[#1A1F2C]/70">
              FURIA is a Brazilian esports organization with teams competing 
              at the highest level across multiple games.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="text-[#1A1F2C]/70 hover:text-[#D4AF37] transition-colors">Store</a>
              <a href="#" className="text-[#1A1F2C]/70 hover:text-[#D4AF37] transition-colors">Teams</a>
              <a href="#" className="text-[#1A1F2C]/70 hover:text-[#D4AF37] transition-colors">Schedule</a>
              <a href="#" className="text-[#1A1F2C]/70 hover:text-[#D4AF37] transition-colors">Gallery</a>
              <a href="#" className="text-[#1A1F2C]/70 hover:text-[#D4AF37] transition-colors">Partners</a>
              <a href="#" className="text-[#1A1F2C]/70 hover:text-[#D4AF37] transition-colors">About Us</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-[#1A1F2C]/70 text-sm">
              © 2025 FURIA Esports. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsChatOpen(true)} 
          className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg hover:bg-[#D4AF37]/80 transition-all duration-300 hover:scale-110"
        >
          <MessageSquare className="text-white" />
        </button>
      </div>

      <ChatDialog open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
};

export default Index;
