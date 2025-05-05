// This screen displays a list of Pokemon cards and handles pagination, error display, and loading state.
// It fetches cards from the state and passes them to the PokemonList component.

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { cardListScreenStyles } from '@/theme';
import { PokemonList } from '@/components/pokemon/PokemonList';
import { getCards } from '@/api';
import type { PokemonCard } from '@/types';

export const PokemonListScreen = () => {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchCards = async (pageNumber: number) => {
    try {
      setLoading(true);
      setError(null);
      const newCards = await getCards(pageNumber);
      if (newCards.length < 10) {
        setHasMore(false);
      }
      setCards(prevCards => [...prevCards, ...newCards]);
      setPage(prevPage => prevPage + 1);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cards.length === 0) {
      fetchCards(1);
    }
  }, []);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchCards(page);
    }
  };

  return (
    <View style={cardListScreenStyles.container}>
      {error && <Text style={cardListScreenStyles.errorText}>{error}</Text>}
      <PokemonList
        cards={cards}
        loadMore={loadMore}
        loading={loading}
      />
    </View>
  );
};
