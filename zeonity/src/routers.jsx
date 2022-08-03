import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { PeopleProvider } from "./context/PeopleContext"
import {AddressProvider} from "./context/AddressContext"
import { ContactProvider } from "./context/ContactContext"
import {useContextAuth} from "./hooks/useContextAuth"
import { Login } from "./pages/Login"
import { CreateUser } from "./pages/CreateUser"
import { People } from "./pages/people"
import { PeopleForm } from "./pages/people/PeopleForm"
import { PeoplePerfil } from "./pages/people/PeoplePerfil"
import { NotFound } from "./pages/NotFound"
import { AddressForm } from "./pages/AddressForm"
import { ContactForm } from "./pages/ContactForm"

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
            <ContactProvider>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<CreateUser/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/people" element={<People/>}/>
                    <Route path="/people/create" element={<PeopleForm/>}/>
                    <Route path="/people/update/:id" element={<PeopleForm/>}/>
                    <Route path="/people/perfil/:id" element={<PeoplePerfil/>}/>
                    <Route path="/address/update/:id/:idAddress" element={<AddressForm/>}/>
                    <Route path="/address/create/:id" element={<AddressForm/>}/>
                    <Route path="/contact/create/:id" element={<ContactForm/>}/>
                    <Route path="/contact/update/:id/:idContact" element={<ContactForm/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </ContactProvider>
          </AddressProvider>
        </PeopleProvider>
      </AuthProvider>
    </BrowserRouter>
    
   
  )
}


