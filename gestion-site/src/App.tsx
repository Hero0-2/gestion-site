import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayouth from './layouts/AuthLayouth'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './pages/Login'
import Cuentas from './pages/Cuentas'



function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayouth/>}>
            <Route index element={<Login/>}/>

          </Route>

        </Routes>
        <Routes>
          <Route path='/cuentas' element={<RutaProtegida/>}>
            <Route index element={<Cuentas/>}/>
          </Route>
          
        </Routes>
    </BrowserRouter>
  )
}

export default App
