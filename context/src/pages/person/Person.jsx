import {Formik, Form, Field} from "formik"
import {IMaskInput} from "react-imask"
import axios from "axios";
import {useState, useEffect} from "react"

export const Person = () => {
  return (
    <Formik initialValues={{nome: "", dataNascimento: "", cpf: "", email: ""}} >
      
    </Formik>
  )
}
