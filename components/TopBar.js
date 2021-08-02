import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


export default class TopBar extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <FontAwesome5 name="search" size={27} color="#577fc0"/>
                <FontAwesome5 name="university" size={27} color="#577fc0" />
                <FontAwesome5 name="inbox" size={27} color="#577fc0" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
    },

})
