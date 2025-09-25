// App.tsx
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import { ThemeProvider } from '@theme/index';

export default function App() {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
