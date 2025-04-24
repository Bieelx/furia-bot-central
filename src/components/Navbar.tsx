
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-purple-500 to-yellow-300" />
          <span className="font-bold text-xl">FURIA Bot</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Features", "How it Works", "Try Now"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4">
          <div className="flex flex-col items-center gap-4">
            {["About", "Features", "How it Works", "Try Now"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
