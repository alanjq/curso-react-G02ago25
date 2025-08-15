// Solo web con react.js
import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

/**
 * CajaTexto
 * @returns Devuelve una caja de texto con la etiqueta indicada
 */
export default function CajaTexto({ etiqueta, onChange }) {
    // Tomamos los valores del contexto
    const { modoOscuro, setCampo } = useContext(DarkModeContext)

    const [textValue, setTextValue] = useState("")

    useEffect(() => {
        if (onChange) {
            onChange(textValue)
        }
        // Actualizar el contexto
        setCampo(etiqueta, textValue)
    }, [textValue])

    return (
        <div style={{ margin: "1em" }}>
            <label style={modoOscuro ? estilos.modoOscuro : estilos.contenedorClaro}>
                {etiqueta}
                <input
                    style={modoOscuro ? estilos.modoOscuro : estilos.contenedorClaro}
                    placeholder={etiqueta}
                    onInput={(e) => setTextValue(e.target.value)}
                />
            </label>
        </div>
    )
}

let estilos = {
    contenedorOscuro: {
        backgroundColor: "#525050",
        color: "white"
    },
    contenedorClaro: {
        backgroundColor: "#e8faf3ff",
        color: "#333a40"
    },
}

// Alternativa usando props
function CajaTexto2(props) {
    return (<label>
        {props.etiqueta}
        <input />
    </label>)
}
