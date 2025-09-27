import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayouth from './layouts/AuthLayouth'
import Login from './pages/Login'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayouth/>}>
          <Route index element={<Login/>}/>

        </Route>

      </Routes>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
