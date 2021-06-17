import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform: skewY(16deg);
`

export const Menu = styled.a`
    background-color: transparent;
    transition: background-color .4s,border .2s;
    min-height: 160px;
    margin: 15px;
    text-decoration:none;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    color: var(--text);
    border-radius: 16px;
    text-align: center;
    box-shadow: 0px 0px 10px 0px #00000042;

    &:hover,&.active{
    background-color: var(--pinkBackground);
    border: 2px solid var(--text);
    }

    h1{
        font-size: 22px;
        line-break: auto;
    }

    h2{
        font-size:14px;
        line-break: auto;
        padding: 0 3%;
        width: 100%;
        color: #828ca2;
    }

    img{
        width: 35%;
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