import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {useContextPeople} from "../../hooks/useContextPeople"

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
    <section>
        <h1>People</h1>
    </section>
  )
}
