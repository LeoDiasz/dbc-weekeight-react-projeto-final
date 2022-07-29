import styled from "styled-components"
import {ContainerForFormAndLists} from "../../components/containerForFormAndLists/ContainerForFormAndLists.styled"

const SectionListPeople = styled(ContainerForFormAndLists)`

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

const FormStyle = styled.form`
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
export {SectionListPeople, FormStyle}