import styled from "styled-components";

export const Container = styled.div`
    min-height: 190px;
    margin: 15px;
    text-decoration:none;
    cursor: pointer;
    display: flex;
    width: 300px;
    color: #fff;
    background-color: var(--BGColor);
    border-radius: 16px;
    text-align: center;
    margin-bottom: auto;
    h1{
        font-size: 20px;
        line-break: auto;
    }
    h2{
        font-size:14px;
        line-break: auto;
        padding: 0 3%;
        width: 100%;
        color: #a9a9a9;
    }
    img{
        margin-left: 5px;
        width:120px;
        height: 180px;
        border-radius: 15px 0 0px 15px;
        object-fit: cover;
        align-self: center;
    }
    span{
        align-self: flex-end;
        color: var(--green);
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