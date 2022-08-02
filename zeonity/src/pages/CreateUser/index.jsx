import {Formik} from "formik"
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {api} from "../../services/api"
import { ScreenLoginAndRegisterUser } from "../../components/ScreenLoginAndRegisterUser";
import { CreateUserAndSignupSchema } from "../../utils/validations";
import { Button } from "../../components/Button/styles";
import { Label, Input, TextValidation } from "../../components/Input/styles";
import { FormContent } from "../../components/FormContent/styles";


export const CreateUser = () => {
  const navigate = useNavigate()

  const createAccount = async (datasUser) => {

    try {
      await api.post("/auth/create", datasUser)

      navigate("/")
      toast.success("Usuário cadastrado com sucesso!")

    } catch(Error) {
      const {response} = Error
      toast.error(response.data.message ? response.data.message : "Não foi possivel cadastrar!")
    }

  }

  return (
    <ScreenLoginAndRegisterUser titleForm="Criar conta">
      <Formik
        initialValues={{
          login: '',
          senha: '',  
        }}
        validationSchema={CreateUserAndSignupSchema}
        onSubmit={values => {
          createAccount(values)
        }}>
        {({ errors, values, handleChange }) => (
        <FormContent>
          <div>
            <Label htmlFor="login">Usuário</Label>
            <Input name="login" id="login" placeholder="Nome usuário" onChange={handleChange} value={values.login}/>
            <TextValidation>{errors.login}</TextValidation>
          </div>

          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input name="senha" id="senha" type="password" placeholder="Cadastrar senha" onChange={handleChange} value={values.senha}/>
            <TextValidation>{errors.senha}</TextValidation>
          </div>

          <Button width="100%">CRIAR</Button>
        </FormContent>
      )}
      </Formik>
    </ScreenLoginAndRegisterUser>
        
  )
}
