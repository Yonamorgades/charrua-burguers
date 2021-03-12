import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }
  .rec-carousel-item  div:focus {
    outline: none;
    box-shadow: none;
  }
`;
