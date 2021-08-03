import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react'
import { Center } from './Center';
import { Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from './AuthProvider';
import { HomeParamList, HomeStackNavProps } from './HomeParamList';
import { addProductRoutes } from './addProductRoutes';
import DashBoard from '../screens/Dashboard';


interface HomeStackProps {
    
}

const Stack = createStackNavigator<HomeParamList>();


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
        </Stack.Navigator>
    );
}
