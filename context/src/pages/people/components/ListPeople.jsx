import {SectionListPeople} from "../person.styled"
import { PersonCardInfo } from "../../../components/personCardInfo/PersonCardInfo"

export const ListPeople = ({listPeopleDatas}) => {

  return (
    <SectionListPeople>
      <h3>Lista pessoas</h3>

      {listPeopleDatas ? 
        <ul>
          <PersonCardInfo person={{nome: "Nome", email: "Email", dataNascimento: "Data nascimento", cpf: "Cpf"}}/>

          {listPeopleDatas.map((person, i) => (
            <PersonCardInfo key={i} person={person}/>
          ))}
        </ul> 
      
      : <h2>Nenhuma pessoa cadastrada</h2>}
    </SectionListPeople>
  )
}
