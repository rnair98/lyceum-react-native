import * as React from 'react';
import { useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchParamList, SearchStackNavProps } from "./SearchParamList";
import { Center } from "./Center";
//import faker from "faker";
import { addProductRoutes } from "./addProductRoutes";
import { DrawerNavProps } from './DrawerParamList';
import {FontAwesome5} from "@expo/vector-icons";

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

export function Search({ navigation }: SearchStackNavProps<"Search">){
    const [show, setShow] = useState(false);
    return(
        <Center>
            <Text>Search</Text>
            {/* <Button title="Search" onPress={() => {
                setShow(true);
            }}/>
            {show ? (
                <FlatList 
                        style={{width: "100%"}}
                        renderItem={({ item }) => {
                            return (
                                <Button title={item} onPress={() => {
                                    navigation.navigate("Product",{
                                        name: item
                                    });
                                }}/>
                            );
                        }}
                        keyExtractor={(product, idx) => product + idx}
                        data = {Array.from(Array(50), () => faker.commerce.product())}
                    />   
            ) : null}            */}
        </Center>
    );
}


export const SearchStack: React.FC<SearchStackProps> = ({navigation}: DrawerNavProps<"Drawer">) => {
    return (
        <Stack.Navigator 
            initialRouteName="Search"
            screenOptions={{
                cardStyle: {backgroundColor: '#becdf0'}
            }}>
            <Stack.Screen 
                name='Search' 
                component={Search}
                options = {{
                    headerTitle: () => {
                        return (
                            <View style={{paddingTop:40}}>
                                <FontAwesome5 name="university" size="2em" color="#95b2f2"/>
                            </View>
                        );
                    },
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerRight: () => {
                        return (
                            // <TouchableOpacity onPress={() => {logout()}}>
                            //     <Text style={ {paddingRight: 8 }}>LOGOUT</Text>
                            // </TouchableOpacity>
                            <View style={{paddingTop: 40, paddingRight: 20 }}>
                                <TouchableOpacity style={{alignSelf: "flex-end",justifyContent: "center"}} onPress={navigation.openDrawer}>
                                    <Image 
                                        style={{height: 43,width: 43,borderRadius: 43 / 2}} 
                                        source={{uri: "http://dev.villanovaice.com/wp-content/uploads/2015/02/Elon-Musk-300x300.jpg"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    }
                }}
            />
            {addProductRoutes(Stack)}
        </Stack.Navigator>
    );
}