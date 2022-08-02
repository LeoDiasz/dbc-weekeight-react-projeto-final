import {Formik} from "formik"
import {useContextAuth} from "../../hooks/useContextAuth"
import { ScreenLoginAndRegisterUser } from "../../components/ScreenLoginAndRegisterUser";
import { CreateUserAndSignupSchema } from "../../utils/validations";
import { Button } from "../../components/Button/styles";
import { Input, Label, TextValidation } from "../../components/Input/styles";
import { FormContent } from "../../components/FormContent/styles";

export const Login = () => {
  const {signIn} = useContextAuth()

  return (
    <ScreenLoginAndRegisterUser titleForm={"Entre em sua conta"} isScreenLogin>
      <Formik 
        initialValues={{login: '', senha: ''}} 
        validationSchema={CreateUserAndSignupSchema} 
        onSubmit={values => {signIn(values)}}>    
        {({ errors, values, handleChange }) => (
          <FormContent>
            <div>
              <Label htmlFor="login">Usuário</Label>
              <Input name="login" id="login" placeholder="Digite seu login" onChange={handleChange} value={values.login}/>
              <TextValidation>{errors.login}</TextValidation>
            </div>

            <div>
              <Label htmlFor="senha">Senha</Label>
              <Input name="senha" id="senha" type="password" placeholder="Digite sua senha" onChange={handleChange} value={values.senha}/>
              <TextValidation>{errors.senha}</TextValidation>
            </div>

            <Button width="100%">ENTRAR</Button>
          </FormContent>
        )}
      </Formik>
    </ScreenLoginAndRegisterUser>
        
          
     

  )
}
