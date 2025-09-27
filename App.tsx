import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavContainer from '@/navigation';
import { AuthProvider } from '@/context/AuthProvider';
import { StyleSheet } from 'react-native';

const App: React.FC = () => (
  <GestureHandlerRootView style={styles.container}>
    <SafeAreaProvider>
      <AuthProvider>
        <NavContainer />
      </AuthProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
