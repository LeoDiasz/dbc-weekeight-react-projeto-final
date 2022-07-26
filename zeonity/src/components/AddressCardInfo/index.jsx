import {useNavigate} from "react-router-dom"
import {useState} from "react"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import { ModalDelete } from "../ModalDelete"
import { useContextAddress } from "../../hooks/useContextAddress"
import { ListAddressContent } from "./styles"
import { ButtonWithIcon } from "../Button/styles"
import { formatCepWithCaracteres } from "../../utils/formatDatas"

export const AddressCardInfo = ({addressDatas, notButtons, idPerson}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const {handleDeleteAddress} = useContextAddress()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <ListAddressContent>
      <h4>{formatCepWithCaracteres(addressDatas.cep)}</h4>
      <h4>{addressDatas.logradouro}</h4>
      <h4>{addressDatas.numero}</h4>
      <h4>{addressDatas.complemento ? addressDatas.complemento : "Sem complemento"}</h4>
      <h4>{addressDatas.tipo}</h4>
      <h4>{addressDatas.cidade}</h4>
      <h4>{addressDatas.estado}</h4>
      <h4>{addressDatas.pais}</h4>
    
      
      {!notButtons && 
      <div>
        <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/address/update/${idPerson}/${addressDatas.idEndereco}`)}>
          <RiEditBoxLine/>
        </ButtonWithIcon>
        <ButtonWithIcon backgroundColor="#F12B2C" onClick={handleOpenModal}>
          <RiDeleteBinLine/>
        </ButtonWithIcon>
      </div>}

      <ModalDelete isOpen={isOpenModal} handleCloseModal={handleCloseModal} setIsOpen={setIsOpenModal} handleDelete={handleDeleteAddress} idDelete={addressDatas.idEndereco} idExtra={idPerson}/>
    </ListAddressContent>
  )
}