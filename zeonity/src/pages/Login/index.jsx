import {Formik} from "formik"
import {useContextAuth} from "../../hooks/useContextAuth"
import { ScreenLoginAndRegisterUser } from "../../components/ScreenLoginAndRegisterUser";
import { Button } from "../../components/Button/styles";
import {InputField, Label} from "../../components/Input/styles";
import { FormContent } from "../../components/FormContent/styles";

export const Login = () => {
  const {signIn} = useContextAuth()

  return (
    <ScreenLoginAndRegisterUser titleForm={"Entre em sua conta"} isScreenLogin>
      <Formik 
        initialValues={{login: '', senha: ''}} 
        onSubmit={values => {signIn(values)}}>    
        {({ errors}) => (
          <FormContent>
            <div>
              <Label htmlFor="login">Usuário</Label>
              <InputField name="login" id="login" placeholder="Digite seu login"/>
            </div>

            <div>
              <Label htmlFor="senha">Senha</Label>
              <InputField name="senha" id="senha" type="password" placeholder="Digite sua senha"/>
            </div>

            <Button width="100%">ENTRAR</Button>
          </FormContent>
        )}
      </Formik>
    </ScreenLoginAndRegisterUser>
  )
}
