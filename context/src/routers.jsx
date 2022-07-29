import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { PeopleProvider } from "./context/PeopleContext"
import {useContextAuth} from "./hooks/useContextAuth"
import { Login } from "./pages/login/Login"
import { Home } from "./pages/home/Home"
import { CreateUser } from "./pages/createUser/CreateUser"
import { Address } from "./pages/address/Address"
import { People } from "./pages/people/People"
import { PeopleForm } from "./pages/people/PeopleForm"
import { NotFound } from "./pages/notFound/NotFound"

const PrivateRoute = () => {
  const {token} = useContextAuth()

  return (
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

export const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PeopleProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastrar" element={<CreateUser/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/home" element={<Home/>} />
                <Route path="/endereco" element={<Address/>} />
                <Route path="/pessoas" element={<People/>}/>
                <Route path="/pessoas/criar" element={<PeopleForm/>}/>
                <Route path="/pessoas/atualizar/:id" element={<PeopleForm/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </PeopleProvider>
      </AuthProvider>
    </BrowserRouter>
    
   
  )
}


