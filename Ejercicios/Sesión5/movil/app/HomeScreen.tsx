import CajaTexto from "@/formulario/CajaTexto";
import { useState } from "react";
import { Button, SafeAreaView } from "react-native";

export default function HomeScreen() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0)

    const handleSubmit = () => {
        let persona = {
            nombre,
            apellido,
            edad
        }
        // let persona = { nombre, apellido, edad }
        console.log(persona)
    }

    return <SafeAreaView>
        <CajaTexto etiqueta="Nombre" onChange={setNombre} />
        <CajaTexto etiqueta="Apellido" onChange={setApellido} />
        <CajaTexto etiqueta="Edad" onChange={setEdad} />

        <Button title="Enviar" onPress={handleSubmit} />
    </SafeAreaView>
}
