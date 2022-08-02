import {Formik} from "formik"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import { maskCep } from "../../utils/masks"
import { api } from "../../services/api"
import { useContextAddress } from "../../hooks/useContextAddress"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { FormContent } from "../../components/FormContent/styles"
import { Button } from "../../components/Button/styles"
import { Label, Input, MaskInput, InputField, SelectInput, TextValidation } from "../../components/Input/styles"
import { ContainerForFormAndLists } from "../../components/ContainerForFormAndLists/styles"
import { AddressSchema } from "../../utils/validations"

export const Address = () => {
  const {id} = useParams()
  const {idAddress} = useParams()
  const [isUpdate, setIsUpdate] = useState(false)
  const [addressDatasUpdate, setAddressDatasUpdate] = useState()

  const {handleCreateAddress , handleUpdateAddress, getAddressById} = useContextAddress()

  const searchDatasAddress = async (event, setFieldValue) => {
  
    const cep = event.target.value
    const newCep = cep.replace(/[^0-9]/gi, "");
  
    if(newCep.length !== 8) {
      return
    }
    
    try {
      const {data: result} = await api.get(`https://viacep.com.br/ws/${newCep}/json/`)
      
      setFieldValue("cidade", result.localidade)
      setFieldValue("estado", result.uf)
      setFieldValue("complemento", result.complemento)
      setFieldValue("logradouro", result.logradouro)
  
    } catch(error) {
      console.log(error)
    }
    
  }
  
  const setup = async () => {
    if (id && idAddress) {
      setIsUpdate(true)

      try {
        await getAddressById(idAddress, setAddressDatasUpdate)
      } catch(Error) {
        console.log(Error)
      }
    }
  } 

  useEffect(() => { 
      setup()
  }, [])

  useEffect(() => {

  }, [addressDatasUpdate])

  if(!addressDatasUpdate && isUpdate) {
    return
  }

  const addressDatas = addressDatasUpdate && addressDatasUpdate

  return (
    <ContainerPagesWithSideBar>
      <ContainerForFormAndLists display="flex" direction="column" gap="30px">
        <h2>{isUpdate ? "Atualizar endereço" : "Criar endereço" }</h2>
        <Formik
          initialValues={{
            idPessoa: parseInt(id),
            tipo: addressDatas && isUpdate ? addressDatas.tipo : "",
            logradouro: addressDatas && isUpdate ? addressDatas.logradouro : "",
            numero: addressDatas && isUpdate ? addressDatas.numero : "",
            complemento: addressDatas && isUpdate ? addressDatas.complemento : "",
            cep: addressDatas && isUpdate ? addressDatas.cep : "",
            cidade: addressDatas && isUpdate ? addressDatas.cidade : "",
            estado: addressDatas && isUpdate ? addressDatas.estado : "",
            pais: addressDatas && isUpdate ? addressDatas.pais : "",
          }}
          validationSchema={AddressSchema}
          onSubmit={async (values, {resetForm}) => {
              isUpdate ? await handleUpdateAddress(values, idAddress, id) : await handleCreateAddress(values, id)
              resetForm()
          }}>
            {({errors, values, handleChange, setFieldValue }) => (
              <FormContent>
                <div>
                  <Label htmlFor="cep">Cep *</Label>
                  <MaskInput mask={maskCep} name="cep" id="cep" value={values.cep} onChange={handleChange} onBlur={event => searchDatasAddress(event, setFieldValue)} placeholder="Digite seu cep"/> 
                  <TextValidation>{errors.cep}</TextValidation>
                </div>
            
                <div>
                  <Label htmlFor="logradouro">Logradouro *</Label>
                  <InputField name="logradouro" id="logradouro" placeholder="Digite Seu logradouro"/>
                  <TextValidation>{errors.logradouro}</TextValidation>
                </div>
              
                <div>
                  <Label htmlFor="numero">Numero *</Label>
                  <Input name="numero" id="numero" placeholder="Digite Seu numero" value={values.numero} onChange={handleChange}/>
                  <TextValidation>{errors.numero}</TextValidation>
                </div>
          
                <div>
                  <Label htmlFor="complemento">Complemento</Label>
                  <InputField name="complemento" id="complemento" placeholder="Digite Seu complemento (opicional)"/>
                  <TextValidation>{errors.complemento}</TextValidation>
                </div>
          
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <InputField name="cidade" placeholder="Digite Seu cidade"/>
                  <TextValidation>{errors.cidade}</TextValidation>
                </div>
          
                <div>
                  <Label htmlFor="estado">Estado *</Label>
                  <InputField name="estado" placeholder="Digite Seu estado"/>
                  <TextValidation>{errors.estado}</TextValidation>
                </div>
          
                <div>
                  <Label htmlFor="pais">País *</Label>
                  <Input name="pais" id="pais" placeholder="Digite Seu país" value={values.pais} onChange={handleChange}/>
                  <TextValidation>{errors.pais}</TextValidation>
                </div>
          
                <div>
                  <Label htmlFor="tipo">Tipo *</Label>
                  <InputField name="tipo" id="tipo" component="select">
                      <option value="residencial">residencial</option>
                      <option value="comercial">comercial</option>
                  </InputField>
                </div>
                <Button type="submit">{isUpdate ? "Atualizar endereço" : "Criar Endereço"}</Button>
              </FormContent>
            )}
        </Formik>
      </ContainerForFormAndLists>
    </ContainerPagesWithSideBar>
  )
}
