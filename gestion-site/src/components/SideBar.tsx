import { Link } from "react-router-dom"
import useOperaciones from "../hooks/useOperaciones"
import PreviewCuenta from "./PreviewCuenta"
import logo from '../assets/logo-blanco.svg'


const SideBar = () => {

  const {cuentas} = useOperaciones()
  
  const handleCerrarSesion = () =>{
    sessionStorage.clear()
  }

  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 bg-blue-950">
        <div className=" flex items-center justify-center mb-10">
          <img src={logo} alt="logo-blanco" className="w-3/4"/>
        </div>
        <p className="text-gray-400 border-b-2 border-gray-400">Mis Cuentas</p>
        {cuentas.map(cuenta => (
          <PreviewCuenta key={cuenta.id} cuenta={cuenta}/>
        ))}
        <p className="text-gray-400 border-b-2 border-gray-400">Configuración</p>
        <Link to='crear' className="flex items-center gap-2 rounded-lg px-4 py-2 text-white my-5 hover:text-orange-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>
          Añadir cuenta
        </Link>
        <Link to='/' onClick={handleCerrarSesion} className="flex items-center gap-2 rounded-lg px-4 py-2 text-white my-5 hover:text-orange-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          Cerrar Sesion
        </Link>
    </aside>
  )
}

export default SideBar