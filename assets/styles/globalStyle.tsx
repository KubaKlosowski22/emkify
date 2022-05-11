import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');  
  
  html {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`
