import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700|Rubik:300,400,400i,500&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: Karla, sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5 {
    font-family: Rubik, serif;
  }
`;

export default GlobalStyle;
