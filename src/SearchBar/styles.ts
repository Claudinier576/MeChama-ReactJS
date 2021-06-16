import styled from 'styled-components'

export const Container = styled.div`
    width:69%;

    @media (max-width:600px) {
        width: 90%;
    }
`

export const Input = styled.input`
    width:100%;
    padding: 0 10px;
    color: var(--text);
    background-color: transparent;
    text-transform: uppercase;

    &::placeholder{
        color: var(--pinkText);
    }

    @media (max-width: 560px) {
        font-size: 10px;
        padding: 0;
    }
`




