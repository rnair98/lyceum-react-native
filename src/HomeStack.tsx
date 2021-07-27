import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Center } from './Center';
import { Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from './AuthProvider';
import faker from "faker";
import { HomeParamList, HomeStackNavProps } from './HomeParamList';


interface HomeStackProps {
    
}

const Stack = createStackNavigator<HomeParamList>();

function Feed({navigation} : HomeStackNavProps<"Feed">) {
    return (
        <Center>
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
        </Center>
    );
}

function Product({ route }: HomeStackNavProps<"Product">) {
    return (
        <Center>
            <Text>{route.params.name}</Text>
        </Center>
    );
}

function apiCall(x: any){
    return x;
}

function EditProduct({ route, navigation }: HomeStackNavProps<"EditProduct">) {
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


export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    const {logout} = useContext(AuthContext);
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Feed'
                options = {{
                    headerTitleStyle: { alignSelf: 'center', marginLeft: 55},
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => {logout()}}>
                                <Text style={ {paddingRight: 8 }}>LOGOUT</Text>
                            </TouchableOpacity>
                        );
                    }
                }}
                component={Feed}
            />
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
                name='Product'
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
        </Stack.Navigator>
    );
}
