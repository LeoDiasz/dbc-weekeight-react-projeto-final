import {useState} from "react"
import {PersonContent, ButtonStyle} from "./personCard.styled"
import moment from "moment"
import {FiMoreVertical} from "react-icons/fi"

export const PersonCardInfo = ({person}) => {
  const [showButtonsDeleteAndUpdate, setShowButtonsDeleteAndUpdate] = useState(false)
  const dateBirth = moment(person.dataNascimento).format("ll")

  return (
    <PersonContent>
      <h4>{person.nome}</h4>
      <h4>{person.email}</h4>
      <h4>{person.cpf}</h4>
      <h4>{dateBirth ? dateBirth : "Data nascimento"}</h4>
      
     <div>
        <ButtonStyle color="#F12B2C">
            <span>Excluir pessoa</span>
        </ButtonStyle>
        <ButtonStyle color="#29CC97">
          <span>Atualizar pessoa</span>
        </ButtonStyle>
      </div>
    
      <button>
        <FiMoreVertical/>
      </button>
   
    </PersonContent>
  )
}
