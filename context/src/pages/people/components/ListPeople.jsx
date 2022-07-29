import {SectionListPeople} from "../person.styled"
import { PersonCardInfo } from "../../../components/personCardInfo/PersonCardInfo"
import { ContainerForFormAndLists } from "../../../components/containerForFormAndLists/ContainerForFormAndLists.styled"

export const ListPeople = ({listPeopleDatas}) => {

  return (
    <ContainerForFormAndLists padding="40px 0" display="flex" direction="column" gap="20px">
      <h3 style={{padding: "0 40px"}}>Lista pessoas</h3>

      {listPeopleDatas ? 
        <ul>
          <PersonCardInfo person={{nome: "Nome", email: "Email", dataNascimento: "Data nascimento", cpf: "Cpf"}} notButtons/>

          {listPeopleDatas.map((person, i) => (
            <PersonCardInfo key={i} person={person}/>
          ))}
        </ul> 
      
      : <h2>Nenhuma pessoa cadastrada</h2>}
    </ContainerForFormAndLists >
  )
}
