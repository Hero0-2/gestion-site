import { useState, type SyntheticEvent } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const navigate = useNavigate()


  const handleSubmit = async (e: SyntheticEvent) =>{
    e.preventDefault()
    if([email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        err: true
      })
      return
    }
    if (email === 'admin@email.com' && password === 'admin'){
      navigate('/cuentas')
    }
    else{
      setAlerta({
        msg: 'Credenciales incorrectas',
        err: true
      })
    }
  }

  const { msg } = alerta

  return (
    <>
    <h1 className="font-black text-6xl">
      Inicia sesion
    </h1>
    {msg && <Alerta alerta={alerta} />}
    <form className="my-10 bg-emerald-700 shadow-xl px-10 py-5 rounded-md" onSubmit={handleSubmit}>
      <div>
        <label className=" text-white font-bold block my-2" htmlFor="email">Email: </label>
        <input type="email" className="my-2 bg-teal-800 w-full rounded-md text-white border" id="email" value={email} onChange={e => setEmail(e.target.value)}/>

        <label className=" text-white font-bold block my-2" htmlFor="password">Contraseña: </label>
        <input type="password" className="my-2 bg-teal-800 w-full rounded-md text-white border" id="password" value={password} onChange={e => setPassword(e.target.value)}/>

      </div>
      <input type="submit" value="Iniciar Sesion" className="bg-cyan-800 w-full rounded-md text-white my-3 font-bold text-xl py-2 hover:cursor-pointer hover:bg-cyan-950 transition-colors"/>
    </form>
    </>
  )
}

export default Login