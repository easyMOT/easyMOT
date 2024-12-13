import { Users, Trophy, Code, Gamepad } from 'lucide-react';

export interface Stat {
  icon: typeof Users;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: Users, label: "Employés", value: "150+" },
  { icon: Trophy, label: "Prix Gagnés", value: "25+" },
  { icon: Code, label: "Lignes de Code", value: "1M+" },
  { icon: Gamepad, label: "Jeux Publiés", value: "12" },
];