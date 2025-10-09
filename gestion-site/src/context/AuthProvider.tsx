import {  useEffect, createContext } from "react";




const AuthContext = createContext()

const AuthProvider = ({children}) =>{


    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if(!token){
            return
        }
    }, [])

    return(
        <AuthContext.Provider
            value={{

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext