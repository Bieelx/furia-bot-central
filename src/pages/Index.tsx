import { useState } from 'react';
import { Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import ChatDialog from '@/components/ChatDialog';
import TeamDetailsDialog from "@/components/TeamDetailsDialog";

import FuriaBanner from '../assets/FuriaBanner.webp';
import FuriaLogo from '../assets/FuriaLogo.svg'
import post1 from '../assets/Post1.jpeg';
import post2 from '../assets/post2.jpeg';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/post4.jpg';
import post5 from '../assets/post5.jpg';
import post6 from '../assets/post6.jpg';
import post7 from '../assets/post7.jpg';
import post8 from '../assets/post8.jpg';

import cs2banner from '../assets/Cs2Banner.webp';
import valorantbanner from '../assets/Valorant.jpg';
import lolbanner from '../assets/LolBanner.webp';

import twitter from '../assets/Xicon.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

import cs2_fallen from '../assets/jogadores/cs2_fallen.webp';
import cs2_kscerato from '../assets/jogadores/cs2_KSCERATO.webp';
import cs2_yuurih from '../assets/jogadores/cs2_yuurih.webp';
import cs2_molodoy from '../assets/jogadores/cs2_Molodoy.png';
import cs2_yekindar from '../assets/jogadores/cs2_yekindar.png';

import '../index.css';

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
      players: [
        { name: "KSCERATO", role: "Rifler", photo: cs2_kscerato },
        { name: "yuurih", role: "Rifler", photo: cs2_yuurih },
        { name: "FalleN", role: "AWPer / IGL", photo: cs2_fallen },
        { name: "Molodoy", role: "Support", photo: cs2_molodoy },
        { name: "Yekindar", role: "Entry", photo: cs2_yekindar }
      ],      
      achievements: "ESL Pro League Season 16 Champions",
      image: cs2banner
    },
    {
    name: "VALORANT",
    players: [
      { name: "dgzin", role: "Rifler", photo: cs2_yekindar },
      { name: "Quick", role: "Rifler", photo: cs2_yekindar},
      { name: "Khalil", role: "Rifler", photo: cs2_yekindar},
      { name: "Mazin", role: "Rifler", photo: cs2_yekindar},
      { name: "frz", role: "Rifler", photo: cs2_yekindar },
    ],
    achievements: "VCT Americas 2023 Finalists",
    image: valorantbanner
  },
  {
    name: "League of Legends",
    players: [
      { name: "Guigo", role: "Rifler", photo: cs2_yekindar },
      { name: "Tatu", role: "Rifler", photo: cs2_yekindar},
      { name: "Tutsz", role: "Rifler", photo: cs2_yekindar },
      { name: "Ayu", role: "Rifler", photo: cs2_yekindar},
      { name: "JoJo", role: "Rifler", photo: cs2_yekindar},
    ],
    achievements: "ALGS 2022 Split 2 Champions",
    image: lolbanner
  }
];

  const links = [
  { name: "Loja",           href: "https://furia.gg",   external: true  },
  { name: "Times",          href: "#times",             external: false },
  { name: "Próximos Jogos", href: "#jogos",             external: false },
  { name: "Galeria",        href: "#media",             external: false },
  ];

  const socialIcons = [
    { name: "X", img: twitter, url: "https://twitter.com/furia" },
    { name: "Instagram", img: instagram, url: "https://instagram.com/furiagg" },
    { name: "YouTube", img: youtube, url: "https://www.youtube.com/@FURIAgg" }
  ];
  
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);



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
          <Button className="cta-button">Explorar</Button>
        </div>
      </section>

      {/* Teams Section */}
      <section className="teams-section" id='times'>
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
                <p>  Jogadores: {teams[activeTeam].players.map(player => player.name).join(', ')}</p>
                <p>Prêmios: {teams[activeTeam].achievements}</p>
              </div>
              <Button className="team-button" onClick={() => setIsDetailsOpen(true)}>
                Mais detalhes
              </Button>

            </div>
          </div>
        </div>
      </section>

      <TeamDetailsDialog
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        players={teams[activeTeam].players.map(({ name, role, photo }) => ({ name, role, photo }))}
        teamName={teams[activeTeam].name}
      />

      

      {/* Upcoming Matches */}
      <section className="matches-section" id='jogos'>
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
      <section className="media-section" id='media'>
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
          
          {/* Logo */}
          <div className="footer-about">
            <img src={FuriaLogo} alt="FURIA Logo" className="footer-logo" />
          </div>

          {/* Links */}
          <div className="footer-links">
            <h3 className="footer-title">Links</h3>
            <div className="footer-link-grid">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="footer-link"
                  // se for externo, abre em nova aba
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3 className="footer-title">Siga FURIA</h3>
            <div className="footer-icons">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
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