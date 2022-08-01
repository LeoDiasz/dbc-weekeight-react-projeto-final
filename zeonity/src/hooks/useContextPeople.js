import { useContext } from "react"
import { PeopleContext } from "../context/PeopleContext"

export const useContextPeople = () => {

  const context = useContext(PeopleContext)

  return context
}




