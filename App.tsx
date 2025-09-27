// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
// import {ThemeProvider, useAppTheme} from '@/theme';
// import {NavDark, NavLight} from '@/theme/navThemes';
// import RootNavigator from '@/navigation/RootNavigator';
import { ThemeProvider, useAppTheme } from '@theme/index';
import { NavDark, NavLight } from '@theme/navThemes';
import { Text, View } from 'react-native';

function AppNav() {
  const { isDark } = useAppTheme();
  return (
    <NavigationContainer theme={isDark ? NavDark : NavLight}>
      {/* <RootNavigator /> */}
      <View
        style={{
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 24 }}>Shop Pos</Text>
      </View>
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
