// React native con Expo
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Definimos los valores que esperamos en el componente
// ? significa que es un campo opcional
interface ICajaTextoProps {
    etiqueta: String,
    onChange?: any
}

export default function CajaTexto({etiqueta, onChange} : ICajaTextoProps){
    const [valor, setValor] = useState("")

    const handleChange = (e:any) => {
        console.log('evento change de input', e)
        setValor(e.target.value)
    }

    // cambioDeEstado es la función que se ejecuta cuando [valor] cambia
    // const cambioDeEstado = () => {

    // }
    // useEffect(cambioDeEstado, [valor])

    // Esto se ejecuta cuando cambiamos el texto del input
    useEffect(()=>{
        // Si hay evento onChange, se llama y se le envia el valor del input
        if(onChange){
            onChange(valor)
        }
    }, [valor])

    return (
        <View style={styles.view}>
            <Text>{etiqueta}</Text>
            <TextInput onChange={handleChange} style={styles.cajatexto} />
        </View>
    )
}

const styles = StyleSheet.create({
    cajatexto:  {
        borderColor: "darkgray",
        borderWidth: 2,
        padding: 2
    },
    view: {
        marginVertical: 5
    }
})
