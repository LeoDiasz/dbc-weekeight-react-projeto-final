import {useEffect} from "react"
import {Formik} from "formik"
import {useContextPeople} from "../../../hooks/useContextPeople"
import { maskCpf, maskDate } from "../../../utils/masks"
import { Button } from "../../../components/Button/styles"
import { FormStyle } from "../styles"
import { Label, Input, MaskInput } from "../../../components/Input/styles"

export const FormPeople = ({isUpdate, personDatasUpdate}) => {
  const { handleUpdatePerson, handleCreatePerson} = useContextPeople()

  useEffect(() => {

  }, [personDatasUpdate])

  if(!personDatasUpdate && isUpdate) {
    return
  }

  const personDatas = personDatasUpdate && personDatasUpdate

  const isUpdateAndHasDatasPerson = personDatas && isUpdate

  return (
    <Formik 
      initialValues={{
      nome: isUpdateAndHasDatasPerson ? personDatas.nome : "", 
      dataNascimento: isUpdateAndHasDatasPerson ? personDatas.dataNascimento : "", 
      cpf: isUpdateAndHasDatasPerson ? personDatas.cpf : "", 
      email: isUpdateAndHasDatasPerson ? personDatas.email : "", 
      idPessoa: isUpdateAndHasDatasPerson ? personDatas.idPessoa : ""
      }}
      onSubmit={async (values, resetForm) => {
        isUpdate ? await handleUpdatePerson(values) : await handleCreatePerson(values)
        resetForm()
      }}>

      {({ errors, values, handleChange }) => (
        <FormStyle>
          <h2>{!isUpdate ? "Cadastrar pessoas" : "Atualizar"}</h2>
          
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input name="nome" id="nome" placeholder="Digite o nome da pessoa" onChange={handleChange} value={values.nome}/>
            <div>{errors.nome}</div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Digite o email" onChange={handleChange} value={values.email}/>
            <div>{errors.email}</div>
          </div>

          <div>
            <Label htmlFor="cpf">Cpf</Label>
            <MaskInput name="cpf" id="cpf" mask={maskCpf} placeholder="Digite o cpf" onChange={handleChange} value={values.cpf}/>
            <div>{errors.cpf}</div>
          </div>

          <div>
            <Label htmlFor="data">Data nascimento</Label>
            <MaskInput type="text" name="dataNascimento" id="dataNascimento" mask={maskDate} placeholder="Data nascimento" onChange={handleChange} value={values.dataNascimento} />
            <div>{errors.dataNascimento}</div>
          </div>

          <Button width="50%" type="submit">{!isUpdate ? "Cadastrar" : "Atualizar"}</Button>
        </FormStyle>
      )}
    </Formik>
  )
}
