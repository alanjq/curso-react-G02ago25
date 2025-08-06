import Text from "../nativos/Text"
import TextInput from "../nativos/TextInput";

/**
 * Muestra un texto de saludo hacia cierta persona
 * @param {string} name El nombre de quien recibirá el saludo
 */
const Saludo = ({ name }) => {
    console.log('name:', name);

    /*
    Opción1: con if
    if(name != ""){
        return <Text>Hola, {name}</Text>
    }else{
        return <Text>Ingresa un nombre para saludar.</Text>
    }
    */

    // Opción 2: con operador ternario
    // return name != "" ? <Text>Hola, {name}</Text> : <Text>Ingresa un nombre para saludar.</Text>

    // Opción 3: con operador ternario dentro del componente
    // return <Text>{name != "" ? <>Hola, {name}</> : "Ingresa un nombre para saludar." }</Text>

    // Opción 4: validar cuando no tenga "nombre"
    if (!name || typeof name !=='string' ||  name?.length == 0) {
        return <TextInput label="Nombre" />
    }

    // Si todo correcto
    return <Text>Hola, {name}</Text>
}

export default Saludo
