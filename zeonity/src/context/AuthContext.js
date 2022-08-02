import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {Toaster, toast} from "react-hot-toast"
import {api} from "../services/api"
import { Loading } from "../components/Loading";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      setToken(token)
      api.defaults.headers.common["authorization"] = token
    }
    
    setLoading(false)
    const locationNow = window.location.href

    if(token && locationNow === "http://localhost:3000/"){
      navigate("/people")
    }
    
  }, [])

  const signIn = async (userDatas) => {

    try {  
      const {data: token} = await api.post("/auth", userDatas)

      localStorage.setItem("token", token)
      setToken(token)
      
      api.defaults.headers.common["authorization"] = token

      navigate("/people")
      toast.success("Seja bem vindo!")
      
    } catch(Error) {
      toast.error("Erro de login. Email ou senha invalido.")
    }

  }

  const signOut = () => {
    
    if (token) {
      localStorage.removeItem("token")
      setToken()
      
      api.defaults.headers.common["authorization"] = undefined
      toast("Até logo!")
      navigate("/")
    }
  
  }
  
  if (loading) {
    <Loading/>
  }

  return (
    <AuthContext.Provider value={{signIn, token, signOut}}>
      <Toaster/>
      {children}
    </AuthContext.Provider>
  )
  
}

export {AuthProvider, AuthContext}