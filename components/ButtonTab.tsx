import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import { Button } from '@jrobins/bulma-native';



interface ButtonTabProps {
    data: {
        name: string;
        position: number;
    }[]
    afterPress: (id) => void;
}


export const ButtonTab: React.FC<ButtonTabProps> = ({data,afterPress}: ButtonTabProps) => {

    const [clickedId, setClickedId] = React.useState(-1);

    const handlePress = (event, id) => {
        setClickedId(id);
        afterPress(id);
    };

    return (
        <View style={styles.header}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
        >
        {data.map((category, idx) => (
            <TouchableHighlight 
                activeOpacity={1} 
                key={idx}
                style= {idx ===clickedId ? styles.btnPress : styles.btnNormal}
                onPress={(event) => handlePress(event, idx)}
                >
                <Text style={{
                    fontFamily: "FiraSansCondensed_400Regular",
                    fontSize: 14,
                    color: "rgba(80,81,81,1)",
                    textShadowColor: 'rgba(0, 0, 0, 0.3)',
                    textShadowOffset: {width: -0.5, height: 1.5},
                    textShadowRadius: 4
                    }}>
                        {category.name}
                </Text>
            </TouchableHighlight>
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
        bottom: 20,
        backgroundColor: "transparent",
        position: "relative"
      },
    btnPress: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal:20,
        backgroundColor: "rgba(242,242,242,0.6)",
        borderColor: "transparent",
    },
    btnNormal: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal:20,
        backgroundColor: "transparent",
        borderColor: "transparent",
    }
})


