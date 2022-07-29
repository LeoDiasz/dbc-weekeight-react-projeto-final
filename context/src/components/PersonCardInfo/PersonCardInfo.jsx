import moment from "moment"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import {FiMoreVertical} from "react-icons/fi"
import { useContextPeople } from "../../hooks/useContextPeople"
import {ButtonWithIcon, PersonContent} from "./personCard.styled"
import { Button } from "../button/Button.styled"

export const PersonCardInfo = ({person, notButtons}) => {
  const [showButtonsDeleteAndUpdate, setShowButtonsDeleteAndUpdate] = useState(false)
  const navigate = useNavigate()
  moment.locale()
  const dateBirth = moment(person.dataNascimento).format("LL")
  const {handleDeletePerson} = useContextPeople()

  return (
    <PersonContent>
      <h4>{person.nome}</h4>
      <h4>{person.email}</h4>
      <h4>{person.cpf}</h4>
      <h4>{person.dataNascimento == "Data nascimento" ? "Data nascimento" : dateBirth}</h4>
      
      {!notButtons && <div>
          <Button backgroundColor="#F12B2C" onClick={event => handleDeletePerson(person.idPessoa)}>Excluir</Button>
          <Button backgroundColor="#29CC97" onClick={event => navigate(`/pessoas/atualizar/${person.idPessoa}`)}>Atualizar</Button>
      </div>}
      {!notButtons && <ButtonWithIcon> <FiMoreVertical/></ButtonWithIcon>}
    </PersonContent>
  )
}
