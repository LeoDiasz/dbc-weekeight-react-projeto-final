import styled from "styled-components"
import { colorPrimary } from "../../consts"

export const Button = styled.button`
  width: ${props => props.width ? props.width : "100%"};
  height : ${props => props.height && props.height};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : colorPrimary};
  color: ${props => props.color ? props.color : "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9)
  }
`


