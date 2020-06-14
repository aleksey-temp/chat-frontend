import { createGlobalStyle } from 'styled-components'

export const AppGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Mukta', sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1;
    color: #f2f2f7;

    background-color: #2c2c2e;

    box-sizing: border-box;
  }
`
