import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function InfoScreen(){
     return (
            <View>
                <Text>Info Screen</Text>
                <Text>Agosto 2025</Text>
                <Link href="/HomeScreen" >Ir al home</Link>
            </View>
        )
}
