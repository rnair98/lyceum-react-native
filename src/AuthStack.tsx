import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginScreen from '../screens/Login';
import SplashScreen from '../screens/Splash';
import { AuthParamList } from './AuthParamList';

interface AuthStackProps{}


const Stack = createStackNavigator<AuthParamList>()

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" 
                options={{
                    headerTitleStyle: { alignSelf: 'center'},
                    headerTitle: "Welcome",
                    //header: () => null        
                }}
                component={SplashScreen} 
            />
            <Stack.Screen name="Login" 
                options={{
                    headerTitle: "Sign In",
                    header: () => null
                }}
                component={LoginScreen} 
            />
        </Stack.Navigator>
    );
}