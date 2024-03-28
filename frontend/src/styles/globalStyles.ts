import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body{
    background: ${(props) => props.theme.midnightBlue};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
