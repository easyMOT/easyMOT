export interface Game {
  title: string;
  image: string;
  description: string;
  platform: string;
}

export const games: Game[] = [
  {
    title: "Cyber Odyssey",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    description: "Une aventure cyberpunk épique dans un monde ouvert futuriste.",
    platform: "PC, PS5, Xbox Series X"
  },
  {
    title: "Forest Kingdom",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80",
    description: "Un RPG magique dans un royaume mystérieux.",
    platform: "PC, Nintendo Switch"
  },
  {
    title: "Speed Racers",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80",
    description: "Course futuriste à grande vitesse avec des véhicules personnalisables.",
    platform: "Toutes plateformes"
  }
];