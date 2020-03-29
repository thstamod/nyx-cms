import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    width:100%;
  height: 100vh;
  display: flex;
  font-family: Karla, serif;
  }
#root {
  width:100%;
  height:100%;
}

  h1,h2,h3,h4,h5 {
    font-family: Rubik, serif;
  }
`;

export default GlobalStyle;
