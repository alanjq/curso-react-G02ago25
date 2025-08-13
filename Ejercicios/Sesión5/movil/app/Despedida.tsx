import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs"
import { StyleSheet, Text, View } from "react-native"

export default function Despedida() {

    return <View style={styles.container}>
        <Text style={styles.encabezado}>Adiós</Text>
    </View>
}

const styles = StyleSheet.create({
    encabezado: {
        fontSize: 30
    },
    container: {
        paddingVertical: 0,
        paddingHorizontal: "auto",
        maxWidth: 500
    }
})

const appStyles = StyleSheet.create({
    root: {
        maxWidth: 1280,
        margin: "auto",
        padding: 2,
        textAlign: "center"
    },

    logo: {
        height: 6,
        padding: 1.5,
        willChange: "filter"
    }
})
