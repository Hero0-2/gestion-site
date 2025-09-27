

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.err ? 'from-red-400 to-red-600' : 'from-sky-700 to-sky-900'} bg-gradient-to-br text-center p-3 rounded-md text-white font-bold my-10`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta