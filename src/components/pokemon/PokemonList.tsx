// PokemonList component displays a list of Pokemon cards using AppFlashList.
// It handles loading state and navigation to CardDetail screen.

import { AppFlashList } from "../common/AppFlashList"
import type { PokemonCard as PokemonCardType } from '@/types';
import { PokemonCard } from "./PokemonCard";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@/constants";
import { cardListScreenStyles } from "@/theme";
import type { PokemonListProps } from '@/types/components';
import { ActivityIndicator } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/types';

// Renders a list of PokemonCard components and handles navigation.
export const PokemonList = ({ cards, loadMore, loading }: PokemonListProps) => {
    // useNavigation is used to navigate to CardDetail screen when a card is pressed.
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <AppFlashList<PokemonCardType>
            data={cards}
            renderItem={({ item }: { item: PokemonCardType }) => (
                <PokemonCard
                    name={item.name}
                    image={item.images.small}
                    onPress={() => navigation.navigate(routes.CardDetail, { id: item.id })}
                />
            )}
            keyExtractor={(item: PokemonCardType) => item.id}
            numColumns={2}
            estimatedItemSize={220}
            contentContainerStyle={cardListScreenStyles.listContent}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
            showsVerticalScrollIndicator={false}
        />
    )
}