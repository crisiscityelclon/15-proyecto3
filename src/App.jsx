import { useState } from 'react'
import { Inicio } from './components/pages/Inicio'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <h1>Blog con ReactJS</h1>
    <Inicio></Inicio>
    <Articulos/>
    <Crear/>
    </div>
    </>
  )
}

export default App
