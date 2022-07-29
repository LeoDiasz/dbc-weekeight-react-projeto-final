import {useEffect} from "react"
import { useContextPeople } from "../../hooks/useContextPeople";
import { DivContainer } from "../home/home.styled";
import { SideBar } from "../../components/SideBar/SideBar";
import { SectionContainer} from "./person.styled";
import { ListPeople } from "./components/ListPeople";

export const People = () => {
  const {listPeople, getPeople} = useContextPeople()

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <DivContainer>
      <SideBar/>
      <SectionContainer>
        <header>
          <h1>Tickets</h1>
          <span>Leonardo Dias</span>
        </header>
        {listPeople && <ListPeople listPeopleDatas={listPeople}/>}
      </SectionContainer>
    </DivContainer>
    
  )
}
