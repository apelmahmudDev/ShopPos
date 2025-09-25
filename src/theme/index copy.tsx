import React, {createContext, useContext, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {lightTheme} from './light';
import {darkTheme} from './dark';

const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const scheme = useColorScheme();
  const theme = useMemo(() => (scheme === 'dark' ? darkTheme : lightTheme), [scheme]);
console.log('theme', theme)
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
