import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "./AuthParamList";
import { RouteProp } from "@react-navigation/native"
import { ProductParamList } from "./ProductParamList";

export type HomeParamList = {
    Dash: undefined;
    Feed: undefined;
} & ProductParamList;


export type HomeStackNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList,T>;
    route: RouteProp<HomeParamList, T>;
}