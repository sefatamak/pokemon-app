import { StyleSheet } from 'react-native';
import colors from '../colors';
import tokens from '../tokens';

export const cardDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: tokens.spacingM,
    backgroundColor: colors.background,
  },
  cardBox: {
    backgroundColor: colors.card,
    borderRadius: tokens.borderRadiusL,
    padding: tokens.spacingL,
    alignItems: 'center',
    width: '100%',
    ...tokens.shadow,
  },
  image: {
    width: 220,
    height: 320,
    borderRadius: tokens.borderRadiusM,
    marginBottom: tokens.spacingM,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: tokens.spacingS,
    color: colors.text,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: tokens.spacingS,
    color: colors.gray,
  },
  value: {
    color: colors.text,
    fontWeight: 'normal',
  },
  ability: {
    fontSize: 14,
    marginBottom: tokens.spacingXS,
    color: colors.text,
  },
  status: {
    marginTop: tokens.spacingS,
    color: colors.success,
  },
  favoriteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: tokens.spacingM,
    justifyContent: 'center',
  },
  favStatusActive: {
    backgroundColor: colors.success,
    borderRadius: tokens.borderRadiusS,
    paddingHorizontal: tokens.spacingM,
    paddingVertical: tokens.spacingXS,
  },
  favStatusInactive: {
    backgroundColor: colors.gray,
    borderRadius: tokens.borderRadiusS,
    paddingHorizontal: tokens.spacingM,
    paddingVertical: tokens.spacingXS,
  },
  favStatusTextActive: {
    color: colors.card,
    fontWeight: 'bold',
    fontSize: 16,
  },
  favStatusTextInactive: {
    color: colors.card,
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: tokens.borderRadiusS,
    paddingVertical: tokens.spacingS,
    paddingHorizontal: tokens.spacingL,
    marginTop: tokens.spacingS,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
  },
  saveButtonText: {
    color: colors.card,
    fontWeight: 'bold',
    fontSize: 16,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 2,
  },
});