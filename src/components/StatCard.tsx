import React from 'react';
import { Stat } from '../data/stats';

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;
  return (
    <div className="text-center">
      <Icon className="mx-auto h-12 w-12 text-purple-500" />
      <p className="mt-4 text-3xl font-extrabold text-white">
        {stat.value}
      </p>
      <p className="mt-2 text-lg text-gray-400">{stat.label}</p>
    </div>
  );
}