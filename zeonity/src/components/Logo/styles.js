import styled from "styled-components"


export const LogoContent = styled.img`
  width: ${props => props.isWithText ? "160px" : "60px"};

  &:hover {
    filter: brightness(0.9);
  }

`