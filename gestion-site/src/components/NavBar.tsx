import icono from '../assets/icono.svg'

const NavBar = () => {
  return (
    <header className="px-4 py-5 w-full">
      <div className="md:flex md:justify-end">
        
        <div className="md:flex">
          <h2 className="mx-2 mt-1">Pablo Lorenzo</h2>
          <img src={icono} alt="icono-carita" className='mx-2 h-10'/>
        </div>
        
      </div>
    </header>
  )
}

export default NavBar