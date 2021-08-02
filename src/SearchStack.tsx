import * as React from 'react';
import { useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchParamList } from "./SearchParamList";
import { Center } from "./Center";
import faker from "faker";
import { addProductRoutes } from "./addProductRoutes";
import { DrawerNavProps } from './DrawerParamList';
import {FontAwesome5} from "@expo/vector-icons";

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

function Search({ navigation }){
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
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen 
                name='Search' 
                component={Search}
                options = {{
                    headerTitle: () => {
                        return (
                            <FontAwesome5 name="university" size="2em" color="#95b2f2"/>
                        );
                    },
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerRight: () => {
                        return (
                            // <TouchableOpacity onPress={() => {logout()}}>
                            //     <Text style={ {paddingRight: 8 }}>LOGOUT</Text>
                            // </TouchableOpacity>

                            <TouchableOpacity style={{alignSelf: "center",justifyContent: "center",padding:10}} onPress={navigation.openDrawer}>
                                <Image 
                                    style={{height: 43,width: 43,borderRadius: 43 / 2}} 
                                    source={{uri: "http://dev.villanovaice.com/wp-content/uploads/2015/02/Elon-Musk-300x300.jpg"}}
                                />
                            </TouchableOpacity>
                        );
                    }
                }}
            />
            {addProductRoutes(Stack)}
        </Stack.Navigator>
    );
}