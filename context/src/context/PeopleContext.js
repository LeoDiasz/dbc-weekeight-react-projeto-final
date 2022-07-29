import {createContext, useState} from "react"
import {toast} from "react-hot-toast"
import {api} from "../services/api"
import { maskOnlyNumbers } from "../utils/masks"

const PeopleContext = createContext()

const PeopleProvider = ({children}) => {
  const [listPeople, setListPeople] = useState()

  const handleCreatePerson = async (personDatas) => {

    if (!personDatas) {
      return
    }
    
    personDatas.cpf = personDatas.cpf.replace(maskOnlyNumbers, "")
    
    const personDatasFiltered = {email: personDatas.email, nome: personDatas.nome, dataNascimento: personDatas.dataNascimento, cpf: personDatas.cpf}
    
    try {
      await api.post("/pessoa", personDatasFiltered)
      
      toast.success("Pessoa cadastrada com sucesso")
      getPeople()

    } catch(Error) {
      toast.error("Não foi possivel cadastrar o usuário")
    }
  }

  const handleDeletePerson = async (id) => {

    if(!id) {
      return
    }

    try {
      
      await api.delete(`/pessoa/${id}`)

      toast.success("Pessoa deletada com sucesso.")
      getPeople()

    } catch {

      toast.error("Não foi possivel deletar")
    }

  }

  const handleUpdatePerson = async (personDatas) => {
    personDatas.cpf = personDatas.cpf.replace(maskOnlyNumbers, "")
    
    const {idPessoa, dataNascimento, email, nome, cpf} = personDatas
    const personDatasForUpdate = {dataNascimento, email, nome, cpf} 

    try {
      await api.put(`/pessoa/${idPessoa}`, personDatasForUpdate)
      toast.success("Pessoa atualizada com sucesso")
  
    } catch(error) {
      toast.error("Erro ao atualizar")

    }

  }
  
  const getPersonForId = async (id, setState) => {
    
    if(!id) {
      return
    }

    try {
      const {data: [personDatas]} = await api.get(`/pessoa/lista-completa?${id}`)
      const {cpf, email, dataNascimento, nome, idPessoa} = personDatas
      const personDatasFiltered = {cpf, email, dataNascimento, nome, idPessoa}

      if (setState) {
        setState(personDatasFiltered)
      }

    } catch {
      toast.error("Não foi possivel encontrar essa pessoa")
    }

  }

  const getPeople = async(setState = setListPeople) => {

    try {
      const {data: {content}} = await api.get("/pessoa")

      setState(content)
    
    } catch(Error) {
      console.log(Error)

    }

  }

  return (
    <PeopleContext.Provider value={{handleCreatePerson, handleDeletePerson, getPersonForId, getPeople, listPeople, setListPeople, handleUpdatePerson}}>
      {children}
    </PeopleContext.Provider>
  )
}


export {PeopleContext, PeopleProvider}