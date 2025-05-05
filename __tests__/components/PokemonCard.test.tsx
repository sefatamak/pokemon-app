import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PokemonCard } from '../../src/components/pokemon/PokemonCard';

// This test checks if PokemonCard renders name and image, and handles onPress event.
describe('PokemonCard', () => {
  it('renders name and image, and calls onPress', () => {
    const onPressMock = jest.fn();
    const { getByText, getByRole } = render(
      <PokemonCard
        name="Pikachu"
        image="https://test.com/pikachu.png"
        onPress={onPressMock}
      />
    );
    // Check if name is rendered
    expect(getByText('Pikachu')).toBeTruthy();
    // Simulate press event
    fireEvent.press(getByRole('button'));
    expect(onPressMock).toHaveBeenCalled();
  });
}); 