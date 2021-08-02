import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react'
import { View, Button, FlatList, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { AuthContext } from './AuthProvider';
import faker from "faker";
import { addProductRoutes } from './addProductRoutes';
import DashBoard from '../screens/DashBoard';
import { SwipeParamList, SwipeStackNavProps } from './SwipeParamList';
import {FontAwesome5} from "@expo/vector-icons";
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';
import { DrawerNavProps, DrawerParamList } from './DrawerParamList';



interface SwipeStackProps {
}

const Stack = createStackNavigator<SwipeParamList>();


function Swipe({navigation} : SwipeStackNavProps<"Swipe">) {
    return (
        <View style={{backgroundColor: "transparent"}}>
            <Cards></Cards>
            <Buttons></Buttons>
        </View>
    );
}


export const SwipeStack: React.FC<SwipeStackProps> = ({navigation}: DrawerNavProps<"Drawer">) => {
    const {logout} = useContext(AuthContext);
    return (
        <Stack.Navigator 
            initialRouteName="Swipe"
            screenOptions={{
                cardStyle: {backgroundColor: '#becdf0'}
            }}>
            {addProductRoutes(Stack)}
            <Stack.Screen 
                name="Swipe"
                options = {{
                    headerTitle: () => {
                        return (
                            <FontAwesome5 name="university" size="2em" color="#95b2f2"/>
                        );
                    },
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerRight: () => {
                        return (
                            // <TouchableOpacity onPress={() => {logout()}}>
                            //     <Text style={ {paddingRight: 8 }}>LOGOUT</Text>
                            // </TouchableOpacity>

                            <TouchableOpacity style={{alignSelf: "center",justifyContent: "center",padding:10}} onPress={navigation.openDrawer}>
                                <Image 
                                    style={{height: 43,width: 43,borderRadius: 43 / 2}} 
                                    source={{uri: "http://dev.villanovaice.com/wp-content/uploads/2015/02/Elon-Musk-300x300.jpg"}}
                                />
                            </TouchableOpacity>
                        );
                    }
                }}
                component={Swipe}
            />
        </Stack.Navigator>
    );
}


