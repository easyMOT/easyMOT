import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Games } from './components/Games';
import { Studio } from './components/Studio';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Games />
        <Studio />
        <Contact />
      </main>
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 PixelForge. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;