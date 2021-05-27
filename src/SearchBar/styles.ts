import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    width:100%;


`;

export const Input = styled.input`

width:100%;
height: 44px;
padding: 0 10px 0 20px;
border-radius: 7px;
color: var(--white);
background-color: transparent;
text-transform: uppercase;



&::placeholder{
        color: var(--gray);
}
`;




