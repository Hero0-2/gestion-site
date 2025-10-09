import icono from '../assets/icono.svg'

const GeneralInfo = (cuenta) => {

  const { cuenta: { name, account, owner } } = cuenta;

  return (
  <div className="bg-white h-auto min-h-[11rem] flex rounded lg:col-span-2 shadow-md">
        <div className="flow-root w-full">
          <dl className="-my-3 w-full divide-y divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-10 sm:mt-3">
              <dt className="font-medium text-black sm:text-base text-sm">Nombre de cuenta</dt>

              <dd className="text-black sm:col-span-2 sm:ml-5 break-words">{name}</dd>
            </div>
            
            <div className="grid grid-cols-1 gap-1 py-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-10">
              <dt className="font-medium text-black sm:text-base text-sm">Propietario</dt>

              <dd className="text-black sm:col-span-2 sm:ml-5 break-words">{owner}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-10">
              <dt className="font-medium text-black sm:text-base text-sm">No. de cuenta</dt>

              <dd className="text-black sm:col-span-2 sm:ml-5 break-words font-mono">{account}</dd>
            </div>

          </dl>
    </div>
    <div className='flex items-center justify-center'>
      <img src={icono} alt="icono" className="lg:h-30 lg:mr-5 sm:h-10 sm:mr-2"/>
    </div>

  </div>
  )
}

export default GeneralInfo