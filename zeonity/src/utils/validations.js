import * as Yup from "yup"

const CreateUserAndSignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, 'Minimo 4 caracteres')
    .max(15, 'Maximo 15 caracteres!')
    .required('Necessário preencher'),
  senha: Yup.string()
    .min(2, 'Minimo 2 caracteres')
    .max(15, 'Maximo 15 caracteres!')
    .required('Necessário preencher')
});


export {CreateUserAndSignupSchema}