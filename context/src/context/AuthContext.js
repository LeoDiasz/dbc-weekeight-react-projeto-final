import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {api} from "../services/api"
import {Toaster, toast} from "react-hot-toast"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      setToken(token)
      navigate("/home")
    }

  }, [])

  const signIn = async (userDatas) => {
    try {
      
      const {data: result} = await api.post("/auth", userDatas)
      const [, newToken] = result.split(" ")
      
      localStorage.setItem("token", newToken)
      setToken(newToken)

      navigate("/home")
      toast.success("Seja bem vindo!")
      
    } catch(Error) {
      toast.error("Erro de login")
    }

  }

  const signOut = () => {
    
    if (token) {
      localStorage.removeItem("token")
      toast("Até logo!")
      navigate("/")
    }
  
  }

  return (
    <AuthContext.Provider value={{signIn, token, signOut}}>
      <Toaster/>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}