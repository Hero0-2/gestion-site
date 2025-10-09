import { useState, type SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"
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
      sessionStorage.setItem('token', 'token')
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

    <h1 className="lg:text-5xl text-4xl font-bold text-center text-blue-950">
      Haga crecer su <span className="block">riqueza con</span>  <span className="lg:text-5xl sm:text-4xl font-sans text-orange-600 block">CONFIANZA</span>
    </h1>
    {msg && <Alerta alerta={alerta} />}
    <form className="my-10  px-20 py-5 rounded-md" onSubmit={handleSubmit}>
      <div>
        <label className="block my-2" htmlFor="email">Email </label>
        <input type="email" className="my-2 border-b-2 border-black w-full" id="email" value={email} onChange={e => setEmail(e.target.value)}/>

        <label className="block my-2" htmlFor="password">Contraseña </label>
        <input type="password" className="my-2 w-full border-b-2 border-black" id="password" value={password} onChange={e => setPassword(e.target.value)}/>

      </div>
      <input type="submit" value="Iniciar Sesion" className="bg-blue-950 w-full rounded-2xl text-white my-10 font-sans text-xl py-2 hover:cursor-pointer hover:bg-slate-950 transition-colors"/>
    </form>
    </>
  )
}

export default Login