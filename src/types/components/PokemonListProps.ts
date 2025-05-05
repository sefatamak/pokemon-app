import type { PokemonCard } from '../storeTypes';

export interface PokemonListProps {
  cards: PokemonCard[];
  loadMore: () => void;
  loading: boolean;
} 