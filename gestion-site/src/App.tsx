import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayouth from './layouts/AuthLayouth'
import RutaProtegida from './layouts/RutaProtegida'



import { OperacionesProvider } from './context/OperacionesProvider'

import Login from './pages/Login'
import Cuentas from './pages/Cuentas'
import CrearCuentas from './pages/CrearCuentas'
import Bienvenido from './pages/Bienvenido'



function App() {
  

  return (
    <BrowserRouter>
      <OperacionesProvider>
        <Routes>
          <Route path='/' element={<AuthLayouth/>}>
            <Route index element={<Login/>}/>

          </Route>

        </Routes>
        <Routes>
          <Route path='/cuentas' element={<RutaProtegida/>}>
            <Route index element={<Bienvenido/>}/>
            <Route path='crear' element={<CrearCuentas/>}/>
            <Route path=':id' element={<Cuentas/>}/>
          </Route>
          
        </Routes>
      </OperacionesProvider>
    </BrowserRouter>
  )
}

export default App
