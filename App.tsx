import 'react-native-gesture-handler';
import React, { FC } from 'react';
import Constants from 'expo-constants';
import { Providers } from "./src/Providers";
import { DrawerNavProps, DrawerParamList } from './src/DrawerParamList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';
//import { Routes } from "./Routes";

// import TopBar from './components/TopBar';
// import Cards from "./components/Cards";
// import Buttons from "./components/Buttons";
//import axios from 'axios';


/* const App: FC = () => {
  return (

      <View style={styles.container}>
        <TopBar></TopBar>
        <View style={styles.swipes}>
          <Cards />
        </View>
        <Buttons /> 
      </View> 
  );
} */



export default Providers;




/* const styles = StyleSheet.create({
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
}); */