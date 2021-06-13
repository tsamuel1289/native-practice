import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './Components/Inicio.js'
import Navigation from './Components/Navigation'
import NavLow from './Components/NavLow'

export default function App() {
  return (
    <View /* style={styles.container}*/ >
      <Navigation/>
      
      <Inicio/>
     <NavLow/>
      
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});   */
