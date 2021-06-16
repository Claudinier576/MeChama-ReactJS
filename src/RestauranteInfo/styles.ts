import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
    max-height:130px;
    margin: 5px;
    img{
        border:3px solid var(--text);
        width:120px;
        height:120px;
        border-radius: 50%;
        object-fit: cover;
    }
    h1{
        margin-left:50px;
        display:block;
        font-size: 45px;
        color: var(--text);
    }
    h2{
        display:block;
        font-size: 22px;
        position:relative;
        top:50px;
        color: var(--subText);
    }

    

   

`;