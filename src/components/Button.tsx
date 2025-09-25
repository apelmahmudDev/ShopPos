import { useAppTheme } from '@theme/index';
import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

export function Button({title, onPress}:{title:string; onPress:()=>void}) {
  const {theme} = useAppTheme();
  return (
    <Pressable onPress={onPress} style={[s.btn, { backgroundColor: theme.colors.primary, borderRadius: theme.radius.md }]}>
      <Text style={[s.txt, { color: theme.colors.onPrimary, fontSize: theme.typography.body }]}>{title}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({ btn:{ paddingVertical:12, alignItems:'center' }, txt:{ fontWeight:'600' }});
