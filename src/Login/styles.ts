import styled, { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto',sans-serif;
        color: black;
        text-decoration: none;
    }
`

interface BodyProps {
    backgroundImage: string
}

const Body = styled.div<BodyProps>`
    padding: 8px;
    width: 100vw;
    height: 100vh;
    background-size: cover !important;
    background-repeat: no-repeat;
    background: ${(props) => props.backgroundImage ? "url(" + props.backgroundImage + ") no-repeat" : null};
`

const TransparentLayer = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0.4;
    background-color: grey;
    height: 100vh;
    width: 100vw;
`

const Container = styled.div`

    form{
        text-align: center;
        align-items: center;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
    }

    input{
        text-align: center;
    }

    .logoBackground {
        top: 5%;
        position: absolute;
        padding: 15px;
        background-color: #292b2f;
        border-radius: 100%;
        box-shadow: 0px 0px 8px 4px black;
    }

    .logoImg {
        width: 50px;
        position: relative;
    }

    .box {
        top: 5%;
        padding: 20px;
        width: 28%;
        background-color: white;
        text-align: center;
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        box-shadow: 0px 0px 8px 4px black;
        border-radius: 4px;
    }

    .slogan {
        margin-top: 30px;
        opacity: 0.7;
        line-height: 0px;
    }

    .box h1 {
        color: #d21f3c;
    }

    .input-style {
        height: 30px;
        background-color: #eaeaea;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #00000099;
        padding: 10px 10px;
        width: 67%;
        outline: none;
        border-radius: 30px;
    }

        .input-style:focus {
            width: 340px;
        }

    .forgot {
        display: block;
        text-decoration: underline;
    }

    .submit-style {
        border: 0;
        background-color: #d21f3c;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #d21f3c;
        padding: 14px 40px;
        outline: none;
        color: white;
        border-radius: 30px;
        cursor: pointer
    }

        .submit-style:hover {
            background: black;
            border: 2px solid black;
        }

    .invalid-alert {
        height: 60px;
        background-color: #c74a4e;
        border-radius: 4px;
        margin: -18px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.9;
    }

    ul.social-network {
        list-style: none;
        display: inline-flex;
        padding: 0;
        justify-content: space-between;
        width: 50%;
    }

    .facebookImg {
        width: 25%;
        height: 30px;
    }

    .icoFacebook {
        background-color: #3B599860;
    }

        .icoFacebook:hover {
            background-color: #3B5998;
        }

    .twitterImg {
        width: 60%;
    }

    .icoTwitter {
        background-color: #33ccff1f;
    }

        .icoTwitter:hover {
            background-color: #33ccff;
        }

    .googleImg {
        width: 75%;
    }

    .icoGoogle {
        background-color: #BD35181f;
    }

        .icoGoogle:hover {
            background-color: #BD3518;
        }

    .social-circle li a {
        display: flex;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

        .social-circle li a:hover img {
            transform: rotate(360deg);
            transition: all 0.2s
        }

    .social-circle img {
        transition: all 0.8s;
        transition: all 0.8s
    }

    .line {
        margin: 20px auto;
    }
`

export { Body, Container, TransparentLayer, GlobalStyle }