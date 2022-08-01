import styled from "styled-components"
import {Form} from "formik"

const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #9FA2B4;

  div {
    text-align: left;
  }

  div > div {
    margin-top: 10px;
  }
`

export {FormContent}