import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    width: 375px;
    height: 180px;
    background-color: var(--BGColor);
    padding: 0px 10px 0 0;
    border-radius: 25px;
    border: 3px solid #000;
    margin: 10px;
    text-align: center;
    color: var(--white);
    h1,h2{
        display:block;
        width: 180px;
        height: 45px;
        font-size: 18px;
        position: relative;
        top: -65px;
        left: 10px;
        overflow: hidden;
    }
   h3,h4,h5,h6{
         font-size: 15px;
        position: relative;
        top: -105px;
        left: 125px;
        text-overflow:clip;
        overflow: inherit;
        width: 180px;
        height: 70px;
    }
    img{
        width:120px;
        height: 180px;
        border-radius: 25px 0 0px 25px;
        object-fit: cover;
    }
    span{
        position: relative;
        top:-65px;
        left:90px;
        color: var(--green);
    }
`;