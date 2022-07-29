import {Formik, Form, Field} from "formik"
import {toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup"
import {api} from "../../services/api"
import { ContainerForFormAndLists } from "../../components/containerForFormAndLists/ContainerForFormAndLists.styled";
import { FormContent, SectionPagesBackgroundBlack } from "../login/login.styled";
import { Button } from "../../components/button/Button.styled";

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
      await api.post("/auth/create", datasUser)

      navigate("/")
      toast.success("Usuário cadastrado com sucesso!")

    } catch(Error) {
      toast.error("Não foi possivel cadastrar!")
    }
  }

  return (
    <SectionPagesBackgroundBlack>
      <ContainerForFormAndLists width="400px" height="500px" display="flex" direction="column" gap="30px">
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
            <FormContent>
              <div>
                <label htmlFor="login">Nome</label>
                <Field name="login" placeholder="Digite um nome para sua conta"/>
              </div>

              <div>
                <label htmlFor="senha">Senha</label>
                <Field name="senha" type="password" placeholder="Digite a senha"/>
              </div>
              <Button type="submit">Criar conta</Button>
            </FormContent>
          )}
        </Formik>
        <Link to="/">Voltar para login </Link>
      </ContainerForFormAndLists>
    </SectionPagesBackgroundBlack>
  )
}
