import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppParamList } from './AppParamList';
import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { AntDesign,FontAwesome,Ionicons } from "@expo/vector-icons";
import { HomeStack } from './HomeStack';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>()

function Search() {
    return (
        <Center>
            <Text>search</Text>
        </Center>
    );
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
    return(
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = "home";
                        return <AntDesign name={iconName} size={size} color={color}/>;
                    } else if (route.name === 'Search') {
                        iconName = "search1";
                        return <AntDesign name={iconName} size={size} color={color} />
                    }

                    // You can return any component that you like here!
                },
            })}
            tabBarOptions={{
                activeTintColor: '#577fc0',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Home' component={HomeStack}/>
            <Tabs.Screen name='Search' component={Search}/>
        </Tabs.Navigator>
    );
}