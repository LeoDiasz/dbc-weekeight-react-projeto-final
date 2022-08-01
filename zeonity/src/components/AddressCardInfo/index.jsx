import {useNavigate} from "react-router-dom"
import { ListAddressContent } from "./styles"
import { ButtonWithIcon } from "../Button/styles"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import { useContextAddress } from "../../hooks/useContextAddress"

export const AddressCardInfo = ({addressDatas, notButtons}) => {
  const {handleDeleteAddress} = useContextAddress()
  const navigate = useNavigate()

  return (
    <ListAddressContent>
      <h4>{addressDatas.cep}</h4>
      <h4>{addressDatas.logradouro}</h4>
      <h4>{addressDatas.numero}</h4>
      <h4>{addressDatas.complemento}</h4>
      <h4>{addressDatas.cidade}</h4>
      <h4>{addressDatas.estado}</h4>
      <h4>{addressDatas.pais}</h4>
      
      {!notButtons && 
      <div>
        <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/address/update/${addressDatas.idEndereco}`)}>
          <RiEditBoxLine/>
        </ButtonWithIcon>
        <ButtonWithIcon backgroundColor="#F12B2C" onClick={(event) => handleDeleteAddress(addressDatas.idEndereco)}>
          <RiDeleteBinLine/>
        </ButtonWithIcon>
      </div>}
    </ListAddressContent>
  )
}