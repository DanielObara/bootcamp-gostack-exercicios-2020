import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-logo.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }


  body {
    background: #f0f0f5 url(${githubBackground} ) no-repeat 70% top;
    -webkit-font-smoothing: antialiased !important;

  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root{
    max-width: 860px;
    margin: 0 auto;
    padding: 40px 20px;
  }

`;
