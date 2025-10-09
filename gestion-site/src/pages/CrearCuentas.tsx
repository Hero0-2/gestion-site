import FormularioCrearCuentas from "../components/FormularioCrearCuentas"

const CrearCuentas = () => {
  return (
    <>
        <h1 className="text-center text-4xl font-sans">Crea una nueva cuenta</h1>
        <div className="mt-10 flex justify-center">
            <FormularioCrearCuentas/>
        </div>
    </>
  )
}

export default CrearCuentas