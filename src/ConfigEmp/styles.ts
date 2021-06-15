import styled from "styled-components";

export const Container = styled.div`

//HUP -- History  user purchases
// UC -- User Config


.avatar-upload {
    position: relative;
    max-width: 205px;
    margin: 50px auto;
    .avatar-edit {
        position: absolute;
        right: 12px;
        z-index: 1;
        top: 10px;
        input {
            display: none;
            + label {
                display: inline-block;
                width: 34px;
                height: 34px;
                margin-bottom: 0;
                border-radius: 100%;
                background: #FFFFFF;
                border: 1px solid transparent;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                font-weight: normal;
                transition: all .2s ease-in-out;
                &:hover {
                    background: #f1f1f1;
                    border-color: #d6d6d6;
                }
                &:after {
                    content: "\f040";
                    font-family: 'FontAwesome';
                    color: #757575;
                    position: absolute;
                    top: 10px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    margin: auto;
                }
            }
        }
    }
    .avatar-preview {
        width: 192px;
        height: 192px;
        position: relative;
        border-radius: 100%;
        border: 6px solid #F8F8F8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        > div {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}



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


    .Modal {
    margin: 0 auto;
    background-color: var(--BGColor);
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
 



`;

export const AddProduct = styled.div` 
 
    background-color: #7481c2;
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
    justify-content: space-between;
    align-items: center;
    input[type="Text"] {
        width: 100%;
        height: 100%;
        min-height: 20px;
    }
    input[type="number"] {
        width: 100%;
        height: 100%;
    }

    button {
        width: 100%;
        height: 32px;
    }


`
export const ItemSell = styled.div`

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

        input[type="file"] {
            display: none;
        }



       & label  {
       //     color: transparent;
       display: block;   
       width:125px;
       height:35px;
       background-color: var(--BGColor);
       cursor: pointer;
       box-sizing: border-box;
       padding: 8px;


        }
        label:hover {
           
            
        filter: blur(0.5px);
        border-radius: 15px;
            
        }
    

   

        & .Card {
            max-width: 720px;
            color: var(--white);
            display: flex;
            flex-wrap: wrap;
            padding: 15px;
            text-align: center;
            align-items: center;
            justify-content: center;
            
           

        }

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
export const Photo = styled.img` 

    border-radius: 50%;
    cursor: pointer;
    width:125px;
    height:125px;
    object-fit: cover;
    margin: 15px;
    margin-top:0;
       
   
`

