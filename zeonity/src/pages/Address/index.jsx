import {Formik, Form, Field} from "formik"
import {IMaskInput} from "react-imask"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"


export const Address = () => {

  return (
    <ContainerPagesWithSideBar>
        <h1>Criar endereço</h1>
        {/* <Formik
        initialValues={{
          idPessoa: "",
          tipo: "",
          logradouro: "",
          numero: "",
          complemento: "",
          cep: "",
          cidade: "",
          estado: "",
          pais: "",
        }}
        onSubmit={values => {
            createAddress(values)
        }}>
          {({setFieldValue }) => (
            <Form>
              <div>
                <label htmlFor="cep">Cep</label>
                <IMaskInput mask="00000-000" name="cep" id="cep" onBlur={event => searchDatasAddress(event, setFieldValue)} maxLength="9"/> 
              </div>
              <br/>
              <div>
                <label htmlFor="logradouro">Logradouro</label>
                <Field name="logradouro" id="logradouro" placeholder="Digite Seu logradouro"/>
              </div>
              <br/>
              <div>
                <label htmlFor="numero">Numero</label>
                <Field name="numero" placeholder="Digite Seu numero"/>
              </div>
              <br/>
              <div>
                <label htmlFor="complemento">Complemento</label>
                <Field name="complemento" id="complemento" placeholder="Digite Seu complemento"/>
              </div>
              <br/>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <Field name="cidade" placeholder="Digite Seu cidade"/>
              </div>
              <br/>
              <div>
                <label htmlFor="estado">Estado</label>
                <Field name="estado" placeholder="Digite Seu estado"/>
              </div>
              <br/>
              <div>
                <label htmlFor="pais">Pais</label>
                <Field name="pais" placeholder="Digite Seu pais"/>
              </div>
              <br/>
              <div>
                <label htmlFor="tipo">Tipo</label>
                <Field name="tipo" placeholder="Digite Seu tipo"/>
              </div>
              <button type="submit" disabled>Criar Endereço</button>
            </Form>
          )}
      </Formik> */}
 
    </ContainerPagesWithSideBar>
  )
}
