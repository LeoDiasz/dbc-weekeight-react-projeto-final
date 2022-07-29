import { Link } from "react-router-dom"
import {useContextAuth} from "../../hooks/useContextAuth"
import { Button } from "../button/Button.styled"
import {Logo} from "../logo/Logo"
import {NavContent, ListContent} from "./sideBar.styled"

export const SideBar = () => {
  const {signOut} = useContextAuth()

  return (
    <NavContent>
      <Logo/>
      <ListContent>
        <li><Link to="/endereco">Endereço</Link></li>
        <li><Link to="/pessoas">Pessoas</Link></li>
        <li><Link to="/home">Home</Link></li> 
      </ListContent>
      <Button width="200px" onClick={signOut}>Sair</Button>
    </NavContent>
  )
}
