// Este método renderiza el virtual DOM de react
import { createRoot } from 'react-dom/client'
import App from './App'

// Vaciamos el contenido del documento y creamos el div con el id app
document.body.innerHTML = '<div id="app"></div>'

// Buscar al elemento recién creado
const root = createRoot(document.getElementById('app'))

// Renderizamos la app
// root.render(<App></App>)
root.render(<App />)
