import {Formik, Form, Field} from "formik"
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"
import {useAuth} from "../../hooks/useAuth"
import {api} from "../../services/api"

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Muito curta!')
    .max(50, 'Muito longa')
    .required('Required'),
  senha: Yup.string()
    .min(2, 'Muito curta')
    .max(50, 'Senha muito longa!')
    .required('Required')
});

export const CreateUser = () => {
  const navigate = useNavigate()
  const createAccount = async (datasUser) => {

    try {
      const {data: result} = await api.post("/auth/create", datasUser)

      navigate("/")
      toast.success("Usuário cadastrado com sucesso!")
      
    } catch(Error) {
      toast.error("Não foi possivel cadastrar!")
    }
  }

  return (
    <div>
      <Toaster/>
      <h1>Criar conta</h1>
      <Formik
       initialValues={{
         login: '',
         senha: '',  
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         createAccount(values)
       }}>
        {({ errors, touched }) => (
          <Form>
            <Field name="login" placeholder="Digite o nome para login"/>
            {errors.login && touched.login && (
              <div>{errors.login}</div>
            )}

            <Field name="senha" type="password" placeholder="Digite uma senha"/>
            {errors.senha && touched.senha && (
              <div>{errors.senha}</div>
              )}
            <button type="submit">Criar conta</button>
          </Form>
        )}
     </Formik>
    </div>
  )
}
