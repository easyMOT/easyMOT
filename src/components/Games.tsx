import React from 'react';
import { games } from '../data/games';
import { GameCard } from './GameCard';

export function Games() {
  return (
    <section id="jeux" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nos Jeux
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Découvrez notre collection de jeux innovants
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}