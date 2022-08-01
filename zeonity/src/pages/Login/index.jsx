import {Formik} from "formik"
import {useContextAuth} from "../../hooks/useContextAuth"
import { ScreenLoginAndRegisterUser } from "../../components/ScreenLoginAndRegisterUser";
import { Button } from "../../components/Button/styles";
import { CreateUserAndSignupSchema } from "../../utils/validations";
import { Input, Label } from "../../components/Input/styles";
import { FormContent } from "../../components/FormContent/styles";

export const Login = () => {
  const {signIn} = useContextAuth()

  return (
    <ScreenLoginAndRegisterUser titleForm={"Entre em sua conta"}isScreenLogin>
      <Formik 
        initialValues={{login: '', senha: ''}} 
        validationSchema={CreateUserAndSignupSchema} 
        onSubmit={values => {signIn(values)}}>
        {({ errors, values, handleChange }) => (
          <FormContent>
            <div>
              <Label htmlFor="login">Nome</Label>
              <Input name="login" id="login" placeholder="Digite seu login" onChange={handleChange} value={values.login}/>
              <div>{errors.login}</div>
            </div>

            <div>
              <Label htmlFor="senha">Senha</Label>
              <Input name="senha" id="senha" type="password" placeholder="Digite sua senha" onChange={handleChange} value={values.senha}/>
              <div>{errors.senha}</div>
            </div>

            <Button>ENTRAR</Button>
          </FormContent>
        )}
      </Formik>
    </ScreenLoginAndRegisterUser>
        
          
     

  )
}
