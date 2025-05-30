
import { useLocalSearchParams } from "expo-router"
import React from "react";
import { View, Text } from "react-native";  

export default function Detail () {
    const {id} = useLocalSearchParams(); // pega o id da url
    return(
        <View>
            <Text>Detalhes {id}</Text>

        </View>
    );
}