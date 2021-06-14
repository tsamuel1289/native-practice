import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './Components/Inicio.js'
import Navigation from './Components/Navigation'
import NavLow from './Components/NavLow'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

 const Stack = createStackNavigator()



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
