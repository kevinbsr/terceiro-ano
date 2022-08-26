import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu app!</Text>
      <StatusBar style="auto" />
    <ScrollView>
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 24,
  },
});
