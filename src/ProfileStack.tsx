import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, Linking, StyleSheet,Button, FlatList,TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { AuthContext } from './AuthProvider';
import { ProfileParamList, ProfileStackNavProps } from './ProfileParamList';
import { DrawerNavProps, DrawerParamList } from './DrawerParamList';
import { Center } from './Center';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { AntDesign,FontAwesome5,Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonTab } from '../components/ButtonTabs';
import { Paper } from '@material-ui/core';
import tailwind from 'tailwind-rn';


interface ProfileStackProps {}

const Stack = createStackNavigator<ProfileParamList>();


function Profile({navigation} : ProfileStackNavProps<"Profile">) {
    const { colors } = useTheme();

    const buttonNames = [
        {name: "Courses", position: 1},
        {name: "About", position: 2},
        {name: "Peers", position: 3},
        {name: "Reviews", position: 4}
    ];

    return(
        <><View style={styles.container}>
            <Image
                source={require('../assets/musk.png')}
                style={styles.logo}
                resizeMode="stretch" />
        </View>
        <ButtonTab data={buttonNames}/>
        <SafeAreaView style={{flex: 3, justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent"}}>
                <ScrollView style={[styles.footer, {
                    backgroundColor: colors.background
                }]}>
                    <Animatable.View
                        animation="fadeInUpBig">

                        <View style={tailwind("flex flex-col items-center justify-center min-h-screen bg-center bg-cover")}>
                                <View style={tailwind('max-w-3xl w-full mx-auto z-4')}>
                                    <View style={tailwind('flex flex-col')}>
                                        <View style={tailwind('bg-white border border-white shadow-lg  rounded-3xl p-4 m-4')}>
                                            <View style={tailwind('flex-row sm:flex')}>
                                                <View style={tailwind('relative h-32 w-32   sm:mb-0 mb-1')}>
                                                    <Image style={tailwind(' w-32 h-32 object-cover rounded-2xl')} source={require('../assets/logo.png')}/>
                                                </View>
                                                <View style={tailwind('flex flex-row items-baseline')}>
                                                            <Text style={tailwind('text-lg text-gray-800 font-bold leading-none justify-start ml-8')}>
                                                            Introduction to Machine Learning</Text>
                                                    <View style={tailwind('flex pt-2 ml-12 text-sm text-gray-500 justify-end')}>
                                                        <TouchableOpacity style={tailwind('flex-no-shrink bg-gray-400 hover:bg-gray-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider hover:border-gray-500 text-black rounded-full transition ease-in duration-300')}>
                                                            GO TO COURSE
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                        </View>

                    </Animatable.View>
                </ScrollView>
            </SafeAreaView></>
);
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 4, 
        alignItems: "center",
        justifyContent: "center",
        top: 20,
        elevationLow: {
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,    
            },
            android: {
                elevation: 5,
            }
        }
      },
      logo: {
        width: height_logo,
        height: height_logo,
        alignItems: "center",
    },
      header: {
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
        fontFamily: "FiraSansCondensed_400Regular",
        color: "black",
        fontSize: 45,
        letterSpacing: 0,
        backgroundColor: "transparent",
        position: "absolute"
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
        position: 'relative',
    }
});


export const ProfileStack: React.FC<ProfileStackProps> = ({navigation}: ProfileStackNavProps<any>) => {
    //const {logout} = useContext(AuthContext);
    return (
        <Stack.Navigator 
            initialRouteName="Profile"
            screenOptions={{
                cardStyle: {backgroundColor: '#becdf0'}
            }}>
            <Stack.Screen 
                name='Profile' 
                component={Profile}
                options = {{
                    headerTitle: () => {
                        return (
                            <View style={{paddingTop:40}}>                                
                            <TouchableOpacity 
                            style={{alignSelf: "flex-end",justifyContent: "center"}} 
                            onPress={() => {navigation.navigate("Home")}}
                        >
                                <FontAwesome5 name="university" size="2em" color="#95b2f2"/>
                            </TouchableOpacity>
                            </View>
                        );
                    },
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerLeft: () => {
                        return (
                            <View style={{paddingTop: 40, paddingLeft: 20 }}>
                                <TouchableOpacity 
                                    style={{alignSelf: "flex-end",justifyContent: "center"}} 
                                    onPress={() => {navigation.navigate("Search")}}
                                >
                                    <AntDesign
                                    size={30}
                                    name="search1"
                                    color="rgb(50,53,62)"
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    },
                    headerRight: () => {
                        return (
                            <View style={{paddingTop: 40, paddingRight: 20 }}>
                                <TouchableOpacity 
                                    style={{alignSelf: "flex-end",justifyContent: "center"}} 
                                    onPress={() => {navigation.navigate("Swipe")}}
                                >
                                    <MaterialCommunityIcons
                                    size={30}
                                    name="cards-outline"
                                    color="rgb(50,53,62)"
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    }
                }}
            />
        </Stack.Navigator>
    );
}


