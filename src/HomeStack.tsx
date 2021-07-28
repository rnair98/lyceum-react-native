import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Center } from './Center';
import { Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from './AuthProvider';
import faker from "faker";
import { HomeParamList, HomeStackNavProps } from './HomeParamList';
import { addProductRoutes } from './addProductRoutes';
import DashBoard from '../screens/DashBoard';


interface HomeStackProps {
    
}

const Stack = createStackNavigator<HomeParamList>();

function Feed({navigation} : HomeStackNavProps<"Feed">) {
    return (
        <Center>
            <FlatList 
                style={{width: "100%"}}
                renderItem={({ item }) => {
                    return (
                        <Button title={item} onPress={() => {
                            navigation.navigate("Product",{
                                name: item
                            });
                        }}/>
                    );
                }}
                keyExtractor={(product, idx) => product + idx}
                data = {Array.from(Array(50), () => faker.commerce.product())}
            />
        </Center>
    );
}


export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    const {logout} = useContext(AuthContext);
    return (
        <Stack.Navigator initialRouteName="Dash">
            {addProductRoutes(Stack)}
            <Stack.Screen 
                name='Dash'
                options = {{
                    headerShown: false
                }}
                component={DashBoard}
            />
            <Stack.Screen 
                name='Feed'
                options = {{
                    headerTitleStyle: { alignSelf: 'center', marginLeft: 55},
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => {logout()}}>
                                <Text style={ {paddingRight: 8 }}>LOGOUT</Text>
                            </TouchableOpacity>
                        );
                    }
                }}
                component={Feed}
            />
        </Stack.Navigator>
    );
}
