import React from 'react';
import { Gamepad, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Gamepad className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-white text-xl font-bold">PixelForge</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#accueil" className="text-gray-300 hover:text-white px-3 py-2">Accueil</a>
              <a href="#jeux" className="text-gray-300 hover:text-white px-3 py-2">Nos Jeux</a>
              <a href="#studio" className="text-gray-300 hover:text-white px-3 py-2">Le Studio</a>
              <a href="#carrieres" className="text-gray-300 hover:text-white px-3 py-2">Carrières</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <a href="#accueil" className="text-gray-300 hover:text-white block px-3 py-2">Accueil</a>
            <a href="#jeux" className="text-gray-300 hover:text-white block px-3 py-2">Nos Jeux</a>
            <a href="#studio" className="text-gray-300 hover:text-white block px-3 py-2">Le Studio</a>
            <a href="#carrieres" className="text-gray-300 hover:text-white block px-3 py-2">Carrières</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}