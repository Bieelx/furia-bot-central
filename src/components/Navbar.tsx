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
    { name: "Loja",            icon: <ShoppingBag />, href: "https://furia.gg",   external: true },
    { name: "Próximos jogos",  icon: <Calendar />,   href: "#jogos",           external: false },
    { name: "Times",           icon: <Users />,      href: "#times",           external: false },
    { name: "Mídia",           icon: <Camera />,     href: "#media",           external: false },
  ];
  

  const renderLink = (item: typeof navItems[0]) => {
    // Se for link externo, abre em nova aba
    if (item.external) {
      return (
        <a
          key={item.name}
          href={item.href}
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
          <span>{item.name}</span>
          <span className="nav-underline"></span>
        </a>
      );
    }
    // Link interno (âncora)
    return (
      <a key={item.name} href={item.href} className="nav-link">
        {item.icon}
        <span>{item.name}</span>
        <span className="nav-underline"></span>
      </a>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botão mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Lado esquerdo (dois primeiros itens) */}
        <div className="nav-left">
          {navItems.slice(0, 2).map(renderLink)}
        </div>

        {/* Logo central */}
        <div className="nav-logo">
          <img src={furialogo} alt="FURIA Logo" className="logo-img" />
        </div>

        {/* Lado direito (dois últimos itens) */}
        <div className="nav-right">
          {navItems.slice(2).map(renderLink)}
        </div>

        <div className="mobile-space" />

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-links">
              {navItems.map(item => (
                <div key={item.name} onClick={() => setIsMenuOpen(false)}>
                  {renderLink(item)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;