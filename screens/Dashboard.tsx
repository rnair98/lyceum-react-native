import * as React from 'react';
import { FC, useContext } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { HomeParamList, HomeStackNavProps } from '../src/HomeParamList';
import {
    useFonts,
    Roboto_400Regular,
    FiraSansCondensed_400Regular
} from "@expo-google-fonts/dev";

function DashBoard ({navigation}:HomeStackNavProps<'Dash'>) {

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        FiraSansCondensed_400Regular
      });
    
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/dash.png')} style={styles.backgroundImage}/>
          <StatusBar backgroundColor='#009387' barStyle="dark-content"/>
        <View style={styles.header}>
            <Text style={[styles.title, {
                    color: colors.text
                }]}>Dashboard</Text>
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={styles.text}>Insert Dashboard here.</Text>
            <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('Feed')}>
                {/* <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                > */}
                    <Text style={styles.textSign}>All Courses</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                {/* </LinearGradient> */}
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default DashBoard;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 2, 
  },
  backgroundImage: {
    flex: 2,
    width:"100%",
    height:"100%",
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20,
    fontFamily: "FiraSansCondensed_400Regular",
    color: "black",
    fontSize: 45,
    letterSpacing: 0
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      backgroundColor: 'blue',
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});


