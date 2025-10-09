import PreviewOperaciones from "./PreviewOperaciones";
import useOperaciones from "../hooks/useOperaciones"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Operaciones = () => {

  const { operaciones, obtenerOperaciones } = useOperaciones()
  const params = useParams()
    
  useEffect( ()=>{
    obtenerOperaciones(params.id)
  },[params.id])

  return (
    <>
      <div className="mt-10 bg-white rounded-t-md ">
        <div className="flex justify-between px-5">
          <h2 className="px-3 font-bold py-2 text-md whitespace-nowrap w-1/3 text-center">Tipo</h2>
          <h2 className="px-3 py-2 font-bold text-md whitespace-nowrap w-1/3 text-center">Cantidad</h2>
          <h2 className="px-3 py-2 font-bold text-md whitespace-nowrap w-1/3 text-center">Fecha</h2>
        </div>
      </div>
      <div className="bg-white h-80 mt-2 w-full rounded-md shadow-md overflow-x-auto px-5"> 
        <div>
          {operaciones.map(operation=>(
            <PreviewOperaciones key={operation.id} operation={operation}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Operaciones