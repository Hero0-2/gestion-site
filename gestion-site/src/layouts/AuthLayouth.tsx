import { Outlet } from "react-router-dom"
import logo from '../assets/logo-color.svg'
import fondo from '../assets/fondo.svg'
import flecha from '../assets/flecha.svg'


const AuthLayouth = () => {
  return (
    <>
    <img src={fondo} alt="fondo" className="fixed top-0 left-0 w-screen h-screen object-cover z-0"/>
    <img src={flecha} alt="flecha-comica" className="fixed top-0 left-0 w-screen h-screen object-cover z-10"/>
      <div className="h-20 flex items-center border-blue-950 border-b-2 justify-center">
        <img src={logo} alt="Logo" className="h-3/4 z-10"/>
      </div>
        <main className="container md:mx-40 mt-5 md:mt-14 p-5 lg:justify-start lg:flex md:flex md:justify-center relative z-10">
            <div className=" md:w-2/3 lg:w-2/5 relative z-10">
                <Outlet/>
            </div>
        </main>
    </>
  )
}

export default AuthLayouth