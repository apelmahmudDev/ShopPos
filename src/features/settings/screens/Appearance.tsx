import { useAppTheme } from '@theme/index';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
const modes: ThemeMode[] = ['light','dark','system'];

export default function Appearance() {
  const {mode, setMode, toggle, theme} = useAppTheme();
  return (
    <View style={{flex:1, backgroundColor: theme.colors.background, padding: theme.spacing.md}}>
      <Text style={{color: theme.colors.text, fontSize: theme.typography.h2, marginBottom: theme.spacing.sm}}>Appearance</Text>
      <View style={{flexDirection:'row', gap: 8}}>
        {modes.map(m => (
          <Pressable key={m} onPress={()=>setMode(m)} style={{padding:10, borderWidth:1, borderColor: theme.colors.border, backgroundColor: m===mode ? theme.colors.surface : 'transparent'}}>
            <Text style={{color: theme.colors.text}}>{m.toUpperCase()}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable onPress={toggle} style={{marginTop: theme.spacing.lg}}>
        <Text style={{color: theme.colors.primary}}>Quick Toggle</Text>
      </Pressable>
    </View>
  );
}
