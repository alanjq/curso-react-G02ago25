import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen(){
    return (
        <View>
            <Text>Home Screen</Text>
            {/* Aquí irán los botones */}
            <Link href="/HomeScreen" >Ir al home</Link>
            <Link href="/InfoScreen" >Acerca de la app</Link>
        </View>
    )
}
