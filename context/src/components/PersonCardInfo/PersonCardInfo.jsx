import moment from "moment"
import "moment/locale/pt-br"
import { useNavigate } from "react-router-dom"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import { useContextPeople } from "../../hooks/useContextPeople"
import {PersonContent} from "./personCard.styled"
import { ButtonWithIcon } from "../button/Button.styled"

export const PersonCardInfo = ({person, notButtons}) => {
  const navigate = useNavigate()
  moment.locale("pt-br")
  const dateBirth = moment(person.dataNascimento).format("LL")
  const {handleDeletePerson} = useContextPeople()

  return (
    <PersonContent>
      <h4>{person.nome}</h4>
      <h4>{person.email}</h4>
      <h4>{person.cpf}</h4>
      <h4>{person.dataNascimento == "Data nascimento" ? "Data nascimento" : dateBirth}</h4>
      
      {!notButtons && <div>
          <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/pessoas/atualizar/${person.idPessoa}`)}><RiEditBoxLine/></ButtonWithIcon>
          <ButtonWithIcon backgroundColor="#F12B2C" onClick={event => handleDeletePerson(person.idPessoa)}><RiDeleteBinLine/></ButtonWithIcon>
      </div>}
    </PersonContent>
  )
}
