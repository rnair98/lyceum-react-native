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
    ImageBackground,
    SafeAreaView,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { HomeParamList, HomeStackNavProps } from '../src/HomeParamList';
import {
    useFonts,
    Roboto_400Regular,
    FiraSansCondensed_400Regular,
    FiraSansCondensed_300Light,
    Ubuntu_400Regular
} from "@expo-google-fonts/dev";
import { Center } from '../src/Center';
import AppleHeader from "react-native-apple-header";
import { DrawerNavProps } from '../src/DrawerParamList';
import CarouselCards from '../components/CarouselCards';
import DashCards from '../components/DashCards';
import { ButtonTab } from '../components/ButtonTab';
import { ScrollTab } from '../components/scrollTabs';


function DashBoard ({navigation}:DrawerNavProps<any>) {

    function cards(likes: boolean){
        return (
            <>
            <DashCards likes={likes}/>
            <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('Swipe')}>
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
            </>
        );
    }

    const Views = [<></>,cards(true),cards(false),cards(false),cards(false)];

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        FiraSansCondensed_400Regular,
        FiraSansCondensed_300Light,
        Ubuntu_400Regular
      });
    
    const { colors } = useTheme();
    const buttonNames = [
        {name: "Matches", position: 0},
        {name: "Courses I Like", position: 1},
        {name: "Top 10 Courses", position: 2},
        {name: "Recommended Courses", position: 3},
        {name: "Courses Popular with Friends", position: 4}
    ];

    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/dash.png')} style={styles.backgroundImage}/> 
        <AppleHeader
            imageSource={{
                uri: "http://dev.villanovaice.com/wp-content/uploads/2015/02/Elon-Musk-300x300.jpg",
                }}
            dateTitle="WEDNESDAY, 28 JULY"
            dateTitleStyle={{
                fontFamily: "FiraSansCondensed_300Light",
                marginLeft: 3,
            }}
            largeTitle="DashBoard"
            largeTitleStyle = {{
                color: "#333333",
                fontFamily: "FiraSansCondensed_400Regular",
                fontSize: 40,
                letterSpacing: 0,
                width: "251px",
            }}
            containerStyle={{
                backgroundColor: "transparent", 
                flexDirection: 'row',
                padding: 20,
                alignItems: "flex-start",
                justifyContent: "space-between",
                bottom: 101,}}

            onPress={navigation.openDrawer}
        />
        <CarouselCards/>

        <ScrollTab data={buttonNames} views={Views}/>
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
    flex: 1,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: "FiraSansCondensed_400Regular",
    color: "black",
    fontSize: 45,
    letterSpacing: 0,
    backgroundColor: "transparent",
    position: "relative"
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingVertical: 50,
      paddingHorizontal: 40,
      width: "90%",
      flexDirection: 'column',
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
      marginTop: 30,
  },
  signIn: {
      backgroundColor: '#05375a',
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


