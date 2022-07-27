import {useAuth} from "../../hooks/useAuth"
import {Formik, Form, Field} from "formik"
import * as Yup from "yup"

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


export const Login = () => {
  const {signIn} = useAuth()

  return (
    <div>
      <h1>Acessar conta</h1>
      <Formik
       initialValues={{
         login: '',
         senha: '',  
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         signIn(values)
       }}>
        {({ errors, touched }) => (
          <Form>
            <Field name="login" placeholder="Digite seu login"/>
            {errors.login && touched.login && (
              <div>{errors.login}</div>
            )}

            <Field name="senha" type="password" placeholder="Digite sua senha"/>
            {errors.senha && touched.senha && (
              <div>{errors.senha}</div>
              )}
            <button type="submit">Entrar</button>
          </Form>
        )}
     </Formik>
    </div>
  )
}
