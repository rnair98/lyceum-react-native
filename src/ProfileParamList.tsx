import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native"
import { HomeParamList } from "./HomeParamList";

export type ProfileParamList = {
    Profile: undefined;
} & HomeParamList;


export type ProfileStackNavProps<T extends keyof ProfileParamList> = {
    navigation: StackNavigationProp<ProfileParamList,T>;
    route: RouteProp<ProfileParamList, T>;
}