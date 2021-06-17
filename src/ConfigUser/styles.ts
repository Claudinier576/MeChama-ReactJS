import styled from "styled-components"

export const Container = styled.div`

//HUP -- History  user purchases
// UC -- User Config

    transform: skewY(16deg);
    display:grid;

        @media (min-width:  720px){
            grid-template-columns:  auto 350px;
            grid-template-rows:  auto ;
            grid-template-areas:'UC HUP';
        }
        @media (max-width:  720px){
            grid-template-columns:  auto;
            grid-template-rows:  auto;
            grid-template-areas:
            'UC'
            'HUP';
        }

    .Modal {
        margin: 0 auto;
        width: 720px;
        height: 100%;
    }
    .Overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rebeccapurple;
    }
`

export const HistoriPurchases = styled.div` 
    grid-area: HUP;
    overflow-y: scroll;
    min-height: 195px;
    display: flex;
    flex-direction: column;
    .purchasesTitle {
        color: var(--text);
        font-size: 25px;
        align-self: center;
        margin: 15px;
    }
`
export const ItemPurchase = styled.div`
    display: grid;
    margin: 5px;
    border-radius: 15px;
    color: var(--text);
    padding:8px;
    box-shadow: 0px 0px 5px 0px #00000042;

    grid-template-columns:  auto auto auto;
    grid-template-rows:  auto auto auto;
    grid-template-areas: 
        'EMP EMP DATE'
        'PROD PROD Value';
 
     & .title{
        margin-right: 15px;
        grid-area: EMP;
    }
     & .nameProduct{
        grid-area: PROD;
    }
     & .QNTT{
        grid-area: QNT;
    }
    & .value {
        grid-area: Value;
        color: var(--green);
        font-size: 15px;
    }
    & .Date {
        grid-area: DATE;
    }
    h2 {
        font-size: 15px;
        color: var(--subText);
    }
    h1 {
        color: var(--text);
        font-size: 20px;
    }
`
export const Config = styled.div` 
    grid-area:  UC;
    border-right: 4px solid var(--white);
    
    input[type="file"] {
        display: none;
    }
    & label  {
        display: block;   
        width:125px;
        height:35px;
        transition: background-color .4s,border .2s;
        border-radius: 0 12px 0 12px;
        cursor: pointer;
        box-sizing: border-box;
        padding: 8px;
    }
        label:hover {      
            background-color: var(--pinkBackground);
            border: 2px solid var(--text);
        }
    & .Card {
        max-width: 720px;
        color: var(--text);
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .card-align {
        display: inline-flex;
        align-items: center;
    }
    .email-align{
        width: 100%;
    }
`
export const Photo = styled.img` 
    border-radius: 50%;
    cursor: pointer;
    width: 125px;
    object-fit: cover;
    margin: 15px;
    margin-top: 0; 
`

