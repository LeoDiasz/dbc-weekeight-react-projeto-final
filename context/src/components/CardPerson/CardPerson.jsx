import {PersonContent, ButtonStyle} from "./cardPerson.styled"
import {Toaster, toast} from "react-hot-toast"
import {FiMoreVertical} from "react-icons/fi"
import {useState} from "react"
import { api } from "../../services/api"
import {ModalPerson} from "../Modal/Modal"

export const CardPerson = ({person}) => {
  const [showButtons, setShowButtons] = useState(false)
  
  const deletePerson = async (id) => {
    
    try {
      
      await api.delete(`/pessoa/${id}`)

      toast.success("Pessoa deletada com sucesso.")

    } catch {

      toast.error("Não foi possivel deletar")
    }
    
  }

  return (
    <PersonContent>
      <Toaster/>
      <h4>{person.nome}</h4>
      <h4>{person.email}</h4>
      <h4>{person.cpf}</h4>
      <h4>{person.dataNascimento}</h4>
      
      {showButtons &&<div>
        <ButtonStyle color="#F12B2C" onClick={event => deletePerson(person.idPessoa)}>
            <span>Excluir pessoa</span>
        </ButtonStyle>
        <ButtonStyle color="#29CC97">
          <span>Atualizar pessoa</span>
        </ButtonStyle>
      </div>}
    
      <button onClick={event => setShowButtons(showButtons == true ? false : true)}>
        <FiMoreVertical/>
      </button>
   
     
    </PersonContent>
  )
}
