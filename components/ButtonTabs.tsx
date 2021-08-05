import * as React from 'react';
import {View, ScrollView, StyleSheet} from "react-native";
import { Button } from '@jrobins/bulma-native';


interface ButtonTabProps {
    data: {
        name: string;
        position: number;
    }[]
}

export const ButtonTab = ({data}: ButtonTabProps) => {
    return (
        <View style={styles.header}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {data.map((category, idx) => (
                <Button rounded={true} size="small" style={{marginHorizontal:20}}>{category.name}</Button>
            ))}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "transparent",
        position: "relative"
      }
})