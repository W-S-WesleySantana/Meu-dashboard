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
    background-color: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.textPrimary};
    transition: background-color 0.3s, color 0.3s;
    -webkit-font-smoothing:antialiased;

}

button{
    cursor: pointer;
}
`