export interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  types?: string[];
  hp?: string;
  abilities?: { name: string; text: string }[];
}

export interface CardsState {
  favorites: string[];
} 