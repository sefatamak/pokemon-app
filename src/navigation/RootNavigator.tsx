import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types';
import { PokemonListScreen, PokemonDetailScreen } from '@/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CardList" component={PokemonListScreen} options={{ title: 'Pokémon Cards' }} />
      <Stack.Screen name="CardDetail" component={PokemonDetailScreen} options={{ title: 'Card Detail' }} />
    </Stack.Navigator>
  );
} 