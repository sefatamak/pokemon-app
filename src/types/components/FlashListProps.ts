import { ListRenderItem } from '@shopify/flash-list';

export interface FlashListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  numColumns?: number;
  estimatedItemSize?: number;
  contentContainerStyle?: any;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  ListFooterComponent?: React.ReactElement | null;
  showsVerticalScrollIndicator?: boolean;
} 