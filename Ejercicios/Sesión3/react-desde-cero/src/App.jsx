import TextField from "@mui/material/TextField";
import ListaSaludos from "./components/ListaSaludos";
import Navegacion from "./components/Navegacion";
import Text from "./nativos/Text";
import View from "./nativos/View";
import FormName from "./components/FormName";
import { useEffect, useState } from "react";

export default function App() {
    const [lista, setLista] = useState([])

    // Crear barra de navegacion
    // Crear vistas
    // Crear footer

    const onAddName = (inputvalue) => {
        console.log('click button', inputvalue)

        // Actualizamos la lista
        setLista([...lista,...inputvalue])
       
    }

    useEffect(()=>{
        console.log(lista);
        
    }, [lista])

    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <View>
            <Navegacion />
        </View>

        <View>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </View>

        <View>
            <Text>Hola desde React</Text>
        </View>

        <FormName onAddName={onAddName} />

        <View>
            <ListaSaludos datos={lista} />
        </View>
    </View>
}
