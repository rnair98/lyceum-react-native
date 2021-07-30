import * as React from 'react';
import { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppParamList } from './AppParamList';
import { AntDesign,FontAwesome,Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeStack } from './HomeStack';
import { SearchStack } from './SearchStack';
import { SwipeStack } from './SwipeStack';


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

                    // You can return any component that you like here!
                },
            })}
            tabBarOptions={{
                activeTintColor: '#577fc0',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Home' component={HomeStack}/>
            <Tabs.Screen name='Swipe' component={SwipeStack}/>
            <Tabs.Screen name='Search' component={SearchStack}/>
            
        </Tabs.Navigator>
    );
}