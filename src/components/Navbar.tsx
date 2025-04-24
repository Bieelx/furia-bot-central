
import { useState } from 'react';
import { Menu, X, ShoppingBag, Calendar, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Store", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Next Matches", icon: <Calendar className="w-5 h-5" /> },
    { name: "Teams", icon: <Users className="w-5 h-5" /> },
    { name: "Media", icon: <Camera className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed w-full z-50 glass-card px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Menu Button (Left) */}
        <button
          className="md:hidden text-[#f3f3f3]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation (Left) */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 2).map((item) => (
            <a 
              key={item.name}
              href="#" 
              className="group relative text-[#f3f3f3] flex items-center gap-2 px-1 py-2"
            >
              {item.icon}
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/lovable-uploads/8592197a-d9fc-4b86-8aa0-63492ccb0f54.png"
            alt="FURIA Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation (Right) */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.slice(2, 4).map((item) => (
            <a 
              key={item.name}
              href="#" 
              className="group relative text-[#f3f3f3] flex items-center gap-2 px-1 py-2"
            >
              {item.icon}
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Empty div to maintain symmetry on mobile */}
        <div className="md:hidden w-6"></div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4 border-t border-[#D4AF37]/20">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center gap-3 px-8 py-3 text-[#f3f3f3] hover:bg-[#D4AF37]/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <Button className="mx-8 mt-4 bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-[#1A1F2C]">
              Try Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
