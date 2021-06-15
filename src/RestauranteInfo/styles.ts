import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    padding: 4px 0;
    border-bottom: 2px solid var(--white);
    max-height:130px;
    img{
        border:3px solid black;
        width:120px;
        height:120px;
        border-radius: 50%;
        object-fit: cover;
    }
    h1{
        margin-left:50px;
        display:block;
        font-size: 45px;
    }
    h2{
        display:block;
        font-size: 22px;
        position:relative;
        top:50px;
        color: var(--gray);
    }

    

   

`;