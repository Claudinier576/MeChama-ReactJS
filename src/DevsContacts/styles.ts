import styled from "styled-components";

export const Container = styled.div`

        display:flex;
        flex-direction:column;
        align-items: center;
        margin-left: 15px;
        justify-content: center;
        h1{
            color:var(--white);
            margin-bottom: 5px;
        }
    a,a:visited,a:link{
            margin-top: 5px;
            text-decoration:none;
            color: var(--gray);
    }

    @media(max-width:  720px){
   
        max-width: 200px;
        font-size: 12px;
    }
    @media(min-width:  720px){
        font-size: 14px;
        max-width: 280px;
        
    }


`;