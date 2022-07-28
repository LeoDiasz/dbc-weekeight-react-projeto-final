import styled from "styled-components"
import {Form} from "formik"


const SectionLogin = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363740;
  height: 100vh;
  
  text-align: center;
`

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  gap: 40px;
  background-color: #fff;
  height: 582px;  
  width: 380px;
  border-radius: 8px;
  border: 1px solid #DFE0EB;

  * {
    width: 100%;

  }

  
  > *:last-child {
    color: #9FA2B4;
    text-decoration: none;

    span {
      color: #3751FF;
      font-weight: bold;
    }

  }

`

const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #9FA2B4;

  div {
    text-align: left;
  }

  input, button {
    width: 100%;
    border-radius: 8px;
  }
  
  button {
    height: 48px;
    background-color: #3751FF;
    color: #fff;
    cursor: pointer;
    border: none;
  }

  input {
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

export {SectionLogin, DivContent, FormContent}