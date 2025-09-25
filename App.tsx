// App.tsx
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
// import {ThemeProvider, useAppTheme} from '@/theme';
// import {NavDark, NavLight} from '@/theme/navThemes';
// import RootNavigator from '@/navigation/RootNavigator';
import { ThemeProvider, useAppTheme } from '@theme/index';
import { NavDark, NavLight } from '@theme/navThemes';
import { Text } from 'react-native';

function AppNav() {
  const {isDark} = useAppTheme();
  return (
    <NavigationContainer theme={isDark ? NavDark : NavLight}>
      {/* <RootNavigator /> */}
      <Text>Hi there Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque itaque unde facilis modi soluta voluptatum aspernatur placeat nisi dicta? Voluptatum porro necessitatibus commodi sed deserunt suscipit accusantium, numquam beatae distinctio.</Text>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppNav />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
