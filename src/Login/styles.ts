import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto',sans-serif;
        text-decoration: none;
    }
`

interface BodyProps {
    backgroundImage: any
}

interface InvalidAlertProps {
    errorLogin: any
}

const Body = styled.div<BodyProps>`
    padding: 8px;
    width: 100vw;
    height: 100vh;
    background-size: cover !important;
    background-repeat: no-repeat;
    background: ${(props) => props.backgroundImage ? "url(" + props.backgroundImage + ") no-repeat" : null};
`

const RequiredField = styled.p`
    margin: 0;
    line-height: 0;
    color: #d21f3c;
`

const InvalidAlert = styled.div<InvalidAlertProps>`
    width: 109%;
    height: 60px;
    background-color: #c74a4e;
    border-radius: 4px;
    margin: -18px;
    display: ${(props) => props.errorLogin ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    opacity: 0.9;
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
        color: black;
    }

    input{
        text-align: center;
    }

    .logoImg {
        width: 50px;
        position: relative;
    }

    .logoBackground {
        top: 20px;
        position: absolute;
        padding: 15px;
        background-color: #1a1d2d;
        border-radius: 100%;
        box-shadow: 0px 0px 8px 4px black;
    }

        @media (max-width:600px){
            .logoBackground{
                left: 42%
            }
        }
        @media (max-width:460px){
            .logoBackground{
                left: 41%
            }
        }
        @media (max-width:430px){
            .logoBackground{
                left: 40%
            }
        }
        @media (max-width:380px){
            .logoBackground{
                left: 38%
            }
        }

    .box {
        top: 20px;
        padding: 20px;
        width: 30%;
        background-color: white;
        text-align: center;
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        box-shadow: 0px 0px 8px 4px black;
        border-radius: 4px;
    }

        @media (max-width:1200px){
            .box{
                width: 35%;
            }
        }
        @media (max-width:1000px){
            .box{
                width: 40%;
            }
        }
        @media (max-width:800px){
            .box{
                width: 45%;
            }
        }
        @media (max-width:715px){
            .box{
                width: 50%;
            }
        }
        @media (max-width:650px){
            .box{
                width: 55%;
            }
        }
        @media (max-width:600px){
            .box{
                top: 120px;
                right: 0;
                left: 50%;
            }
        }
        @media (max-width:450px){
            .box{
                width: 75%;
            }
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
        @media (min-width: 900px){
            .input-style:focus {
                width: 340px;
            }
        }
        @media (min-width: 590px){
            .input-style:focus {
                width: 300px;
            }
        }
        @media (min-width: 400px){
            .input-style:focus {
                width: 250px;
            }
        }

    .forgot {
        display: block;
        text-decoration: underline;
    }

    .submit-style {
        background-color: #d21f3c;
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

    ul.social-network {
        list-style: none;
        display: inline-flex;
        padding: 0;
        justify-content: space-between;
        width: 60%;
    }

        @media (max-width: 350px) {
            ul.social-network {
                width: 70%;
            }
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
        margin: 15px;
    }
`

export { Body, Container, TransparentLayer, GlobalStyle, InvalidAlert, RequiredField }