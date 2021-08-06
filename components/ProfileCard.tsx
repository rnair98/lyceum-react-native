import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import tailwind from 'tailwind-rn';
import { Feather } from "@expo/vector-icons";

interface ProfileCard{
    name: string;
    platform: string;
    instructor: string;
    imgUrl: string;
    url: string;
    affiliation: string;
}

export default function ProfileCard ({name,platform,affiliation,instructor,imgUrl,url}:ProfileCard){
    return (
        <View style={tailwind("flex flex-col items-start justify-center min-h-screen bg-center bg-cover")}>  
            <View style={tailwind("max-w-4xl w-full mx-auto z-10")}>
                <View style={tailwind("flex flex-row")}>
                    <View style={tailwind("bg-white border border-white shadow-lg  rounded-3xl p-4 m-4")}>
                        <View style={tailwind("flex-row sm:flex")}>
                            <View style={tailwind(" relative h-32 w-32   sm:mb-0 mb-1")}>
                                <Image source={imgUrl} style={tailwind(" w-32 h-32 object-cover rounded-2xl")}/>
                            </View>
                            <View style={tailwind("flex flex-row sm:ml-2 items-baseline")}>
                                <View style={tailwind("flex items-baseline justify-evenly sm:mt-2 pl-4")}>
                                    <View style={tailwind("flex items-baseline")}>
                                        <View style={tailwind("flex flex-col")}>
                                            <View style={tailwind("w-full flex-row text-lg text-gray-800 font-bold leading-none")}>
                                                <Text onPress={() => Linking.openURL(url)}>{name}</Text>
                                                <Feather name="check-circle" size={15} color="green" style={tailwind("pl-6 pt-2 opacity-60")}/>
                                            </View>
                                            <View style={tailwind("flex-auto text-gray-500 my-1")}>
                                                <span style={tailwind("mr-3 ")}>{platform}</span><span style={tailwind("mr-3 border-r border-gray-200  max-h-0")}></span><span>{instructor} @ {affiliation}</span>
                                            </View>
                                            <View style={tailwind("flex flex-col items-baseline")}>
                                                <View style={tailwind("flex-row")}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        style={tailwind("h-5 w-5 text-yellow-500")}>
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        style={tailwind("h-5 w-5 text-yellow-500")}>
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        style={tailwind("h-5 w-5 text-yellow-500")}>
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        style={tailwind("h-5 w-5 text-yellow-500")}>
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" style={tailwind("h-5 w-5 text-yellow-500")}>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                                        </path>
                                                    </svg>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={tailwind("flex-1 inline-flex  hidden items-center")}>
                                        <Image style={tailwind("w-5 h-5")} source={require("../assets/star.svg")}/>
                                        <Image style={tailwind("w-5 h-5")} source={require("../assets/star.svg")}/>
                                        <Image style={tailwind("w-5 h-5")} source={require("../assets/star.svg")}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

