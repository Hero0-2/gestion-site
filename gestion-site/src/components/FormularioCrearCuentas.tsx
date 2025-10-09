import { useState } from "react"
import useOperaciones from "../hooks/useOperaciones"
import Alerta from "./Alerta"

const FormularioCrearCuentas = () => {

    const [name, setName] = useState('')
    const [account, setAccount] = useState('')
    const [owner, setOwner] = useState('')

    const {mostrarAlerta, alerta, submitCuenta} = useOperaciones()

    const handleSubmit = async e =>{
        e.preventDefault()
        if([name, account, owner].includes('') ){
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                err: true
            })
        }
        const balance = '0.00'
        submitCuenta({name, account, owner, balance})
        mostrarAlerta({
            msg: 'Cuenta creada correctamente',
            err: false
            
        })
        console.log(balance)
    }

    const { msg } = alerta

  return (
    <>
        <form className="bg-white py-10 px-14 md:w-1/2 rounded-lg shadow-md justify-center" onSubmit={handleSubmit} action="">
            {msg && <Alerta alerta={alerta}/>}
            <div>
                <label htmlFor="nombre" className="font-sans text-xl block mt-2">Nombre</label>
                <input type="text" id="nombre" value={name} onChange={e => setName(e.target.value)} className="border-b border-black p-1 my-2 w-full"/>

                <label htmlFor="account" className="font-sans text-xl block mt-2">Número de cuenta</label>
                <input type="text" id="account" value={account} onChange={e => setAccount(e.target.value)} className="border-b border-black p-1 my-2 w-full"/>

                <label htmlFor="owner" className="font-sans text-xl block mt-2">Propietario</label>
                <input type="text" id="owner" value={owner} onChange={e => setOwner(e.target.value)} className="border-b border-black p-1 my-2 w-full"/>
            </div>

            <input type="submit" value='Crear Cuenta' className="bg-blue-950 hover:bg-indigo-900 w-full md:w-3/6 transition-colors text-white p-2 rounded-md hover:cursor-pointer mt-5"/>
        </form>
    </>
  )
}

export default FormularioCrearCuentas