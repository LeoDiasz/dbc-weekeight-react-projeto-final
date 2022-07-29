import styled from "styled-components"
import {Form} from "formik"

const SectionPagesBackgroundBlack = styled.section`
  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#363740"};
  flex-direction: ${props => props.direction && props.direction};
  min-height: 100vh;
  text-align: center;
`

const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #9FA2B4;

  div {
    text-align: left;
  }

  input {
    width: 100%;
    border-radius: 8px;
    height: 42px;
    padding: 0 20px;
    margin-top: 10px;
    border: 1px solid #F0F1F7;
    color: #4B506D;
  }

  input::placeholder {
    color: #4B506D;
  }

`

export {SectionPagesBackgroundBlack, FormContent}