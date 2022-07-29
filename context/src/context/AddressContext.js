import {createContext, useState} from "react"
import {toast} from "react-hot-toast"
import {api} from "../services/api"

const AddressContext = createContext()

// const searchDatasAddress = async (event, setFieldValue) => {

//   const cep = event.target.value

//   const newCep = cep.replace(/[^0-9]/gi, "");

//   if(newCep.length !== 8) {
//     return
//   }
  
//   try {
//     const {data: result} = await api.get(`https://viacep.com.br/ws/${newCep}/json/`)

//     setFieldValue("cidade", result.localidade)
//     setFieldValue("estado", result.uf)
//     setFieldValue("complemento", result.complemento)
//     setFieldValue("logradouro", result.logradouro)

//   } catch(error) {
//     console.log(error)
//   }
  
// }

const AddressProvider = ({children}) => {
  return (
    <AddressContext.Provider>
      {children}
    </AddressContext.Provider>
  )
}


export {AddressProvider, AddressContext}