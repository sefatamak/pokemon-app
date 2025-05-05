// CardDetailBox component displays detailed information about a Pokemon card.
// It shows name, image, types, hp, abilities and allows toggling favorite state.

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import {cardDetailScreenStyles} from '@/theme';
import { PokemonDetailCardBoxProps } from '@/types';

// Renders detailed card info and favorite button.
export const PokemonDetailCardBox = ({ name, image, types, hp, abilities, isFavorite, onToggleFavorite }: PokemonDetailCardBoxProps) => (
  <View style={cardDetailScreenStyles.cardBox}>
    <Image
      source={{ uri: image }}
      style={cardDetailScreenStyles.image}
      contentFit="cover"
      cachePolicy="memory-disk"
      transition={300}
      priority="high"
    />
    <Text style={cardDetailScreenStyles.name}>{name}</Text>
    <Text style={cardDetailScreenStyles.label}>Type: <Text style={cardDetailScreenStyles.value}>{types?.join(', ') || '-'}</Text></Text>
    <Text style={cardDetailScreenStyles.label}>HP: <Text style={cardDetailScreenStyles.value}>{hp || '-'}</Text></Text>
    <Text style={cardDetailScreenStyles.label}>Skills:</Text>
    {abilities?.length ? abilities.map((a, i) => (
      <Text key={i} style={cardDetailScreenStyles.ability}>{a.name}: {a.text}</Text>
    )) : <Text style={cardDetailScreenStyles.ability}>-</Text>}
    {/* Favorite button toggles the saved state of the card */}
    <Pressable
      style={({ pressed }) => [
        cardDetailScreenStyles.saveButton,
        { opacity: pressed ? 0.7 : 1 },
      ]}
      onPress={onToggleFavorite}
    >
      <Text style={cardDetailScreenStyles.saveButtonText}>
        {isFavorite ? '★ Remove Card' : '☆ Save Card'}
      </Text>
    </Pressable>
  </View>
);