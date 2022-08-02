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

const PersonSchema = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'Minimo 3 caracteres')
    .max(20, 'Maximo 20 caracteres!')
    .required('Necessário preencher'),
  email: Yup.string()
    .min(5, 'Minimo 5 caracteres')
    .max(40, 'Maximo 40 caracteres!')
    .email("Email não é valido")
    .required('Necessário preencher'),
  dataNascimento: Yup.string()
  .min(10, 'Minimo 8 caracteres na data')
  .required('Necessário preencher'),
  cpf: Yup.string()
    .min(2, "cpf tem que ter 11 digitos")
    .required('Necessário preencher'),
});

const AddressSchema = Yup.object().shape({
  cep: Yup.string()
    .min(9, "Cep tem que ter 8 digitos")
    .required('Necessário preencher'),
  logradouro: Yup.string()
    .required('Necessário preencher'),
  pais: Yup.string()
    .required('Necessário preencher'),
  estado: Yup.string()
  .required('Necessário preencher'),
  cidade: Yup.string()
  .required('Necessário preencher'),
  numero: Yup.string()
  .required('Necessário preencher'),
  tipo: Yup.string()
  .required('Necessário preencher'),
  
  
});

export {CreateUserAndSignupSchema, PersonSchema, AddressSchema}