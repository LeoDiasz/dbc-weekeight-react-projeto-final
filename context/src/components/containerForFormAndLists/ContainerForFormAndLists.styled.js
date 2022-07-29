import styled from "styled-components"

export const ContainerForFormAndLists = styled.section`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #DFE0EB;
  padding: ${props => (props.setPadding ? "40px 40px 70px 40px" : "40px 0 70px")};
`