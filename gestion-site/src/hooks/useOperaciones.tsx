import { useContext } from "react";
import OperacionesContext from "../context/OperacionesProvider";

const useOperaciones = () =>{
    return useContext(OperacionesContext)
}

export default useOperaciones


