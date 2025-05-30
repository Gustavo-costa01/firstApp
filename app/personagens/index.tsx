import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";


export default function HomeScren(){
    const router = useRouter ();
    return(
        <View>
            <Button
                title="Personagens"
                onPress={()=> router.push(`/personagens/${1}`)}
            />
        </View>

    );
}