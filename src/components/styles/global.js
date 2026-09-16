import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

}

body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    -webkit-font-smoothing:antialiased;

}

button{
    cursor: pointer;
}
`