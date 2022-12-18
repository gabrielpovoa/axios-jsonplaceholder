import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        outline: none;
        border: none;
        transition: all .3s linear;
    }
    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
        font-size: 62.5%;
    }
    body {
        font-size: 1.4rem;
        font-family: 'Nunito Sans', sans-serif;
    }
`;