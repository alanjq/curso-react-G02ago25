import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Saludo } from './components/Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Una forma de llamar a un componente */}
      <Saludo>
        <Saludo>
          <Saludo>
            <Saludo />
          </Saludo>
        </Saludo>
      </Saludo>
    
      {/* Llamar a un componente mientras se cierra */}
      <Saludo />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         El conteo es de {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
