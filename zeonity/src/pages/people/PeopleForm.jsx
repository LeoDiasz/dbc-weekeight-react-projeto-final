import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { FormPeople } from "./components/FormPeople"
import { useContextPeople } from "../../hooks/useContextPeople"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"

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
    <ContainerPagesWithSideBar>
      <FormPeople personDatasUpdate={personDatasUpdate} isUpdate={isUpdate}/>
    </ContainerPagesWithSideBar>
  )
}
