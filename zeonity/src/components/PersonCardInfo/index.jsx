import moment from "moment"
import "moment/locale/pt-br"
import { useNavigate } from "react-router-dom"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import { useContextPeople } from "../../hooks/useContextPeople"
import {PersonContent} from "./styles"
import { ButtonWithIcon } from "../Button/styles"

export const PersonCardInfo = ({person, notButtons}) => {
  moment.locale("pt-br")
  const dateBirth = moment(person.dataNascimento).format("LL")
  const navigate = useNavigate()
  const {handleDeletePerson} = useContextPeople()

  return (
    <PersonContent>
      <h4>{person.nome}</h4>
      <h4>{person.email}</h4>
      <h4>{person.cpf}</h4>
      <h4>{person.dataNascimento == "Data nascimento" ? "Data nascimento" : dateBirth}</h4>
      
      {!notButtons && <div>
          <ButtonWithIcon width="80px" size="16px" onClick={event => navigate(`/people/perfil/${person.idPessoa}`)}>Detalhes</ButtonWithIcon>
          <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/people/update/${person.idPessoa}`)}>
            <RiEditBoxLine/>
          </ButtonWithIcon>
          <ButtonWithIcon backgroundColor="#F12B2C" onClick={(event) => handleDeletePerson(person.idPessoa)}>
            <RiDeleteBinLine/>
          </ButtonWithIcon>
      </div>}
    </PersonContent>
  )
}
