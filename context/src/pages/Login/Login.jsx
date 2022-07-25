import {useAuth} from "../../hooks/useAuth"
import {useFormik} from "formik"

export const Login = () => {
  const {signIn} = useAuth()

  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: values => {
      signIn(values)   
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div> 
          <label htmlFor="login">Nome</label>
          <input type="text" name="login" id="login" onChange={formik.handleChange} value={formik.values.login} placeholder="Digite seu nome"/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="senha" id="senha" onChange={formik.handleChange} value={formik.values.senha} placeholder="Digite sua senha"/>
        </div>
        <button type="submit">Entrar</button>

      </form>
    </div>
  )
}
