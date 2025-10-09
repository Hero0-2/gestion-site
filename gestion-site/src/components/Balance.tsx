import { Navigate, useNavigate, useParams } from "react-router-dom";
import useOperaciones from "../hooks/useOperaciones";
import ModalConfirmacion from "./ModalComponent";
import { useState } from "react";

const Balance = (cuenta) => { 

  const [showModal, setShowModal] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const { cuenta: { balance } } = cuenta;

  const {deleteCuenta} = useOperaciones()
  
  const params = useParams()
  const navigate = useNavigate()

  const handleDeleteClick = () =>{
    setShowModal(true)
  }

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    setShowModal(false);
    setIsDeleting(true);

    try {
      await deleteCuenta(params.id);
      
      navigate('/cuentas')

    } catch (error) {
      console.error('error al eliminar la cuenta', error)
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeletion = async () =>{
    deleteCuenta(params.id)
    navigate('/cuentas')
    
  }

  return (
    <>
      <article className="rounded-lg border shadow-md border-gray-100 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-black ">Balance</p>

            <p className="text-4xl font-bold text-orange-600">${balance}</p>
          </div>

          <span className="rounded-full bg-gray-200 p-3 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </span>
        </div>
        <div className="">
          <div className="flex items-center justify-center mt-6 gap-2">
            <button
              className="rounded-sm border-1 border-gray-300 p-2 text-gray-700 transition-colors hover:cursor-pointer hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>

            </button>

            <button
              className="rounded-sm border-1 border-gray-300 p-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 hover:cursor-pointer"
              onClick={handleDeleteClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

            </button>
          </div>
        </div> 
      </article>
      <ModalConfirmacion isOpen={showModal}
      onClose={handleCancelDelete}
      onConfirm={handleConfirmDelete}
      titulo='Eliminar cuenta'
      mensaje={`¿Estas seguro que deseas eliminar la cuenta "${cuenta?.name}"?`}
      textoConfirmar="Sí, eliminar"
      textoCancelar="Cancelar"
      />
    </>
  )
}

export default Balance