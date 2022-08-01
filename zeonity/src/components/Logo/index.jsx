import { Link } from "react-router-dom"
import logoImg from "../../images/logo.png"
import logoImgText from "../../images/logo-text.png"
import { useContextAuth } from "../../hooks/useContextAuth"
import {LogoContent} from "./styles"

export const Logo = ({isWithText}) => {
  const {token} = useContextAuth()

  return (
    <Link to={token ? "/people" : "/"}>
      <LogoContent src={isWithText ? logoImgText : logoImg} alt="logo" isWithText={isWithText}/>
    </Link>
  )
}
