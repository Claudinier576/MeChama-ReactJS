import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top : 15px;


`;
export const Menu = styled.a`
    text-decoration:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    height: 280px;
    color: #fff;
    background-color: var(--BGColor);
    margin-bottom: 15px;
    margin-left: 15px;
    border-radius: 16px;
    text-align: center;
    h1{
        margin-left:10px;
    }
    h2{
        font-size:20px;
    }
    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
    }



`;