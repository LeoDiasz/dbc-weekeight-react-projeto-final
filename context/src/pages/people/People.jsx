import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { useContextPeople } from "../../hooks/useContextPeople";
import { ListPeople } from "./components/ListPeople";
import { ContainerAroundPagesWithSideBar } from "../../components/containerAroundPagesWithSideBar/ContainerAroundPagesWithSideBar";
import { SectionMainPagesWithSideBar } from "../../components/sectionMainPagesWithSideBar/SectionMainPagesWithSideBar.styled";
import { HeaderPages } from "../../headerPages/HeaderPages.styled";

export const People = () => {
  const {listPeople, getPeople} = useContextPeople()
  const navigate = useNavigate()

  useEffect(() => {
    getPeople()

  }, [])

  return (
    <ContainerAroundPagesWithSideBar>
      <SectionMainPagesWithSideBar>
        <HeaderPages>
          <h1>Tickets</h1>
          <button onClick={event => navigate("/pessoas/criar")}>Cadastrar pessoas</button>
        </HeaderPages>
        {listPeople && <ListPeople listPeopleDatas={listPeople}/>}
      </SectionMainPagesWithSideBar>
    </ContainerAroundPagesWithSideBar>
  )
}
