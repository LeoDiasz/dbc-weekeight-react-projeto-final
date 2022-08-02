import {useNavigate} from "react-router-dom"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import { useContextAddress } from "../../hooks/useContextAddress"
import { ListAddressContent } from "./styles"
import { ButtonWithIcon } from "../Button/styles"

export const AddressCardInfo = ({addressDatas, notButtons, idPerson}) => {
  const {handleDeleteAddress} = useContextAddress()
  const navigate = useNavigate()

  return (
    <ListAddressContent>
      <h4>{addressDatas.cep}</h4>
      <h4>{addressDatas.logradouro}</h4>
      <h4>{addressDatas.numero}</h4>
      <h4>{addressDatas.complemento ? addressDatas.complemento : "Sem complemento"}</h4>
      <h4>{addressDatas.cidade}</h4>
      <h4>{addressDatas.estado}</h4>
      <h4>{addressDatas.pais}</h4>
      
      {!notButtons && 
      <div>
        <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/address/update/${idPerson}/${addressDatas.idEndereco}`)}>
          <RiEditBoxLine/>
        </ButtonWithIcon>
        <ButtonWithIcon backgroundColor="#F12B2C" onClick={(event) => handleDeleteAddress(addressDatas.idEndereco, idPerson)}>
          <RiDeleteBinLine/>
        </ButtonWithIcon>
      </div>}
    </ListAddressContent>
  )
}