import React from 'react';
import { StyleSheet,Text,View, Image, TouchableOpacity,Button, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  useFonts,
  Roboto_400Regular,
  FiraSansCondensed_400Regular
} from "@expo-google-fonts/dev";
import { AuthNavProps, AuthParamList } from '../src/AuthParamList';


function SplashScreen({
  navigation,
  route,
}:AuthNavProps<'Splash'>) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    FiraSansCondensed_400Regular
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/shape1.png')} style={styles.image} /> 
      <View style={styles.textContainer}>
        <Text style={styles.title}>lyceum</Text>
        <Text style={styles.text1}>find your next course</Text>
          <View style={styles.overlapGroup}>
            <Pressable style={styles.rectangle2} onPress={() => {
              navigation.navigate('Login');
              }}>
               <Text style={styles.valignTextMiddle}>Get Started</Text>
              <MaterialIcons
                style={styles.icon}
                name="navigate-next"
                color="#fff"
                size={20}
              />
            </Pressable>
          </View>
      </View>
      <Image source={require('../assets/rectangle1.png')} style={styles.rectangle1} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -15,
    right: -20,
    width: 140,

  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
  title: {
    fontFamily: "FiraSansCondensed_400Regular",
    color: "black",
    fontSize: 45,
    letterSpacing: 0,
    textAlign: "center",
    marginBottom: 20,
  },
  text1: {
    fontSize: 15,
    color: '#000000',

  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },
  rectangle1: {
    height: 600,
    width: 500,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  overlapGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 20,
  },
  rectangle2:{
    backgroundColor: "#577fc0",
    borderRadius: 40,
    height: 47,
    position: "relative",
    width: 245,
    display: 'flex',
    
  },
  valignTextMiddle: {
    fontFamily: "Roboto_400Regular",
    display: "flex",
    flexDirection: 'column',
    textAlign: "center",
    justifyContent: "space-between",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    position: "relative",
    width: 245,
    padding: 13,
  },
  icon: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    position: "absolute",
    marginLeft:165,
    marginTop:14,

  }
});

export default SplashScreen