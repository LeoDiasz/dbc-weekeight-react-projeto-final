import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { useContextPeople } from "../../hooks/useContextPeople";
import { ListPeople } from "./components/ListPeople";
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar";
import { HeaderPages } from "../../components/HeaderPages/styles";
import { Button } from "../../components/Button/styles";

export const People = () => {
  const {listPeople, getPeople} = useContextPeople()
  const navigate = useNavigate()

  useEffect(() => {
    getPeople()

  }, [])

  return (
    <ContainerPagesWithSideBar>
      <HeaderPages>
        <h2>Pessoas</h2>
        <Button width="150px" onClick={event => navigate("/people/create")}>Cadastrar pessoas</Button>
      </HeaderPages>
      {listPeople && <ListPeople listPeopleDatas={listPeople}/>}
    </ContainerPagesWithSideBar>
  )
}
