import styled from "styled-components"
import { Link } from "react-router-dom"


export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: ${(props) => (props.direction === "column" ? "column" : "row")};
  text-decoration: none;

  img {
    width: 48px
  }

  h2 {
    font-size: 24px;
    color: #DFE0EB;
  }
`