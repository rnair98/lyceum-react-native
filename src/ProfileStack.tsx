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
import { ButtonTab } from '../components/ButtonTab';
import { Paper, Tab, Tabs } from '@material-ui/core';
import ProfileCard from '../components/ProfileCard.tsx';
import axios from '../axios';
import tailwind from 'tailwind-rn';
import {ScrollTab} from '../components/scrollTabs';



interface ProfileStackProps {}

const Stack = createStackNavigator<ProfileParamList>();


function Profile({navigation} : ProfileStackNavProps<"Profile">) {
    const { colors } = useTheme();

    const buttonNames = [
        {name: "Courses", position: 0},
        {name: "About", position: 1},
        {name: "Peers", position: 2},
        {name: "Groups", position: 3},
        {name: "Reviews", position: 4}
    ];

    const [courses, setCourses] = useState([]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    let selectedTab = null;

    const Views = [
        courses.map((course: { instructor: string; name: any; platform: any; imgUrl: any; url: any; affiliation: any; }) => {
            return course.instructor === "Andrew Ng" ?
                <ProfileCard 
                    name={course.name}
                    platform={course.platform}
                    instructor={course.instructor}
                    imgUrl={course.imgUrl}
                    url={course.url}
                    affiliation={course.affiliation}
                />
            : null
         } ),

        <>
        <View style={tailwind("flex-auto pb-4 mx-20")}>
            <Text style={tailwind("h3 text-left")}>About</Text>
            <Text style={tailwind("text-left")}>South African-born American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft. He was also one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla.</Text>
        </View>
        <View style={tailwind("flex-auto pb-4 mx-20")}>
            <Text style={tailwind("h3 text-left")}>Interests</Text>
            <Text style={tailwind("text-left")}>Blog Writing, Reading, Martial Arts, Meditation, Gaming, Backpacking, Listening to Podcasts/Audiobooks, Wilderness Exploration, Photography, Street Food, Exploring Other Cultures, Chess, Languages, Puzzles, Movies, Stand-Up Comedy, Writing, Basketball</Text>
        </View>
        <View style={tailwind("flex-auto pb-4 mx-20 text-left")}>
         <Text style={tailwind("h3")}>Contact</Text>
         <Text>Twitter</Text>
        </View> 
        </>,
        <></>,
        <></>,
        <></>,

    ]

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/lyceum/cards');
            
            setCourses(req.data)
        }

        fetchData();
    }, []); 


    return(
        <>
        <View style={styles.container}>
            <Image
                source={require('../assets/musk.png')}
                style={styles.logo}
                resizeMode="stretch" />
            <Text style={styles.header}>@elonmusk</Text>
        </View>
        <ScrollTab data={buttonNames} views={Views}/>
        </>
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
        fontSize: 25,
        letterSpacing: 1,
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

