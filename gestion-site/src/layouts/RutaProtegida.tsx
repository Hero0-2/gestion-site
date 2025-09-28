import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

const RutaProtegida = () => {
  return (
    <>
      <div>
        <div className="bg-amber-500">
          <NavBar/>
          <div className="md:flex md:min-h-screen">
            <SideBar/>
            <main>
              <Outlet/>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default RutaProtegida