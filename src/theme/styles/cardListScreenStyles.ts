import { StyleSheet } from 'react-native';
import colors from '../colors';
import tokens from '../tokens';

export const cardListScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: tokens.spacingM,
  },
  listContent: {
    paddingBottom: tokens.spacingL,
  },
  card: {
    flex: 1,
    margin: tokens.spacingXS,
    backgroundColor: colors.card,
    borderRadius: tokens.borderRadiusM,
    padding: tokens.spacingM,
    ...tokens.shadow,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: tokens.borderRadiusS,
    marginBottom: tokens.spacingS,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
    marginVertical: tokens.spacingM,
  },
});
