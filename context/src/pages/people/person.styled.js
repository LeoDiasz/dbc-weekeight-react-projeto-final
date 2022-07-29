import styled from "styled-components"

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
  
  *:not(button) {
    width: 100%;
  }

  input {
    padding: 0 20px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #F0F1F7;
    color: #4B506D;
  }

  input[type=date] {
    width: 20%;
  }
 
`
export {FormStyle}