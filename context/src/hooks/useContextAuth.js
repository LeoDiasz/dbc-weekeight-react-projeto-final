import { useContext } from "react"
import {AuthContext} from "../context/AuthContext"

export const useContextAuth = () => {

  const context = useContext(AuthContext)

  return context
}
