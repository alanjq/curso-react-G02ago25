import React from "react";
import { StyleSheet, View } from "react-native";

interface IFilaProps {
    children: any,
}

export default function Fila({ children }: IFilaProps) {
    return (<View style={styles.container}>
        {children}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 5
    }
}) 
