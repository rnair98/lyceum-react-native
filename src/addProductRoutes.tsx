import * as React from 'react';
import { Props, useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Center } from "./Center";
import { ProductParamList, ProductNavProps } from "./ProductParamList";
import { TypedNavigator, StackNavigationState } from "@react-navigation/native";
import { SearchParamList, SearchStackNavProps } from "./SearchParamList";
import { StackNavigationOptions } from "@react-navigation/stack";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";


function Product({ route }: ProductNavProps<"Product"> | SearchStackNavProps<"Product">) {
    return (
        <Center>
            <Text>{route.params.name}</Text>
        </Center>
    );
}

function apiCall(x: any){
    return x;
}

function EditProduct({ route, navigation }: ProductNavProps<"EditProduct">) {
    const [formState] = useState();
    const submit = useRef(() => {});

    submit.current = () => {
        // api call with new form state
        apiCall(formState);
        navigation.goBack();
    }

    useEffect(() => {
        navigation.setParams({ submit });
    }, []);

    return (
        <Center>
            <Text>Fields to edit {route.params.name} will be here.</Text>
        </Center>
    );
}

export const addProductRoutes = (
    Stack: 
    TypedNavigator<any,any,any,any,any>
    ) => {
    return (
        <>
            <Stack.Screen
                options={({route, navigation}) => ({
                    headerTitleStyle: { alignSelf: 'center'},
                    headerTitle: `Product: ${route.params.name}`,
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => 
                                navigation.navigate('EditProduct', {
                                    name: route.params.name
                                })
                            }>
                                <Text style={ {paddingRight: 8 }}>EDIT</Text>
                            </TouchableOpacity>
                        );
                    }
                })}
                name="Product"
                component={Product}
            />
            <Stack.Screen
                options={({route}) => ({
                    headerTitleStyle: { alignSelf: 'center'},
                    headerTitle: `Editing ${route.params.name}`,
                    headerRight: () => (
                    <TouchableOpacity 
                        onPress={() => {
                            //submit the form 
                            if (route.params.submit){
                                route.params.submit.current()
                            }
                        }}
                        style={ {paddingRight: 8 }}>
                        <Text style={{color:"red"}}>Done</Text>
                    </TouchableOpacity>
                    )

                })}
                name='EditProduct'
                component={EditProduct}
            />
        </>
    );
}