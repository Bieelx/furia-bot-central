import { useState } from 'react';
import { Menu, X, ShoppingBag, Calendar, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '../css/navbar.css';
import { url } from 'node:inspector';
import { Link } from "react-router-dom";
import furialogo from '../assets/FuriaLogo.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Loja", icon: <ShoppingBag className="nav-icon" />, href: "https://furia.gg" },
    { name: "Próximos jogos", icon: <Calendar className="nav-icon" />, href: "#jogos" },
    { name: "Times", icon: <Users className="nav-icon" />, href: "#times" },
    { name: "Mídia", icon: <Camera className="nav-icon" />, href: "#media" },
  ];
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="nav-left">
          {navItems.slice(0, 2).map((item) => (
            <a key={item.name} href="#" className="nav-link">
              {item.icon}
              <span>{item.name}</span>
              <span className="nav-underline"></span>
            </a>
          ))}
        </div>

        <div className="nav-logo">
          <img
            src= {furialogo}
            alt="FURIA Logo"
            className="logo-img"
          />
        </div>

        <div className="nav-right">
          {navItems.slice(2, 4).map((item) => (
            <a key={item.name} href="#" className="nav-link">
              {item.icon}
              <span>{item.name}</span>
              <span className="nav-underline"></span>
            </a>
          ))}
        </div>

        <div className="mobile-space"></div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;