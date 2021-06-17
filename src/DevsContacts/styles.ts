import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 100%;
    text-align: center;
    margin-top: 10px;
        
    h1{
        color: var(--pinkText);
    }

    a,a:visited,a:link{
        text-decoration:none;
        color: var(--pinkText);
        margin-top: 5px;
    }

    @media(max-width:  720px){
        max-width: 200px;
        font-size: 12px;
    }
    @media(min-width:  720px){
        font-size: 14px;
        max-width: 280px;
    }
`