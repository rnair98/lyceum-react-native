import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { DrawerContent } from "./DrawerContent";
import { AppTabs } from "./AppTabs"
import { HomeStack } from './HomeStack';
import { SwipeStack } from "./SwipeStack";
import { SearchStack } from "./SearchStack";
import { ProfileStack } from "./ProfileStack";

interface DrawerProps{}

const Drawer = createDrawerNavigator();

export const DrawerNav: React.FC<DrawerProps> = ({}) => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} 
                        screenOptions={{
                        headerShown: false,
                        drawerPosition: "right"   }}>
            <Drawer.Screen name="Tabs" component={AppTabs}/>
            <Drawer.Screen name="Profile" component={ProfileStack}/>
        </Drawer.Navigator>
    );
}