// src/theme/provider.tsx
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {Appearance, StatusBar, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {lightTheme, AppTheme} from './light';
import { darkTheme } from './dark';

export type ThemeMode = 'light' | 'dark' | 'system';
type ThemeValue = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  toggle: () => void;
  isDark: boolean;
  theme: AppTheme;
};

const KEY = 'app.theme.mode';
const Ctx = createContext<ThemeValue>({} as any);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const sys = useColorScheme(); // 'light' | 'dark' | null
  const [mode, setMode] = useState<ThemeMode>('system');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => { (async () => {
    const saved = (await AsyncStorage.getItem(KEY)) as ThemeMode | null;
    if (saved) setMode(saved);
    setHydrated(true);
  })(); }, []);

  useEffect(() => { if (hydrated) AsyncStorage.setItem(KEY, mode).catch(() => {}); }, [mode, hydrated]);

  useEffect(() => {
    if (mode !== 'system') return;
    const sub = Appearance.addChangeListener(() => { /* trigger re-render */ setMode(m => m); });
    return () => sub.remove();
  }, [mode]);

  const isDark = useMemo(() => mode === 'dark' || (mode === 'system' && sys === 'dark'), [mode, sys]);
  const theme  = useMemo<AppTheme>(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const value = useMemo<ThemeValue>(() => ({
    mode, setMode, toggle: () => setMode(m => (m === 'dark' ? 'light' : 'dark')), isDark, theme
  }), [mode, isDark, theme]);

  return (
    <Ctx.Provider value={value}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {children}
    </Ctx.Provider>
  );
};

export const useAppTheme = () => useContext(Ctx);
