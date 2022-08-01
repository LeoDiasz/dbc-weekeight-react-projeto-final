import logoImg from "../../images/logo.png"
import logoImgText from "../../images/logo-text.png"
import { useContextAuth } from "../../hooks/useContextAuth"
import {StyledLink} from "./styles"

export const Logo = ({isWithText}) => {
  const {token} = useContextAuth()

  return (
    <StyledLink to={token ? "/home" : "/"} isWithText={isWithText}>
      <img src={isWithText ? logoImgText : logoImg} alt="logo"/>
    </StyledLink>

  )
}
