import React from 'react';
import { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{game.title}</h3>
        <p className="mt-2 text-gray-400">{game.description}</p>
        <p className="mt-4 text-sm text-purple-400">{game.platform}</p>
      </div>
    </div>
  );
}