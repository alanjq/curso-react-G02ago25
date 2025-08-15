import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export default function Formulario({ children, legend }) {
    const { formFields, texto } = useContext(DarkModeContext)

    console.log('formFields', formFields)


    const handleSubmit = () => {
        console.log(formFields)
    }

    // Estados en react

    // const [nombre, setNombre] = useState("")
    // const [apellido, setApellido] = useState("")
    // const [edad, setEdad] = useState(0)


    return <form>
        <legend>
            {legend}
        </legend>

        <div>
            {children}
        </div>

        <hr />
        <div>
            <button type='button' onClick={handleSubmit}>{texto?.enviar}</button>
        </div>
    </form>
}
