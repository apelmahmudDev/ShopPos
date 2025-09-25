// src/screens/Home.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {useTheme as useNavTheme} from '@react-navigation/native';
import { useAppTheme } from '@theme/index';

export default function Product() {
  const nav = useNavTheme();
  const {theme} = useAppTheme();

  return (
    <View style={{flex:1, backgroundColor: nav.colors.background, padding: theme.spacing.lg}}>
      <Text style={{color: nav.colors.text, fontSize: theme.typography.h1}}>Home</Text>
    </View>
  );
}
