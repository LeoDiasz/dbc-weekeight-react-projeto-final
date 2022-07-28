import { Form, Formik } from "formik"
import styled from "styled-components"

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 40px 50px;

  > header {
    display: flex;
    justify-content: space-between;
  }

`

const SectionListPeople = styled.section`


  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #DFE0EB;
  padding: 40px 0 70px;

  > *:first-child {
      padding: 0 40px;
      margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;

   
    > li:first-child {
      color: #9FA2B4;

      button {
        display: none;
      }
    }
  }
`



const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #DFE0EB;
  gap: 25px;
  
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  * {
    width: 100%;
  }

  input {
    padding: 0 20px;
  }

  input, button {
    height: 40px;
    border-radius: 8px;
    border: 1px solid #F0F1F7;
    color: #4B506D;
  }

  input[type=date] {
    width: 20%;
  }

  button {
    width: 50%;
    background-color: #3751FF;
    color: #fff;
    font-weight: bold;
  }
  
`
export {SectionContainer, SectionListPeople, FormStyle}