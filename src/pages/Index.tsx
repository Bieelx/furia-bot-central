import { useState } from 'react';
import { Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import ChatDialog from '@/components/ChatDialog';

import FuriaBanner from '../assets/FuriaBanner.webp';
import '../Index.css';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);

  const matches = [
    { opponent: "G2", date: "April 28, 2025", time: "18:00", competition: "ESL Pro League" },
    { opponent: "LOUD", date: "May 2, 2025", time: "15:30", competition: "BLAST Premier" },
    { opponent: "NAVI", date: "May 10, 2025", time: "20:00", competition: "IEM Cologne" }
  ];

  const teams = [
    {
      name: "CS2",
      players: "KSCERATO, yuurih, FalleN, Molodoy, Yekindar",
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

  const links = ["Store", "Teams", "Schedule", "Gallery", "Partners", "About Us"];
  const socialIcons = ["Twitter", "Instagram", "YouTube"];

  return (
    <div className="index-container">
      <Navbar />

      {/* Banner Central */}
      <section className="banner-section">
        <div className="banner-background" style={{ backgroundImage: `url(${FuriaBanner})` }}>
          <div className="banner-overlay"></div>
        </div>

        <div className="banner-content">
          <h1 className="banner-title">
            Bem-vindo à Experiência <span className="banner-highlight">FURIA</span>
          </h1>
          <p className="banner-subtitle">Where passion meets competition</p>
          <Button className="cta-button">Explore</Button>
        </div>
      </section>

      {/* Teams Section */}
      <section className="teams-section">
        <div className="teams-container">
          <div className="teams-header">
            <h2 className="teams-title">Our Teams</h2>
            <div className="teams-tabs">
              {teams.map((team, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTeam(idx)}
                  className={`team-tab ${activeTeam === idx ? 'active' : ''}`}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </div>

          <div className="team-display">
            <div className="team-image-wrapper" style={{ backgroundImage: `url(${teams[activeTeam].image})` }}>
              <div className="team-overlay"></div>
            </div>
            <div className="team-info">
              <h3 className="team-name">{teams[activeTeam].name}</h3>
              <div className="team-description">
                <p>Players: {teams[activeTeam].players}</p>
                <p>Achievement: {teams[activeTeam].achievements}</p>
              </div>
              <Button className="team-button">Team Details</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="matches-section">
        <div className="matches-container">
          <h2 className="section-title">Upcoming Matches</h2>
          <div className="matches-grid">
            {matches.map((match, idx) => (
              <Card key={idx} className="match-card">
                <CardContent className="match-card-content">
                  <div className="match-header">
                    <div className="match-title">FURIA vs {match.opponent}</div>
                    <div className="match-competition">{match.competition}</div>
                  </div>
                  <div className="match-date">
                    <Calendar className="match-icon" />
                    <span className="match-date-text">{match.date}</span>
                  </div>
                  <div className="match-actions">
                    <Button variant="outline" className="match-button-outline">Set Reminder</Button>
                    <Button className="match-button-fill">Watch</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="media-section">
        <div className="media-container">
          <div className="media-header">
            <h2 className="section-title">Media Gallery</h2>
            <Button variant="outline" className="media-button">
              View All <ChevronDown className="media-icon" />
            </Button>
          </div>
          <div className="media-grid">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="media-card">
                <div className="media-thumb" 
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?&auto=format&fit=crop&q=80&w=800)` }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-about">
            <img
              src="/lovable-uploads/8592197a-d9fc-4b86-8aa0-63492ccb0f54.png"
              alt="FURIA Logo"
              className="footer-logo"
            />
            <p className="footer-text">
              FURIA is a Brazilian esports organization with teams competing
              at the highest level across multiple games.
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-link-grid">
              {links.map((link, index) => (
                <a key={index} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          </div>
          <div className="footer-social">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-icons">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="social-icon" aria-label={icon}>
                  {icon}
                </a>
              ))}
            </div>
            <p className="footer-copy">© 2025 FURIA Esports. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="chat-button-wrapper">
        <button onClick={() => setIsChatOpen(true)} className="chat-button">
          <MessageSquare className="chat-icon" />
        </button>
      </div>

      <ChatDialog open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
};

export default Index;