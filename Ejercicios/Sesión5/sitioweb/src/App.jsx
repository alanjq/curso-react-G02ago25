import { useEffect, useState } from 'react'
import CajaTexto from './components/CajaTexto'
import { DarkModeContext } from './context/DarkModeContext'
import SwitchModoOscuro from './components/SwitchModoOscuro'
import Formulario from './components/Formulario'

const TEXTO_ESPANOL = {
  enviar: 'Enviar formulario',
  cambiar: 'Cambiar a:',
  actual: 'Español',
  otro: 'Inglés'
}

const TEXTO_INGLES = {
  enviar: 'Submit form',
  cambiar: 'Switch to:',
  actual: 'English',
  otro: 'Spanish'
}

function App() {
  // Contexto
  const [modoOscuro, setModoOscuro] = useState(false)
  const [formFields, setFormFields] = useState({})
  const [idioma, setIdioma] = useState('en')
  const [texto, setTextos] = useState(idioma == 'en' ? TEXTO_INGLES : TEXTO_ESPANOL)

  const setCampo = (nombre, valor) => {
    let currentForm = formFields
    currentForm[nombre] = valor
    setFormFields(currentForm)
  }

  useEffect(()=>{
    setTextos(idioma == 'es' ? TEXTO_ESPANOL : TEXTO_INGLES)
  }, [idioma])

  const handleIdioma = () => {
    if(idioma == 'es'){
      setIdioma('en')
    }else{
      setIdioma('es')
    }
  }


  // Estilos
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

  return (<>
    {/* Fuera del Context Provider no se recibe el objeto */}
    {/* <Formulario /> */}


    <DarkModeContext.Provider value={{ modoOscuro, setModoOscuro, formFields, setCampo, texto }}>
      <div style={modoOscuro ? estilos.contenedorOscuro : estilos.contenedorClaro}>
        <SwitchModoOscuro />

        <div onClick={handleIdioma}>
          {texto.cambiar}: {texto.otro}
        </div>

        <h1>Mi Formulario</h1>
        <Formulario legend={"Datos personales"}>

          <CajaTexto etiqueta="Nombre" />

          <CajaTexto etiqueta="Apellido" />

          <CajaTexto etiqueta="Edad" />

          <CajaTexto etiqueta="Ciudad" />
          
          <CajaTexto etiqueta="Número" />

          <div>
            <p>Cambiar a modo oscuro/claro</p>
            <SwitchModoOscuro />
          </div>

        </Formulario>

      </div>
    </DarkModeContext.Provider>
  </>)

}

export default App
