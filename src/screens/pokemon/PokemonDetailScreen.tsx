// This screen displays the details of a selected Pokemon card, including its image, types, HP, abilities, and favorite status.
// It fetches card details from the store and manages the favorite state using AsyncStorage.

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { addFavorite, removeFavorite } from '@/store';
import { RouteProp, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PokemonDetailCardBox } from '@/components';
import { cardDetailScreenStyles } from '@/theme';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { RootStackParamList } from '@/types';
import { getCardDetail } from '@/api';
import { RootState } from '@/store';

export const PokemonDetailScreen = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'CardDetail'>>();
  const { id } = route.params;
  const { favorites } = useAppSelector((state: RootState) => state.cards);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cardDetail, setCardDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCardDetail(id);
        setCardDetail(data);
      } catch (error) {
        console.error('Error fetching card detail:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    (async () => {
      const favs = await AsyncStorage.getItem('favorites');
      if (favs) {
        setIsFavorite(JSON.parse(favs).includes(id));
      }
    })();
  }, [id, favorites]);

  const handleToggleFavorite = async () => {
    let favs: string[] = [];
    const favStr = await AsyncStorage.getItem('favorites');
    if (favStr) favs = JSON.parse(favStr);
    if (isFavorite) {
      favs = favs.filter(fid => fid !== id);
      dispatch(removeFavorite(id));
    } else {
      favs.push(id);
      dispatch(addFavorite(id));
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favs));
    setIsFavorite(!isFavorite);
  };

  if (loading || !cardDetail) {
    return <ActivityIndicator size="large" style={cardDetailScreenStyles.container} />;
  }

  return (
    <View style={cardDetailScreenStyles.container}>
      <PokemonDetailCardBox
        name={cardDetail.name}
        image={cardDetail.images.large}
        types={cardDetail.types}
        hp={cardDetail.hp}
        abilities={cardDetail.abilities}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </View>
  );
};