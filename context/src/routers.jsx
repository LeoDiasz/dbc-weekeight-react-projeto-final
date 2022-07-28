import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/login/Login"
import { CreateUser } from "./pages/createUser/CreateUser"
import { Home } from "./pages/home/Home"
import { Address } from "./pages/address/Address"
import { Person } from "./pages/person/Person"
import {useAuth} from "./hooks/useAuth"

const PrivateRoute = () => {
  const {token} = useAuth()

  return (
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

export const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastrar" element={<CreateUser/>}/>
          <Route path="/home" element={<PrivateRoute/>}>
            <Route path="/home" element={<Home/>} />
          </Route>
          <Route path="/endereco" element={<PrivateRoute/>}>
            <Route path="/endereco" element={<Address/>} />
          </Route>
          <Route path="/pessoa" element={<PrivateRoute/>}>
            <Route path="/pessoa" element={<Person/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
   
  )
}


