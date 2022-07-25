import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {api} from "../services/api"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      setToken(token)
    }

  })

  const signIn = async (userDatas) => {
    try {
      
      const {data: result} = await api.post("/auth", userDatas)
      const [, newToken] = result.split(" ")
      
      localStorage.setItem("token", newToken)
      setToken(newToken)

      navigate("/usuarios")
      
    } catch(Error) {
      alert("Erro ao realizar login. Email ou senha invalida")
    }

  }

  

  return (
    <AuthContext.Provider value={{signIn, token}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}