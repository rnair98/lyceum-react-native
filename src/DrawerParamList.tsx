import { DrawerNavigationProp } from "@react-navigation/drawer"
import { RouteProp } from '@react-navigation/native';
import { AppParamList } from "./AppParamList";




export type DrawerParamList = {
    Drawer: undefined
} & AppParamList;

export type DrawerNavProps<T extends keyof DrawerParamList> = {
    navigation: DrawerNavigationProp<DrawerParamList,T>;
    route: RouteProp<DrawerParamList, T>;
}
