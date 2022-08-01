import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { FormPeople } from "./components/FormPeople"
import { useContextPeople } from "../../hooks/useContextPeople"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { ContainerForFormAndLists } from "../../components/ContainerForFormAndLists/styles"
import { Loading } from "../../components/Loading"

export const PeopleForm = () => {
  const {getPersonById, personDatasUpdate}  = useContextPeople()
  const [loading, setLoading] = useState(true)
  const [isUpdate, setIsUpdate] = useState(false) 
  const {id} = useParams()

  const setup = async () => {
    if (id) {
      await getPersonById(id)
      setIsUpdate(true)
    }
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
    <ContainerPagesWithSideBar>
      <ContainerForFormAndLists>
        <FormPeople personDatasUpdate={personDatasUpdate} isUpdate={isUpdate}/>
      </ContainerForFormAndLists>
    </ContainerPagesWithSideBar>
  )
}
