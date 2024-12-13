import React from 'react';

export function Hero() {
  return (
    <div id="accueil" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
          alt="Gaming Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Créons l'avenir du</span>
            <span className="block text-purple-500">Gaming Ensemble</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Nous créons des expériences de jeu immersives et innovantes qui repoussent les limites de l'imagination.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a href="#jeux" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                Découvrir nos jeux
              </a>
              <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}