import styled from "styled-components";

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
                    background: var(--white);
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

export const AddProduct = styled.div` 
    grid-area: HUP;
    overflow-y: scroll;
    min-height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    input[type="Text"] {
        width: 100%;
        height: 100%;
        min-height: 25px;
        margin-top: 4px;
    }
    input[type="number"] {
        margin-top: 4px;
        width: 100%;
        height: 100%;
        min-height: 25px;
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

    .edit{
        width: 1000px;
        height: 1000px;
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

