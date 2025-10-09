import { Link } from "react-router-dom"

const PreviewCuenta = ({cuenta}) => {
    const { name, id } = cuenta
  return (
    <Link to={`/cuentas/${id}`} className="flex items-center gap-2 rounded-lg px-4 py-2 text-white my-5 hover:text-orange-600 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 opacity-75 shadow-sm"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>

        {name}
    </Link>
  )
}

export default PreviewCuenta