import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/types/navigation';
// import { useAuth } from '@/providers/AuthProvider';

// import SplashScreen from '@/screens/misc/SplashScreen';
import { useAuth } from '@/context/AuthProvider';
import AuthStack from './AuthStack';
import AppDrawer from './AppDrawer';
import SplashScreen from '@/features/misc/screens/SplashScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <SplashScreen />;

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <RootStack.Screen name="App" component={AppDrawer} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStack} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
