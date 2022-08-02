import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import { useContextPeople } from "../../hooks/useContextPeople";
import { ListPeople } from "./components/ListPeople";
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar";
import { HeaderPages } from "../../components/HeaderPages/styles";
import { Button } from "../../components/Button/styles";
import { Loading } from "../../components/Loading";

export const People = () => {
  const {listPeople, getPeople} = useContextPeople()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const setup = async () => {
    await getPeople()
    setLoading(false)
  }
  
  useEffect(() => {
    setup()
  }, [])


  if (loading) {
    <Loading/>
  }

  return (
    <ContainerPagesWithSideBar isMain>
      <HeaderPages>
        <h2>Pessoas</h2>
        <Button width="150px" onClick={event => navigate("/people/create")}>Cadastrar pessoas</Button>
      </HeaderPages>
      {listPeople && <ListPeople listPeopleDatas={listPeople}/>}
    </ContainerPagesWithSideBar>
  )
}
