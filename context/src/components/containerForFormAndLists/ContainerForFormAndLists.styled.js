import styled from "styled-components"
import { paddingDefault } from "../../consts"

export const ContainerForFormAndLists = styled.section`
  display: ${props => props.display && props.display};
  flex-direction: ${props => props.direction && props.direction};
  align-items: ${props => props.alignItems && props.alignItems};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  gap: ${props => props.gap && props.gap};
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height && props.height}; 
  padding: ${props => (props.padding ? props.padding : paddingDefault)};
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #DFE0EB;
  min-width: 380px;
`