import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export type NavTheme = Theme & {
  colors: Theme['colors'] & { onPrimary: string };
};

export const NavLight: NavTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: lightTheme.colors.primary,
    background: lightTheme.colors.background,
    card: lightTheme.colors.card,
    text: lightTheme.colors.text,
    border: lightTheme.colors.border,
    notification: '#ef4444',
    onPrimary: lightTheme.colors.onPrimary,
  },
};

export const NavDark: NavTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: darkTheme.colors.primary,
    background: darkTheme.colors.background,
    card: darkTheme.colors.card,
    text: darkTheme.colors.text,
    border: darkTheme.colors.border,
    notification: '#f43f5e',
    onPrimary: darkTheme.colors.onPrimary,
  },
};
