import * as React from 'react';
import { useContext, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from '../screens/Splash';
import LoginScreen from "../screens/Login";
import { AuthParamList } from './AuthParamList';
import { Center } from './Center';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';
import { DrawerNav } from './DrawerNav';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        // check if the user is logged in or not
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    login();
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    } 

    return (
        <NavigationContainer>
            {user ? <AppTabs /> && <DrawerNav/> : <AuthStack />}
        </NavigationContainer>
    );
};

