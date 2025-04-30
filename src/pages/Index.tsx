import { useState } from 'react';
import { Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import ChatDialog from '@/components/ChatDialog';

import FuriaBanner from '../assets/FuriaBanner.webp';
import FuriaLogo from '../assets/FuriaLogo.svg'
import post1 from '../assets/post1.jpeg';
import post2 from '../assets/post2.jpeg';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/post4.jpg';
import post5 from '../assets/post5.jpg';
import post6 from '../assets/post6.jpg';
import post7 from '../assets/post7.jpg';
import post8 from '../assets/post8.jpg';

import cs2banner from '../assets/cs2banner.webp';
import valorantbanner from '../assets/valorant.jpg';
import lolbanner from '../assets/Lol Banner.webp';

import twitter from '../assets/Xicon.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

import '../Index.css';

const imagens = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8
];


const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);

  const matches = [
    { opponent: "G2", date: "28/04/2025", time: "18:00", competition: "ESL Pro League" },
    { opponent: "LOUD", date: "03/05/2025", time: "15:30", competition: "BLAST Premier" },
    { opponent: "NAVI", date: "10/05/2025", time: "20:00", competition: "IEM Cologne" }
  ];

  const teams = [
    {
      name: "CS2",
      players: "KSCERATO, yuurih, FalleN, Molodoy, Yekindar",
      achievements: "ESL Pro League Season 16 Champions",
      image: cs2banner
    },
    {
      name: "VALORANT",
      players: "dgzin, Quick, Khalil, Mazin, frz",
      achievements: "VCT Americas 2023 Finalists",
      image: valorantbanner
    },
    {
      name: "League of Legends",
      players: "Guigo, Tatu, Tutsz, Ayu, JoJo",
      achievements: "ALGS 2022 Split 2 Champions",
      image: lolbanner
    }
  ];

  const links = ["Loja", "Times", "Próximos Jogos", "Galeria"];
  const socialIcons = [
    { name: "X", img: twitter, url: "https://twitter.com/furia" },
    { name: "Instagram", img: instagram, url: "https://instagram.com/furiagg" },
    { name: "YouTube", img: youtube, url: "https://www.youtube.com/@FURIAgg" }
  ];
  

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
            <h2 className="teams-title">Nossos times</h2>
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
                <p>Jogadores: {teams[activeTeam].players}</p>
                <p>Prêmios: {teams[activeTeam].achievements}</p>
              </div>
              <Button className="team-button">Mais detalhes</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="matches-section">
        <div className="matches-container">
          <h2 className="section-title">Próximos jogos</h2>
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
                    <Button variant="outline" className="match-button-outline">Me lembre</Button>
                    <Button className="match-button-fill">Assistir</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="media-section">
        <div className="media-container">
          <div className="media-header">
            <h2 className="section-title">Galeria</h2>
            <Button variant="outline" className="media-button">
              Ver tudo <ChevronDown className="media-icon" />
            </Button>
          </div>
          <div className="media-grid">
            {imagens.map((imagem, idx) => (
              <div key={idx} className="media-card">
                <div
                  className="media-thumb"
                  style={{ backgroundImage: `url(${imagem})` }}
                ></div>
              </div>
            ))}
        </div>

        </div>
      </section>

{/* Footer */}
<footer className="footer-section">
  <div className="footer-container">
    
    {/* Logo da FURIA */}
    <div className="footer-about">
      <img
        src={FuriaLogo}
        alt="FURIA Logo"
        className="footer-logo"
      />
    </div>

    {/* Links */}
    <div className="footer-links">
      <h3 className="footer-title">Links</h3>
      <div className="footer-link-grid">
        {links.map((link, index) => (
          <a key={index} href="#" className="footer-link">
            {link}
          </a>
        ))}
      </div>
    </div>

    {/* Social Media */}
    <div className="footer-social">
      <h3 className="footer-title">Siga FURIA</h3>
      <div className="footer-icons">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={icon.name}
          >
            <img src={icon.img} alt={icon.name} className="social-img" />
          </a>
        ))}
      </div>
      <p className="footer-copy">© 2025 FURIA Esports. All rights reserved.</p>
    </div>

  </div>
</footer>


      {/* ChatBot botão*/}
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