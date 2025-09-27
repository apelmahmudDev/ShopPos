import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/types/navigation';
import SignInScreen from '@/features/auth/screens/SignInScreen';
import ForgotPasswordScreen from '@/features/auth/screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerTitle: 'Shop POS' }}>
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ title: 'Sign In' }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{ title: 'Reset Password' }}
    />
  </Stack.Navigator>
);

export default AuthStack;
