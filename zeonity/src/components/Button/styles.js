import styled from "styled-components"

const Button = styled.button`
  width: ${props => props.width ? props.width : "100%"};
  height : ${props => props.height && props.height};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.colors.primary};
  color: ${props => props.color ? props.color : "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

const ButtonWithIcon = styled(Button)`
  border-radius: 15px;
  width: ${props => props.width ? props.width : "50px"};
  font-size: ${props => props.size ? props.size : "20px"};
`

export {ButtonWithIcon, Button} 

