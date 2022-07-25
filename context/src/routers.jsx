import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/Login/Login"
import { Users } from "./pages/Users/Users"


export const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/usuarios" element={<Users/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
   
  )
}


