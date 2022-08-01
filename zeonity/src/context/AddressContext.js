import {createContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import {api} from "../services/api"

const AddressContext = createContext()

const AddressProvider = ({children}) => {
  const [listAddressOfPerson, setListAddressOfPerson] = useState() 
  const navigate = useNavigate()

  const getAddressByIdPerson = async (idPerson) => {

    try {
      const {data: listAddress} = await api.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPerson}`)
  
      setListAddressOfPerson(listAddress)
  
    } catch(Error){
      console.log(Error)
    }
  }
  
  const handleDeleteAddress = async (id) => {
    if(!id) {
      return
    }

    try {
      
      await api.delete(`/endereco/${id}`)

      toast.success("endereço excluido com sucesso.")
    
    } catch {
      toast.error("Não foi possivel deletar")
    }
  }

  const handleCreateAddress = async (addressDatas, idPerson) => {

    if (!addressDatas) {
      return
    }

    addressDatas.cep = addressDatas.cep.replace("-", "")
    addressDatas.tipo = addressDatas.tipo.toUpperCase()

    try {
      await api.post(`/endereco/{idPessoa}?idPessoa=${idPerson}`, addressDatas)
      
      toast.success("Endereço cadastrado com sucesso")
      navigate(`/people/perfil/${idPerson}`)

    } catch(Error) {
      toast.error("Não foi possivel cadastrar o endereço")
    }
  
    
  }

  const handleUpdateAddress = async (addressDatas) => {

    if (!addressDatas) {
      return
    }

    try {
      await api.put(`/pessoa/${addressDatas}`, addressDatas)
      toast.success("Pessoa atualizada com sucesso")
  
    } catch(error) {
      toast.error("Erro ao atualizar")

    }
  }

 

  return (
    <AddressContext.Provider value={{getAddressByIdPerson, listAddressOfPerson, handleCreateAddress, handleDeleteAddress, handleUpdateAddress}}>
      {children}
    </AddressContext.Provider>
  )
}


export {AddressProvider, AddressContext}