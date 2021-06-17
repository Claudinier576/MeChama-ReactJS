import styled from "styled-components";

export const ProductCard = styled.a`
    background-color: transparent;
    transition: background-color .4s,border .2s;
    min-height: 140px;
    margin: 15px;
    text-decoration:none;
    cursor: pointer;
    display: flex;
    width: 300px;
    color: var(--text);
    border-radius: 16px;
    text-align: center;
    box-shadow: 0px 0px 10px 0px #00000042;
    padding: 4px 0;

    &:hover,&.active{
    background-color: var(--pinkBackground);
    border: 2px solid var(--text);
    }

    span{
        align-self: flex-end;
        color: var(--green);
    }

    h1{
        font-size: 17px;
        line-break: auto;
    }

    h2{
        font-size:11px;
        line-break: auto;
        padding: 0 3%;
        width: 100%;
        color: #828ca2;
    }

    img{
        margin-left: 5px;
        width:80px;
        height: 110px;
        border-radius: 15px 0 0px 15px;
        object-fit: cover;
        align-self: center;
    }
    
    div{
        width: 100%;
        padding: 10px;
        justify-content: space-between;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`