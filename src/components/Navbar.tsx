
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Menu Button (Left) */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/lovable-uploads/8592197a-d9fc-4b86-8aa0-63492ccb0f54.png"
            alt="FURIA Bot Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation (Right) */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <Button className="bg-purple-500 hover:bg-purple-600">Try Now</Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4">
          <div className="flex flex-col items-center gap-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <Button className="bg-purple-500 hover:bg-purple-600">Try Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
