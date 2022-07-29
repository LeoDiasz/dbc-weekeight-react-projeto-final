import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {useContextPeople} from "../../hooks/useContextPeople"
import { ContainerAroundPagesWithSideBar } from "../../components/containerAroundPagesWithSideBar/ContainerAroundPagesWithSideBar"
import { SectionMainPagesWithSideBar } from "../../components/sectionMainPagesWithSideBar/SectionMainPagesWithSideBar.styled"

export const PeopleForm = () => {
  const [personDatasUpdate, setPersonDatasUpdate] = useState()
  const [isUpdate, setIsUpdate] = useState(false) 
  const { getPersonForId, handleUpdatePerson } = useContextPeople()
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

      </SectionMainPagesWithSideBar>
    </ContainerAroundPagesWithSideBar>
  )
}
