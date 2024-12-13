import React from 'react';
import { stats } from '../data/stats';
import { StatCard } from './StatCard';

export function Studio() {
  return (
    <section id="studio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Notre Studio
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Une équipe passionnée dédiée à la création d'expériences uniques
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="relative lg:flex lg:items-center">
              <div className="relative lg:w-1/2">
                <blockquote>
                  <p className="text-xl font-medium text-white">
                    "Notre mission est de créer des jeux qui inspirent, divertissent et rassemblent les joueurs du monde entier. Chaque projet est une nouvelle aventure qui nous permet de repousser les limites de la créativité."
                  </p>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-purple-500">Marie Dubois</p>
                    <p className="text-base text-gray-400">Directrice Créative</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}