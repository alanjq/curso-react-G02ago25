// Solo web con react.js
import { useEffect, useState } from "react"

/**
 * CajaTexto
 * @returns Devuelve una caja de texto con la etiqueta indicada
 */
export default function CajaTexto({ etiqueta, onChange }) {
    const [textValue, setTextValue] = useState("")

    useEffect(()=>{
        if(onChange){
            onChange(textValue)
        }
    }, [textValue])

    return (<label>
        {etiqueta}
        <input
            placeholder={etiqueta}
            onInput={(e)=>setTextValue(e.target.value)}
        />
    </label>)
}

// Alternativa usando props
function CajaTexto2(props) {
    return (<label>
        {props.etiqueta}
        <input />
    </label>)
}
