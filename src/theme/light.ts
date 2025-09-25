import {palette, spacing, radius, typography} from './tokens';

export const lightTheme = {
  name: 'light' as const,
  dark: false,
  colors: {
    background: palette.white,
    surface: palette.gray100,
    text: palette.black,
    muted: '#6b7280',
    primary: palette.primary500,
    onPrimary: palette.white,
    border: palette.gray200,
    danger: palette.danger500,
    success: palette.success500,
    card: palette.white,
  },
  spacing,
  radius,
  typography,
};

export type AppTheme = typeof lightTheme;
