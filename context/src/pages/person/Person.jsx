import {Formik, Form, Field} from "formik"
import {api} from "../../services/api"
import {IMaskInput} from "react-imask"
import {useState, useEffect} from "react"
import { DivContainer } from "../home/home.styled";
import { SideBar } from "../../components/SideBar/SideBar";
import { CardPerson } from "../../components/CardPerson/CardPerson";
import { SectionContainer, SectionListPeople, FormStyle } from "./person.styled";

export const Person = () => {
  const [listPeople, setListPeople] = useState()

  const searchPeople = async () => {

    try {
      const {data: {content}} = await api.get("/pessoa")
      setListPeople(content)
    
    } catch(Error) {
      alert("Erro")
    }

  }

  useEffect(() => {
      searchPeople()
  }, [])
  return (
    <DivContainer>
      <SideBar/>
      <SectionContainer>
        <header>
          <h1>Tickets</h1>
          <span>Leonardo Dias</span>
        </header>

        <Formik initialValues={{nome: "", dataNascimento: "", cpf: "", email: ""}} >
          {({setFieldValue }) => (
            <FormStyle>
              <h2>Cadastrar pessoas</h2>
              
              <div>
                <label htmlFor="nome">Nome</label>
                <Field name="nome" id="nome" placeholder="Digite o nome da pessoa"/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email" placeholder="Digite o email"/>
              </div>
              <div>
                <label htmlFor="cpf">Cpf</label>
                <Field name="cpf" id="cpf" placeholder="Digite o cpf"/>
              </div>
              <div>
                <label htmlFor="data">Data nascimento</label>
                <Field type="date" name="data" id="data"/>
              </div>
              <button type="submit">Cadastrar</button>
            </FormStyle>
          )}
        </Formik>

        <SectionListPeople>
          <h3>Lista pessoas</h3>

          <ul>
            <CardPerson person={{nome: "Nome", email: "Email", dataNascimento: "Data nascimento", cpf: "Cpf"}}/>
            {listPeople && listPeople.map((person, i) => (
              <CardPerson key={i} person={person}/>
            ))}
          </ul>
        </SectionListPeople>
        
      </SectionContainer>
    </DivContainer>
    
  )
}
