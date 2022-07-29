import { Link } from "react-router-dom";
import {Formik, Field} from "formik"
import * as Yup from "yup"
import {useContextAuth} from "../../hooks/useContextAuth"
import { Logo } from "../../components/Logo/Logo";
import {DivContent, FormContent, SectionLogin} from "./login.styled"

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
  const {signIn} = useContextAuth()

  return (
    <SectionLogin>
      <DivContent>
          <Logo direction="column"/>

          <div>
            <h1>Entre no Dashboard Kit</h1>
            <p>Logue com seu nome e senha</p>
          </div>
          
          <Formik initialValues={{login: '', senha: ''}} validationSchema={SignupSchema} onSubmit={values => {signIn(values)}}>
            {({ errors, touched }) => (
              <FormContent>
                <div>
                  <label htmlFor="login">Nome</label>
                  <Field name="login" placeholder="Digite seu login"/>
                </div>

                <div>
                  <label htmlFor="senha">Senha</label>
                  <Field name="senha" type="password" placeholder="Digite sua senha"/>
                </div>

                <button type="submit">Entrar</button>
              </FormContent>
            )}
          </Formik>
          <Link to="/cadastrar">Não possui conta? <span>Criar</span></Link>
      </DivContent>
    </SectionLogin>

  )
}
