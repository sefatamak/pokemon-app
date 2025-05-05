// PokemonCard component displays a card with name, image and handles press event.
// It is used in PokemonList to show each Pokemon.
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import {cardListScreenStyles} from '@/theme';
import type { PokemonCardProps } from '@/types';

export const PokemonCard = ({ name, image, onPress }: PokemonCardProps) => (
  <TouchableOpacity
    style={cardListScreenStyles.card}
    onPress={onPress}
    activeOpacity={0.85}
    accessibilityRole="button"
  >
    <Image source={{ uri: image }} style={cardListScreenStyles.image} contentFit="cover" />
    <Text style={cardListScreenStyles.name}>{name}</Text>
  </TouchableOpacity>
);
