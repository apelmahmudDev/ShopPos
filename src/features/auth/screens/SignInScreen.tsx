import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/types/navigation';
import { useAuth } from '@/context/AuthProvider';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const { signIn } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.mb16}>Sign in to continue</Text>
      <Button title="Sign In" onPress={() => signIn('demo-token')} />
      <View style={styles.h8} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('SignUp')}
      />
      <View style={styles.h8} />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  mb16: { marginBottom: 16 },
  h8: { height: 8 },
});
