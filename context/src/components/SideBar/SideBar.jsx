import { Link } from "react-router-dom"
import {useAuth} from "../../hooks/useAuth"
import {Logo} from "../Logo/Logo"
import {NavContent, ListContent} from "./sideBar.styled"

export const SideBar = () => {
  const {signOut} = useAuth()
  return (
    <NavContent>
      <Logo/>

      <ListContent>
        <li><Link to="/endereco">Endereço</Link></li>
        <li><Link to="/pessoa">Pessoas</Link></li>
        <li><Link to="/home">Home</Link></li> 
      </ListContent>

      <button onClick={signOut}>Sair</button>
    </NavContent>
  )
}
