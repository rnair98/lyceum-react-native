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
import ProfileCard from '../components/ProfileCard.tsx';
import axios from '../axios';



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

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/lyceum/cards');
            
            setCourses(req.data)
        }

        fetchData();
    }, []); 

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
                        <Center>

                        {courses.map(course => (
                            <ProfileCard name={course.name}
                ))}





                        </Center>
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


