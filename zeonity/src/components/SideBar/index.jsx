import { Link } from "react-router-dom"
import {useContextAuth} from "../../hooks/useContextAuth"
import {Logo} from "../Logo"
import { Button } from "../Button/styles"
import {NavContent, ListContent} from "./styles"

export const SideBar = () => {
  const {signOut} = useContextAuth()

  return (
    <NavContent>
      <Logo isWithText/>
      <ListContent>
        <li><Link to="/people">Pessoas</Link></li>
      </ListContent>
      <Button width="200px" onClick={signOut}>Sair</Button>
    </NavContent>
  )
}
