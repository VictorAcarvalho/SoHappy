import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      padding:0;
      margin:0;
      box-sizing:border-box
  }  
  html,body,:root{
    min-height:100%
  }
  :root{
    font-size: 62.5%;
  }
  body{
    background-color:#F9EE91;
    font-family:Arial, Helvetica, sans-serif;
  }

`;
