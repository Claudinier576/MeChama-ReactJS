import styled from "styled-components";

export const Container = styled.div`

//HUP -- History  user purchases
// UC -- User Config

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

    height: 100%;
`;

export const HistoriPurchases = styled.div` 
    background-color:var(--BGContent);
    grid-area: HUP;
    overflow-y: scroll;
    min-height: 195px;
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
        width:8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--BGColor);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--BGColor);
    }

`
export const ItemPurchase = styled.div`

    display: grid;
    margin: 5px;
    border: 2px solid black;
    border-radius: 15px;
    
    color: var(--white);
    background-color: var(--BGColor);
    padding:8px;

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
    }
    & .Date {

        grid-area: DATE;
    }

`;
export const Config = styled.div` 

     background-color:var(--BGContent);
        grid-area:  UC;

        overflow-y: scroll;

    ::-webkit-scrollbar {
        width:8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--BGColor);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--BGColor);
    }


    



`

