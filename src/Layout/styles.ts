import styled from "styled-components";

//H - Header
//FT - Footer


export const Grid = styled.div`
    display:grid;
    grid-template-columns: 240px auto 180px;
    grid-template-rows: 60px auto 95px;
    grid-template-areas: 
        'H H H'
        'CT CT CT'
        'FT FT FT';
    height: 100%;
    @media (max-width: 768px){
        grid-template-columns: 20px auto 180px;
    }
`