// pokemonApi.ts
// API functions for fetching Pokemon cards and card details from the backend.

import { PokemonCard } from '@/types';
import { baseApi } from '../baseApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Fetch a paginated list of Pokemon cards from the API.
 * @param page - The page number to fetch.
 * @returns Promise<PokemonCard[]>
 */
export const getCards = async (page: number): Promise<PokemonCard[]> => {
  const pageSize = 10;
  const response = await baseApi.get(`/cards?page=${page}&pageSize=${pageSize}`);
  return response.data.data as PokemonCard[];
};

/**
 * Fetch the details of a single Pokemon card by its ID.
 * @param id - The ID of the Pokemon card.
 * @returns Promise<PokemonCard>
 */
export const getCardDetail = async (id: string): Promise<PokemonCard> => {
  const response = await baseApi.get(`/cards/${id}`);
  return response.data.data as PokemonCard;
};

// Async thunk for fetching a page of cards
export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (page: number, { rejectWithValue }) => {
    try {
      return await getCards(page);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching details of a single card
export const fetchCardDetail = createAsyncThunk(
  'cards/fetchCardDetail',
  async (id: string, { rejectWithValue }) => {
    try {
      return await getCardDetail(id);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);