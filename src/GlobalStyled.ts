import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
:root {
    --white: #fff;
    --BGColor: #1a1d2d;
    --BGContent: #252836;
    --gray: #a9a9a9;
    --green: #0f0;
    --link: #5d80d6;
 
  }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline:0;
        font-family: 'Roboto', sans-serif;
    }
    
        
`;