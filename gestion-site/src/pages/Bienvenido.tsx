import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo-color.svg'



const Bienvenido = () => {

  const navigate = useNavigate()

  const redirect = () =>{
    navigate('/cuentas/crear')
  }
  return (
    <>
      <div className="flex flex-col items-center mt-6 sm:mt-10 justify-center sm:flex-row">
        <h1 className="sm:text-6xl lg:mt-6 font-sans font-bold sm:mr-3 text-center">Bienvenido a </h1>
        <img src={logo} alt="logo-color" className='w-6/12 sm:w-3/12 block mt-2 sm:mt-0 max-w-xs'/> 
      </div>
      <h2 className='text-lg sm:text-3xl mt-3 sm:mt-4 font-sans text-center px-4'>Gestiona y organiza tus cuentas</h2>
      <p className='mt-10 sm:mt-40 text-center text-base sm:text-xl px-4'>Selecciona una de tus cuentas para comenzar <span className='block hover:text-orange-600 hover:cursor-pointer' onClick={redirect}>o crea una nueva</span> </p>
    </>
  )
}

export default Bienvenido