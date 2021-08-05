import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "./AuthParamList";
import { RouteProp } from "@react-navigation/native"


export type HomeParamList = {
    Home: undefined;
    Search: undefined;
    Swipe: undefined;
    Profile: undefined;
};


export type HomeStackNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList,T>;
    route: RouteProp<HomeParamList, T>;
}