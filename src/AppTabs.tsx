import * as React from 'react';
import { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppParamList } from './AppParamList';
import { AntDesign,FontAwesome,Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeStack } from './HomeStack';
import { Search, SearchStack } from './SearchStack';
import { Swipe, SwipeStack } from './SwipeStack';
import { ProfileStack } from './ProfileStack';
import DashBoard from '../screens/Dashboard';


interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>()


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
                    } else if (route.name === 'Swipe') {
                        iconName = "cards-outline";
                        return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
                    } 
                    
                    // else if (route.name === 'Profile'){
                    //     iconName = "ios-person-outline";
                    //     return <Ionicons name={iconName} size={size} color={color}/>
                    // }
                    // You can return any component that you like here!
                },
                activeTintColor: '#577fc0',
                inactiveTintColor: 'gray',
            })}   
        >
            <Tabs.Screen 
                name='Home' 
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}/>
            <Tabs.Screen 
                name='Swipe' 
                component={SwipeStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}/>
            <Tabs.Screen 
                name='Search' 
                component={SearchStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}/>
            {/* <Tabs.Screen 
                name='Profile' 
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                }}/> */}
            
        </Tabs.Navigator>
    );
}