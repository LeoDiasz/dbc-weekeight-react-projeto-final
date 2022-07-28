import {useFormik} from "formik"
import {useState, useEffect} from "react"
import {toast} from "react-hot-toast"
import {IMaskInput} from "react-imask"
import {api} from "../../services/api"
import { DivContainer } from "../home/home.styled";
import { SideBar } from "../../components/SideBar/SideBar";
import { CardPerson } from "../../components/CardPerson/CardPerson";
import { SectionContainer, SectionListPeople, FormStyle } from "./person.styled";

export const Person = () => {
  const [listPeople, setListPeople] = useState()
  const [updateList, setUpdateList] = useState([])
  const [chooseOptions, setChooseOptions] = useState(true)
  const [datasPersonUpdate, setDatasPersonUpdate] = useState()

  const searchPeople = async () => {
    
    try {
      const {data: {content}} = await api.get("/pessoa")
      setListPeople(content)
    
    } catch(Error) {
      alert("Erro")
    }
    
  }
    
  const registerPerson = async(datasUser) => {

    if (!datasUser) {
      return
    }
    
    datasUser.cpf = datasUser.cpf.replace(/[^0-9]/gi, "")
    
    const newDatasUser = {email: datasUser.email, nome: datasUser.nome, dataNascimento: datasUser.dataNascimento, cpf: datasUser.cpf}
    
    try {
      await api.post("/pessoa", newDatasUser)
      
      setUpdateList(updateList + 1)
      toast.success("Pessoa cadastrada com sucesso")
    } catch(Error) {
      toast.error("Não foi possivel cadastrar o usuário")
    }

  }

  const updatePerson = async(values) => {

    const idPessoa = parseInt(values.idPessoa)

    values.cpf = values.cpf.replace(/[^0-9]/gi, "")

    const newValue = {email: values.email, nome: values.nome, dataNascimento: values.dataNascimento, cpf: values.cpf}

    try {
      debugger
      await api.put(`/pessoa/${idPessoa}`, newValue)

      toast.success("Pessoa atualizada com sucesso")
      setChooseOptions(true)
      setUpdateList([...updateList] + 1)

    } catch(error) {
      setChooseOptions(true)
      toast.error("Erro ao atualizar")
    }


  }

  const getDatasPersonUpdate = (datas, setState) => {
    setDatasPersonUpdate(datas)
    setChooseOptions(false)

    formik.values.cpf = datas.cpf
    formik.values.nome = datas.nome
    formik.values.email = datas.email
    formik.values.dataNascimento = datas.dataNascimento
    formik.values.idPessoa = datas.idPessoa

    if(setState) {
      setState(false)
    }
  }
  
  const formik = useFormik(
  {initialValues: {nome: "", dataNascimento: "", cpf: "", email: "", idPessoa: ""}, 
  onSubmit: async values => {
    if(chooseOptions) {
      await registerPerson(values)
    } else {
      await updatePerson(values)
    }
    
    formik.resetForm({values: { nome: "", dataNascimento: "", cpf: "", email: "", idPessoa: ""}})
  }})
  
  useEffect(() => {
    searchPeople()
  }, [updateList])


  return (
    <DivContainer>
      <SideBar/>
      <SectionContainer>
        <header>
          <h1>Tickets</h1>
          <span>Leonardo Dias</span>
        </header>
        <FormStyle onSubmit={formik.handleSubmit}>
          <h2>Cadastrar pessoas</h2>
          
          <div>
            <label htmlFor="nome">Nome</label>
            <input name="nome" id="nome" placeholder="Digite o nome da pessoa" onChange={formik.handleChange} value={formik.values.nome}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Digite o email" onChange={formik.handleChange} value={formik.values.email}/>
          </div>
          <div>
            <label htmlFor="cpf">Cpf</label>
            <IMaskInput mask="000.000.000-00" name="cpf" id="cpf" placeholder="Digite o cpf" onChange={formik.handleChange} value={formik.values.cpf}/>
          </div>
          <div>
            <label htmlFor="data">Data nascimento</label>
            <input type="date" name="dataNascimento" id="dataNascimento" onChange={formik.handleChange} value={formik.values.dataNascimento} />
          </div>
          <button type="submit">{chooseOptions ? "Cadastrar" : "Atualizar"}</button>
        </FormStyle>

        <SectionListPeople>
          <h3>Lista pessoas</h3>

          <ul>
            <CardPerson person={{nome: "Nome", email: "Email", dataNascimento: "Data nascimento", cpf: "Cpf"}}/>
            {listPeople && listPeople.map((person, i) => (
              <CardPerson key={i} person={person} update={{updateList, setUpdateList}} getDatas={getDatasPersonUpdate}/>
            ))}
          </ul>
        </SectionListPeople>
        
      </SectionContainer>
    </DivContainer>
    
  )
}
