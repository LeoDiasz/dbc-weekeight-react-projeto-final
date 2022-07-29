import { useContextAuth } from "../../hooks/useContextAuth"
import logoImg from "../../images/logo.png"
import {StyledLink} from "./logo.styled"

export const Logo = ({direction}) => {
  const {token} = useContextAuth()

  return (
    <StyledLink to={token ? "/home" : "/"} direction={direction} >
      <img src={logoImg} alt="logo"/>
      <h2>Dashboard Kit</h2>
    </StyledLink>

  )
}
