import { useState } from 'react'
import CajaTexto from './components/CajaTexto'

function App() {
  // Estados en react
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState(0)

  const handleSubmit = () => {
    let persona = {
      nombre, apellido, edad
    }

    console.log(persona)
  }
 
 return (<div>
    <h1>Mi Formulario</h1>
    
    <CajaTexto etiqueta="Nombre" onChange={setNombre} />
    
    <CajaTexto etiqueta="Apellido" onChange={setApellido} />

    <CajaTexto etiqueta="Edad" onChange={setEdad} />

{/* 
    <div>
      <label>Ingresa un valor: </label>
      <input type='text' onInput={handleInputChange}  />
    </div> */}

    <div>
      <button type='button' onClick={handleSubmit}>Enviar</button>
    </div>
  </div>)
    
}

export default App
