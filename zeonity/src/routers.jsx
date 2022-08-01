import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { PeopleProvider } from "./context/PeopleContext"
import {AddressProvider} from "./context/AddressContext"
import {useContextAuth} from "./hooks/useContextAuth"
import { Login } from "./pages/Login"
import { CreateUser } from "./pages/CreateUser"
import { People } from "./pages/people"
import { PeopleForm } from "./pages/people/PeopleForm"
import { PeoplePerfil } from "./pages/people/PeoplePerfil"
import { NotFound } from "./pages/NotFound"
import { Address } from "./pages/Address"

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
          <AddressProvider>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/register" element={<CreateUser/>}/>
              <Route element={<PrivateRoute/>}>
                  <Route path="/address/update/:id/:idAddress" element={<Address/>}/>
                  <Route path="/address/create/:id" element={<Address/>}/>
                  <Route path="/people" element={<People/>}/>
                  <Route path="/people/create" element={<PeopleForm/>}/>
                  <Route path="/people/update/:id" element={<PeopleForm/>}/>
                  <Route path="/people/perfil/:id" element={<PeoplePerfil/>}/>
              </Route>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </AddressProvider>
        </PeopleProvider>
      </AuthProvider>
    </BrowserRouter>
    
   
  )
}


