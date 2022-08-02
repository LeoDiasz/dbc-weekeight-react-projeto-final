import {useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FormPeople } from "./components/FormPeople"
import { useContextPeople } from "../../hooks/useContextPeople"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { Button } from "../../components/Button/styles"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { ContainerForFormAndLists } from "../../components/ContainerForFormAndLists/styles"
import { Loading } from "../../components/Loading"

export const PeopleForm = () => {
  const {getPersonById, personDatasUpdate}  = useContextPeople()
  const [loading, setLoading] = useState(true)
  const [isUpdate, setIsUpdate] = useState(false) 
  const navigate = useNavigate()
  const {id} = useParams()

  const setup = async () => {
    
    if (id) {
      try {
        await getPersonById(id)
      } catch(Error) {
        console.log(Error)
      }
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
    <ContainerPagesWithSideBar gap="50px">
      <HeaderPages justifyContent="flex-end" >
        <Button onClick={event => navigate(`/people`)}>Voltar</Button>
      </HeaderPages>
      <ContainerForFormAndLists>
        <FormPeople personDatasUpdate={personDatasUpdate} isUpdate={isUpdate}/>
      </ContainerForFormAndLists>
    </ContainerPagesWithSideBar>
  )
}
