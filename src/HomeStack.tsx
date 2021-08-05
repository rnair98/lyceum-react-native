import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react'
import { Center } from './Center';
import { Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from './AuthProvider';
import { HomeParamList, HomeStackNavProps } from './HomeParamList';
import { addProductRoutes } from './addProductRoutes';
import DashBoard from '../screens/Dashboard';
import {ProfileStack} from '../src/ProfileStack';

interface HomeStackProps {
    
}

const Stack = createStackNavigator<HomeParamList>();


export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    const {logout} = useContext(AuthContext);
    return (
        <Stack.Navigator initialRouteName="Home">
            {addProductRoutes(Stack)}
            <Stack.Screen 
                name='Home'
                options = {{
                    headerShown: false
                }}
                component={DashBoard}
            />
            <Stack.Screen
                name='Profile'
                options = {{
                    headerShown: false
                }}
                component={ProfileStack}
            />
        </Stack.Navigator>
    );
}
