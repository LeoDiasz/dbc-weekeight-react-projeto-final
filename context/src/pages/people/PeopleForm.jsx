import { FormPeople } from "./components/FormPeople"
import { ContainerAroundPagesWithSideBar } from "../../components/containerAroundPagesWithSideBar/ContainerAroundPagesWithSideBar"
import { SectionMainPagesWithSideBar } from "../../components/sectionMainPagesWithSideBar/SectionMainPagesWithSideBar.styled"

export const PeopleForm = () => {
  
  return (
    <ContainerAroundPagesWithSideBar>
      <SectionMainPagesWithSideBar>
        <FormPeople/>
      </SectionMainPagesWithSideBar>
    </ContainerAroundPagesWithSideBar>
  )
}
