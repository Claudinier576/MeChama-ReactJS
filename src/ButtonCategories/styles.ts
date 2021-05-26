import styled from 'styled-components';

export const Button = styled.button`
  
  color: var(--white);
  background-color: transparent;
  margin-left: 5px;
  cursor:pointer;
  transition: background-color .4s,border .2s;
  padding: 15px;
  border-radius: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;

  &:hover,&.active{
    background-color: var(--gray);
    border: 1px solid #000;
    div{
      display: flex;
    }
  }

`;

export const Itens = styled.div`
transition: display .3s;
&.disabled{
  display:none;
}
&.active{
  background-color: var(--gray);
  border: 1px solid #000;
  transition: background-color .4s,border .2s;
  padding: 15px;
  border-radius: 0 20px 0 20px;
  display: flex;
  flex-direction:column;
  position:absolute;
  left:50px;
  top:60px;


  a{
    color: #000;
    margin-top: 8px;
    text-decoration: none;
  }

  a:hover{
    color: #f00f00;
    margin-top: 8px;
    text-decoration: none;
  }

}

`;




