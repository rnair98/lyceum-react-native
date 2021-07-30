import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { DrawerContent } from "./DrawerContent";
import { AppTabs } from "./AppTabs"

interface DrawerProps{}

const Drawer = createDrawerNavigator();

export const DrawerNav: React.FC<DrawerProps> = ({}) => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} drawerPosition="right">
            <Drawer.Screen name="Home" component={AppTabs}/>
        </Drawer.Navigator>
    );
}