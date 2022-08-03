import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { Button } from "../../components/Button/styles"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { Loading } from "../../components/Loading"
import { useContextAddress } from "../../hooks/useContextAddress"
import {useContextPeople} from "../../hooks/useContextPeople"
import { useContextContact } from "../../hooks/useContextContact"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { ListAddress } from "../AddressForm/components/ListAddress"
import { ListContact } from "../ContactForm/components/ListContact"

export const PeoplePerfil = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [personDatas, setPersonDatas] = useState()
  const [loading, setLoading] = useState(true)
  const {getPersonById} = useContextPeople()
  const {getAddressByIdPerson, listAddressOfPerson} = useContextAddress()
  const {getContactsByIdPerson, listContactsOfPerson} = useContextContact()

  const setup = async () => {
    await getAddressByIdPerson(id)
    await getPersonById(id, setPersonDatas)
    await getContactsByIdPerson(id)
    setLoading(false)
  }

  useEffect(() => {
    setup()
  }, [])

  if(loading) {
    return (
      <Loading/>
    )
  }

  return (
    <ContainerPagesWithSideBar >
      <HeaderPages>
        {personDatas && <h3>Usuário: {personDatas.nome}</h3>}
        <Button onClick={event => navigate("/people")}>Voltar</Button>
      </HeaderPages>
      <ListAddress listAddress={listAddressOfPerson} id={id}/>
      <ListContact listContacts={listContactsOfPerson} id={id}/>
    </ContainerPagesWithSideBar>
  )
}
