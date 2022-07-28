import logoImg from "../../images/logo.png"
import {StyledLink} from "./logo.styled"

export const Logo = ({direction}) => {
  return (
    <StyledLink to="/" direction={direction} >
      <img src={logoImg} alt="logo"/>
      <h2>Dashboard Kit</h2>
    </StyledLink>

  )
}
