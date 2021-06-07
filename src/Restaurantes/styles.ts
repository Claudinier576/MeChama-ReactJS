import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Menu = styled.a`
    min-height: 190px;
    margin: 15px;
    text-decoration:none;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    color: #fff;
    background-color: var(--BGColor);
    border-radius: 16px;
    text-align: center;

    h1{
        font-size: 25px;
        word-break: break-all;
    }

    h2{
        font-size:18px;
        line-break: auto;
        padding: 0 3%;
        width: 100%;
    }

    img{
        width: 40%;
        object-fit: cover;
        border-radius: 50%;
        margin: 10px;
    }
    
    div{
        padding-right: 10px;
        display: flex;
        align-items: center;
        text-align: center;
    }
`