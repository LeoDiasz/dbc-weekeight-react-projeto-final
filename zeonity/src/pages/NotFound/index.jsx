import {useNavigate} from "react-router-dom"
import {useContextAuth} from "../../hooks/useContextAuth"
import { ContainerForFormAndLists } from "../../components/ContainerForFormAndLists/styles"
import { Button } from "../../components/Button/styles"
import { DivBanner } from "../../components/ScreenLoginAndRegisterUser/styles"
import { Logo } from "../../components/Logo"

export const NotFound = () => {
  const navigate = useNavigate()
  const {token} = useContextAuth()
  
  return (
    <DivBanner>
      <ContainerForFormAndLists display="flex" direction="column" width="400px" alignItems="center" gap="50px">
        <h1>Essa pagina não existe</h1>
        <Button onClick={event => token ? navigate("/people" ) : navigate("/")}>Voltar</Button>
      </ContainerForFormAndLists>
    </DivBanner>
  )
}
