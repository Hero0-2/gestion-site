import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { data } from "react-router-dom";


const OperacionesContext = createContext()


const OperacionesProvider = ({children}) => {

    const [cuentas, setCuentas] = useState([])
    const [alerta, setAlerta] = useState({})
    const [cuenta, setCuenta] = useState({})
    const [operaciones, setOperaciones] = useState([])
    const [operacion, setOperacion] = useState({})


    
    useEffect(()=>{
        const obtenerCuentas = async () =>{
            try {
                const { data } = await axios('https://68e56bea21dd31f22cc1b7ee.mockapi.io/account')
                setCuentas(data)
            } catch (error) {
                console.error('Error fetching data', error)
            }
        }
        obtenerCuentas()
    },[])
    
    
    const submitCuenta = async cuenta =>{
        
        try {
            const {data} = await axios.post('https://68e56bea21dd31f22cc1b7ee.mockapi.io/account', cuenta)
            setCuentas(prevCuentas => [...prevCuentas, data])
        } catch (error) {
            console.error('error submiting data', error)
        }
        
    }

    const deleteCuenta = async id => {
        try {
            await axios.delete(`https://68e56bea21dd31f22cc1b7ee.mockapi.io/account/${id}`)
            setCuentas(prevCuentas => prevCuentas.filter(cuenta => cuenta.id !== id))
        } catch (error) {
            console.error('error deleting data', error)
        }
    }

    const obtenerCuenta = async id =>{
        
        try {
            const {data} = await axios(`https://68e56bea21dd31f22cc1b7ee.mockapi.io/account/${id}`)
            setCuenta(data)
        } catch (error) {
            console.error('error fetching data',error)
        }
    }
    
    const obtenerOperaciones = async id =>{
        try {
            const {data} = await axios(`https://68e56bea21dd31f22cc1b7ee.mockapi.io/account/${id}/operation`)
            setOperaciones(data)
        } catch (error) {
            console.error('error fetching data', error)
        }
    }

    const submitOperacion = async (operacion) =>{
        try {
            const {data} = await axios.post(`https://68e56bea21dd31f22cc1b7ee.mockapi.io/account/${operacion.accountId}/operation`, operacion)
            setOperacion(data)
            setOperaciones(prevOperaciones => [...prevOperaciones, data])
        } catch (error) {
            console.error('error sending data', error)
        }
    }

    const mostrarAlerta = alerta =>{
        setAlerta(alerta)

        setTimeout(()=>{
            setAlerta({})
        },4000)
    }
    return(
        <OperacionesContext.Provider
            value={{
                cuentas,
                mostrarAlerta,
                alerta,
                submitCuenta,
                obtenerCuenta,
                deleteCuenta,
                cuenta,
                obtenerOperaciones,
                submitOperacion,
                operaciones
            }}
        >{children}
        </OperacionesContext.Provider>
    )

}

export {
    OperacionesProvider
}

export default OperacionesContext


