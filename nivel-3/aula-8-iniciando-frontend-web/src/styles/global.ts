import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background: #312E38;
    -webkit-font-smoothing: antialiased;
    color: #FFF;

  }


  body, input, button, input::placeholder, textarea::placeholder {
    font: 16px 'Roboto Slab', serif;
  }

  input::placeholder, textarea::placeholder {
    color: #666360;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;
