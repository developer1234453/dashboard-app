import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

export default GlobalStyle;
