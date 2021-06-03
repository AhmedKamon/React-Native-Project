import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './Components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
      name={'Tesla X'} 
      tagLine={'Starting from 1000$'}
      taglineCta={'Touchless Delivery'}
      image={require('./assets/image/img3.jpg')}
      ></CarItem>
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
