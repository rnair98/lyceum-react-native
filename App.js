import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, createStackNavigator } from '@react-navigation/native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
//import axios from 'axios';

/* const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TopBar} />
    </Stack.Navigator>
  );
}; */


export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <TopBar></TopBar>
        <View style={styles.swipes}>
          <Cards />
        </View>
        <Buttons /> 
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});