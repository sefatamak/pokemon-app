import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PokemonDetailCardBox } from '../../src/components/pokemon/PokemonDetailCardBox';

// This test checks if CardDetailBox renders props and handles favorite toggle.
describe('PokemonDetailCardBox', () => {
  it('renders all props and toggles favorite', () => {
    const onToggleFavoriteMock = jest.fn();
    const { getByText } = render(
      <PokemonDetailCardBox
        name="Squirtle"
        image="https://test.com/squirtle.png"
        types={['Water']}
        hp="50"
        abilities={[{ name: 'Bubble', text: 'Does something' }]}
        isFavorite={false}
        onToggleFavorite={onToggleFavoriteMock}
      />
    );
    // Check if name and type are rendered
    expect(getByText('Squirtle')).toBeTruthy();
    expect(getByText('Water')).toBeTruthy();
    expect(getByText('Bubble: Does something')).toBeTruthy();
    // Simulate favorite button press
    fireEvent.press(getByText('☆ Save Card'));
    expect(onToggleFavoriteMock).toHaveBeenCalled();
  });
}); 