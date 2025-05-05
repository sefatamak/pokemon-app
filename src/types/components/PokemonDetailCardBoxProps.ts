export interface PokemonDetailCardBoxProps {
  name: string;
  image: string;
  types?: string[];
  hp?: string;
  abilities?: { name: string; text: string }[];
  isFavorite: boolean;
  onToggleFavorite: () => void;
} 