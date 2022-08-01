import {useState} from "react";
import Modal from "react-modal"
import { useContextPeople } from "../../hooks/useContextPeople"
import { Button } from "../Button/styles";

const ModalDeletePerson = ({id}) => {
  const {handleDeletePerson} = useContextPeople()
  const [isOpen, setIsOpen] = useState(false)

  const handleIsDelete = async () => {
    await handleDeletePerson(id)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
    >
      <p>Você Deseja deletar essa pessoa?</p>
      <Button color="red" onClick={() => handleCloseModal()}>
        Não
      </Button>
      <Button color="green" onClick={() => handleIsDelete()}>
        Sim
      </Button>
    </Modal>
  );
}

export {ModalDeletePerson};