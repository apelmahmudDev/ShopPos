import {palette, spacing, radius, typography} from './tokens';

export const darkTheme = {
  name: 'dark' as const,
  dark: true,
  colors: {
    background: palette.black,
    surface: palette.gray800,
    text: '#e6e8ee',
    muted: '#9ca3af',
    primary: palette.primary300,
    onPrimary: palette.black,
    border: '#1f2937',
    danger: palette.danger500,
    success: palette.success500,
    card: '#0f172a',
  },
  spacing,
  radius,
  typography,
};
