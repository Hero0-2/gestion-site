import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import fondo from '../assets/fondo oscuro.png'

const RutaProtegida = () => {

  return (
    <>
      <img src={fondo} alt="fondo oscuro" className="fixed top-0 left-0 w-screen h-screen object-cover z-0"/>
      <div className="relative z-10">
        <div className="md:flex md:h-full md:min-h-screen w-full">
          <SideBar/>
          <div className="w-full">
            <NavBar/>
            <main className="flex-1 p-10 h-screen">
              <Outlet/>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default RutaProtegida