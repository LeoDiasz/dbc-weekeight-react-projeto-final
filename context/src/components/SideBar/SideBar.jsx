import { Link } from "react-router-dom"
import {Logo} from "../Logo/Logo"
import {NavContent, ListContent} from "./sideBar.styled"

export const SideBar = () => {
  return (
    <NavContent>
      <Logo/>

      <ListContent>
        <li><Link to="/endereco">Endereço</Link></li>
        <li><Link to="/pessoa">Pessoas</Link></li>
        <li><Link to="/home">Home</Link></li> 
      </ListContent>
    </NavContent>
  )
}
