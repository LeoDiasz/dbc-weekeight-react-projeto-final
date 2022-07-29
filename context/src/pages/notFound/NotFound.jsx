import {useNavigate} from "react-router-dom"
import {useContextAuth} from "../../hooks/useContextAuth"
import { ContainerForFormAndLists } from "../../components/containerForFormAndLists/ContainerForFormAndLists.styled"
import { Button } from "../../components/button/Button.styled"
import { SectionPagesBackgroundBlack } from "../login/login.styled"

export const NotFound = () => {
  const navigate = useNavigate()
  const {token} = useContextAuth()
  
  return (
    <SectionPagesBackgroundBlack>
      <ContainerForFormAndLists display="flex" direction="column" width="400px" height="300px" alignItems="center" justifyContent="space-between">
        <h1>Essa pagina não existe</h1>
        <Button width="200px" onClick={event => token ? navigate("/home" ) : navigate("/")}>Voltar</Button>
      </ContainerForFormAndLists>
    </SectionPagesBackgroundBlack>
  )
}
