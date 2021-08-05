import { DrawerNavigationProp } from "@react-navigation/drawer"
import { RouteProp } from '@react-navigation/native';
import { HomeParamList } from "./HomeParamList";





export type DrawerParamList = {
    Drawer: undefined
} & HomeParamList;

export type DrawerNavProps<T extends keyof DrawerParamList> = {
    navigation: DrawerNavigationProp<DrawerParamList,T>;
    route: RouteProp<DrawerParamList, T>;
}
