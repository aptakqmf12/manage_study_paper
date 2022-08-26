import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "Spoqa Han Sans Neo", sans-serif;
  }

  body {
    line-height: 1.5;
    margin:0;
    padding:0;
  }
  img{width:100%;}
  button{ background-color:transparent; border:0; cursor: pointer;}
  li{list-style:none}
  h2{margin:0; padding:0;}

 
`;
