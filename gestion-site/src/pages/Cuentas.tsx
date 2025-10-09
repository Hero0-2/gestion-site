import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Balance from "../components/Balance"
import GeneralInfo from "../components/GeneralInfo"
import Operaciones from "../components/Operaciones"
import useOperaciones from "../hooks/useOperaciones"
import ModalOperacion from "../components/ModalCrearOperacion"




const Cuentas = () => {

  const params = useParams()
  const{ obtenerCuenta, cuenta } = useOperaciones()

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect( ()=>{
    obtenerCuenta(params.id)
  }, [params.id])
  

  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <GeneralInfo cuenta={cuenta}/>
          <Balance cuenta={cuenta}/>
        </div>
        <div>
          <Operaciones/>
        </div>
        <div className="flex justify-end">
          <button onClick={()=> setIsModalOpen(true)} className="text-center md:w-2/4 mt-5 bg-orange-600 text-white shadow-md hover:bg-orange-700 transition-colors hover:cursor-pointer rounded-md lg:w-1/6 p-3 font-bold">Añadir operacion</button>
        </div>
      </div>
      <ModalOperacion
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      cuentaId={params.id}
      />
    </>
  )
}

export default Cuentas