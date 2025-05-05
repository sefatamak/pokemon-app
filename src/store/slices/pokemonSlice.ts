// Redux slice for managing Pokemon cards, card details, favorites, and async actions for fetching data.

import { createSlice } from '@reduxjs/toolkit';
import type { CardsState } from '@/types/storeTypes';

const initialState: CardsState = {
  favorites: [],
};

const pokemonSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer; 