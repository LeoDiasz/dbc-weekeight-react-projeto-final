import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {useContextPeople} from "../../hooks/useContextPeople"
import { ContainerAroundPagesWithSideBar } from "../../components/containerAroundPagesWithSideBar/ContainerAroundPagesWithSideBar"
import { SectionMainPagesWithSideBar } from "../../components/sectionMainPagesWithSideBar/SectionMainPagesWithSideBar.styled"
import { ContainerForFormAndLists } from "../../components/containerForFormAndLists/ContainerForFormAndLists.styled"
import { FormPeople } from "./components/FormPeople"

export const PeopleForm = () => {
  const [personDatasUpdate, setPersonDatasUpdate] = useState()
  const [isUpdate, setIsUpdate] = useState(false) 
  const { getPersonForId } = useContextPeople()
  const { id } = useParams()

  useEffect(() => {
    if(id) {
      setIsUpdate(true)
      getPersonForId(id, setPersonDatasUpdate)
    }
  }, [])

  return (
    <ContainerAroundPagesWithSideBar>
      <SectionMainPagesWithSideBar>
        <ContainerForFormAndLists>
          <FormPeople isUpdate={isUpdate} personDatasUpdate={personDatasUpdate}/>
        </ContainerForFormAndLists>
      </SectionMainPagesWithSideBar>
    </ContainerAroundPagesWithSideBar>
  )
}
