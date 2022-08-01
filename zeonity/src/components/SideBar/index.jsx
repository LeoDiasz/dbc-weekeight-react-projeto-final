import { Link } from "react-router-dom"
import {Logo} from "../Logo"
import {useContextAuth} from "../../hooks/useContextAuth"
import { Button } from "../Button/styles"
import {NavContent, ListContent} from "./styles"

export const SideBar = () => {
  const {signOut} = useContextAuth()

  return (
    <NavContent>
      <Logo isWithText/>
      <ListContent>
        {/* <li><Link to="/address">Endereço</Link></li> */}
        <li><Link to="/home">Home</Link></li> 
        <li><Link to="/people">Pessoas</Link></li>
      </ListContent>
      <Button width="200px" onClick={signOut}>Sair</Button>
    </NavContent>
  )
}
