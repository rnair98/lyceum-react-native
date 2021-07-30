import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native"
import { ProductParamList } from "./ProductParamList";

export type SwipeParamList = {
    Swipe: undefined;
} & ProductParamList;


export type SwipeStackNavProps<T extends keyof SwipeParamList> = {
    navigation: StackNavigationProp<SwipeParamList,T>;
    route: RouteProp<SwipeParamList, T>;
}