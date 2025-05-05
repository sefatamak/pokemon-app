import React from 'react';
import { FlashList } from '@shopify/flash-list';
import type { FlashListProps } from '@/types';

export const AppFlashList = <T,>(props: FlashListProps<T>) => {
  return <FlashList {...props} />;
}