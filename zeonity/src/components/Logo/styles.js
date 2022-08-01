import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
  transition: filter 0.3s;
 
  img {
    width: ${props => props.isWithText ? "160px" : "60px"};
  }

  &:hover {
    filter: brightness(0.9);
  }

`