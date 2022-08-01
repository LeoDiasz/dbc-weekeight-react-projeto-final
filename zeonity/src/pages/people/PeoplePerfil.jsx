import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { Button } from "../../components/Button/styles"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { Loading } from "../../components/Loading"
import { useContextAddress } from "../../hooks/useContextAddress"
import {useContextPeople} from "../../hooks/useContextPeople"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { ListAddress } from "./components/ListAddress"

export const PeoplePerfil = () => {
  const [personDatas, setPersonDatas] = useState()
  const [loading, setLoading] = useState(true)
  const {getAddressByIdPerson, listAddressOfPerson} = useContextAddress()
  const {getPersonById} = useContextPeople()
  const {id} = useParams()
  const navigate = useNavigate()

  const setup = async () => {
    await getAddressByIdPerson(id)
    await getPersonById(id, setPersonDatas)
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
        <Button width="200px" onClick={event => navigate("/people")}>Voltar</Button>
      </HeaderPages>
      <ListAddress listAddress={listAddressOfPerson} id={id}/>
    </ContainerPagesWithSideBar>
  )
}
