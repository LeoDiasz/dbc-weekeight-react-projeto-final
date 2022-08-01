import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#00BFB2",
    primaryDark: "#008C83",
    backgroundDark: "#102227",
    backgroundLight: "#FCFDFE",
    textGray: "#C6C9D2",
    textGrayDark: "#9FA2B4",
    textLight: "#FCFDFE",
    border: "#DFE0EB",
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap');
  
  :root {
    --color-background-dark: ${theme.colors.backgroundDark};
    --color-background-light: ${theme.colors.backgroundLight};
    --color-primary: ${theme.colors.primary};
    --color-primary-dark: ${theme.colors.primaryDark};
    --color-border: ${theme.colors.border};
    --color-text-gray: ${theme.colors.textGray};
    --color-text-gray-dark: ${theme.colors.textGrayDark};
    --color-text-light: ${theme.colors.textLight}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 93.75%
    }
    
    @media (max-width: 780px) {
      font-size: 87.5%
    }
  }

  body {
    font-family: "Mulish", sans-serif;
  }
    
  button {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;

  }

  li {
    cursor: pointer;
  }

`

export {GlobalStyle, theme}