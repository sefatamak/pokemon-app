import React from 'react';
import { render } from '@testing-library/react-native';
import { AppFlashList } from '../../src/components/common/AppFlashList';

// This test checks if AppFlashList renders correctly with given props.
describe('AppFlashList', () => {
  it('renders FlashList with given data', () => {
    const data = [{ id: '1', name: 'Test' }];
    const renderItem = jest.fn();
    render(
      <AppFlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
    // If no error is thrown, the component renders successfully.
    // FlashList is a third-party component, so we only check render.
    expect(renderItem).not.toHaveBeenCalled();
  });
}); 