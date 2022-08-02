import {createContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import {toast} from "react-hot-toast"
import {api} from "../services/api"
import { formatDatePtBrForDefault, formatDateDefaultForPtBr, formatDataForOnlyNumbers } from "../utils/formatDatas"

const PeopleContext = createContext()

const PeopleProvider = ({children}) => {
  const [listPeople, setListPeople] = useState()
  const [personDatasUpdate, setPersonDatasUpdate] = useState()
  const navigate = useNavigate()

  const getPeople = async(setState = setListPeople) => {

    try {
      const {data: {content}} = await api.get("/pessoa")

      setState(content)
    
    } catch(Error) {
      console.log(Error)

    }

  }

  const getPersonById = async (id, setState = setPersonDatasUpdate) => {
    
    try {
      const {data: [personDatas]} = await api.get(`/pessoa/lista-completa?idPessoa=${id}`)
      
      personDatas.dataNascimento = formatDateDefaultForPtBr(personDatas.dataNascimento)

      const {cpf, email, dataNascimento, nome, idPessoa} = personDatas
      const personDatasFiltered = {cpf, email, dataNascimento, nome, idPessoa}

      setState(personDatasFiltered)
      
    } catch {
      toast.error("Não foi possivel encontrar essa pessoa")
    }

  }

  const handleCreatePerson = async (personDatas) => {

    if (!personDatas) {
      return
    }
    
    personDatas.cpf = formatDataForOnlyNumbers(personDatas.cpf)
    personDatas.dataNascimento = formatDatePtBrForDefault(personDatas.dataNascimento)

    const {email, dataNascimento, nome, cpf} = personDatas
    const personDatasFiltered = {email, dataNascimento, nome, cpf}
    
    try {
      await api.post("/pessoa", personDatasFiltered)
      
      getPeople()
      navigate("/people")
      toast.success("Pessoa cadastrada com sucesso")

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

      getPeople()
      toast.success("Pessoa deletada com sucesso.")

    } catch {
      toast.error("Não foi possivel deletar")
    }

  }

  const handleUpdatePerson = async (personDatas) => {

    if (!personDatas) {
      return
    }

    personDatas.cpf = formatDataForOnlyNumbers(personDatas.cpf)
    personDatas.dataNascimento = formatDatePtBrForDefault(personDatas.dataNascimento)
    
    const {idPessoa, dataNascimento, email, nome, cpf} = personDatas
    const personDatasForUpdate = {dataNascimento, email, nome, cpf} 

    try {
      await api.put(`/pessoa/${idPessoa}`, personDatasForUpdate)
      
      navigate("/people")
      toast.success("Pessoa atualizada com sucesso")
  
    } catch(error) {
      toast.error("Erro ao atualizar")

    }

  }
  
  return (
    <PeopleContext.Provider value={{
      getPeople, 
      getPersonById, 
      handleCreatePerson, 
      handleDeletePerson, 
      handleUpdatePerson, 
      listPeople, 
      personDatasUpdate
    }}>
      {children}
    </PeopleContext.Provider>
  )
}

export {PeopleContext, PeopleProvider}