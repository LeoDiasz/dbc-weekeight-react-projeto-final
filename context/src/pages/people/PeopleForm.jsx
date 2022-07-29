import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { FormPeople } from "./components/FormPeople"
import { useContextPeople } from "../../hooks/useContextPeople"
import { ContainerAroundPagesWithSideBar } from "../../components/containerAroundPagesWithSideBar/ContainerAroundPagesWithSideBar"
import { SectionMainPagesWithSideBar } from "../../components/sectionMainPagesWithSideBar/SectionMainPagesWithSideBar.styled"

export const PeopleForm = () => {
  const {getPersonForId, personDatasUpdate}  = useContextPeople()
  const [isUpdate, setIsUpdate] = useState(false) 
  const {id} = useParams()

  const setup = async () => {
    if (id) {
      await getPersonForId()
      setIsUpdate(true)
    }

  }

  useEffect(() => {
    setup()
      
  }, [])
  
  return (
    <ContainerAroundPagesWithSideBar>
      <SectionMainPagesWithSideBar>
        <FormPeople personDatasUpdate={personDatasUpdate} isUpdate={isUpdate}/>
      </SectionMainPagesWithSideBar>
    </ContainerAroundPagesWithSideBar>
  )
}
