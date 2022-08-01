import {useNavigate} from "react-router-dom"
import { AddressCardInfo } from '../../../components/AddressCardInfo'
import { ListContainer } from "../styles"
import { Button } from "../../../components/Button/styles"

export const ListAddress = ({listAddress, id}) => {
  const navigate = useNavigate()

  return (
    <ListContainer padding="40px 0" display="flex" direction="column" gap="30px">
      <h3>Lista endereços</h3>
      <AddressCardInfo notButtons addressDatas={{cep: "cep", logradouro: "logradouro", numero: "numero", cidade: "cidade", estado: "estado", pais: "pais", complemento: "complemento"}}/>
      {listAddress.length ? listAddress.map((address, i) => (
        <AddressCardInfo addressDatas={address} key={i}/>
      )) : <h2>Nenhum endereço cadastrado</h2>}
       <Button margin width="200px" onClick={event => navigate(`/address/create/${id}`)}>Adicionar endereços</Button>
    </ListContainer>
  )
}
