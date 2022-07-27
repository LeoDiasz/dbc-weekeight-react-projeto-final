import {Formik, Form, Field} from "formik"
import {useState} from "react"
import * as Yup from "yup"
import axios from "axios";

const CreateAddressSchema = Yup.object().shape({
  idPessoa: Yup.number()
    .required("Required"),
  tipo: Yup.string()
    .required('Required'),
  logradouro: Yup.string()
    .required('Required'),
  numero: Yup.number()
    .required("Required"),
  complemento: Yup.string()
  .required("Required"),
  cep: Yup.string()
    .required("Required"),
  cidade: Yup.string()
  .required("Required"),
  estado: Yup.string()
    .required("Required"),
  pais: Yup.string()
  .required("Required"),  
  
});

export const Address = () => {

  const [cepState, setCepState] = useState()

  const searchDatasAddress = async (value) => {

    //let value = value.replace(/[^0-9]/, "");

    console.log(value)

    //const {data: result} = await axios.get(`https://viacep.com.br/ws/${}/json/`)

  }



  const createAddress = (datasAddress) => {
    //
  }

  return (
    <section>
      <h1>Criar endereço</h1>
      <Formik
       initialValues={{
        idPessoa: null,
        tipo: "",
        logradouro: "",
        numero: null,
        complemento: "",
        cep: "",
        cidade: "",
        estado: "",
        pais: "",
       }}

       validationSchema={CreateAddressSchema}
       onSubmit={values => {
          createAddress(values)
       }}>
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="cep">Cep</label>
              <Field name="cep" placeholder="Digite seu cep"/>
              {errors.cep && touched.cep && (
                <div>{errors.cep}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="logradouro">Logradouro</label>
              <Field name="logradouro" placeholder="Digite Seu logradouro"/>
              {errors.logradouro && touched.logradouro && (
                <div>{errors.logradouro}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="numero">Numero</label>
              <Field name="numero" placeholder="Digite Seu numero"/>
              {errors.numero && touched.numero && (
                <div>{errors.numero}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="complemento">Complemento</label>
              <Field name="complemento" placeholder="Digite Seu complemento"/>
              {errors.complemento && touched.complemento && (
                <div>{errors.complemento}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <Field name="cidade" placeholder="Digite Seu cidade"/>
              {errors.cidade && touched.cidade && (
                <div>{errors.cidade}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="estado">Estado</label>
              <Field name="estado" placeholder="Digite Seu estado"/>
              {errors.estado && touched.estado && (
                <div>{errors.estado}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="pais">Pais</label>
              <Field name="pais" placeholder="Digite Seu pais"/>
              {errors.pais && touched.pais && (
                <div>{errors.pais}</div>
              )}
            </div>
            <br/>
            <div>
              <label htmlFor="tipo">Tipo</label>
              <Field name="tipo" placeholder="Digite Seu tipo"/>
              {errors.tipo && touched.tipo && (
                <div>{errors.tipo}</div>
              )}
            </div>

            <button type="submit" disabled>Criar Endereço</button>
          </Form>
        )}
     </Formik>
    </section>
  )
}
