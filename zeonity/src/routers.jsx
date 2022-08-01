import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { PeopleProvider } from "./context/PeopleContext"
import {useContextAuth} from "./hooks/useContextAuth"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { CreateUser } from "./pages/CreateUser"
import { Address } from "./pages/Address"
import { People } from "./pages/people"
import { PeopleForm } from "./pages/people/PeopleForm"
import { NotFound } from "./pages/NotFound"

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
            <Route path="/register" element={<CreateUser/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/home" element={<Home/>} />
                <Route path="/address" element={<Address/>} />
                <Route path="/people" element={<People/>}/>
                <Route path="/people/create" element={<PeopleForm/>}/>
                <Route path="/people/update/:id" element={<PeopleForm/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </PeopleProvider>
      </AuthProvider>
    </BrowserRouter>
    
   
  )
}


