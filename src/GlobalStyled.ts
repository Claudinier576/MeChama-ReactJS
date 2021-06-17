import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
:root {
    --white: #fff;
    --green: #00d000;
    --text: #3a4660;
    --subText: #3a466085;
    --pinkText: #d21f3c4a;
    --pink: #d21f3c0a;
    --pinkBackground: #d21f3c3d;
 
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