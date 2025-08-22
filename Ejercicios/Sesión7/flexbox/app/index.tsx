import Fila from "@/components/Fila";
import { createRef, Ref, use, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
    const [numero, setNumero] = useState(0)
    const [resultado, setResultado] = useState(0)

    // Botones de la calculadora
    let fila1 = ["1", "2", "3", "+"]
    let fila2 = ["4", "5", "6", "-"]
    let fila3 = ["7", "8", "9", "*"]
    let fila4 = ["C", "0", "=", "/"]

    let botones = [
        fila1,
        fila2,
        fila3,
        fila4
    ]

    const handleButtonPress = (value: String) => {
        // Enviar el valor a la operación
        // Almacenar los valores en 1 y 2
        console.log('numero', numero)
        switch (value) {
            case "+":
                
                // setNumero(refInput.current.value)

                // let numeroActual = parseInt(numero.toString())
                // setNumero(numeroActual)
                // let res = resultado + numeroActual
                // setResultado(res)
                // console.log('resultado', numeroActual)
                break;
            case "-":
                break;
            case "*":

                break;
            case "/":
                break;

            case "=":
                setResultado(resultado)
                break;

            case "C": // Resetear calculadora
                setNumero(0)
                setResultado(0)
                break;

            // Números
            default:
                let actual = parseInt(numero.toString() + value)
                setResultado(actual)
        }
    }

    return <View>
        <Text>Hola index</Text>

        <Fila>
            <TextInput style={styles.numero1} value={resultado.toString()} />
        </Fila>

        {botones.map((fila, index) =>
            <Fila key={index}>
                {fila.map((texto, k) => <Text style={styles.button} key={k} onPress={() => handleButtonPress(texto)}>{texto}</Text>)}
            </Fila>
        )}

    </View>
}

const styles = StyleSheet.create({
    button: {
        minWidth: 15,
        minHeight: 15
    },
    numero1: {
        color: "green",
        borderColor: "gray"
    },
    numero2: {
        backgroundColor: "blue",
        borderColor: "gray"
    },
    resultado: {
        backgroundColor: "white",
        borderColor: "gray"
    }
})
