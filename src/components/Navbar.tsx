import { useState } from 'react';
import { Menu, X, ShoppingBag, Calendar, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '../css/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Store", icon: <ShoppingBag className="nav-icon" /> },
    { name: "Next Matches", icon: <Calendar className="nav-icon" /> },
    { name: "Teams", icon: <Users className="nav-icon" /> },
    { name: "Media", icon: <Camera className="nav-icon" /> },
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
            src="/lovable-uploads/8592197a-d9fc-4b86-8aa0-63492ccb0f54.png"
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
            <Button className="mobile-cta">Try Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;